import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Contact from '@/app/lib/models/Contact';
import { verifyAdminAuth } from '@/app/lib/auth';

export async function GET(request) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: auth.error || 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const allContact = await Contact.find();
    return NextResponse.json(allContact, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, mobile, projectType, projectdetails } = body;

    if (name && email && mobile && projectType && projectdetails) {
      const allContact = await Contact.find();
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      const newContact = new Contact({
        name,
        email,
        mobile,
        projectType,
        projectdetails,
        Date: formattedDate,
        userId: allContact.length + 1,
      });

      await newContact.save();
      return NextResponse.json({ message: 'success' }, { status: 200 });
    } else if (projectType === '') {
      const allContact = await Contact.find();
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      const newContact = new Contact({
        name,
        email,
        mobile,
        projectType: 'false',
        projectdetails,
        Date: formattedDate,
        userId: allContact.length + 1,
      });

      await newContact.save();
      return NextResponse.json({ message: 'success' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'provide all details' }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: auth.error || 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    let body = {};
    try {
      body = await request.json();
    } catch {
      // Body might be empty
    }

    const { searchParams } = new URL(request.url);
    const queryId = searchParams.get('id');

    const { selectedContactIds, id, contactId } = body;
    const rawIds = selectedContactIds || id || contactId || queryId;

    if (!rawIds) {
      return NextResponse.json({ message: 'Invalid request. Provide contact ID(s).' }, { status: 400 });
    }

    const idList = (Array.isArray(rawIds) ? rawIds : [rawIds])
      .map(item => (typeof item === 'object' && item !== null ? item._id || item.id : item))
      .filter(Boolean);

    if (idList.length === 0) {
      return NextResponse.json({ message: 'Invalid request. Empty ID list.' }, { status: 400 });
    }

    // Support both MongoDB _id and numeric userId
    const validObjectIds = idList.filter(i => mongoose.Types.ObjectId.isValid(i));
    const numericUserIds = idList.filter(i => !isNaN(Number(i)) && String(i).length < 10).map(Number);

    const conditions = [];
    if (validObjectIds.length > 0) {
      conditions.push({ _id: { $in: validObjectIds } });
    }
    if (numericUserIds.length > 0) {
      conditions.push({ userId: { $in: numericUserIds } });
    }

    const filter = conditions.length > 1 
      ? { $or: conditions } 
      : (conditions[0] || { _id: { $in: idList } });

    const result = await Contact.deleteMany(filter);

    if (result.deletedCount > 0) {
      return NextResponse.json({ 
        message: 'Contacts deleted successfully.', 
        deletedCount: result.deletedCount 
      }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No contacts found with the provided ids.' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting contacts.', error: error.message }, { status: 500 });
  }
}


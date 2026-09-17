import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import Contact from '@/app/lib/models/Contact';
import { verifyAdminAuth } from '@/app/lib/auth';

export async function GET(request, { params }) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: auth.error || 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const resolvedParams = await params;
    const { id } = resolvedParams;

    let contact = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      contact = await Contact.findById(id);
    }
    if (!contact && !isNaN(Number(id))) {
      contact = await Contact.findOne({ userId: Number(id) });
    }

    if (!contact) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: auth.error || 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const body = await request.json();

    let updatedContact = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      updatedContact = await Contact.findByIdAndUpdate(id, body, { new: true });
    }
    if (!updatedContact && !isNaN(Number(id))) {
      updatedContact = await Contact.findOneAndUpdate({ userId: Number(id) }, body, { new: true });
    }

    if (!updatedContact) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Contact updated successfully', data: updatedContact }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: auth.error || 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const resolvedParams = await params;
    const { id } = resolvedParams;

    let result = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      result = await Contact.findByIdAndDelete(id);
    }
    if (!result && !isNaN(Number(id))) {
      result = await Contact.findOneAndDelete({ userId: Number(id) });
    }

    if (!result) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

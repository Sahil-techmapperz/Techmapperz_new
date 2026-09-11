import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Login from '@/app/lib/models/Login';

export async function POST(request) {
  try {
    await connectDB();
    const { email, newPassword, checkOnly } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Find the admin by email
    const user = await Login.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'No admin account found with this email address' }, { status: 404 });
    }

    // Step 1: Just verify email exists
    if (checkOnly) {
      return NextResponse.json({ message: 'Email verified' }, { status: 200 });
    }

    // Step 2: Reset the password
    if (!newPassword) {
      return NextResponse.json({ message: 'New password is required' }, { status: 400 });
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
    }

    await Login.updateOne({ email }, { $set: { password: newPassword } });

    return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

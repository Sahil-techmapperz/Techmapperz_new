import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Login from '@/app/lib/models/Login';
import RecentLogin from '@/app/lib/models/RecentLogin';
import jwt from 'jsonwebtoken';

function getISTDateString() {
  const date = new Date();
  const offsetInMinutes = 5 * 60 + 30; // Indian Standard Time (IST) is UTC +5:30
  const indianDate = new Date(date.getTime() + offsetInMinutes * 60000);

  const year = indianDate.getUTCFullYear();
  const month = String(indianDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(indianDate.getUTCDate()).padStart(2, '0');
  let hours = indianDate.getUTCHours();
  const minutes = String(indianDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(indianDate.getUTCSeconds()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  hours = String(hours).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
}

export async function POST(request) {
  try {
    await connectDB();
    const { email, password } = await request.json();
    const user = await Login.find({ email, password });

    if (user.length > 0 && user[0].email) {
      const token = jwt.sign({ userId: user[0]._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1d' });

      // Record recent login activity
      try {
        const loginTime = getISTDateString();
        await RecentLogin.create({
          email: user[0].email,
          loginTime,
          createdAt: new Date(),
        });
      } catch (logErr) {
        console.error('Error logging recent login activity:', logErr);
      }

      return NextResponse.json({ user, token }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'NO USER NOT FOUND' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'EMAIL OR PASSWORD IS INCORRECT' }, { status: 404 });
  }
}



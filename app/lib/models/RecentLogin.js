import mongoose from 'mongoose';

const Recent_login_Schema = new mongoose.Schema({
  email: { type: String, required: true },
  loginTime: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const RecentLogin = mongoose.models.Recent_login || mongoose.model('Recent_login', Recent_login_Schema);
export default RecentLogin;


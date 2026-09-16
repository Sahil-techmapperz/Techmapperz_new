import jwt from 'jsonwebtoken';

/**
 * Verifies admin authentication from request headers or cookies.
 * Accepts either 'Authorization: Bearer <token>' header or 'token' cookie.
 * 
 * @param {Request} request Next.js Route Request
 * @returns {{ authorized: boolean, user?: object, error?: string }}
 */
export function verifyAdminAuth(request) {
  try {
    let token = null;

    // 1. Check Authorization header
    const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    }

    // 2. Check Cookie if no header token
    if (!token && request.cookies) {
      const tokenCookie = request.cookies.get('token');
      if (tokenCookie) {
        token = typeof tokenCookie === 'object' ? tokenCookie.value : tokenCookie;
      }
    }

    if (!token) {
      return { authorized: false, error: 'Authentication required. No token provided.' };
    }

    const secret = process.env.JWT_SECRET || 'your_jwt_secret';
    const decoded = jwt.verify(token, secret);

    return { authorized: true, user: decoded };
  } catch (error) {
    return { authorized: false, error: error.message || 'Invalid or expired authentication token.' };
  }
}

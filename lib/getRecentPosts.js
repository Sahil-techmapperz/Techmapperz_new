import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';
import logger from '@/app/lib/utils/logger';

const getRecentPosts = async () => {
  try {
    await connectDB();
    const recentPosts = await BlogPost.find()
      .sort({ created_at: -1 })
      .limit(3)
      .populate('author')
      .populate('comments')
      .lean();

    return JSON.parse(JSON.stringify(recentPosts));
  } catch (error) {
    logger.error("Failed to fetch recent posts directly from DB, trying fetch fallback", error);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
      const url = `${baseUrl}/api/newblogpost/recent`;
      const response = await fetch(url, {
        next: {
          revalidate: 300
        }
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (fallbackError) {
      logger.error("Fallback recent posts fetch failed", fallbackError);
    }
    return [];
  }
};

export default getRecentPosts;

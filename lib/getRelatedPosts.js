

import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

const getRelatedPosts = async (postId) => {
  try {
    await connectDB();
    const currentPost = await BlogPost.findById(postId).lean();
    if (!currentPost) return [];

    const relatedPosts = await BlogPost.find({
      category: currentPost.category,
      _id: { $ne: currentPost._id },
    })
      .populate('author')
      .populate('comments')
      .limit(3)
      .lean();

    return JSON.parse(JSON.stringify(relatedPosts));
  } catch (error) {
    console.error("Failed to fetch related posts directly from DB, trying fetch fallback:", error);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
      const response = await fetch(`${baseUrl}/api/newblogpost/related/${postId}`, {
        next: { revalidate: 10 }
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (fallbackError) {
      console.error("Fallback related posts fetch failed:", fallbackError);
    }
    return [];
  }
};

export default getRelatedPosts;

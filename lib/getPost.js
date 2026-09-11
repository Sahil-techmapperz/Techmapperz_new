import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

const getPost = async (postId) => {
  try {
    await connectDB();
    const blogPost = await BlogPost.findById(postId)
      .populate('author')
      .populate('comments')
      .lean();

    if (!blogPost) return null;
    return JSON.parse(JSON.stringify(blogPost));
  } catch (error) {
    console.error("Failed to fetch post directly from DB, trying fetch fallback:", error);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
      const response = await fetch(`${baseUrl}/api/newblogpost/singalepost/${postId}`, {
        next: { revalidate: 10 }
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (fallbackError) {
      console.error("Fallback fetch post failed:", fallbackError);
    }
    return null;
  }
};

export default getPost;

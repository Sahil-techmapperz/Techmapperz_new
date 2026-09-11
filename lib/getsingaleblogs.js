import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export default async function getRecentblogs(page = 1) {
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
        console.error('Error fetching recent blog data from DB, trying fetch fallback:', error);
        try {
            const baseUrl =
                process.env.NEXT_PUBLIC_BASE_URL ||
                (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
            const url = `${baseUrl}/api/newblogpost/recent`;
            const results = await fetch(url, { next: { revalidate: 10 } });
            if (results.ok) {
                return await results.json();
            }
        } catch (fallbackError) {
            console.error('Fallback recent posts fetch failed:', fallbackError);
        }
        return [];
    }
}
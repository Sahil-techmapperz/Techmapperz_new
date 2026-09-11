import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export default async function getallblogs(page = 1, parpage = 6) {
    try {
        const pageNum = Number(page) || 1;
        const perPage = Number(parpage) || 6;
        const skip = (pageNum - 1) * perPage;

        await connectDB();

        const blogPosts = await BlogPost.find()
            .populate({
                path: 'author',
                select: 'name picture authorDetails email socialLinks',
            })
            .populate({
                path: 'comments',
                select: 'content name email created_at replies',
            })
            .sort({ created_at: -1 })
            .skip(skip)
            .limit(perPage)
            .lean();

        const totalBlogPosts = await BlogPost.countDocuments();
        const totalPages = Math.ceil(totalBlogPosts / perPage);

        return {
            blogPosts: JSON.parse(JSON.stringify(blogPosts)),
            totalPages: totalPages || 1,
            currentPage: pageNum,
            totalBlogPosts: totalBlogPosts
        };
    } catch (error) {
        console.error('Error fetching blogs from DB directly:', error);
        // Fallback: try HTTP fetch if DB connection fails for any reason
        try {
            const baseUrl =
                process.env.NEXT_PUBLIC_BASE_URL ||
                (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
            const url = `${baseUrl}/api/newblogpost?page=${page}&perPage=${parpage}`;
            const results = await fetch(url, { next: { revalidate: 300 } });
            if (results.ok) {
                const data = await results.json();
                return {
                    blogPosts: data.blogPosts || [],
                    totalPages: data.totalPages || 1,
                    currentPage: data.currentPage || Number(page) || 1
                };
            }
        } catch (fetchErr) {
            console.error('Fallback fetch also failed:', fetchErr);
        }
        return { success: true, blogPosts: [], totalPages: 0, currentPage: Number(page) || 1 };
    }
}
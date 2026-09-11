import connectDB from '@/app/lib/db';
import Job from '@/app/lib/models/Job';

export default async function getJobsdata(page = 1) {
    try {
        await connectDB();
        const allJob = await Job.find().lean();
        return JSON.parse(JSON.stringify(allJob));
    } catch (error) {
        console.error('Error fetching jobs directly from DB, trying fetch fallback:', error);
        try {
            const baseUrl =
                process.env.NEXT_PUBLIC_BASE_URL ||
                (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
            const url = `${baseUrl}/api/jobs`;
            
            const results = await fetch(url, {
                next: {
                    revalidate: 10
                }
            });

            if (results.ok) {
                return await results.json();
            }
        } catch (fallbackError) {
            console.error('Fallback jobs fetch failed:', fallbackError);
        }
        return { success: true, data: [] };
    }
}
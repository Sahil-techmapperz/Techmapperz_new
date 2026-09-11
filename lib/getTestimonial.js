import connectDB from '@/app/lib/db';
import TestimonialModel from '@/app/lib/models/Testimonial';
import logger from '@/app/lib/utils/logger';

export default async function getTestimonial() {
    try {
        await connectDB();
        const testimonials = await TestimonialModel.find().sort({ _id: -1 }).lean();
        return JSON.parse(JSON.stringify(testimonials));
    } catch (error) {
        logger.error('Error in getTestimonial from DB directly:', error);
        try {
            const baseUrl =
                process.env.NEXT_PUBLIC_BASE_URL ||
                (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
            const url = `${baseUrl}/api/testimonial`;
            
            const results = await fetch(url, {
                next: {
                    revalidate: 600
                }
            });

            if (results.ok) {
                return await results.json();
            }
        } catch (fallbackErr) {
            logger.error('Fallback getTestimonial fetch failed:', fallbackErr);
        }
        return { success: true, data: [] };
    }
}
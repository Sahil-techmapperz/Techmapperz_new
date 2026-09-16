import { notFound } from 'next/navigation';
import Link from 'next/link';
import AuthorDetails from "@/app/_Components/AuthorDetails";
import RecentBlogList from "@/app/_Components/RecentBlogList";
import RelatedPosts from "@/app/_Components/RelatedPosts";
import SinglePost from "@/app/_Components/SinglePost";
import getPost from "@/lib/getPost";
import getRelatedPosts from "@/lib/getRelatedPosts";

export async function generateMetadata({ params }, parent) {
  // read route params - params is a Promise in Next.js 16
  const { id } = await params;

  // fetch data
  const product = await getPost(id);

  if (!product) {
    notFound();
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  // Ensure images is an array
  const productImages = Array.isArray(product?.images) ? product.images : [];

  return {
    title: `${product.title} | Techmapperz Blog`,
    description: product.description || product.content?.slice(0, 160) || 'Techmapperz Blog Article',
    openGraph: {
      title: product.title,
      description: product.description || product.content?.slice(0, 160),
      images: [...previousImages, ...productImages],
    },
  };
}

const ArticlePage = async ({ params }) => {
  // params is a Promise in Next.js 16, must be awaited
  const { id } = await params;
  const post = await getPost(id);

  // If post does not exist, trigger 404 page safely
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(id);

  return (
    <div className="bg-[#F6F8FB] text-[#17202A] min-h-screen">
      {/* 1. Article Header Banner */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0C2E60] via-[#092247] to-[#0A1F40] text-white py-14 sm:py-18 md:py-20 px-4">
        {/* Ambient Ring Graphics */}
        <div className="absolute right-[-80px] top-[-80px] w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute left-[-100px] bottom-[-100px] w-80 h-80 rounded-full bg-[#0F766E]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold tracking-[0.15em] uppercase mb-3 block">
            TECHMAPPERZ TECHNICAL INSIGHTS
          </span>
          <h1 className="text-[28px] sm:text-[36px] md:text-[46px] font-bold text-white tracking-tight leading-[1.2] max-w-3xl mx-auto">
            {post.title || "Technical Article"}
          </h1>

          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-[#E8F5F3] mt-5 flex items-center justify-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/blog" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Articles
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#5EEAD4] font-medium truncate max-w-[200px] sm:max-w-[340px]">
              {post.title}
            </span>
          </nav>
        </div>
      </section>

      {/* 2. Main Article Content Layout */}
      <section className="relative py-8 md:py-14">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <div className="w-full lg:w-[68%]">
            <SinglePost post={post} />
          </div>
          <aside className="w-full lg:w-[32%] space-y-6 lg:sticky lg:top-28">
            {post.author && <AuthorDetails author={post.author} />}
            {relatedPosts && relatedPosts.length > 0 && <RelatedPosts relatedPosts={relatedPosts} />}
            <RecentBlogList />
          </aside>
        </div>
      </section>

      {/* 3. Section 5.5 Final High-Conversion CTA Banner Card Pattern */}
      <section className="relative py-8 md:py-14 bg-white border-t border-[#DDE3EA] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
            {/* Subtle background circle graphic */}
            <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
            
            <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
              <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
                LET'S DISCUSS YOUR REQUIREMENT
              </span>
              <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
                Planning a Project with Us?
              </h2>
              <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
                Share your project details, specifications and timeline. Our team will review your requirements and suggest an optimal workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Discuss Your Project &rarr;
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;

import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import BlogPost from '@/app/lib/models/BlogPost';
// Import related models to ensure they're registered before populate
import '@/app/lib/models/Author';
import '@/app/lib/models/Comment';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const perPage = searchParams.get('perPage') ? parseInt(searchParams.get('perPage')) : 6;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

    if (isNaN(page) || page < 1) {
      return NextResponse.json({ error: 'Invalid page number' }, { status: 400 });
    }

    const skip = (page - 1) * perPage;

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
      .limit(perPage);

    const totalBlogPosts = await BlogPost.countDocuments();
    const totalPages = Math.ceil(totalBlogPosts / perPage);

    return NextResponse.json({
      blogPosts: blogPosts,
      currentPage: page,
      totalBlogPosts: totalBlogPosts,
      totalPages: totalPages,
    }, { status: 200 });
  } catch (error) {
    console.error('Error getting blog posts:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    return NextResponse.json({ 
      error: 'Error getting blog posts',
      details: error.message 
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { title, content, author, images, category, maincontent, description, tags } = body;

    const resolvedMainContent = maincontent || content;
    const resolvedContent = content || description || (resolvedMainContent ? resolvedMainContent.replace(/<[^>]*>?/gm, '').slice(0, 200) : '');
    const resolvedDescription = description || (resolvedContent ? resolvedContent.slice(0, 160) : '');
    const resolvedImages = Array.isArray(images) ? images.filter(Boolean) : (images ? [images] : []);
    const resolvedTags = Array.isArray(tags) ? tags.filter(Boolean) : [];

    if (title && resolvedMainContent && author && resolvedImages.length > 0 && category) {
      const blogPost = new BlogPost({
        title: title.trim(),
        content: resolvedContent,
        author,
        images: resolvedImages,
        category: category.trim(),
        maincontent: resolvedMainContent,
        description: resolvedDescription,
        tags: resolvedTags,
      });
      await blogPost.save();
      return NextResponse.json(blogPost, { status: 200 });
    } else {
      const missing = [];
      if (!title) missing.push('Title');
      if (!resolvedMainContent) missing.push('Content');
      if (!author) missing.push('Author');
      if (resolvedImages.length === 0) missing.push('Featured Image');
      if (!category) missing.push('Category');
      return NextResponse.json({ 
        error: `Please provide all required information: ${missing.join(', ')}` 
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: error.message || 'Failed to create blog post' }, { status: 500 });
  }
}


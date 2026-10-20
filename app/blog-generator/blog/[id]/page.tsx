"use client";
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogGenSupabase as supabase } from '@/lib/blog-generator/supabase-client';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { marked } from 'marked'; 

export default function BlogDetailPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // For legacy HTML content
    const contentRef = useRef(null);

    const [isJsonFormat, setIsJsonFormat] = useState(false);
    const [structuredData, setStructuredData] = useState(null);
    const [metaData, setMetaData] = useState({ description: '', keywords: '', intent: '' });
    const [legacyContent, setLegacyContent] = useState('');

    useEffect(() => {
        fetchBlog();
    }, [id]);

    const fetchBlog = async () => {
        setLoading(true);
        try {
            const { data } = await supabase.from('blogs').select('*').eq('id', id).single();
            if (data) {
                let rawContent = data.content;
                let parsedJson = null;

                try {
                    parsedJson = JSON.parse(rawContent);
                    if (parsedJson && typeof parsedJson === 'object' && parsedJson.sections) {
                        setIsJsonFormat(true);
                        setStructuredData(parsedJson);
                        setMetaData({
                            description: parsedJson.metaDescription || '',
                            keywords: Array.isArray(parsedJson.keywords) ? parsedJson.keywords.join(', ') : (parsedJson.keywords || ''),
                            intent: ''
                        });
                    }
                } catch (e) {
                    setIsJsonFormat(false);
                    let desc = '', keys = '', intent = '';
                    const descMatch = rawContent.match(/<[^>]*>.*?meta description:\s*(.*?)<\/[^>]*>/i);
                    if (descMatch) {
                        desc = descMatch[1].replace(/\*\*/g, '').trim();
                        rawContent = rawContent.replace(descMatch[0], '');
                    }
                    const keysMatch = rawContent.match(/<[^>]*>.*?keywords:\s*(.*?)<\/[^>]*>/i);
                    if (keysMatch) {
                        keys = keysMatch[1].replace(/\*\*/g, '').trim();
                        rawContent = rawContent.replace(keysMatch[0], '');
                    }
                    const intentMatch = rawContent.match(/<[^>]*>.*?search intent:\s*(.*?)<\/[^>]*>/i);
                    if (intentMatch) {
                        intent = intentMatch[1].replace(/\*\*/g, '').trim();
                        rawContent = rawContent.replace(intentMatch[0], '');
                    }
                    
                    setMetaData({ description: desc, keywords: keys, intent: intent });
                    setLegacyContent(rawContent);
                }
                setBlog(data);
            }
        } catch (err) {
            console.error('Error fetching blog:', err);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!isJsonFormat && blog && contentRef.current) {
            contentRef.current.innerHTML = legacyContent;
        }
    }, [blog, isJsonFormat, legacyContent]);

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#8763e5]"></div>
            </div>
        );
    }

    if (!blog) return <div className="text-center py-20">Blog not found.</div>;

    const displayTitle = isJsonFormat && structuredData?.title ? structuredData.title : (blog.title || 'Untitled Blog');
    const heroImage = (isJsonFormat && (structuredData?.featuredImage?.url || structuredData?.featured_image || structuredData?.image)) || blog?.featured_image_url || null;
    const categoryBadge = (blog?.category || 'General').toUpperCase();
    const formattedDate = new Date(blog?.created_at || Date.now()).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-[#f4f7f5] py-12 px-4 sm:px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/blog-generator/drafts" className="inline-flex items-center text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to My Blogs
                    </Link>
                    <Link href="/blog-generator/generator">
                        <button className="inline-flex items-center gap-2 bg-[#8763e5] hover:bg-[#704ec2] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md hover:scale-105 transition-all group">
                            <Sparkles className="w-3.5 h-3.5 text-purple-200 group-hover:rotate-12 transition-transform" />
                            <span>Create New Blog</span>
                        </button>
                    </Link>
                </div>

                {/* Editorial Header */}
                <header className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200/80 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#485b55] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md">
                            {categoryBadge}
                        </span>
                        <span className="text-sm font-medium text-neutral-500 flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-neutral-400" />
                            {formattedDate}
                        </span>
                        <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-600 rounded-full text-xs font-bold uppercase ml-auto">
                            {blog.status || 'Draft'}
                        </span>
                    </div>

                    <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black leading-tight mb-6">
                        {displayTitle.replace(/^#+\s*/, '')}
                    </h1>

                    {structuredData?.metaDescription && (
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal font-sans border-l-4 border-[#485b55] pl-4">
                            {structuredData.metaDescription}
                        </p>
                    )}
                </header>

                {/* Hero Featured Cover Image */}
                {heroImage && (
                    <div className="mb-10 overflow-hidden rounded-3xl shadow-md border border-neutral-200/80 bg-white">
                        <img 
                            src={heroImage} 
                            alt={structuredData?.featuredImage?.alt || displayTitle} 
                            className="w-full h-auto max-h-[500px] object-cover"
                        />
                    </div>
                )}

                {/* Article Content Body */}
                <main className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200/80">
                    {!isJsonFormat ? (
                        <article ref={contentRef} className="prose prose-neutral max-w-none text-neutral-800 leading-relaxed font-sans" />
                    ) : (
                        <article className="prose prose-neutral max-w-none space-y-8">
                            {structuredData?.sections?.map((section, idx) => (
                                <div key={idx} className="space-y-4">
                                    {section.heading && (
                                        <h2 className="font-sans text-2xl md:text-3xl font-bold text-neutral-900 pt-4 border-b border-neutral-100 pb-3">
                                            {section.heading.replace(/^#+\s*/, '')}
                                        </h2>
                                    )}
                                    <div 
                                        className="blog-content-body text-neutral-700 text-base leading-relaxed space-y-4"
                                        dangerouslySetInnerHTML={{ __html: marked.parse(section.body || '') }}
                                    />
                                </div>
                            ))}
                        </article>
                    )}

                    {/* SEO Metadata Details */}
                    {(metaData.description || metaData.keywords || metaData.intent) && (
                        <details className="mt-12 bg-neutral-50 border border-neutral-200 rounded-2xl group overflow-hidden">
                            <summary className="p-5 cursor-pointer font-bold text-sm text-neutral-700 group-hover:bg-neutral-100 transition-colors list-none flex items-center justify-between">
                                SEO Metadata (not shown to readers)
                                <span className="text-neutral-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-sm border-t border-neutral-100 mt-3 space-y-2">
                                {metaData.description && <p><strong className="text-neutral-900">Description:</strong> <span className="text-neutral-600">{metaData.description}</span></p>}
                                {metaData.keywords && <p><strong className="text-neutral-900">Keywords:</strong> <span className="text-neutral-600">{metaData.keywords}</span></p>}
                                {metaData.intent && <p><strong className="text-neutral-900">Intent:</strong> <span className="text-neutral-600">{metaData.intent}</span></p>}
                            </div>
                        </details>
                    )}
                </main>
            </div>
        </div>
    );
}

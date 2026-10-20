"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/blog-generator/ui/card';
import { Button } from '@/components/blog-generator/ui/button';
import { blogGenSupabase as supabase } from '@/lib/blog-generator/supabase-client';
import { Edit, Trash2, Clock, Eye, Image as ImageIcon, Sparkles, Plus } from 'lucide-react';
import { getCategories } from '@/lib/blog-generator/categoryService';

export default function DraftsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategoryValue, setSelectedCategoryValue] = useState('All Categories');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchBlogs();
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const cats = await getCategories();
            setCategories(cats);
        } catch (e) {
            console.error('Failed to load categories:', e);
        }
    };

    const formatCategoryValue = (cat) => {
        const emoji = cat.icon ? `${cat.icon} ` : '';
        const cleanGroup = cat.group_name.replace(/\s*\(.*\)/, '').trim();
        
        if (cleanGroup.toLowerCase() === 'huzzler') {
            return `${emoji}${cat.category_name}`;
        } else {
            return `${emoji}${cleanGroup} - ${cat.category_name}`;
        }
    };

    const formatCategoryValueWithoutEmoji = (cat) => {
        const cleanGroup = cat.group_name.replace(/\s*\(.*\)/, '').trim();
        if (cleanGroup.toLowerCase() === 'huzzler') {
            return cat.category_name;
        } else {
            return `${cleanGroup} - ${cat.category_name}`;
        }
    };

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });
            if (data) {
                const parsedData = data.map(b => {
                    let cat = b.category || "";
                    if (b.topic && b.topic.includes("|||")) {
                        const parts = b.topic.split("|||");
                        b.topic = parts[0];
                        cat = cat || parts[1];
                    }
                    b.category = cat;
                    return b;
                });
                setBlogs(parsedData);
            }
        } catch (err) {
            console.error('Error fetching blogs:', err);
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure?')) return;
        await supabase.from('blogs').delete().eq('id', id);
        setBlogs(blogs.filter(b => b.id !== id));
    };

    const normalizeCategoryValue = (cat) => {
        if (!cat) return '';
        
        // Strip emojis
        let plain = cat.replace(/^[\p{Emoji}\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/u, '').trim();
        
        // Remove leading hyphen and trim if present (e.g. "- Pet Grooming")
        if (plain.startsWith('-')) {
            plain = plain.substring(1).trim();
        }
        
        // Split on space-hyphen-space if present to get the core category name
        if (plain.includes(' - ')) {
            const parts = plain.split(' - ');
            plain = parts[parts.length - 1].trim(); // Take the last part (e.g., Pet Grooming)
        }
        
        return plain.toLowerCase().trim();
    };

    const filteredBlogs = selectedCategoryValue === 'All Categories'
        ? blogs
        : blogs.filter(b => normalizeCategoryValue(b.category) === normalizeCategoryValue(selectedCategoryValue));

    // Deduplicate categories using a Map keying on clean value
    const uniqueCategoryMap = new Map();
    categories.forEach(cat => {
        const val = formatCategoryValueWithoutEmoji(cat);
        if (!uniqueCategoryMap.has(val)) {
            uniqueCategoryMap.set(val, {
                label: formatCategoryValue(cat),
                value: val
            });
        }
    });

    const listCategories = [
        { label: "All Categories", value: "All Categories" },
        ...Array.from(uniqueCategoryMap.values())
    ];

    const selectedCategoryObj = listCategories.find(c => c.value === selectedCategoryValue);
    const selectedCategoryLabel = selectedCategoryObj ? selectedCategoryObj.label : 'All Categories';

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#f9f9fb] w-full font-sans">
            <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row gap-8">
                {/* Sidebar Categories */}
                <aside className="w-full md:w-72 flex-shrink-0">
                    <Card className="border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/90 backdrop-blur-xl sticky top-28 rounded-2xl">
                        <CardHeader className="pb-4 pt-6 px-6">
                            <CardTitle className="text-xl font-bold text-neutral-900 tracking-tight">Categories</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-1.5 p-6 pt-0 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {listCategories.map(catObj => (
                                <button
                                    key={catObj.value}
                                    onClick={() => setSelectedCategoryValue(catObj.value)}
                                    className={`text-left px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${selectedCategoryValue === catObj.value
                                        ? 'bg-[#8763e5]/10 text-[#8763e5] shadow-sm font-bold'
                                        : 'hover:bg-neutral-100/70 text-neutral-600 hover:text-neutral-900'
                                        }`}
                                >
                                    {catObj.label}
                                </button>
                            ))}
                        </CardContent>
                    </Card>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-4xl font-black text-neutral-900 tracking-tight">
                                {selectedCategoryLabel}
                            </h1>
                            <span className="text-sm font-medium text-neutral-400 mt-1 inline-block">
                                {loading ? '...' : `${filteredBlogs.length} Blogs`}
                            </span>
                        </div>
                        <Link href="/blog-generator/generator">
                            <button className="inline-flex items-center gap-2 bg-[#8763e5] hover:bg-[#704ec2] text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group">
                                <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
                                <span>Create New Blog</span>
                            </button>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-32">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#8763e5] border-r-4 border-r-transparent"></div>
                        </div>
                    ) : filteredBlogs.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
                            <div className="w-20 h-20 bg-[#8763e5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Edit className="w-8 h-8 text-[#8763e5]" />
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-2">No blogs found</h2>
                            <p className="text-neutral-500 mb-8 max-w-sm mx-auto">It looks like there are no generated blogs in this category yet. Start creating!</p>
                            <Link href="/blog-generator/generator">
                                <Button className="bg-[#8763e5] hover:bg-[#704ec2] text-white px-8 py-6 text-base font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    Generate New Blog
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBlogs.map(blog => {
                                let thumbnailUrl = null;
                                let excerpt = '';
                                try {
                                    const parsed = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;
                                    thumbnailUrl = parsed?.featuredImage?.url || parsed?.featured_image || parsed?.image || blog?.featured_image_url;
                                    if (parsed?.metaDescription) {
                                        excerpt = parsed.metaDescription;
                                    } else if (parsed?.sections && parsed.sections.length > 0) {
                                        excerpt = parsed.sections[0].body?.replace(/[#*`_]/g, '').substring(0, 130) + '...';
                                    }
                                } catch (e) {}

                                const categoryBadge = (blog.category || 'General').toUpperCase();
                                const formattedDate = new Date(blog.created_at || Date.now()).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                });

                                return (
                                <Card key={blog.id} className="border-neutral-200/80 shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden group bg-white flex flex-col justify-between">
                                    <div>
                                        {thumbnailUrl ? (
                                            <div className="w-full h-48 overflow-hidden bg-neutral-100 border-b border-neutral-100 relative">
                                                <img src={thumbnailUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                        ) : (
                                            <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center border-b border-neutral-100">
                                                <ImageIcon className="w-10 h-10 text-neutral-400" />
                                            </div>
                                        )}

                                        <div className="p-6 pb-2">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="bg-[#485b55] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md">
                                                    {categoryBadge}
                                                </span>
                                                <span className="text-xs font-medium text-neutral-500">
                                                    {formattedDate}
                                                </span>
                                            </div>
                                            <h3 className="font-sans text-lg font-bold text-neutral-900 leading-snug line-clamp-2 mb-2 group-hover:text-[#8763e5] transition-colors">
                                                {blog.title || 'Untitled Blog Post'}
                                            </h3>
                                            {excerpt && (
                                                <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                                                    {excerpt}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 border-t border-neutral-100 mt-3 flex items-center justify-between gap-2">
                                        <Link href={`/blog-generator/blog/${blog.id}`} className="flex-1">
                                            <Button size="sm" className="w-full bg-[#8763e5] hover:bg-[#704ec2] text-white font-bold rounded-xl py-2 flex items-center justify-center gap-1.5 shadow-xs">
                                                <Eye className="h-4 w-4" /> View
                                            </Button>
                                        </Link>
                                        <Link href={`/blog-generator/editor/${blog.id}`}>
                                            <Button variant="outline" size="sm" className="bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200 rounded-xl px-3">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button variant="outline" size="sm" onClick={() => handleDelete(blog.id)} className="bg-white hover:bg-red-50 text-red-500 border-neutral-200 hover:border-red-200 rounded-xl px-3">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </Card>
                            )})}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

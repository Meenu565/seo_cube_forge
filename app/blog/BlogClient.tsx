"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/site/Footer";
import FeaturedPost from "@/components/blog/FeaturedPost";
import FilterTabs from "@/components/blog/FilterTabs";
import PostGrid from "@/components/blog/PostGrid";
import { blogGenSupabase as supabase } from '@/lib/blog-generator/supabase-client';

export default function BlogClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const OFFICIAL_PROJECT_POSTS = [
    {
      id: "automating-content-production",
      title: "Automating Content Production: The Ultimate Guide to AI Agent Teams",
      date: "May 14, 2026",
      category: "Product",
      description: "Discover how multi-agent systems are replacing traditional content workflows. Learn the exact architecture behind autonomous content generation pipelines that ship daily.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "multi-platform-distribution",
      title: "How ContentForge Orchestrates Multi-Platform Distribution Across Channels",
      date: "Sep 10, 2026",
      category: "Product",
      description: "Learn how ContentForge seamlessly publishes tailored content streams to YouTube, Substack, LinkedIn, and X with zero manual effort.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "autonomous-ai-agent-architecture",
      title: "The Architecture of Autonomous AI Agents for Modern Content Workflows",
      date: "Aug 28, 2026",
      category: "Engineering",
      description: "A technical deep-dive into how specialized AI agent roles (Researcher, Copywriter, Strategist, Art Director) collaborate to produce publication-ready longform articles.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "maximizing-audience-reach",
      title: "Maximizing Audience Reach with AI Video Prompt Rules and Micro-Clipping",
      date: "Aug 15, 2026",
      category: "Growth",
      description: "Discover how automated clip extraction converts long-form video interviews into high-converting viral shorts optimized for social channels.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_official', true)
        .order('created_at', { ascending: false });

      if (data && data.length > 0) {
        const mappedPosts = data.map((blog: any) => {
          let imageUrl = '';
          let desc = '';
          try {
            const parsed = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;
            if (parsed.featuredImage?.url) imageUrl = parsed.featuredImage.url;
            if (parsed.metaDescription) desc = parsed.metaDescription;
            else if (parsed.sections?.[0]?.body) desc = parsed.sections[0].body.substring(0, 150) + '...';
          } catch {
            const stripped = (blog.content || '').replace(/<[^>]+>/g, '');
            desc = stripped.substring(0, 150) + '...';
          }

          let cat = blog.category || "Product";
          cat = cat.replace(/^[\p{Emoji}\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/u, '').trim();

          return {
            id: blog.id,
            title: blog.title || "Untitled",
            date: new Date(blog.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
            category: cat,
            description: desc,
            imageUrl
          };
        });
        setPosts(mappedPosts);
      } else {
        setPosts(OFFICIAL_PROJECT_POSTS);
      }
    } catch (err) {
      console.warn("Using official project posts fallback:", err);
      setPosts(OFFICIAL_PROJECT_POSTS);
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#fcfcfc] text-[#111827] min-h-screen relative font-sans">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <FeaturedPost />
        <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <PostGrid activeTab={activeTab} posts={posts} loading={loading} />
      </main>
      
      <Footer />
    </div>
  );
}

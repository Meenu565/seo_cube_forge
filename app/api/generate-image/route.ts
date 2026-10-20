import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_BLOG_GEN_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_BLOG_GEN_SUPABASE_ANON_KEY;
const IDEOGRAM_API_KEY = process.env.IDEOGRAM_API_KEY || "Xi1ggqVGXyGJ_Ul4qwdId5Bp6q98DmNLV2yBHH4dUGsuEjy743uOJpw4J4KHQHeE-aGExx9pZ25IJa0XpD0gJg";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function POST(req) {
    try {
        const { topic } = await req.json();

        if (!topic) {
            return NextResponse.json({ error: "Topic is required" }, { status: 400 });
        }

        const prompt = `A high-quality, professional editorial illustration for a blog post about: ${topic}. Clean, modern, cinematic lighting, highly detailed, suitable for a tech or business blog header.`;

        const response = await fetch("https://api.ideogram.ai/v1/ideogram-v4/generate", {
            method: "POST",
            headers: {
                "Api-Key": IDEOGRAM_API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text_prompt: prompt,
                aspect_ratio: "ASPECT_16_9",
                seed: Math.floor(Math.random() * 1000000)
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.warn("Ideogram API returned error, using high quality Unsplash cover fallback:", errorText);
            
            const fallbackImages = [
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            ];
            const fallbackUrl = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
            return NextResponse.json({ url: fallbackUrl });
        }

        const data = await response.json();
        const imgUrl = data.data?.[0]?.url;

        if (!imgUrl) {
            return NextResponse.json({ url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" });
        }

        // Download the image
        const imgRes = await fetch(imgUrl);
        const imgBuffer = await imgRes.arrayBuffer();

        // Upload to Supabase Storage
        const filename = `featured-images/${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
        
        const { error: uploadError } = await supabase.storage
            .from('blog-media')
            .upload(filename, imgBuffer, {
                contentType: 'image/png',
                upsert: false
            });

        if (uploadError) {
            console.warn("Supabase storage error, returning direct image URL:", uploadError);
            return NextResponse.json({ url: imgUrl });
        }

        const { data: publicUrlData } = supabase.storage
            .from('blog-media')
            .getPublicUrl(filename);

        return NextResponse.json({ url: publicUrlData.publicUrl });
        
    } catch (error) {
        console.warn("Image generation error, returning fallback image:", error);
        return NextResponse.json({ url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" });
    }
}

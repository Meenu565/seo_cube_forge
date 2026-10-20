"use client";
import './generator.css';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/blog-generator/ui/button';
import { Input } from '@/components/blog-generator/ui/input';
import { Label } from '@/components/blog-generator/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/blog-generator/ui/card';
import {
    runResearchAgent,
    generateSingleBlogAgent,
    generateBulkTopics
} from '@/lib/blog-generator/agents';
import { blogGenSupabase as supabase } from '@/lib/blog-generator/supabase-client';
import { Download, Save, Send, Edit, Eye, RefreshCw, Check, ArrowRight, ArrowLeft, Image as ImageIcon, UploadCloud, ChevronDown, Search, Target, FileText, Aperture, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getCategories, addCategory } from '@/lib/blog-generator/categoryService';
import EmojiPicker from 'emoji-picker-react';
import { motion, AnimatePresence } from 'framer-motion';

function CustomCategorySelect({
    groupedCategories,
    value,
    onChange,
    formatCategoryValue
}: {
    groupedCategories: Record<string, any[]>;
    value: string;
    onChange: (val: string) => void;
    formatCategoryValue: (cat: any) => string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (catVal: string) => {
        onChange(catVal);
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`h-12 w-full rounded-xl border bg-white px-4 flex items-center justify-between text-sm font-medium transition-all ${
                    isOpen
                        ? 'border-[#8763e5] ring-2 ring-[#8763e5]/20 shadow-md'
                        : 'border-neutral-300 hover:border-neutral-400 shadow-2xs'
                }`}
            >
                <span className={value ? 'text-neutral-900 font-bold truncate' : 'text-neutral-400 font-normal'}>
                    {value || 'Select a Category...'}
                </span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ml-2 ${isOpen ? 'rotate-180 text-[#8763e5]' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 left-0 right-0 mt-2 max-h-80 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-2xl bg-white border border-neutral-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-2 animate-in fade-in slide-in-from-top-2">
                    {/* Search bar */}
                    <div className="p-1 mb-2 sticky top-0 bg-white z-10">
                        <div className="relative">
                            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-2.5" />
                            <input
                                type="text"
                                placeholder="Search categories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-8 pl-8 pr-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-900 focus:outline-none focus:border-[#8763e5] focus:bg-white transition-all"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>

                    {Object.entries(groupedCategories).map(([group, cats]) => {
                        const filteredCats = cats.filter(cat => {
                            const formatted = formatCategoryValue(cat).toLowerCase();
                            return formatted.includes(searchQuery.toLowerCase());
                        });

                        if (filteredCats.length === 0) return null;

                        return (
                            <div key={group} className="mb-3 last:mb-0">
                                <div className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-neutral-400 border-b border-neutral-100 pb-1 mb-1">
                                    {group}
                                </div>
                                <div className="space-y-0.5">
                                    {filteredCats.map(cat => {
                                        const catVal = formatCategoryValue(cat);
                                        const isSelected = value === catVal;
                                        return (
                                            <button
                                                key={cat.category_name}
                                                type="button"
                                                onClick={() => handleSelect(catVal)}
                                                className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all flex items-center justify-between ${
                                                    isSelected
                                                        ? 'bg-[#8763e5]/10 text-[#8763e5] font-bold'
                                                        : 'hover:bg-neutral-100/70 text-neutral-700 hover:text-neutral-900 font-medium'
                                                }`}
                                            >
                                                <span className="truncate">{catVal}</span>
                                                {isSelected && <Check className="w-4 h-4 text-[#8763e5] shrink-0 ml-2" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function CustomSimpleSelect({
    options,
    value,
    onChange
}: {
    options: { value: string; label: string }[];
    value: string;
    onChange: (val: string) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(o => o.value === value) || options[0];

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`h-12 w-full rounded-xl border bg-white px-4 flex items-center justify-between text-sm font-medium transition-all ${
                    isOpen
                        ? 'border-[#8763e5] ring-2 ring-[#8763e5]/20 shadow-md'
                        : 'border-neutral-300 hover:border-neutral-400 shadow-2xs'
                }`}
            >
                <span className="text-neutral-900 font-bold truncate">
                    {selectedOption?.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ml-2 ${isOpen ? 'rotate-180 text-[#8763e5]' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 left-0 right-0 mt-2 max-h-60 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-2xl bg-white border border-neutral-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-2 animate-in fade-in slide-in-from-top-2">
                    {options.map(opt => {
                        const isSelected = value === opt.value;
                        return (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => {
                                    onChange(opt.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all flex items-center justify-between ${
                                    isSelected
                                        ? 'bg-[#8763e5]/10 text-[#8763e5] font-bold'
                                        : 'hover:bg-neutral-100/70 text-neutral-700 hover:text-neutral-900 font-medium'
                                }`}
                            >
                                <span className="truncate">{opt.label}</span>
                                {isSelected && <Check className="w-4 h-4 text-[#8763e5] shrink-0 ml-2" />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function AgentAssemblyLoader({
    status,
    bulkProgress,
    topic
}: {
    status: string;
    bulkProgress: { current: number; total: number };
    topic?: string;
}) {
    const agents = [
        {
            id: 'cato',
            name: 'Cato',
            role: 'RESEARCHER',
            icon: Search,
            description: 'Gathering top web insights & verifying factual data...',
            matchKeywords: ['research', 'gathering', 'tavily', 'facts']
        },
        {
            id: 'vela',
            name: 'Vela',
            role: 'STRATEGIST',
            icon: Target,
            description: 'Structuring SEO keyword map & article outline...',
            matchKeywords: ['structuring', 'outline', 'strategy']
        },
        {
            id: 'orin',
            name: 'Orin',
            role: 'COPYWRITER',
            icon: FileText,
            description: 'Writing human-like introduction & deep-dive sections...',
            matchKeywords: ['writing blog', 'writing', 'drafting']
        },
        {
            id: 'iris',
            name: 'Iris',
            role: 'ART DIRECTOR',
            icon: Aperture,
            description: 'Creating custom featured hero artwork...',
            matchKeywords: ['hero image', 'image', 'uploading']
        },
        {
            id: 'nova',
            name: 'Nova',
            role: 'DISTRIBUTOR',
            icon: Sparkles,
            description: 'Applying SEO metadata & finalizing formatting...',
            matchKeywords: ['saving', 'formatting', 'finalizing']
        }
    ];

    let activeIndex = 0;
    const statusLower = (status || '').toLowerCase();
    for (let i = agents.length - 1; i >= 0; i--) {
        if (agents[i].matchKeywords.some(kw => statusLower.includes(kw))) {
            activeIndex = i;
            break;
        }
    }

    const progressPct = bulkProgress.total > 1
        ? Math.round((bulkProgress.current / bulkProgress.total) * 100)
        : Math.min(95, Math.max(15, Math.round(((activeIndex + 1) / agents.length) * 100)));

    return (
        <div className="max-w-xl mx-auto py-16 px-4">
            <div className="relative bg-white/95 backdrop-blur-2xl border border-black/5 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Background ambient glow */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#8763e5]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#8763e5]/10 text-[#8763e5] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                        <Sparkles className="w-3.5 h-3.5 animate-spin" />
                        AI Control Room Active
                    </div>
                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
                        Crafting Your Blog
                    </h2>
                    {topic && (
                        <p className="text-sm font-medium text-neutral-600 truncate mt-1 max-w-md mx-auto">
                            "{topic}"
                        </p>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="mb-8 relative z-10">
                    <div className="flex justify-between text-xs font-bold text-neutral-600 mb-2">
                        <span>Pipeline Progress</span>
                        <span className="text-[#8763e5] font-black">{progressPct}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-[#8763e5] to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progressPct}%` }}
                        />
                    </div>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-3 relative z-10">
                    {agents.map((agent, index) => {
                        const isCompleted = index < activeIndex;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={agent.id}
                                className={`flex items-start gap-4 p-3.5 rounded-2xl transition-all duration-300 ${
                                    isActive
                                        ? 'bg-[#8763e5]/5 border border-[#8763e5]/20 shadow-xs'
                                        : isCompleted
                                        ? 'bg-neutral-50/80 border border-neutral-100'
                                        : 'opacity-40 border border-transparent'
                                }`}
                            >
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                                        isCompleted
                                            ? 'bg-[#8763e5] text-white shadow-xs'
                                            : isActive
                                            ? 'bg-white border-2 border-[#8763e5] text-[#8763e5] shadow-sm'
                                            : 'bg-neutral-100 text-neutral-400'
                                    }`}
                                >
                                    {isCompleted ? (
                                        <Check className="w-5 h-5" />
                                    ) : isActive ? (
                                        <agent.icon className="w-5 h-5 animate-pulse" />
                                    ) : (
                                        <agent.icon className="w-5 h-5" />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0 pt-0.5">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-sm text-neutral-900">
                                            {agent.name}
                                        </span>
                                        <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md bg-neutral-200/60 text-neutral-600">
                                            {agent.role}
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                                        {isActive ? (status || agent.description) : agent.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function BlogGeneratorPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [generatedBlogs, setGeneratedBlogs] = useState([]);
    
    // Wizard State
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState(1);
    
    const [categories, setCategories] = useState([]);
    const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
    const [newCategoryData, setNewCategoryData] = useState({
        groupName: '', customGroupName: '', categoryName: '', topicIdeas: '', targetAudience: '', icon: ''
    });
    const [categoryError, setCategoryError] = useState('');
    const [savingCategory, setSavingCategory] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        topic: '',
        category: '',
        numBlogs: 1,
        length: 'medium', // 'short', 'medium', 'long'
        tone: 'professional',
        audience: '',
        seoLevel: 'high', // 'low', 'medium', 'high'
        contentElements: {
            faq: false,
            cta: false,
            keyTakeaways: false
        },
        featuredImageMode: 'generate', // 'generate', 'upload'
        uploadedImageFile: null,
        uploadedImagePreview: null,
        imageAlt: ''
    });

    useEffect(() => {
        loadCategories();
    }, []);

    // Enforce logic constraint: Number of Blogs > 1 forces Generate AI image
    useEffect(() => {
        if (formData.numBlogs > 1 && formData.featuredImageMode === 'upload') {
            setFormData(prev => ({ ...prev, featuredImageMode: 'generate', uploadedImageFile: null, uploadedImagePreview: null }));
        }
    }, [formData.numBlogs]);

    const loadCategories = async () => {
        const cats = await getCategories();
        setCategories(cats);
    };

    const formatCategoryValue = (cat) => {
        const emoji = cat.icon ? `${cat.icon} ` : '';
        const cleanGroup = cat.group_name.replace(/\s*\(.*\)/, '').trim();
        if (cleanGroup.toLowerCase() === 'huzzler') return `${emoji}${cat.category_name}`;
        return `${emoji}${cleanGroup} - ${cat.category_name}`;
    };

    const handleSaveCategory = async (e) => {
        e.preventDefault();
        setCategoryError('');
        
        const finalGroup = newCategoryData.groupName === 'NEW' 
            ? newCategoryData.customGroupName.trim() 
            : newCategoryData.groupName.trim();
        
        const finalCategory = newCategoryData.categoryName.trim();
        
        if (!finalGroup || !finalCategory) {
            setCategoryError('Group and Category names are required.');
            return;
        }

        setSavingCategory(true);
        try {
            await addCategory({
                group_name: finalGroup,
                category_name: finalCategory,
                topic_ideas: newCategoryData.topicIdeas.trim() || null,
                target_audience: newCategoryData.targetAudience.trim() || null,
                icon: newCategoryData.icon.trim() || null
            });
            
            const cats = await getCategories();
            setCategories(cats);
            
            const newCatObj = { group_name: finalGroup, category_name: finalCategory, icon: newCategoryData.icon.trim() || null };
            setFormData(prev => ({ ...prev, category: formatCategoryValue(newCatObj) }));

            setNewCategoryData({ groupName: '', customGroupName: '', categoryName: '', topicIdeas: '', targetAudience: '', icon: '' });
            setIsAddCategoryOpen(false);
        } catch (err) {
            setCategoryError(err.message || 'Failed to add category to the database.');
        } finally {
            setSavingCategory(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? (parseInt(value) || '') : value
        }));
    };

    const handleCheckboxChange = (name, checked) => {
        setFormData(prev => ({
            ...prev,
            contentElements: { ...prev.contentElements, [name]: checked }
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    uploadedImageFile: file,
                    uploadedImagePreview: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const nextStep = () => {
        if (currentStep === 1 && !formData.category) {
            alert('Please select a category first.');
            return;
        }
        setDirection(1);
        setCurrentStep(prev => Math.min(prev + 1, 4));
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const jumpToStep = (step) => {
        setDirection(step > currentStep ? 1 : -1);
        setCurrentStep(step);
    };

    // Form Submission & Generation
    const [bulkProgress, setBulkProgress] = useState({ current: 0, total: 0 });
    const [bulkResult, setBulkResult] = useState(null);
    const [retrying, setRetrying] = useState(false);

    const generateAndSaveSingleBlog = async (topic, category, activeElements, researchData, maxTokens) => {
        // Generate Hero Image if requested
        let finalImageUrl = null;
        let finalImageAlt = formData.imageAlt || `Featured image for ${topic}`;

        if (formData.featuredImageMode === 'upload') {
            if (formData.uploadedImagePreview) {
                finalImageUrl = formData.uploadedImagePreview;
            }
            if (formData.uploadedImageFile) {
                try {
                    setStatus(`Uploading your hero image...`);
                    const filename = `featured-images/${Date.now()}-${formData.uploadedImageFile.name}`;
                    const { error: uploadError } = await supabase.storage
                        .from('blog-media')
                        .upload(filename, formData.uploadedImageFile);
                    if (!uploadError) {
                        const { data } = supabase.storage.from('blog-media').getPublicUrl(filename);
                        if (data?.publicUrl) {
                            finalImageUrl = data.publicUrl;
                        }
                    }
                } catch (err) {
                    console.warn("Failed to upload image to Supabase storage, using base64 preview:", err);
                }
            }
        } else if (formData.featuredImageMode === 'generate') {
            try {
                setStatus(`Generating AI Hero Image for "${topic}"...`);
                const res = await fetch('/api/generate-image', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ topic })
                });
                if (res.ok) {
                    const data = await res.json();
                    finalImageUrl = data.url;
                }
            } catch (err) {
                console.warn("Failed to generate AI image:", err);
            }

            if (!finalImageUrl) {
                const topicLower = topic.toLowerCase();
                if (topicLower.includes('ai') || topicLower.includes('tech') || topicLower.includes('startup') || topicLower.includes('software')) {
                    finalImageUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';
                } else if (topicLower.includes('mindfulness') || topicLower.includes('mental') || topicLower.includes('health')) {
                    finalImageUrl = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80';
                } else if (topicLower.includes('exercise') || topicLower.includes('fitness') || topicLower.includes('physical')) {
                    finalImageUrl = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80';
                } else if (topicLower.includes('food') || topicLower.includes('diet') || topicLower.includes('nutrition')) {
                    finalImageUrl = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80';
                } else {
                    finalImageUrl = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80';
                }
            }
        }

        setStatus(`Writing Blog: "${topic}"...`);
        const finalContentJson = await generateSingleBlogAgent({
            topic,
            length: formData.length,
            tone: formData.tone,
            audience: formData.audience,
            seoLevel: formData.seoLevel,
            contentElements: activeElements,
            researchData,
            maxTokens
        });

        let structuredData;
        try {
            const firstBrace = finalContentJson.indexOf('{');
            const lastBrace = finalContentJson.lastIndexOf('}');
            if (firstBrace === -1 || lastBrace === -1) {
                throw new Error("No JSON object found in response");
            }
            const jsonStr = finalContentJson.substring(firstBrace, lastBrace + 1);
            structuredData = JSON.parse(jsonStr);
        } catch (e) {
            console.error("Failed to parse LLM output as JSON:", finalContentJson);
            throw new Error("JSON Error: " + e.message + " | Raw: " + (finalContentJson || "undefined").substring(0, 100) + "...");
        }

        if (finalImageUrl) {
            structuredData.featuredImage = {
                mode: formData.featuredImageMode,
                url: finalImageUrl,
                alt: finalImageAlt
            };
            structuredData.featured_image = finalImageUrl;
        }

        const cleanCategory = category.substring(category.indexOf(' ') + 1).trim();

        const { data, error } = await supabase
            .from('blogs')
            .insert([{
                title: structuredData.title || topic,
                topic: topic,
                category: cleanCategory,
                content: JSON.stringify(structuredData), // Store as JSON string for now
                seo_score: 85,
                status: 'draft'
            }])
            .select();

        if (error) {
            throw new Error(error.message || 'Database insert failed');
        }

        return data && data.length > 0 ? data[0] : null;
    };

    const handleGenerate = async () => {
        setLoading(true);
        setGeneratedBlogs([]);
        setBulkResult(null);
        setBulkProgress({ current: 0, total: 0 });

        const isBulkMode = !formData.topic.trim();
        const numBlogsNum = parseInt(formData.numBlogs, 10) || 1;

        try {
            const activeElements = Object.entries(formData.contentElements)
                .filter(([_, isActive]) => isActive)
                .map(([name]) => name);

            const maxTokens = formData.length === 'long' ? 1500 : (formData.length === 'medium' ? 1000 : 600);

            if (isBulkMode) {
                setStatus(`Generating ${numBlogsNum} unique topics for ${formData.category}...`);
                setBulkProgress({ current: 0, total: numBlogsNum });

                let allTopics = [];
                const usedTopics = [];
                const batchSize = Math.min(numBlogsNum, 20);
                let remaining = numBlogsNum;

                while (allTopics.length < numBlogsNum) {
                    const batchCount = Math.min(batchSize, remaining);
                    const newTopics = await generateBulkTopics(formData.category, batchCount, usedTopics);
                    for (const t of newTopics) {
                        const normalized = t.toLowerCase().trim();
                        if (!usedTopics.includes(normalized)) {
                            usedTopics.push(normalized);
                            allTopics.push(t);
                        }
                    }
                    remaining = numBlogsNum - allTopics.length;
                    if (remaining <= 0) break;
                }
                allTopics = allTopics.slice(0, numBlogsNum);

                const newBlogs = [];
                const failedItems = [];

                for (let i = 0; i < allTopics.length; i++) {
                    const currentTopic = allTopics[i];
                    setStatus(`Generating Blog ${i + 1}/${allTopics.length}...`);
                    setBulkProgress({ current: i + 1, total: allTopics.length });

                    try {
                        setStatus(`Researching "${currentTopic}"...`);
                        const researchData = await runResearchAgent(currentTopic);

                        const saved = await generateAndSaveSingleBlog(currentTopic, formData.category, activeElements, researchData, maxTokens);
                        if (saved) {
                            newBlogs.push(saved);
                            setGeneratedBlogs([...newBlogs]);
                        }
                    } catch (err) {
                        failedItems.push({ topic: currentTopic, error: err.message });
                    }
                }

                setBulkResult({ success: newBlogs.length, failed: failedItems.length, failedItems });

            } else {
                setStatus('Gathering facts (Tavily Research)...');
                const researchData = await runResearchAgent(formData.topic);

                const newBlogs = [];
                for (let i = 0; i < numBlogsNum; i++) {
                    setStatus(`Generating Blog ${i + 1} of ${numBlogsNum}...`);
                    try {
                        const saved = await generateAndSaveSingleBlog(formData.topic, formData.category, activeElements, researchData, maxTokens);
                        if (saved) newBlogs.push(saved);
                    } catch (err) {
                        console.error(`Error generating blog ${i + 1}:`, err);
                        alert(`Error generating blog ${i + 1}: ${err.message}`);
                    }
                }
                
                if (newBlogs.length === 0) {
                    alert('Failed to generate any blogs. Please check the console for details.');
                }
                setGeneratedBlogs(newBlogs);
            }
        } catch (error) {
            console.error(error);
            alert('Error during generation: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const renderProgressRail = () => {
        const steps = ['Topic & Scope', 'Voice & Audience', 'Optimization', 'Review & Generate'];
        return (
            <div className="w-full mb-12 relative max-w-4xl mx-auto px-4">
                <div className="absolute top-4 left-0 w-full h-[2px] bg-neutral-200 -z-10"></div>
                <div 
                    className="absolute top-4 left-0 h-[2px] bg-[#8763e5] -z-10 transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
                
                <div className="flex justify-between">
                    {steps.map((label, idx) => {
                        const stepNum = idx + 1;
                        const isCompleted = stepNum < currentStep;
                        const isActive = stepNum === currentStep;
                        
                        return (
                            <div key={stepNum} className="flex flex-col items-center cursor-pointer" onClick={() => isCompleted && jumpToStep(stepNum)}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                                    isCompleted ? 'bg-[#8763e5] text-white shadow-md' :
                                    isActive ? 'bg-white border-2 border-[#8763e5] text-[#8763e5] shadow-sm' :
                                    'bg-white border border-neutral-300 text-neutral-400'
                                }`}>
                                    {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
                                </div>
                                <span className={`mt-2 text-xs font-semibold ${
                                    isActive || isCompleted ? 'text-neutral-900' : 'text-neutral-400'
                                }`}>
                                    {label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (dir) => ({ zIndex: 0, x: dir < 0 ? 50 : -50, opacity: 0 })
    };

    const groupedCategories = categories.reduce((acc, cat) => {
        const group = cat.group_name;
        if (!acc[group]) acc[group] = [];
        acc[group].push(cat);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-[#fafafa] pt-10 pb-24">
            {!loading && generatedBlogs.length === 0 && !bulkResult && (
                <div className="max-w-4xl mx-auto">
                    <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-normal text-black mb-2 tracking-tight font-sans">Configure Blog</h1>
                            <p className="text-neutral-500 text-sm">Set your topic, style and SEO options once — every blog you generate follows this brief.</p>
                        </div>
                        <Link 
                            href="/blog-generator/drafts" 
                            className="shrink-0 inline-flex items-center gap-2 bg-white border border-neutral-200 hover:border-[#8763e5] text-neutral-700 hover:text-[#8763e5] px-5 py-2.5 rounded-2xl text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            <span>📚 View Generated Blogs</span>
                        </Link>
                    </div>

                    {renderProgressRail()}

                    <div className="relative overflow-hidden bg-white border border-neutral-200 rounded-3xl shadow-sm pt-8 px-8 pb-28 min-h-[500px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="w-full"
                            >
                                {/* STEP 1: Topic & Scope */}
                                {currentStep === 1 && (
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-neutral-900 mb-1">Topic & Scope</h2>
                                            <p className="text-neutral-500 text-sm">Specify your main blog topic and target category.</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <Label>Topic <span className="text-neutral-400 font-normal ml-1">— leave empty for auto-bulk</span></Label>
                                                <Input name="topic" value={formData.topic} onChange={handleChange} placeholder="e.g. Future of AI — or leave empty for bulk mode" className="h-12" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <Label>Category</Label>
                                                        <button type="button" onClick={() => setIsAddCategoryOpen(true)} className="text-[#8763e5] text-xs font-bold hover:underline">+ Add Category</button>
                                                    </div>
                                                    <CustomCategorySelect
                                                        groupedCategories={groupedCategories}
                                                        value={formData.category}
                                                        onChange={(val) => setFormData(prev => ({ ...prev, category: val }))}
                                                        formatCategoryValue={formatCategoryValue}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Number of Blogs</Label>
                                                    <Input name="numBlogs" type="number" min="1" max="100" value={formData.numBlogs} onChange={handleChange} className="h-12" />
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-neutral-100">
                                                <Label className="block mb-4 text-lg">Featured Image Strategy</Label>
                                                <p className="text-sm text-neutral-600 mb-4">Choose how you want to handle the main cover image for your blog post(s).</p>
                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <div
                                                        onClick={() => setFormData(prev => ({ ...prev, featuredImageMode: 'generate' }))}
                                                        className={`flex-1 border rounded-xl p-5 cursor-pointer transition-all flex flex-col items-start gap-3 ${formData.featuredImageMode === 'generate' ? 'border-[#8763e5] bg-[#8763e5]/5 ring-1 ring-[#8763e5]' : 'border-neutral-300 hover:border-[#8763e5]/50 bg-white'}`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`p-2 rounded-lg ${formData.featuredImageMode === 'generate' ? 'bg-[#8763e5] text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                                                                <ImageIcon className="w-5 h-5" />
                                                            </div>
                                                            <span className="font-bold text-base text-neutral-900">Generate with AI</span>
                                                        </div>
                                                        <span className="text-sm text-neutral-600 leading-relaxed">
                                                            Let Iris (our AI Art Director) automatically prompt and generate a unique, high-quality hero image for your blog.
                                                        </span>
                                                    </div>
                                                    
                                                    <div
                                                        onClick={() => formData.numBlogs === 1 && setFormData(prev => ({ ...prev, featuredImageMode: 'upload' }))}
                                                        className={`flex-1 border rounded-xl p-5 transition-all flex flex-col items-start gap-3 ${formData.numBlogs > 1 ? 'opacity-50 cursor-not-allowed bg-neutral-50' : 'cursor-pointer hover:border-[#8763e5]/50 bg-white'} ${formData.featuredImageMode === 'upload' ? 'border-[#8763e5] bg-[#8763e5]/5 ring-1 ring-[#8763e5]' : 'border-neutral-300'}`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`p-2 rounded-lg ${formData.featuredImageMode === 'upload' ? 'bg-[#8763e5] text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                                                                <UploadCloud className="w-5 h-5" />
                                                            </div>
                                                            <span className="font-bold text-base text-neutral-900">Upload Your Own</span>
                                                        </div>
                                                        <span className="text-sm text-neutral-600 leading-relaxed">
                                                            Manually upload a custom image file from your device. <br/><span className="text-xs font-semibold mt-1 inline-block text-neutral-500">*Only available when generating 1 blog.</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                {formData.featuredImageMode === 'upload' && (
                                                    <div className="mt-4 animate-in slide-in-from-top-2 p-4 border border-dashed border-neutral-300 rounded-xl bg-neutral-50 text-center">
                                                        <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
                                                        {formData.uploadedImagePreview ? (
                                                            <div className="relative">
                                                                <img src={formData.uploadedImagePreview} alt="Preview" className="h-32 mx-auto rounded-md object-cover" />
                                                                <button onClick={() => setFormData(prev => ({ ...prev, uploadedImagePreview: null, uploadedImageFile: null }))} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">x</button>
                                                            </div>
                                                        ) : (
                                                            <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                                                                Browse Files
                                                            </Button>
                                                        )}
                                                        <Input placeholder="Optional: alt text for image" value={formData.imageAlt} onChange={(e) => setFormData(prev => ({ ...prev, imageAlt: e.target.value }))} className="mt-3" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2: Voice & Audience */}
                                {currentStep === 2 && (
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-neutral-900 mb-1">Voice & Audience</h2>
                                            <p className="text-neutral-500 text-sm">Define how the blog sounds and who it's for.</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <Label>Blog Length</Label>
                                                <div className="grid grid-cols-3 gap-4">
                                                    {[
                                                        { id: 'short', name: 'Short', words: '~500 words' },
                                                        { id: 'medium', name: 'Medium', words: '~1000 words' },
                                                        { id: 'long', name: 'Long', words: '~2000 words' }
                                                    ].map(len => (
                                                        <div 
                                                            key={len.id}
                                                            onClick={() => setFormData(prev => ({ ...prev, length: len.id }))}
                                                            className={`border rounded-xl p-4 cursor-pointer text-center transition-all ${formData.length === len.id ? 'border-[#8763e5] bg-[#8763e5]/10 shadow-sm ring-1 ring-[#8763e5]' : 'border-neutral-200 hover:border-neutral-300'}`}
                                                        >
                                                            <div className={`font-bold ${formData.length === len.id ? 'text-[#8763e5]' : 'text-neutral-900'}`}>{len.name}</div>
                                                            <div className="text-xs text-neutral-500 mt-1">{len.words}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label>Tone of Voice</Label>
                                                <CustomSimpleSelect
                                                    options={[
                                                        { value: "professional", label: "Professional & Authoritative" },
                                                        { value: "conversational", label: "Conversational & Friendly" },
                                                        { value: "humorous", label: "Humorous & Witty" },
                                                        { value: "academic", label: "Academic & Analytical" },
                                                        { value: "inspirational", label: "Inspirational & Motivating" }
                                                    ]}
                                                    value={formData.tone}
                                                    onChange={(val) => setFormData(prev => ({ ...prev, tone: val }))}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label>Target Audience</Label>
                                                <Input name="audience" value={formData.audience} onChange={handleChange} placeholder="e.g. Startup founders looking for funding" className="h-12" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3: Optimization & Modules */}
                                {currentStep === 3 && (
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-neutral-900 mb-1">Optimization & Modules</h2>
                                            <p className="text-neutral-500 text-sm">Fine-tune SEO and inject smart content blocks.</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <Label>SEO Level</Label>
                                                <div className="flex bg-neutral-100 rounded-lg p-1 w-full max-w-md">
                                                    {['low', 'medium', 'high'].map(level => (
                                                        <button
                                                            key={level}
                                                            type="button"
                                                            onClick={() => setFormData(prev => ({ ...prev, seoLevel: level }))}
                                                            className={`flex-1 py-2 text-sm font-semibold rounded-md capitalize transition-all ${formData.seoLevel === level ? 'bg-[#8763e5] text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-900'}`}
                                                        >
                                                            {level}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-3 pt-4 border-t border-neutral-100">
                                                <Label>Content Elements</Label>
                                                <div className="flex flex-wrap gap-3">
                                                    {[
                                                        { id: 'faq', label: 'FAQ Section' },
                                                        { id: 'cta', label: 'Call To Action' },
                                                        { id: 'keyTakeaways', label: 'Key Takeaways' }
                                                    ].map(elem => (
                                                        <button
                                                            key={elem.id}
                                                            type="button"
                                                            onClick={() => handleCheckboxChange(elem.id, !formData.contentElements[elem.id])}
                                                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${formData.contentElements[elem.id] ? 'bg-[#8763e5] text-white border-[#8763e5]' : 'bg-white text-neutral-600 border-neutral-300 hover:bg-neutral-50'}`}
                                                        >
                                                            {formData.contentElements[elem.id] && <Check className="w-3 h-3 inline-block mr-2" />}
                                                            {elem.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 4: Review & Generate */}
                                {currentStep === 4 && (
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-neutral-900 mb-1">Review & Generate</h2>
                                            <p className="text-neutral-500 text-sm">Review your brief before firing the generation pipeline.</p>
                                        </div>

                                        <div className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden">
                                            <div className="divide-y divide-neutral-200">
                                                {[
                                                    { label: 'Topic', value: formData.topic || 'Auto-bulk', step: 1 },
                                                    { label: 'Category', value: formData.category ? formData.category.replace(/[^a-zA-Z\s\-]/g, '').trim() : 'Not Set', step: 1 },
                                                    { label: 'Number of Blogs', value: formData.numBlogs, step: 1 },
                                                    { label: 'Featured Image', value: formData.featuredImageMode === 'generate' ? 'AI Generated (Iris)' : (formData.uploadedImageFile ? 'Uploaded Image' : 'None'), step: 1 },
                                                    { label: 'Blog Length', value: formData.length, capitalize: true, step: 2 },
                                                    { label: 'Tone', value: formData.tone, capitalize: true, step: 2 },
                                                    { label: 'Target Audience', value: formData.audience || 'General', step: 2 },
                                                    { label: 'SEO Level', value: formData.seoLevel, capitalize: true, step: 3 },
                                                    { label: 'Elements', value: Object.entries(formData.contentElements).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'None', step: 3 },
                                                ].map((row, idx) => (
                                                    <div key={idx} className="flex justify-between items-center px-6 py-4 hover:bg-neutral-100 transition-colors">
                                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                                                            <span className="text-sm font-medium text-neutral-500 w-32">{row.label}</span>
                                                            <span className={`text-sm font-bold text-neutral-900 ${row.capitalize ? 'capitalize' : ''}`}>{row.value}</span>
                                                        </div>
                                                        <button onClick={() => jumpToStep(row.step)} className="text-xs font-bold text-[#8763e5] hover:underline">Edit</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {formData.numBlogs > 1 && !formData.topic && (
                                            <div className="p-4 bg-[#8763e5]/10 border border-[#8763e5]/20 rounded-lg flex items-start gap-3">
                                                <div className="mt-0.5">🚀</div>
                                                <div>
                                                    <div className="font-bold text-[#8763e5] text-sm">Bulk Mode Active</div>
                                                    <div className="text-sm text-neutral-600 mt-1">
                                                        You are about to generate {formData.numBlogs} unique blogs for the {formData.category} category.
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Footer (Fixed at bottom of card) */}
                        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-neutral-100 bg-white flex justify-between items-center">
                            {currentStep > 1 ? (
                                <Button variant="ghost" onClick={prevStep} className="text-neutral-500 hover:text-neutral-900">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                </Button>
                            ) : <div></div>}
                            
                            {currentStep < 4 ? (
                                <Button onClick={nextStep} className="bg-[#8763e5] hover:bg-[#704ec2] text-white rounded-full px-8">
                                    Continue <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button onClick={handleGenerate} className="bg-[#8763e5] hover:bg-[#704ec2] text-white rounded-full px-8 shadow-md">
                                    Generate Blog(s) <Send className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <AgentAssemblyLoader
                    status={status}
                    bulkProgress={bulkProgress}
                    topic={formData.topic || formData.category}
                />
            )}

            {/* Bulk Completion Summary & Results */}
            {!loading && generatedBlogs.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 space-y-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-black text-neutral-900">
                            Generated Blogs ({generatedBlogs.length})
                        </h2>
                        <Button variant="outline" onClick={() => { setGeneratedBlogs([]); setCurrentStep(1); }}>Start Over</Button>
                    </div>
                    {/* Simplified for brevity, same card rendering as before */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {generatedBlogs.map((blog) => {
                            let imageUrl = null;
                            let excerpt = '';
                            try {
                                const parsed = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;
                                imageUrl = parsed?.featuredImage?.url || parsed?.featured_image || parsed?.image || blog?.featured_image_url;
                                if (parsed?.metaDescription) {
                                    excerpt = parsed.metaDescription;
                                } else if (parsed?.sections && parsed.sections.length > 0) {
                                    excerpt = parsed.sections[0].body?.replace(/[#*`_]/g, '').substring(0, 130) + '...';
                                }
                            } catch (e) {}

                            const formattedDate = new Date(blog.created_at || Date.now()).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            });

                            const categoryBadge = (blog.category || 'General').toUpperCase();

                            return (
                                <Card key={blog.id} className="relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-neutral-200/80 overflow-hidden group">
                                    {imageUrl ? (
                                        <div className="w-full h-48 overflow-hidden bg-neutral-100 border-b border-neutral-100">
                                            <img src={imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center border-b border-neutral-100">
                                            <ImageIcon className="w-10 h-10 text-neutral-400" />
                                        </div>
                                    )}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="bg-[#485b55] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md">
                                                    {categoryBadge}
                                                </span>
                                                <span className="text-xs font-medium text-neutral-500">
                                                    {formattedDate}
                                                </span>
                                            </div>
                                            <h3 className="font-sans text-lg font-bold text-neutral-900 leading-snug line-clamp-2 mb-2 group-hover:text-[#8763e5] transition-colors">
                                                {blog.title}
                                            </h3>
                                            {excerpt && (
                                                <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                                                    {excerpt}
                                                </p>
                                            )}
                                        </div>
                                        <div className="pt-4 border-t border-neutral-100 mt-2">
                                            <Link href={`/blog-generator/blog/${blog.id}`} className="w-full inline-block">
                                                <Button className="w-full bg-[#8763e5] hover:bg-[#704ec2] text-white font-bold rounded-xl py-2.5 flex items-center justify-center gap-2">
                                                    <Eye className="w-4 h-4" /> View Blog
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            )}
            {/* Add Category Modal */}
            {isAddCategoryOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <Card className="w-full max-w-md shadow-2xl bg-white">
                        <CardHeader>
                            <CardTitle>Add Custom Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSaveCategory} className="space-y-4">
                                {categoryError && <div className="text-red-500 text-sm">{categoryError}</div>}
                                <div className="space-y-2">
                                    <Label>Category Group</Label>
                                    <CustomSimpleSelect
                                        options={[
                                            { value: "", label: "Select Group..." },
                                            ...Array.from(new Set(categories.map((c: any) => c.group_name))).map((group: any) => ({
                                                value: group,
                                                label: group
                                            })),
                                            { value: "NEW", label: "+ Create New Group..." }
                                        ]}
                                        value={newCategoryData.groupName}
                                        onChange={(val) => setNewCategoryData(prev => ({ ...prev, groupName: val }))}
                                    />
                                </div>
                                {newCategoryData.groupName === 'NEW' && (
                                    <div className="space-y-2">
                                        <Label>New Group Name</Label>
                                        <Input placeholder="e.g. PetCare (Pets)" value={newCategoryData.customGroupName} onChange={(e) => setNewCategoryData({ ...newCategoryData, customGroupName: e.target.value })} required />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <Label>Category Name</Label>
                                    <Input placeholder="e.g. Diet Tips" value={newCategoryData.categoryName} onChange={(e) => setNewCategoryData({ ...newCategoryData, categoryName: e.target.value })} required />
                                </div>
                                <div className="flex justify-end gap-2 mt-4">
                                    <Button type="button" variant="outline" onClick={() => setIsAddCategoryOpen(false)} disabled={savingCategory}>Cancel</Button>
                                    <Button type="submit" className="bg-[#8763e5] hover:bg-[#704ec2] text-white" disabled={savingCategory}>{savingCategory ? 'Saving...' : 'Save Category'}</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}

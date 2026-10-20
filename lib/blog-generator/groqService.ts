import axios from 'axios';

const GROQ_API_KEY = process.env.NEXT_PUBLIC_BLOG_GEN_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1';

const groqClient = axios.create({
    baseURL: GROQ_API_URL,
    headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const callGroq = async (systemPrompt: string, userPrompt: string, model = 'llama-3.3-70b-versatile', maxTokens = 1200, jsonMode = false) => {
    if (!GROQ_API_KEY || GROQ_API_KEY === 'your_groq_key') {
        console.warn("Groq API Key is missing. Returning placeholder response.");
        return `[Placeholder response for prompt: ${userPrompt.substring(0, 50)}...]`;
    }

    const candidateModels = Array.from(new Set([model, 'llama-3.3-70b-versatile', 'llama-3.1-8b-instant']));
    let lastError: any = null;

    for (const targetModel of candidateModels) {
        let retries = 0;
        const maxRetries = 2;
        let baseDelay = 3000;

        while (retries <= maxRetries) {
            try {
                const payload: any = {
                    model: targetModel,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    temperature: 0.7,
                    max_tokens: maxTokens
                };
                if (jsonMode) {
                    payload.response_format = { type: 'json_object' };
                }
                const response = await groqClient.post('/chat/completions', payload);
                return response.data.choices[0].message.content;
            } catch (error: any) {
                lastError = error;
                const status = error.response?.status;
                const errMsg = error.response?.data?.error?.message || '';
                if (status === 429 && retries < maxRetries) {
                    console.warn(`Groq Rate limit (429) for ${targetModel}. Retrying in ${baseDelay / 1000}s...`);
                    await sleep(baseDelay);
                    retries++;
                    baseDelay *= 2;
                } else if (status === 404 || status === 400 || errMsg.toLowerCase().includes('decommissioned') || errMsg.toLowerCase().includes('not exist')) {
                    console.warn(`Model ${targetModel} unavailable or decommissioned on Groq, trying next candidate...`);
                    break;
                } else {
                    console.error(`Error calling Groq API with ${targetModel}:`, error);
                    break;
                }
            }
        }
    }

    console.warn('[groqService] All candidate models failed or unavailable. Returning resilient fallback content.', lastError?.message);

    if (jsonMode) {
        // Extract topic from user prompt if possible
        const topicMatch = userPrompt.match(/Topic:\s*(.*)/i);
        const topic = topicMatch ? topicMatch[1].trim() : 'AI Insights & Strategy';
        
        return JSON.stringify({
            title: `Mastering ${topic}: The Ultimate Guide & Practical Insights`,
            metaDescription: `Discover key trends, strategic breakdowns, and actionable takeaways on ${topic}.`,
            keywords: [topic, 'AI Tools', 'Productivity', 'Strategy 2026'],
            featuredImage: {
                mode: 'generated',
                url: '',
                alt: `Professional illustration representing ${topic}`
            },
            sections: [
                {
                    heading: `Introduction to ${topic}`,
                    body: `In today's fast-evolving landscape, understanding **${topic}** is essential for staying ahead. As modern technology and AI agents transform industry workflows, adopting modern best practices yields unmatched efficiency and innovation.`
                },
                {
                    heading: `Key Drivers & Core Principles`,
                    body: `When approaching **${topic}**, key considerations include:\n\n- **Strategic Alignment**: Ensuring core goals align with automation.\n- **Optimized Workflows**: Streamlining daily tasks through intelligent tooling.\n- **Scalable Execution**: Building systems that grow alongside user demands.`
                },
                {
                    heading: `Actionable Recommendations & Next Steps`,
                    body: `To make the most out of **${topic}**, begin by auditing current bottlenecks, leveraging modern AI assistants, and establishing clear performance metrics.`
                }
            ]
        });
    }

    return `[Structured response for: ${userPrompt.substring(0, 100)}]`;
};

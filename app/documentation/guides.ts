export type Guide = {
  id: string;
  category: string;
  title: string;
  description: string;
  steps: { title: string; text: string }[];
  note?: string;
  action?: { label: string; href: string };
};

// Keep instructions aligned with the product forms, not marketing feature lists.
export const guides: Guide[] = [
  {
    id: "quick-start",
    category: "Start here",
    title: "Your first content package",
    description: "Start with a clear idea, give it some context, and review the result before sharing it.",
    steps: [
      { title: "Sign in to your workspace", text: "Open the login page and sign in with your email and password. If you are new, use the registration option on that page." },
      { title: "Write a focused brief", text: "Open the content studio and its Campaign Brief Form. Add your topic, target audience, and any instructions that should shape the content." },
      { title: "Generate, then review", text: "Choose Generate content package. When processing finishes, review the available posts, captions, and videos in your workspace. Check the facts, wording, and visuals before using them." },
    ],
    action: { label: "Open content studio", href: "/generate" },
  },
  {
    id: "content-packages",
    category: "Create",
    title: "Create a content package",
    description: "Give the platform the source material and direction it needs to produce content for your audience.",
    steps: [
      { title: "Choose your source", text: "In the Campaign Brief Form, select the source that fits your project. For a website brief, supply the relevant URL and supporting details where requested." },
      { title: "Add audience and brand context", text: "Enter a specific topic and target audience. Use the instructions field for the message, visual direction, or details you want included. Add Brand Assets when you have them." },
      { title: "Review your outputs", text: "Generate the package, then browse Generated Posts and Generated Videos. Open an output to inspect it and its available captions. Use the download control to keep a copy." },
    ],
    note: "A useful brief names the audience, the subject, and the intended message. For example: introduce a weekly planning tool to solo founders, with a clear explanation of how it saves time.",
    action: { label: "Create a package", href: "/generate" },
  },
  {
    id: "blogs",
    category: "Create",
    title: "Write and export a blog",
    description: "Use the blog generator to set the topic, voice, and structure before drafting.",
    steps: [
      { title: "Set the topic and scope", text: "Open Configure Blog. In Topic & Scope, enter your topic, choose a category, and set the number and length of blogs. For your first draft, start with one topic and one blog." },
      { title: "Choose the voice and structure", text: "In Voice & Audience, set the tone and intended reader. In Optimization, choose the SEO level and optional sections such as FAQs, a call to action, or key takeaways. Configure the featured image and its alt text." },
      { title: "Review, edit, and export", text: "Check Review & Generate, then select Generate Blog(s). Open a generated blog in the editor to refine the text and Save Draft. Export options include PDF, DOCX, Markdown, and HTML." },
    ],
    note: "Read the complete draft and verify factual claims, references, and image rights before publishing.",
    action: { label: "Open blog generator", href: "/blog-generator/generator" },
  },
  {
    id: "shorts",
    category: "Create",
    title: "Turn a long video into shorts",
    description: "Find short clips in an uploaded video or a video you have already generated.",
    steps: [
      { title: "Add a source video", text: "Open Shorts Studio. Choose Upload Video to browse for a file, or Use Generated Video to select an existing video from your workspace. Uploads support MP4, MOV, and WebM, up to 500 MB." },
      { title: "Choose how many clips to make", text: "Set Clips to produce between one and five, then select Generate Shorts. Follow the progress shown while the video is processed." },
      { title: "Preview and download", text: "Watch the generated clips. Check framing, timing, and captions. Use the available trim or regeneration controls if a clip needs adjustment, then download it or copy its caption." },
    ],
    action: { label: "Open Shorts Studio", href: "/studio/shorts" },
  },
  {
    id: "publishing",
    category: "Share",
    title: "Connect and publish",
    description: "Review your content and the selected account before sending anything live.",
    steps: [
      { title: "Check your account connection", text: "For direct publishing from the content studio, open the Twitter / X connection settings and check the account status. Complete or update the connection there if needed." },
      { title: "Review the post", text: "Return to your content, check the selected caption and hashtags, and preview the attached image or video. Make sure the destination account is the one you intend to use." },
      { title: "Publish and confirm", text: "Use the publishing control and wait for its result. If it reports a failure, read the message and check your connection. Confirm the post on the destination platform before retrying, to avoid duplicates." },
    ],
    note: "Direct publishing from the current content studio is available for Twitter / X. For other destinations, download your assets and publish through that platform’s own tools.",
    action: { label: "Open connection settings", href: "/settings/twitter" },
  },
  {
    id: "troubleshooting",
    category: "Support",
    title: "When something needs a second look",
    description: "A few checks to make before starting again.",
    steps: [
      { title: "Generation has not finished", text: "Check the job’s progress and any error message in the workspace. Avoid submitting the same brief repeatedly while it is processing. If it fails, keep the error message and the steps that led to it." },
      { title: "A video will not upload", text: "Check that the file is MP4, MOV, or WebM and no larger than 500 MB. Play it locally to confirm it opens, then select it again in Shorts Studio." },
      { title: "Publishing fails", text: "Check the destination account’s connection and the error shown in the app. Confirm that the content has not already appeared on the destination platform before trying again." },
    ],
    note: "Still stuck? Send the workflow, the error message, and what you expected to happen. Do not include passwords or account tokens.",
    action: { label: "Contact support", href: "mailto:info@cubeforgelabs.com" },
  },
];

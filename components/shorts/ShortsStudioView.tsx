"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud, Film, Play, CheckCircle2, RefreshCw, Sparkles,
  Flame, Clock, Download, Copy, Check, FileVideo, Video,
  ExternalLink, Scissors, AlertCircle, X, ChevronDown, ChevronUp, CheckCheck
} from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import { generateShorts, getShortsStatus, getUserVideosForShorts, getShortsHistory, retrimShortClip, batchRegenerateShortClips } from "@/lib/api";

interface UserVideo {
  session_id: string;
  title: string;
  video_url: string;
  created_at: string;
}

interface ShortClip {
  clip_index: number;
  final_path?: string;
  url?: string;
  score: number;
  hook_sentence: string;
  reason?: string;
  content_type?: string;
  score_breakdown?: Record<string, number>;
  social_caption?: string;
  hashtags?: string[];
  start_time: number;
  end_time: number;
  duration: number;
  file_size_mb?: number;
  waveform_peaks?: number[];
}

interface ShortsJobStatus {
  job_id: string;
  status: "processing" | "completed" | "failed";
  progress?: string;
  stages: {
    transcribed: boolean;
    highlighted: boolean;
    cropped: boolean;
    captioned: boolean;
  };
  candidates?: any[];
  selected?: any[];
  shorts?: ShortClip[];
  errors?: string[];
  created_at?: string;
}

const TRIM_PAD_SECONDS = 5;
const MIN_CLIP_DURATION = 20;
const MAX_CLIP_DURATION = 90;

function ClipTrimBar({
  origStart,
  origEnd,
  loading,
  onApply,
  onCancel,
}: {
  origStart: number;
  origEnd: number;
  loading: boolean;
  onApply: (start: number, end: number) => void;
  onCancel: () => void;
}) {
  const windowStart = Math.max(0, origStart - TRIM_PAD_SECONDS);
  const windowEnd = origEnd + TRIM_PAD_SECONDS;
  const windowDur = windowEnd - windowStart;

  const [start, setStart] = useState(origStart);
  const [end, setEnd] = useState(origEnd);
  const barRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<"start" | "end" | null>(null);

  const timeFromClientX = (clientX: number) => {
    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return windowStart + pct * windowDur;
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const t = timeFromClientX(e.clientX);
      if (draggingRef.current === "start") {
        setStart(Math.min(t, end - MIN_CLIP_DURATION));
      } else {
        setEnd(Math.max(t, start + MIN_CLIP_DURATION));
      }
    };
    const handleUp = () => {
      draggingRef.current = null;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [start, end]);

  const pct = (t: number) => ((t - windowStart) / windowDur) * 100;
  const duration = end - start;
  const durationValid = duration >= MIN_CLIP_DURATION && duration <= MAX_CLIP_DURATION;

  return (
    <div className="mt-3 rounded-xl bg-black/40 border border-white/[0.08] p-3 text-left">
      <div className="flex justify-between text-[10px] font-mono text-neutral-400 mb-2">
        <span>Start: {start.toFixed(1)}s</span>
        <span className={durationValid ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>
          Length: {duration.toFixed(1)}s
        </span>
        <span>End: {end.toFixed(1)}s</span>
      </div>

      <div
        ref={barRef}
        className="relative h-8 rounded-md bg-black/60 border border-white/10 select-none cursor-pointer"
      >
        {/* Selected range */}
        <div
          className="absolute top-0 bottom-0 bg-[#8763e5]/30 border-x border-[#8763e5]"
          style={{ left: `${pct(start)}%`, width: `${pct(end) - pct(start)}%` }}
        />
        {/* Start handle */}
        <div
          onMouseDown={() => (draggingRef.current = "start")}
          className="absolute top-0 bottom-0 w-4 -ml-2 cursor-ew-resize flex items-center justify-center z-10"
          style={{ left: `${pct(start)}%` }}
        >
          <div className="w-1.5 h-full rounded-full bg-[#8763e5] shadow-md" />
        </div>
        {/* End handle */}
        <div
          onMouseDown={() => (draggingRef.current = "end")}
          className="absolute top-0 bottom-0 w-4 -ml-2 cursor-ew-resize flex items-center justify-center z-10"
          style={{ left: `${pct(end)}%` }}
        >
          <div className="w-1.5 h-full rounded-full bg-[#d79de4] shadow-md" />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-2.5 py-1 rounded-lg text-[10px] font-medium text-neutral-400 hover:text-white transition cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onApply(start, end)}
          disabled={loading || !durationValid}
          className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-[#8763e5] hover:bg-[#7654d4] disabled:opacity-40 text-white transition shadow-sm cursor-pointer"
        >
          {loading ? "Re-trimming clip..." : "Apply Trim"}
        </button>
      </div>
    </div>
  );
}

function WaveformScrubber({
  peaks,
  videoRef,
}: {
  peaks?: number[];
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  const [progress, setProgress] = useState(0); // 0-1

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.duration) setProgress(video.currentTime / video.duration);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [videoRef]);

  const seekTo = (clientX: number, rect: DOMRect) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = pct * video.duration;
  };

  if (!peaks || peaks.length === 0) return null;

  return (
    <div
      className="mt-2 flex items-end gap-[1.5px] h-8 cursor-pointer"
      onClick={(e) => seekTo(e.clientX, e.currentTarget.getBoundingClientRect())}
    >
      {peaks.map((p, i) => {
        const played = i / peaks.length <= progress;
        return (
          <div
            key={i}
            className={`flex-1 rounded-full transition-colors ${
              played ? "bg-[#8763e5]" : "bg-white/15"
            }`}
            style={{ height: `${Math.max(8, p * 100)}%` }}
          />
        );
      })}
    </div>
  );
}

function ShortCandidateCard({
  clip,
  cIdx,
  selectMode,
  isSelected,
  onToggleSelect,
  isTrimming,
  trimLoading,
  onToggleTrim,
  onApplyTrim,
  onCancelTrim,
  expandedScore,
  onToggleScore,
  copiedCaption,
  onCopyCaption,
  copiedUrl,
  onCopyUrl,
}: {
  clip: ShortClip;
  cIdx: number;
  selectMode: boolean;
  isSelected: boolean;
  onToggleSelect: (clipIndex: number) => void;
  isTrimming: boolean;
  trimLoading: boolean;
  onToggleTrim: () => void;
  onApplyTrim: (s: number, e: number) => void;
  onCancelTrim: () => void;
  expandedScore: boolean;
  onToggleScore: () => void;
  copiedCaption: boolean;
  onCopyCaption: () => void;
  copiedUrl: string | null;
  onCopyUrl: (url: string) => void;
}) {
  const isMerged = clip.clip_index === 999;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <BorderGlow
      glowColor={isMerged ? "236 72 153" : "135 99 229"}
      backgroundColor="#120F17"
      borderRadius={24}
      glowRadius={isMerged ? 100 : 70}
      glowIntensity={isMerged ? 1.6 : 1.3}
      className={`flex flex-col justify-between p-5 border-none group transition-all duration-300 ${
        isMerged
          ? "bg-gradient-to-b from-[#2a1525] to-[#120F17] relative ring-2 ring-fuchsia-500/40 shadow-[0_0_40px_rgba(236,72,153,0.15)] scale-[1.02]"
          : "bg-gradient-to-b from-[#181520] to-[#120F17]"
      }`}
    >
      {/* Top: 9:16 Video Player or Preview */}
      <div className="w-full aspect-[9/16] max-h-[340px] rounded-xl overflow-hidden bg-black/40 border border-white/10 relative group/video">
        {clip.url ? (
          <video
            ref={videoRef}
            key={clip.url || cIdx}
            src={clip.url}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-500 text-xs">
            <Film size={28} className="mb-2 text-neutral-600" />
            <span>Preparing preview...</span>
          </div>
        )}

        {/* Score Badge Overlay */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-lg">
          <Flame size={13} className="text-amber-400" />
          <span className="text-xs font-extrabold text-white font-mono">
            {clip.score}
          </span>
          <span className="text-[9px] text-neutral-400 font-semibold uppercase">Score</span>
        </div>

        {/* Checkbox overlay when selectMode is active */}
        {selectMode && (
          <button
            type="button"
            onClick={() => onToggleSelect(clip.clip_index)}
            className={`absolute top-3 right-3 z-20 w-5 h-5 rounded-md border flex items-center justify-center transition cursor-pointer ${
              isSelected
                ? "bg-[#8763e5] border-[#8763e5]"
                : "bg-black/60 border-white/30"
            }`}
          >
            {isSelected && <Check size={12} className="text-white" />}
          </button>
        )}

        {/* Duration Tag — with trim button */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10">
          <button
            type="button"
            title="Trim clip boundaries"
            onClick={onToggleTrim}
            className="p-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-white hover:bg-black/95 transition cursor-pointer"
          >
            <Scissors size={11} />
          </button>
          <div className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white text-[10px] font-mono border border-white/10">
            {clip.duration}s
          </div>
        </div>
      </div>

      {/* Waveform Scrubber */}
      <WaveformScrubber peaks={clip.waveform_peaks} videoRef={videoRef} />

      {/* Content details */}
      <div className="mt-4 space-y-3">
        <div>
          <div className={`text-[10px] tracking-wider uppercase font-semibold font-mono flex items-center gap-1.5 ${isMerged ? 'text-fuchsia-400' : 'text-[#8763e5]'}`}>
            {isMerged && <Sparkles size={12} />}
            {isMerged ? "ULTIMATE MONTAGE" : `${clip.content_type || "SHORT CLIP"} #${cIdx + 1}`}
          </div>
          <div className="text-xs font-bold text-white mt-1 line-clamp-2 leading-snug">
            "{clip.hook_sentence || "Viral moment from video"}"
          </div>
          {clip.reason && (
            <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
              {clip.reason}
            </p>
          )}

          {/* Social caption + hashtags */}
          {clip.social_caption && (
            <div className="mt-2 flex items-start justify-between gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-2.5 py-2">
              <div className="min-w-0">
                <p className="text-[11px] text-neutral-200 leading-snug line-clamp-2">
                  {clip.social_caption}
                </p>
                {clip.hashtags && clip.hashtags.length > 0 && (
                  <p className="text-[10px] text-[#d79de4] mt-1 line-clamp-1 font-mono">
                    {clip.hashtags.join(" ")}
                  </p>
                )}
              </div>
              <button
                type="button"
                title="Copy caption + hashtags"
                onClick={onCopyCaption}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition shrink-0 cursor-pointer"
              >
                {copiedCaption ? (
                  <Check size={12} className="text-emerald-400" />
                ) : (
                  <Copy size={12} />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Stage status pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
            Transcribed ✓
          </span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
            Highlighted ✓
          </span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
            Cropped ✓
          </span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
            Captioned ✓
          </span>
        </div>

        {/* Score breakdown toggle */}
        {clip.score_breakdown && Object.keys(clip.score_breakdown).length > 0 && (
          <div>
            <button
              type="button"
              onClick={onToggleScore}
              className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition cursor-pointer"
            >
              {expandedScore ? (
                <ChevronUp size={11} />
              ) : (
                <ChevronDown size={11} />
              )}
              Score breakdown
            </button>

            {expandedScore && (
              <div className="mt-2 space-y-1.5 p-2.5 rounded-xl bg-black/30 border border-white/[0.06]">
                {Object.entries(clip.score_breakdown).map(([label, value]) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-[9px] text-neutral-400 w-28 shrink-0 truncate">
                      {label}
                    </span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8763e5] to-[#d79de4]"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-neutral-300 w-6 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Retrim bar slider */}
        {isTrimming && (
          <ClipTrimBar
            origStart={clip.start_time}
            origEnd={clip.end_time}
            loading={trimLoading}
            onApply={onApplyTrim}
            onCancel={onCancelTrim}
          />
        )}

        {/* Card actions */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
          <span className="text-[10px] text-neutral-500 font-mono">
            {clip.start_time.toFixed(0)}s–{clip.end_time.toFixed(0)}s
          </span>
          <div className="flex items-center gap-1.5">
            {clip.url && (
              <>
                <button
                  type="button"
                  title="Copy public URL"
                  onClick={() => onCopyUrl(clip.url!)}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition cursor-pointer"
                >
                  {copiedUrl === clip.url ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
                <a
                  href={clip.url}
                  download={`short_${cIdx + 1}.mp4`}
                  target="_blank"
                  rel="noreferrer"
                  title="Download video"
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition"
                >
                  <Download size={13} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </BorderGlow>
  );
}

function ScoreComparisonPanel({
  clips,
  onSelectClip,
}: {
  clips: any[];
  onSelectClip: (clipIndex: number) => void;
}) {
  if (!clips || clips.length === 0) return null;

  const maxScore = Math.max(...clips.map((c) => c.score || 0), 1);
  const sorted = [...clips].sort((a, b) => (b.score || 0) - (a.score || 0));

  return (
    <div className="sticky top-0 z-40 mb-5 rounded-xl bg-[#120F17]/95 backdrop-blur-md border border-white/10 px-4 py-3 shadow-lg">
      <div className="text-[10px] tracking-wider uppercase font-semibold text-neutral-400 mb-2.5">
        Compare Candidates
      </div>
      <div className="space-y-1.5">
        {sorted.map((clip) => (
          <button
            key={clip.clip_index}
            type="button"
            onClick={() => onSelectClip(clip.clip_index)}
            className="w-full flex items-center gap-3 group/row text-left cursor-pointer"
          >
            <span className="text-[10px] font-mono text-neutral-400 w-10 shrink-0">
              #{clip.clip_index + 1}
            </span>
            <div className="flex-1 h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#8763e5] to-[#d79de4] group-hover/row:brightness-110 transition"
                style={{ width: `${(clip.score / maxScore) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-white w-6 text-right shrink-0">
              {clip.score}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ShortsStudioView() {
  // Mode toggle: upload vs existing
  const [sourceMode, setSourceMode] = useState<"upload" | "generated">("upload");

  // Upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Existing generated video selection
  const [userVideos, setUserVideos] = useState<UserVideo[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");
  const [selectedSessionId, setSelectedSessionId] = useState<string>("");
  const [searchVideoQuery, setSearchVideoQuery] = useState("");

  // Options
  const [numClips, setNumClips] = useState(3);

  // Generation & polling state
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [jobStatus, setJobStatus] = useState<ShortsJobStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  // History & active video modal
  const [historyJobs, setHistoryJobs] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [expandedScoreIdx, setExpandedScoreIdx] = useState<number | null>(null);
  const [copiedCaptionIdx, setCopiedCaptionIdx] = useState<number | null>(null);
  const [trimmingIdx, setTrimmingIdx] = useState<number | null>(null);
  const [trimLoading, setTrimLoading] = useState<boolean>(false);
  const [selectMode, setSelectMode] = useState<boolean>(false);
  const [selectedClips, setSelectedClips] = useState<Set<number>>(new Set());
  const [batchLoading, setBatchLoading] = useState<boolean>(false);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [highlightedClip, setHighlightedClip] = useState<number | null>(null);

  const scrollToClip = (clipIndex: number) => {
    const el = cardRefs.current[clipIndex];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setHighlightedClip(clipIndex);
    setTimeout(() => setHighlightedClip(null), 1200);
  };

  const toggleClipSelected = (clipIndex: number) => {
    setSelectedClips((prev) => {
      const next = new Set(prev);
      next.has(clipIndex) ? next.delete(clipIndex) : next.add(clipIndex);
      return next;
    });
  };

  const batchRegenerate = async () => {
    if (!jobStatus?.job_id || selectedClips.size === 0) return;
    setBatchLoading(true);
    try {
      const data = await batchRegenerateShortClips(jobStatus.job_id, Array.from(selectedClips));
      if (data && data.clips) {
        setJobStatus((prev) => {
          if (!prev || !prev.shorts) return prev;
          const newClipsMap = new Map(data.clips.map((c: ShortClip) => [c.clip_index, c]));
          const updatedShorts = prev.shorts.map((c) => newClipsMap.get(c.clip_index) || c);
          return { ...prev, shorts: updatedShorts };
        });
        if (data.failed && Object.keys(data.failed).length > 0) {
          console.warn("Some clips failed to regenerate:", data.failed);
        }
        setSelectedClips(new Set());
        setSelectMode(false);
      }
    } catch (err: any) {
      console.error("Batch regenerate error:", err);
      const msg = err.response?.data?.detail || err.message || "Failed to batch regenerate clips.";
      setGeneralError(msg);
    } finally {
      setBatchLoading(false);
    }
  };

  const applyTrim = async (cIdx: number, clip: ShortClip, newStart: number, newEnd: number) => {
    if (!jobStatus?.job_id) return;
    setTrimLoading(true);
    try {
      const res = await retrimShortClip(jobStatus.job_id, clip.clip_index, newStart, newEnd);
      if (res && res.clip) {
        setJobStatus((prev) => {
          if (!prev || !prev.shorts) return prev;
          const updatedShorts = prev.shorts.map((c) =>
            c.clip_index === clip.clip_index ? res.clip : c
          );
          return { ...prev, shorts: updatedShorts };
        });
        setTrimmingIdx(null);
      }
    } catch (err: any) {
      console.error("Retrim error:", err);
      const msg = err.response?.data?.detail || err.message || "Failed to retrim clip.";
      setGeneralError(msg);
    } finally {
      setTrimLoading(false);
    }
  };

  const copyCaption = (clip: any, idx: number) => {
    const text = [clip.social_caption, ...(clip.hashtags || [])].filter(Boolean).join(" ");
    navigator.clipboard.writeText(text);
    setCopiedCaptionIdx(idx);
    setTimeout(() => setCopiedCaptionIdx(null), 1500);
  };

  // Load user videos on mount or when mode switches
  useEffect(() => {
    async function loadUserVideos() {
      setLoadingVideos(true);
      try {
        const res = await getUserVideosForShorts();
        setUserVideos(res.videos || []);
        if (res.videos?.length > 0 && !selectedVideoUrl) {
          setSelectedVideoUrl(res.videos[0].video_url);
          setSelectedSessionId(res.videos[0].session_id);
        }
      } catch (err) {
        console.error("Failed to load user videos:", err);
      } finally {
        setLoadingVideos(false);
      }
    }

    async function loadHistory() {
      setLoadingHistory(true);
      try {
        const res = await getShortsHistory();
        setHistoryJobs(res.history || []);
      } catch (err) {
        console.error("Failed to load history:", err);
      } finally {
        setLoadingHistory(false);
      }
    }

    loadUserVideos();
    loadHistory();
  }, []);

  // Poll active job status
  useEffect(() => {
    if (!activeJobId) return;

    const interval = setInterval(async () => {
      try {
        const status = await getShortsStatus(activeJobId);
        setJobStatus(status);

        if (status.status === "completed" || status.status === "failed") {
          clearInterval(interval);
          setIsSubmitting(false);
          // Refresh history
          const res = await getShortsHistory();
          setHistoryJobs(res.history || []);
        }
      } catch (e) {
        console.error("Failed to poll shorts status:", e);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [activeJobId]);

  // Drag & drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
        setGeneralError(null);
      } else {
        setGeneralError("Please select a valid video file (MP4, MOV, WebM).");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setGeneralError(null);
    }
  };

  // Submit trigger
  const handleStartGeneration = async () => {
    setGeneralError(null);

    if (sourceMode === "upload" && !selectedFile) {
      setGeneralError("Please select or drop a source video file first.");
      return;
    }

    if (sourceMode === "generated" && !selectedVideoUrl) {
      setGeneralError("Please choose one of your generated videos from the list.");
      return;
    }

    setIsSubmitting(true);
    setJobStatus(null);

    try {
      let payload: any;

      if (sourceMode === "upload" && selectedFile) {
        const formData = new FormData();
        formData.append("videoFile", selectedFile);
        formData.append("num_clips", numClips.toString());
        payload = formData;
      } else {
        payload = {
          source_video_url: selectedVideoUrl,
          session_id: selectedSessionId,
          num_clips: numClips,
        };
      }

      const res = await generateShorts(payload);
      if (res.job_id) {
        setActiveJobId(res.job_id);
        setJobStatus({
          job_id: res.job_id,
          status: "processing",
          progress: "transcribing",
          stages: {
            transcribed: false,
            highlighted: false,
            cropped: false,
            captioned: false,
          },
          candidates: [],
          selected: [],
          shorts: [],
          errors: [],
        });
      }
    } catch (err: any) {
      console.error("Shorts generation trigger error:", err);
      const msg = err.response?.data?.detail || err.message || "Failed to start shorts generation.";
      setGeneralError(msg);
      setIsSubmitting(false);
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filteredUserVideos = userVideos.filter(v =>
    v.title.toLowerCase().includes(searchVideoQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* ── SECTION 1: GENERATE SHORTS INPUT CARD ── */}
      <div className="p-6 md:p-8 rounded-3xl bg-[#120F17] border border-white/[0.08] shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8763e5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8763e5] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  AI SHORTS GENERATOR
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#8763e5]/20 text-[#a78bfa] text-[10px] font-bold">
                  9:16 Viral Cuts
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Convert Long-Form Video into High-Impact Shorts
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 mt-1">
                Transcribes speech, finds virality peaks with Groq 70B, reframes to vertical, and burns captions automatically.
              </p>
            </div>

            {/* Source Mode Segmented Pill */}
            <div className="inline-flex p-1 rounded-full bg-white/[0.05] border border-white/[0.08] self-start sm:self-center shrink-0">
              <button
                type="button"
                onClick={() => { setSourceMode("upload"); setGeneralError(null); }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  sourceMode === "upload"
                    ? "bg-[#8763e5] text-white shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Upload Video
              </button>
              <button
                type="button"
                onClick={() => { setSourceMode("generated"); setGeneralError(null); }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  sourceMode === "generated"
                    ? "bg-[#8763e5] text-white shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Use Generated Video
              </button>
            </div>
          </div>

          {/* Conditional Input Field */}
          {sourceMode === "upload" ? (
            /* Upload Drag & Drop Area */
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[170px] ${
                dragActive
                  ? "border-[#8763e5] bg-[#8763e5]/10"
                  : selectedFile
                  ? "border-emerald-500/50 bg-emerald-500/5"
                  : "border-white/[0.12] bg-white/[0.02] hover:border-white/[0.25] hover:bg-white/[0.04]"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/quicktime,video/webm"
                onChange={handleFileChange}
                className="hidden"
              />

              {selectedFile ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="text-white font-semibold text-sm max-w-md truncate">
                    {selectedFile.name}
                  </div>
                  <div className="text-neutral-400 text-xs font-mono">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to transcribe
                  </div>
                  <span className="text-[11px] text-[#8763e5] underline mt-1">
                    Click or drag to change file
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/[0.05] text-[#8763e5] flex items-center justify-center">
                    <UploadCloud size={24} />
                  </div>
                  <div className="text-white font-medium text-sm">
                    Drag and drop your long-form video here, or <span className="text-[#8763e5] underline font-semibold">browse files</span>
                  </div>
                  <div className="text-neutral-500 text-xs">
                    Supports MP4, MOV, WebM (up to 500MB)
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Use Generated Video Dropdown / Picker */
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-300">
                  Select from your ContentForge Video Library
                </label>
                {userVideos.length > 0 && (
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {userVideos.length} available
                  </span>
                )}
              </div>

              {loadingVideos ? (
                <div className="p-8 border border-white/[0.08] rounded-2xl bg-white/[0.02] flex items-center justify-center gap-3 text-neutral-400 text-xs">
                  <RefreshCw size={16} className="animate-spin text-[#8763e5]" />
                  Loading your generated videos...
                </div>
              ) : userVideos.length === 0 ? (
                <div className="p-6 border border-white/[0.08] rounded-2xl bg-white/[0.02] text-center space-y-2">
                  <Film size={28} className="text-neutral-600 mx-auto" />
                  <div className="text-sm font-semibold text-neutral-300">No generated videos found</div>
                  <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                    You haven't generated any videos yet in ContentForge. Use the "Upload video" option above or create a video first.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Search by topic or campaign..."
                    value={searchVideoQuery}
                    onChange={(e) => setSearchVideoQuery(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#8763e5]"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-56 overflow-y-auto pr-1">
                    {filteredUserVideos.map((vid) => {
                      const isSelected = selectedVideoUrl === vid.video_url;
                      return (
                        <div
                          key={vid.session_id}
                          onClick={() => {
                            setSelectedVideoUrl(vid.video_url);
                            setSelectedSessionId(vid.session_id);
                          }}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#8763e5] bg-[#8763e5]/15 shadow-sm"
                              : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="text-xs font-semibold text-white line-clamp-1">
                              {vid.title}
                            </div>
                            {isSelected && <CheckCircle2 size={14} className="text-[#8763e5] shrink-0" />}
                          </div>
                          <div className="text-[10px] text-neutral-500 mt-1 font-mono">
                            {vid.created_at ? new Date(vid.created_at).toLocaleDateString() : "Recent"}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Options Row & Generate Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/[0.06]">
            <div className="flex items-center gap-6">
              {/* Number of Clips Stepper */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-400 font-medium">Clips to produce:</span>
                <div className="flex items-center border border-white/[0.12] rounded-full bg-white/[0.03] px-2 py-1">
                  <button
                    type="button"
                    disabled={numClips <= 1}
                    onClick={() => setNumClips(Math.max(1, numClips - 1))}
                    className="w-6 h-6 rounded-full text-white text-xs hover:bg-white/10 disabled:opacity-30 transition"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-white font-mono">
                    {numClips}
                  </span>
                  <button
                    type="button"
                    disabled={numClips >= 5}
                    onClick={() => setNumClips(Math.min(5, numClips + 1))}
                    className="w-6 h-6 rounded-full text-white text-xs hover:bg-white/10 disabled:opacity-30 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Aspect Ratio Badge */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400">
                <span>Ratio:</span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white font-mono text-[11px]">
                  9:16 Vertical
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleStartGeneration}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#8763e5] hover:bg-[#7853d9] disabled:opacity-60 text-white font-semibold text-sm transition shadow-lg shadow-[#8763e5]/25 shrink-0 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Processing Video...</span>
                </>
              ) : (
                <>
                  <Scissors size={16} />
                  <span>Generate Shorts</span>
                </>
              )}
            </button>
          </div>

          {/* Error display */}
          {generalError && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{generalError}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── SECTION 2: LIVE STATUS & PROGRESS CARD ── */}
      {jobStatus && (
        <div className="p-6 md:p-8 rounded-3xl bg-[#120F17] border border-white/[0.08] shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#8763e5]/20 text-[#a78bfa] flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Shorts Pipeline Execution
                </h3>
                <div className="text-xs text-neutral-400 font-mono">
                  Job ID: {jobStatus.job_id.slice(0, 8)}... • Status:{" "}
                  <span className={jobStatus.status === "completed" ? "text-emerald-400 font-bold" : jobStatus.status === "failed" ? "text-red-400 font-bold" : "text-amber-400 font-bold"}>
                    {jobStatus.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Live indicator */}
            {jobStatus.status === "processing" && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>Running: {jobStatus.progress || "processing"}</span>
              </div>
            )}
            {jobStatus.status === "completed" && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                <CheckCheck size={14} />
                <span>All stages finished</span>
              </div>
            )}
          </div>

          {/* Job execution errors display */}
          {jobStatus.status === "failed" && jobStatus.errors && jobStatus.errors.length > 0 && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <div>
                <span className="font-semibold">Pipeline Execution Issue:</span>
                <p className="mt-0.5 opacity-90">{jobStatus.errors.join("; ")}</p>
              </div>
            </div>
          )}

          {/* Progressive Stage Checkmarks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { key: "transcribed", label: "Transcribed", desc: "Whisper speech-to-text" },
              { key: "highlighted", label: "Highlighted", desc: "Groq virality scoring" },
              { key: "cropped", label: "Cropped", desc: "9:16 static center-crop" },
              { key: "captioned", label: "Captioned", desc: "Timed typography overlay" },
            ].map((stage, idx) => {
              const isDone = jobStatus.stages?.[stage.key as keyof typeof jobStatus.stages];
              const isCurrent = jobStatus.status === "processing" && !isDone && (
                (idx === 0 && !jobStatus.stages.transcribed) ||
                (idx === 1 && jobStatus.stages.transcribed && !jobStatus.stages.highlighted) ||
                (idx === 2 && jobStatus.stages.highlighted && !jobStatus.stages.cropped) ||
                (idx === 3 && jobStatus.stages.cropped && !jobStatus.stages.captioned)
              );

              return (
                <div
                  key={stage.key}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isDone
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : isCurrent
                      ? "border-[#8763e5]/60 bg-[#8763e5]/10 text-white"
                      : "border-white/[0.06] bg-white/[0.02] text-neutral-500"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono">
                      0{idx + 1}. {stage.label}
                    </span>
                    {isDone ? (
                      <CheckCircle2 size={15} className="text-emerald-400" />
                    ) : isCurrent ? (
                      <RefreshCw size={14} className="animate-spin text-[#8763e5]" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full border border-neutral-600 block" />
                    )}
                  </div>
                  <div className="text-[10px] opacity-75">{stage.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Candidate clips results grid */}
          {jobStatus.shorts && jobStatus.shorts.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <ScoreComparisonPanel clips={jobStatus.shorts} onSelectClip={scrollToClip} />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Generated Short Candidates ({jobStatus.shorts.length})
                  </h4>
                  <button
                    type="button"
                    onClick={() => { setSelectMode(!selectMode); setSelectedClips(new Set()); }}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-semibold border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition cursor-pointer"
                  >
                    {selectMode ? "Cancel" : "Select clips"}
                  </button>
                </div>
                <span className="text-xs text-[#8763e5] font-semibold">
                  Ranked by Virality Score
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {jobStatus.shorts.map((clip, cIdx) => (
                  <div
                    key={cIdx}
                    ref={(el) => { cardRefs.current[clip.clip_index] = el; }}
                    className={`rounded-[24px] transition-shadow duration-500 ${
                      highlightedClip === clip.clip_index ? "ring-2 ring-[#8763e5] ring-offset-2 ring-offset-[#0a0810]" : ""
                    }`}
                  >
                    <ShortCandidateCard
                      clip={clip}
                      cIdx={cIdx}
                      selectMode={selectMode}
                      isSelected={selectedClips.has(clip.clip_index)}
                      onToggleSelect={toggleClipSelected}
                      isTrimming={trimmingIdx === cIdx}
                      trimLoading={trimLoading}
                      onToggleTrim={() => setTrimmingIdx(trimmingIdx === cIdx ? null : cIdx)}
                      onApplyTrim={(s, e) => applyTrim(cIdx, clip, s, e)}
                      onCancelTrim={() => setTrimmingIdx(null)}
                      expandedScore={expandedScoreIdx === cIdx}
                      onToggleScore={() => setExpandedScoreIdx(expandedScoreIdx === cIdx ? null : cIdx)}
                      copiedCaption={copiedCaptionIdx === cIdx}
                      onCopyCaption={() => copyCaption(clip, cIdx)}
                      copiedUrl={copiedUrl}
                      onCopyUrl={copyUrl}
                    />
                  </div>
                ))}
              </div>
              {selectMode && selectedClips.size > 0 && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#181520] border border-white/10 shadow-2xl">
                  <span className="text-xs text-neutral-300 font-mono">{selectedClips.size} selected</span>
                  <button
                    type="button"
                    onClick={batchRegenerate}
                    disabled={batchLoading}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#8763e5] hover:bg-[#7654d4] disabled:opacity-40 text-white transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw size={12} className={batchLoading ? "animate-spin" : ""} />
                    {batchLoading ? "Regenerating..." : "Regenerate selected"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── SECTION 3: RECENT SHORTS PACKAGES HISTORY ── */}
      {historyJobs.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Previously Generated Shorts
            </h3>
            <span className="text-xs text-neutral-500 font-mono">
              {historyJobs.length} past runs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {historyJobs.map((item, idx) => {
              const shortsList: ShortClip[] = item.shorts || [];
              const firstShort = shortsList[0];
              const dateStr = item.created_at ? new Date(item.created_at).toLocaleDateString() : "Recent";

              return (
                <div
                  key={item.job_id || idx}
                  className="p-5 rounded-2xl bg-[#120F17] border border-white/[0.06] flex flex-col justify-between gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#8763e5]">
                        Package • {dateStr}
                      </div>
                      <div className="text-xs font-bold text-white mt-1">
                        {shortsList.length} Vertical Short Clips
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                      Completed
                    </span>
                  </div>

                  {/* Thumbnail / First clip hook */}
                  {firstShort && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-neutral-300 line-clamp-2 italic">
                        "{firstShort.hook_sentence}"
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-amber-300 font-mono flex items-center gap-1">
                          <Flame size={11} /> Top Score: {firstShort.score}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {firstShort.duration}s
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setJobStatus({
                          job_id: item.job_id,
                          status: "completed",
                          stages: { transcribed: true, highlighted: true, cropped: true, captioned: true },
                          shorts: shortsList,
                          candidates: item.candidates,
                        });
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className="text-xs text-[#8763e5] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All {shortsList.length} Clips</span>
                      <ChevronDown size={13} />
                    </button>
                    {firstShort?.url && (
                      <a
                        href={firstShort.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-neutral-400 hover:text-white flex items-center gap-1"
                      >
                        <ExternalLink size={12} />
                        <span>Watch</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

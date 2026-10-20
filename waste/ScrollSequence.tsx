"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 480;

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isVisibleRef = useRef(true);
  const rafIdRef = useRef<number | null>(null);

  // Preload images progressively
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const step = 2; // Step load first for instant responsiveness
    for (let i = 1; i <= FRAME_COUNT; i += step) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(4, "0");
      img.src = `/frames/${paddedIndex}.jpg`;
      loadedImages[i - 1] = img;
    }
    // Fill in remaining frames asynchronously
    setTimeout(() => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        if (!loadedImages[i - 1]) {
          const img = new Image();
          const paddedIndex = i.toString().padStart(4, "0");
          img.src = `/frames/${paddedIndex}.jpg`;
          loadedImages[i - 1] = img;
        }
      }
    }, 100);
    setImages(loadedImages);
  }, []);

  // Viewport intersection observer to pause rendering when offscreen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    io.observe(container);
    return () => io.disconnect();
  }, []);

  const drawFrame = (index: number) => {
    if (!isVisibleRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let targetImg = images[index];
    if (!targetImg || !targetImg.complete) {
      // Fallback to nearest loaded image
      for (let offset = 1; offset < 10; offset++) {
        if (images[index - offset]?.complete) {
          targetImg = images[index - offset];
          break;
        } else if (images[index + offset]?.complete) {
          targetImg = images[index + offset];
          break;
        }
      }
    }

    if (targetImg && targetImg.complete && targetImg.naturalWidth !== 0) {
      const hRatio = canvas.width / targetImg.width;
      const vRatio = canvas.height / targetImg.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - targetImg.width * ratio) / 2;
      const centerShift_y = (canvas.height - targetImg.height * ratio) / 2;

      ctx.drawImage(
        targetImg,
        0,
        0,
        targetImg.width,
        targetImg.height,
        centerShift_x,
        centerShift_y,
        targetImg.width * ratio,
        targetImg.height * ratio
      );
    }
  };

  // Draw initial frame once loaded
  useEffect(() => {
    if (images.length > 0 && images[0]) {
      images[0].onload = () => drawFrame(0);
    }
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isVisibleRef.current) return;
    if (rafIdRef.current !== null) return;

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      let frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
      if (frameIndex < 0) frameIndex = 0;
      if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;
      drawFrame(frameIndex);
    });
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentProgress = scrollYProgress.get();
        let frameIndex = Math.floor(currentProgress * (FRAME_COUNT - 1));
        drawFrame(frameIndex);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover [will-change:transform]"
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
        />
      </div>
    </div>
  );
}

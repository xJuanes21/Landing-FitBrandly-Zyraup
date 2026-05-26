"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

export default function MockupSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.pause() : v.play();
    setPlaying(!playing);
  };

  const toggleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      if (v.requestFullscreen) {
        v.requestFullscreen().catch(() => {});
      } else if ((v as any).webkitEnterFullscreen) {
        (v as any).webkitEnterFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setProgress((v.currentTime / v.duration) * 100 || 0);
    setCurrentTime(formatTime(v.currentTime));
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setDuration(formatTime(v.duration));
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col items-center gap-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter"
            >
              Nuestra Plataforma{" "}
              <span className="gradient-text">En Acción</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 max-w-2xl mx-auto"
            >
              Mira cómo FitBrandly simplifica la gestión de tu negocio y mejora
              la experiencia de tus alumnos.
            </motion.p>
          </div>

          {/* PC Monitor Mockup */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center w-full max-w-4xl mx-auto"
            style={{ perspective: "1200px" }}
          >
            {/* Floating 3D wrapper */}
            <div
              className="w-full"
              style={{
                transform: "rotateX(2deg) rotateY(-3deg)",
                animation: "floatY 4s ease-in-out infinite",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Monitor outer shell — aluminum body */}
              <div
                className="relative w-full rounded-2xl p-2.5"
                style={{
                  background:
                    "linear-gradient(160deg, #d8d8d8 0%, #b0b0b0 60%, #909090 100%)",
                  boxShadow:
                    "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.45)",
                }}
              >
                {/* Monitor inner bezel — black */}
                <div
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{ background: "#111" }}
                >
                  {/* Webcam */}
                  <div className="flex justify-center py-2">
                    <div
                      className="w-2 h-2 rounded-full border border-[#333]"
                      style={{ background: "#1a1a1a" }}
                    >
                      <div
                        className="w-1 h-1 rounded-full m-auto mt-0.5"
                        style={{ background: "#1a3a5c" }}
                      />
                    </div>
                  </div>

                  {/* Screen */}
                  <div
                    className="relative mx-2 mb-2 rounded-lg overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]/50"
                    style={{ aspectRatio: "16/9" }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.code === "Space") {
                        e.preventDefault();
                        togglePlay();
                      }
                    }}
                  >
                    {/* Video */}
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={togglePlay}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      onEnded={() => setPlaying(false)}
                      playsInline
                      loop
                    >
                      <source src="/video-1.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay: play button (shown when paused) */}
                    {!playing && (
                      <button
                        onClick={togglePlay}
                        aria-label="Reproducir video"
                        className="absolute inset-0 flex flex-col items-center justify-center group"
                        style={{ background: "rgba(0,0,0,0.45)" }}
                      >
                        {/* Demo badge */}
                        <span
                          className="absolute top-3 left-3 text-[11px] font-mono tracking-widest px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(0,229,255,0.12)",
                            border: "1px solid rgba(0,229,255,0.25)",
                            color: "rgba(0,229,255,0.75)",
                          }}
                        >
                          ● DEMO
                        </span>

                        {/* Play ring */}
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                          style={{
                            border: "2px solid rgba(0,229,255,0.5)",
                            background: "rgba(0,229,255,0.1)",
                          }}
                        >
                          {/* Play triangle */}
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#00E5FF"
                            className="ml-1"
                          >
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </div>

                        {/* File label */}
                        <span
                          className="mt-3 text-xs font-mono tracking-wider"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          fitbrandly_platform.mp4
                        </span>
                      </button>
                    )}

                    {/* Player controls bar (always visible at bottom) */}
                    <div
                      className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-6"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                      }}
                    >
                      {/* Progress bar */}
                      <div
                        className="w-full h-[3px] rounded-full mb-2 cursor-pointer overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                        onClick={handleProgressClick}
                      >
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${progress}%`,
                            background: "rgba(0,229,255,0.7)",
                          }}
                        />
                      </div>

                      {/* Controls row */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlay}
                          aria-label={playing ? "Pausar" : "Reproducir"}
                          className="text-[#00E5FF] hover:text-[#00E5FF] drop-shadow-[0_0_5px_rgba(0,229,255,0.5)] transition-colors"
                        >
                          {playing ? (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <rect x="5" y="3" width="4" height="18" rx="1" />
                              <rect x="15" y="3" width="4" height="18" rx="1" />
                            </svg>
                          ) : (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <polygon points="5,3 19,12 5,21" />
                            </svg>
                          )}
                        </button>

                        {/* Volume icon */}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="rgba(255,255,255,0.45)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
                          <path d="M15.54,8.46a5,5,0,0,1,0,7.07" />
                          <path d="M19.07,4.93a10,10,0,0,1,0,14.14" />
                        </svg>

                        {/* Timecode */}
                        <span
                          className="text-[10px] font-mono ml-auto"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                        >
                          {currentTime} / {duration}
                        </span>

                        {/* Fullscreen icon */}
                        <button
                          onClick={toggleFullscreen}
                          aria-label="Pantalla completa"
                          className="hover:scale-110 transition-transform text-white/40 hover:text-white"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <polyline points="15,3 21,3 21,9" />
                            <polyline points="9,21 3,21 3,15" />
                            <line x1="21" y1="3" x2="14" y2="10" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Scanline texture overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
                      }}
                    />

                    {/* Glass reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
                      }}
                    />
                  </div>

                  {/* Status bar below screen */}
                  <div
                    className="flex items-center justify-between px-4 py-1.5 mx-2 mb-2 rounded-md"
                    style={{ background: "#0f0f0f" }}
                  >
                    <div className="flex gap-1.5 items-center">
                      {/* Active LED */}
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: "#00c170",
                          boxShadow: "0 0 6px #00c170",
                          animation: "pulseLed 2s ease-in-out infinite",
                        }}
                      />
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#2a2a2a" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#2a2a2a" }}
                      />
                    </div>
                    <span
                      className="w-1.5 h-1.5 rounded-full border"
                      style={{ background: "#1a1a1a", borderColor: "#333" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Neck */}
            <div
              className="w-14 h-7 rounded-b-lg"
              style={{
                background: "linear-gradient(to bottom, #a0a0a0, #888)",
              }}
            />

            {/* Base */}
            <div
              className="w-40 h-3 rounded-b-xl"
              style={{
                background: "linear-gradient(to bottom, #c0c0c0, #a0a0a0)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
            />

            {/* Floor glow */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full pointer-events-none"
              style={{
                background: "rgba(0,229,255,0.08)",
                filter: "blur(50px)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0); }
          50% { transform: rotateX(2deg) rotateY(-3deg) translateY(-8px); }
        }
        @keyframes pulseLed {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}

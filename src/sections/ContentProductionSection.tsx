"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";

// ── helpers ──────────────────────────────────────────────────────────
function VideoBlock16x9({ index, videoId }: { index: number; videoId?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const newState = !isPlaying;
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: newState ? 'playVideo' : 'pauseVideo' }),
      '*'
    );
    setIsPlaying(newState);
  };

  const toggleMute = () => {
    const newState = !isMuted;
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: newState ? 'mute' : 'unMute' }),
      '*'
    );
    setIsMuted(newState);
  };

  const replayVideo = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }),
      '*'
    );
    if (!isPlaying) {
      setIsPlaying(true);
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo' }),
        '*'
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="relative aspect-video rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all overflow-hidden"
    >
      {videoId ? (
        <>
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1&playsinline=1&fs=0&disablekb=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`Video ${index}`}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); replayVideo(); }}
              className="p-4 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors pointer-events-auto shadow-xl"
            >
              <RotateCcw size={28} />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="p-2 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="p-2 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </>
      ) : (
        <span className="text-[#7a8c7f]/40 font-heading font-bold text-sm uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
          16:9 — {String(index + 1).padStart(2, "0")}
        </span>
      )}
    </motion.div>
  );
}

function VideoBlock9x16({ index, videoId }: { index: number; videoId?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const newState = !isPlaying;
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: newState ? 'playVideo' : 'pauseVideo' }),
      '*'
    );
    setIsPlaying(newState);
  };

  const toggleMute = () => {
    const newState = !isMuted;
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: newState ? 'mute' : 'unMute' }),
      '*'
    );
    setIsMuted(newState);
  };

  const replayVideo = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'seekTo', args: [0, true] }),
      '*'
    );
    if (!isPlaying) {
      setIsPlaying(true);
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo' }),
        '*'
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="relative aspect-[9/16] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[180px] md:w-[220px] h-auto overflow-hidden"
    >
      {videoId ? (
        <>
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1&playsinline=1&fs=0&disablekb=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`Video 9:16 ${index}`}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); replayVideo(); }}
              className="p-3 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors pointer-events-auto shadow-xl"
            >
              <RotateCcw size={20} />
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="p-1.5 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="p-1.5 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>
        </>
      ) : (
        <span className="text-[#7a8c7f]/40 font-heading font-bold text-xs uppercase tracking-widest writing-mode-vertical group-hover:text-[#7a8c7f]/70 transition-colors">
          9:16 — {String(index + 1).padStart(2, "0")}
        </span>
      )}
    </motion.div>
  );
}

function PhotoBlock({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="aspect-[4/5] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[220px] md:w-[280px]"
    >
      <span className="text-[#7a8c7f]/40 font-heading font-bold text-xs uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
        PHOTO — {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

function TagCard({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group px-6 py-5 rounded-xl border border-white/5 bg-[#0e1a14] hover:border-[#c6ff2e]/25 hover:bg-[#111c16] transition-all text-center cursor-default"
    >
      <span className="font-heading font-semibold text-sm md:text-base text-[#f0f4f0]/80 group-hover:text-[#c6ff2e] transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-5"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-[#c6ff2e]/30 to-transparent max-w-[40px]" />
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c6ff2e]">{label}</span>
    </motion.div>
  );
}

function SubSectionHeading({ text }: { text: string }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-[#f0f4f0] mb-10"
    >
      {text}
    </motion.h3>
  );
}

function HScrollCarousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
      <div
        className="flex gap-5 overflow-x-auto px-6 md:px-12 lg:px-24 pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  );
}

// ── main component ────────────────────────────────────────────────────
export function ContentProductionSection() {
  const video169Tags = ["Cinematic Brand Films", "Office Walkthroughs", "TVCs / Digital Commercials", "Vision Films", "Launch Films"];
  const perfAdsSubTags = ["Meta", "Google", "YouTube"];
  const video916Tags = ["CGI", "Long Form", "Short Form", "3D Product Renders"];
  const ugcTags = ["Testimonial Type", "POV Storytelling", "Product Demos / Reviews", "Explainer Videos"];
  const storyTags = ["Narrative Led Videos"];
  const photoTags = ["Multi-Angle Product Capture", "Product Photography", "Lifestyle Product Shoots", "Fashion Lookbooks", "International Location Simulation", "Thumbnails", "A+ Content Layouts", "E-Commerce Catalog Shoots", "Campaign Key Visuals"];

  return (
    <section id="content-production" className="relative py-28 md:py-36 bg-[#080f0c] border-t border-white/5 overflow-hidden">
      
      {/* Ambient */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#c6ff2e]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block">Production</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight text-[#f0f4f0] leading-none">
            Content<br /><span className="text-[#c6ff2e]">Production</span>
          </h2>
        </motion.div>

        {/* ── VIDEOGRAPHY ── */}
        <div className="mb-24 flex flex-col gap-12">
          <SubSectionHeading text="Videography" />

          {/* 16:9 Tags */}
          <div>
            <SectionLabel label="Video [16:9]" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
              {video169Tags.map((t, i) => <TagCard key={i} label={t} />)}
            </div>
            <div className="flex gap-3 flex-wrap mt-3">
              <span className="text-xs text-[#7a8c7f] uppercase tracking-widest font-bold self-center">Performance Ads →</span>
              {perfAdsSubTags.map((t, i) => (
                <span key={i} className="text-xs px-4 py-2 rounded-full border border-[#c6ff2e]/15 text-[#c6ff2e]/80 font-bold tracking-wider uppercase">{t}</span>
              ))}
            </div>
            {/* 4 video blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {[
                "GhKGV3uL7zI",
                "DaPjh0R_oJw",
                "EKXqvlhc15g",
                "8338zXbTfm8"
              ].map((id, i) => <VideoBlock16x9 key={i} index={i} videoId={id} />)}
            </div>
          </div>

          {/* 9:16 Tags + Carousel */}
          <div>
            <SectionLabel label="Video [9:16]" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {video916Tags.map((t, i) => <TagCard key={i} label={t} />)}
            </div>
          </div>
        </div>
      </div>

      {/* 9:16 Carousel */}
      <HScrollCarousel>
        {[
          "DMFj5Jqsk5A",
          "ouzaMC64xXE",
          "nnXTkPCJA48",
          "ObMVYil5qpU",
          "K0aVlEFYwXc"
        ].map((id, i) => <VideoBlock9x16 key={i} index={i} videoId={id} />)}
      </HScrollCarousel>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">

        {/* ── UGC ── */}
        <div className="mt-24 mb-24 flex flex-col gap-10">
          <SubSectionHeading text="UGC Style Videos" />
          <div>
            <SectionLabel label="Video [9:16]" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {ugcTags.map((t, i) => <TagCard key={i} label={t} />)}
            </div>
          </div>
        </div>
      </div>

      {/* UGC Carousel */}
      <HScrollCarousel>
        {[
          "170oO5IK2Fo",
          "bL9km87OIM4",
          "AKU_f8uszOk",
          "oThTuewpLQI",
          "VTAqbFHi2gY",
          "hS2hecmM9hY",
          "RNxMrdywx6k",
          "SnigkqTOfMo",
          "NUOmwKnHtxA",
          "-DavS3Ms2dw",
          "-xGG2N7mAAY",
          "rP7GWpduOxo",
          "kRLN9N1xb8k",
          "_qILgLGx3CM"
        ].map((id, i) => <VideoBlock9x16 key={i} index={i} videoId={id} />)}
      </HScrollCarousel>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Story Telling */}
        <div className="mt-20 mb-24">
          <SubSectionHeading text="Story Telling" />
          <SectionLabel label="Narrative" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {storyTags.map((t, i) => <TagCard key={i} label={t} />)}
          </div>
        </div>
      </div>

      <HScrollCarousel>
        {[
          "0Q9DC1EgbmY",
          "S5PnHTGTwkI",
          "v6NZuWlSHuc",
          "3asRz4tH3Y8"
        ].map((id, i) => <VideoBlock9x16 key={i} index={i} videoId={id} />)}
      </HScrollCarousel>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-10">
          <SubSectionHeading text="Photography" />
          <SectionLabel label="Photoshoot" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
            {photoTags.map((t, i) => <TagCard key={i} label={t} />)}
          </div>
        </div>
      </div>

      {/* Photo Carousel */}
      <HScrollCarousel>
        {[0,1,2,3,4,5,6,7].map(i => <PhotoBlock key={i} index={i} />)}
      </HScrollCarousel>

    </section>
  );
}

"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";

const modelCapabilities = [
  "Face consistency model training", "Skin tone precision", "Fashion style bank",
  "Expression library", "Hairstyle variations", "Script tone training",
  "Conversational personality system", "Platform-specific communication style",
  "International location simulation", "Luxury environments", "Studio-style campaigns",
  "Seasonal content", "Product placement visuals", "Reel-style transitions",
  "Lip-sync videos", "Trend participation",
];

const brandAdvantages = [
  "No celebrity fees", "No travel cost", "No shoot logistics",
  "No retake costs", "No controversies", "No scheduling issues",
  "No contract disputes", "Brand-safe messaging", "Same influencer",
  "Different languages", "Different regions", "Same brand consistency",
];

function VideoBlock9x16Compact({ index, videoId }: { index: number; videoId?: string }) {
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
    <div className="relative aspect-[9/16] bg-[#111c16] border border-white/5 rounded-xl flex items-center justify-center hover:border-[#c6ff2e]/20 transition-all overflow-hidden group">
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
              className="p-1.5 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors pointer-events-auto"
            >
              <RotateCcw size={14} />
            </button>
          </div>
          <div className="absolute bottom-1 right-1 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="p-1 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md"
            >
              {isPlaying ? <Pause size={10} /> : <Play size={10} />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="p-1 rounded-full bg-[#080f0c]/60 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md"
            >
              {isMuted ? <VolumeX size={10} /> : <Volume2 size={10} />}
            </button>
          </div>
        </>
      ) : (
        <span className="text-[8px] text-[#7a8c7f]/40 font-bold uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">REEL</span>
      )}
    </div>
  );
}

function ProfileCard({
  name, dob, age, city, height, zodiac, side, videoIds = []
}: {
  name: string; dob: string; age: string; city: string; height: string; zodiac: string; side?: "left" | "right"; videoIds?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-8 rounded-3xl border border-white/5 bg-[#0e1a14] p-8 md:p-10 overflow-hidden relative"
    >
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#c6ff2e] rounded-tr-3xl" />
      </div>

      {/* Avatar placeholder */}
      <div className="flex-shrink-0 w-full lg:w-52 aspect-[3/4] lg:aspect-auto lg:h-64 bg-[#111c16] border border-white/8 rounded-2xl flex items-center justify-center">
        <span className="font-heading font-black text-[#7a8c7f]/30 text-lg uppercase">{name}</span>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 justify-between gap-8">
        <div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#c6ff2e] uppercase mb-2 block">AI Influencer Profile</span>
          <h3 className="font-heading text-4xl md:text-5xl font-black uppercase text-[#f0f4f0] tracking-tight leading-none mb-6">
            {name}
          </h3>
          <div className="flex flex-wrap gap-3">
            {[dob, age, city, height, zodiac].map((stat, i) => (
              <span key={i} className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/8 text-[#7a8c7f] bg-white/3">{stat}</span>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#7a8c7f] uppercase">Content Grid</span>
          
          {/* Reels Grid */}
          <div className={`grid ${videoIds.length > 4 ? "grid-cols-4 sm:grid-cols-7" : "grid-cols-4"} gap-2`}>
            {videoIds.length > 0 ? (
              videoIds.map((id, i) => (
                <VideoBlock9x16Compact key={i} index={i} videoId={id} />
              ))
            ) : (
              [0,1,2,3].map(i => <VideoBlock9x16Compact key={i} index={i} />)
            )}
          </div>

          {/* 8 Photos */}
          <div className="grid grid-cols-8 gap-2">
            {[0,1,2,3,4,5,6,7].map(i => (
              <div key={i} className="aspect-square bg-[#111c16] border border-white/5 rounded-xl flex items-center justify-center hover:border-[#c6ff2e]/20 transition-colors group">
                <span className="text-[7px] text-[#7a8c7f]/40 font-bold uppercase tracking-widest group-hover:text-[#7a8c7f]/70">PHOTO</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ListCard({ label, variant = "dim" }: { label: string; variant?: "accent" | "dim" }) {
  return (
    <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border transition-colors group cursor-default ${
      variant === "accent"
        ? "border-[#c6ff2e]/10 bg-[#c6ff2e]/4 hover:border-[#c6ff2e]/30 hover:bg-[#c6ff2e]/8"
        : "border-white/5 bg-[#0e1a14] hover:border-white/10 hover:bg-[#111c16]"
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${variant === "accent" ? "bg-[#c6ff2e]" : "bg-[#7a8c7f]"}`} />
      <span className={`text-sm font-medium leading-snug ${variant === "accent" ? "text-[#c6ff2e]/90" : "text-[#f0f4f0]/70"}`}>
        {label}
      </span>
    </div>
  );
}

export function InfluencerTeaseSection() {
  return (
    <section id="influencer-tease" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#080f0c] border-t border-white/5 overflow-hidden">

      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#c6ff2e]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto flex flex-col gap-20">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block">AI Influencers</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight text-[#f0f4f0] leading-none">
            NAWF's<br/><span className="text-[#c6ff2e]">Influencer Tease</span>
          </h2>
        </motion.div>

        {/* Profile Cards */}
        <ProfileCard 
          name="AIRA" 
          dob="January 01, 1998" 
          age="26 yrs" 
          city="Mumbai" 
          height="5'8&quot;" 
          zodiac="Capricorn" 
          videoIds={[
            "DdVYL-J7OMk",
            "LYvR21TJ8s8",
            "inp2v1UM7T4",
            "SZSEHmd3tZU",
            "H0R7KJeW5aU",
            "PH4JRov_KZk",
            "tvWCB82BKGk"
          ]}
        />
        <ProfileCard 
          name="DHAIRYA" 
          dob="November 07, 1999" 
          age="24 yrs" 
          city="Delhi" 
          height="6'0&quot;" 
          zodiac="Scorpio" 
          videoIds={[
            "7gZJ2MXNcK4",
            "eE5ekfo9o8c",
            "Q497Y04of4k",
            "RZUNg3ClvPc",
            "to_ArTiVyx8",
            "UoFRkvSYMb8"
          ]}
        />

        {/* Capabilities vs Advantages — side-by-side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl border border-white/5 bg-[#0e1a14] p-8 md:p-12"
        >
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-6">Model & Creative Capabilities</h4>
            <div className="flex flex-col gap-2">
              {modelCapabilities.map((cap, i) => <ListCard key={i} label={cap} variant="accent" />)}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#7a8c7f] mb-6">Brand Advantages — No Drama / Cost Efficiency</h4>
            <div className="flex flex-col gap-2">
              {brandAdvantages.map((adv, i) => <ListCard key={i} label={adv} variant="dim" />)}
            </div>
          </div>
        </motion.div>

        {/* 100+ Real Creators */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block">Real Creators</span>
            <h3 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-[#f0f4f0] leading-tight">
              100+ Real Creators<br />With an Overlap Mindset
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[0,1].map(i => (
              <div key={i} className="aspect-[9/16] bg-[#0e1a14] border border-white/5 rounded-2xl flex items-center justify-center hover:border-[#c6ff2e]/20 transition-all">
                <span className="text-[10px] text-[#7a8c7f]/40 font-bold uppercase tracking-widest">REELS</span>
              </div>
            ))}
            {[0,1].map(i => (
              <div key={i} className="aspect-[4/5] bg-[#0e1a14] border border-white/5 rounded-2xl flex items-center justify-center hover:border-[#c6ff2e]/20 transition-all">
                <span className="text-[10px] text-[#7a8c7f]/40 font-bold uppercase tracking-widest">PHOTO</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Custom Brand AI Creators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-3xl bg-[#c6ff2e] p-12 md:p-16 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group cursor-crosshair"
        >
          <div className="absolute inset-0 bg-[#d4ff50] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase text-[#080f0c]/60">On Demand</span>
          <h3 className="relative z-10 font-heading text-4xl md:text-6xl font-black uppercase text-[#080f0c] tracking-tight leading-tight">
            Custom Brand AI Creators
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

"use client";
import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize2, X } from "lucide-react";
import { claimUnmute, onUnmuteClaimed } from "../hooks/useVideoMuteSync";

// ── Intersection Observer hook ────────────────────────────────────────────
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// ── helpers ──────────────────────────────────────────────────────────
function VideoBlock16x9({ index, videoId }: { index: number; videoId?: string }) {
  const uid = useId(); // unique per instance across the whole page
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [containerRef, inView] = useInView(0.4);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Lazy-mount the iframe only once we've entered view
  useEffect(() => {
    if (inView && !isMounted) setIsMounted(true);
  }, [inView, isMounted]);

  const sendCmd = useCallback((func: string, args?: unknown[]) => {
    const msg: Record<string, unknown> = { event: "command", func };
    if (args) msg.args = args;
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(msg), "*");
  }, []);

  // Play / pause based on viewport visibility
  useEffect(() => {
    if (!isMounted) return;
    if (inView) {
      sendCmd("playVideo");
      setIsPlaying(true);
    } else {
      sendCmd("pauseVideo");
      setIsPlaying(false);
    }
  }, [inView, isMounted, sendCmd]);

  // Auto-mute when another video claims unmute
  useEffect(() => {
    return onUnmuteClaimed((owner) => {
      if (owner !== uid && !isMuted) {
        sendCmd("mute");
        setIsMuted(true);
      }
    });
  }, [uid, isMuted, sendCmd]);

  const togglePlay = () => {
    const next = !isPlaying;
    sendCmd(next ? "playVideo" : "pauseVideo");
    setIsPlaying(next);
  };

  const toggleMute = () => {
    if (isMuted) {
      // Currently muted → unmute
      claimUnmute(uid); // notify all other videos to mute
      sendCmd("unMute");
      setIsMuted(false);
    } else {
      // Currently unmuted → mute
      sendCmd("mute");
      setIsMuted(true);
    }
  };

  const replayVideo = () => {
    sendCmd("seekTo", [0, true]);
    if (!isPlaying) {
      setIsPlaying(true);
      sendCmd("playVideo");
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="relative aspect-video rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all overflow-hidden"
    >
      {videoId ? (
        <>
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {isMounted && (
              <iframe
                ref={iframeRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1&playsinline=1&fs=0&disablekb=1&vq=hd1080`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video ${index}`}
                loading="lazy"
              />
            )}
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
  const uid = useId();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [containerRef, inView] = useInView(0.3);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (inView && !isMounted) setIsMounted(true);
  }, [inView, isMounted]);

  const sendCmd = useCallback((func: string, args?: unknown[]) => {
    const msg: Record<string, unknown> = { event: "command", func };
    if (args) msg.args = args;
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify(msg), "*");
  }, []);

  // Play / pause based on viewport visibility
  useEffect(() => {
    if (!isMounted) return;
    if (inView) {
      sendCmd("playVideo");
      setIsPlaying(true);
    } else {
      sendCmd("pauseVideo");
      setIsPlaying(false);
    }
  }, [inView, isMounted, sendCmd]);

  // Auto-mute when another video claims unmute
  useEffect(() => {
    return onUnmuteClaimed((owner) => {
      if (owner !== uid && !isMuted) {
        sendCmd("mute");
        setIsMuted(true);
      }
    });
  }, [uid, isMuted, sendCmd]);

  const togglePlay = () => {
    const next = !isPlaying;
    sendCmd(next ? "playVideo" : "pauseVideo");
    setIsPlaying(next);
  };

  const toggleMute = () => {
    if (isMuted) {
      claimUnmute(uid);
      sendCmd("unMute");
      setIsMuted(false);
    } else {
      sendCmd("mute");
      setIsMuted(true);
    }
  };

  const replayVideo = () => {
    sendCmd("seekTo", [0, true]);
    if (!isPlaying) {
      setIsPlaying(true);
      sendCmd("playVideo");
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="relative aspect-[9/16] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[180px] md:w-[220px] h-auto overflow-hidden"
    >
      {videoId ? (
        <>
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {isMounted && (
              <iframe
                ref={iframeRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1&playsinline=1&fs=0&disablekb=1&vq=hd1080`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video 9:16 ${index}`}
                loading="lazy"
              />
            )}
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

function PhotoBlock({ index, imageUrl }: { index: number; imageUrl?: string }) {
  const [isFull, setIsFull] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="relative aspect-[4/5] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[220px] md:w-[280px]"
    >
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt={`Photo ${index}`}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
            decoding="async"
          />
          <button
            onClick={(e) => { e.stopPropagation(); setIsFull(true); }}
            className="absolute top-2 right-2 p-2 rounded-full bg-[#080f0c]/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md"
          >
            <Maximize2 size={16} />
          </button>

          {isFull && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setIsFull(false)}>
              <img
                src={imageUrl}
                alt={`Photo ${index} Fullscreen`}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <button
                onClick={(e) => { e.stopPropagation(); setIsFull(false); }}
                className="absolute top-6 right-6 p-3 rounded-full bg-[#080f0c]/80 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          )}
        </>
      ) : (
        <span className="text-[#7a8c7f]/40 font-heading font-bold text-xs uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
          PHOTO — {String(index + 1).padStart(2, "0")}
        </span>
      )}
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
  const photoUrls = [
    "https://lh3.googleusercontent.com/d/1T2SrzELf76DlpwnKTgHeuZMnClOfEfuT",
    "https://lh3.googleusercontent.com/d/1lwIhSTT8GeDNLcvjH5hd91LtOgenFeqd",
    "https://lh3.googleusercontent.com/d/1seX8XBTDBs2UpUGFTf7bkIF4CeRrbMhH",
    "https://lh3.googleusercontent.com/d/1b54tQlRlpZUl6XhVDRJuexZOlgp9Llnw",
    "https://lh3.googleusercontent.com/d/12ILpN8_GaxStZe-_VHeIG6JKcAcCy1J_",
    "https://lh3.googleusercontent.com/d/1wttYz5yaNrho_VHKZIVdpxvafUkT_uxM",
    "https://lh3.googleusercontent.com/d/1FTjlgEaU_dEnldjZqkAyooPS7ldjERwD",
    "https://lh3.googleusercontent.com/d/1xCKUjr1vCFBn62xd7AmFDefvyj6GBSHy",
    "https://lh3.googleusercontent.com/d/1mxYTaSgfZ6cbhCIF_SD8kLknCPc_ECCH",
    "https://lh3.googleusercontent.com/d/1azwhfivMn9gawE12ATOFuq7kydzbRYrZ",
    "https://lh3.googleusercontent.com/d/1gSgo5SXWjDnpTFZSWI4c-WgfPzqzF3uu",
    "https://lh3.googleusercontent.com/d/1nrYpWLqOBnQo1fET_2XK9IYzaGgfT-fo",
    "https://lh3.googleusercontent.com/d/1fV9BT5PmoxM6Qz_PUMe_fpXB8AaiTc87",
    "https://lh3.googleusercontent.com/d/15hKbJAyzy46WjGA04zhkZyvGGtKCZ9Ia",
    "https://lh3.googleusercontent.com/d/1jRR8Wpm-Vf0eF-O0GUzZxkDzxVqipJWo",
    "https://lh3.googleusercontent.com/d/1Jnkbomy7vHmDva0OuB0t3P4kW6SkLkit",
    "https://lh3.googleusercontent.com/d/16NxyrB762wFiQxwkxHCSJMx7Cpa4G5zV",
    "https://lh3.googleusercontent.com/d/1OHlQzlT0xYLh0LOC2NP_VPAUbeXrTWY9",
    "https://lh3.googleusercontent.com/d/1h7_NqRkmGz1F34aBbmuwqlllC8ZMQ6Q-",
    "https://lh3.googleusercontent.com/d/1ilLRaw75hHL-9K66wCmsIpM7qup8kuFl",
    "https://lh3.googleusercontent.com/d/1R1fm3dTbLvAhro1n3A9hJ0EP1ACTkkHj",
    "https://lh3.googleusercontent.com/d/1nlYfAezg0TR1rY07xwGzxTeYHTkS0MtI",
    "https://lh3.googleusercontent.com/d/1WHuzUzRQaRuku5vTtYVUlFHlODceB-My",
    "https://lh3.googleusercontent.com/d/1rmEdhzLG7oTkjfX6pTFHNm0oJJE45pSh",
    "https://lh3.googleusercontent.com/d/1dF02-FubYd6wo2_e5Vcoyh14P5um4Y2e",
    "https://lh3.googleusercontent.com/d/1O4066fkIxFM6ssjBYlFbZw64Hw-oJd5b",
    "https://lh3.googleusercontent.com/d/13gqOxDKyIchGMql35-t3jFeMblquV3jN",
    "https://lh3.googleusercontent.com/d/1mai9wY4J-pI42QHqsm7RWy-4yVV04FrX",
    "https://lh3.googleusercontent.com/d/19E3wZdFaRPGIirT7FAvxSYocbjhcqk7V",
    "https://lh3.googleusercontent.com/d/1F3wIswLah3HxsBvWbLTRRp3kHMVuDfdK",
    "https://lh3.googleusercontent.com/d/1pG6gRbW6MrpxG1cQ4QQ1eSzbmDk2zIXS",
    "https://lh3.googleusercontent.com/d/15HdfWHGQE2rqUNRkXVBUQyKo7jtHJDBX",
    "https://lh3.googleusercontent.com/d/1CVDlKCs5LGbhVeXDnmEUF5UjfojS0O1J",
    "https://lh3.googleusercontent.com/d/1pciB1fEkUiYgBe51tA0gYW8Dz-4hamkh",
    "https://lh3.googleusercontent.com/d/1q-XqWcqpPyRGxlytAPQvvl701wPb2e4x",
    "https://lh3.googleusercontent.com/d/1wiOOFcXddpoKPG9BcbGidyLp_LC4KAEX",
    "https://lh3.googleusercontent.com/d/1ZlIjEWMxnG17yrP3yo9998rZozrasAHn",
    "https://lh3.googleusercontent.com/d/1QiUH2tQw49sEzbq16vF2ohVlDgxa3ztR",
    "https://lh3.googleusercontent.com/d/19K6pzTpUvQeKPiSthcq4C7MwdWOY-bPX",
    "https://lh3.googleusercontent.com/d/1kYgd4k8-XywocDJq6v5c_RKod5QAj_u3",
    "https://lh3.googleusercontent.com/d/158-vnKHfKcNXp6ynne4Ikio7qB6C0rdi",
    "https://lh3.googleusercontent.com/d/1yG9ac_GL_Y4pMNs1eGLv-b19GQcqJDG1",
    "https://lh3.googleusercontent.com/d/1nqX33l5q35aWR5MnPJQ2vlSkODn1n64M",
    "https://lh3.googleusercontent.com/d/1aRHBXjVamaMAkTZU3OxGC4RwlVMOhman",
    "https://lh3.googleusercontent.com/d/1Z_aIRoa8eQaiJjeCh9tUu13uMBtpjqS2",
    "https://lh3.googleusercontent.com/d/1m08r5HgDvtUjj2tjdKXN7OksYJ-jtIMZ",
    "https://lh3.googleusercontent.com/d/1hIiiE3N6iAKNKXmtGM4dk13jKENlgc2u",
    "https://lh3.googleusercontent.com/d/1__N3S6tPyv0nRprtfmczDQUb4f_dQ2rR",
    "https://lh3.googleusercontent.com/d/1BV_s9vqnkYt6N-EcqqbFefQwSAZxiG6K",
    "https://lh3.googleusercontent.com/d/1NXvQHy0TWe48EYiaJP_LG6b_MHfZY_y4",
    "https://lh3.googleusercontent.com/d/1T2lwBttxgIPYXgl9SKpm-sJTQ1sQ-HWf",
    "https://lh3.googleusercontent.com/d/1rGVygeBoFE40PU9ruM457-wbo336gRTn",
    "https://lh3.googleusercontent.com/d/1U4Vbovw_qpTQeX9pe2FzXSBfa8WBUH7M",
    "https://lh3.googleusercontent.com/d/1R4HSO7nQULObjKni-ypBrc89fg1MCMmH",
    "https://lh3.googleusercontent.com/d/1yk1vDOiY-IraP9W68p_ulRmWKcvfNyh6",
    "https://lh3.googleusercontent.com/d/1AQBY6i8aV4dfuVItZTARcMLhoiCMDXom",
    "https://lh3.googleusercontent.com/d/1H2kxQqV19tfF68BlD4sftP76TIb7Rm7Q",
    "https://lh3.googleusercontent.com/d/1Qc6KFE2aBDtbrMiIOrO069YlRB80QewQ",
    "https://lh3.googleusercontent.com/d/1jF_mUXc39ntzNsVWXJSBjcjQYz4eHRuc",
    "https://lh3.googleusercontent.com/d/1vlKTGc0Tx_DfCnqIZgUHRoxn6y-hb46i",
    "https://lh3.googleusercontent.com/d/1wxyv9MtdwgdbZ9ByY1JevZyIXolCKImI",
    "https://lh3.googleusercontent.com/d/1iG91rJ5BR8mng1kZcN51j85DSrQFXTQ_",
    "https://lh3.googleusercontent.com/d/12S_Jnru7vbwShRRb35PQQrt3uIDUVa5p",
    "https://lh3.googleusercontent.com/d/169pQwATKewDPFK93i2aWy7lwOKYK_PyV",
    "https://lh3.googleusercontent.com/d/1Mi3A8umhfG4BopibuETvPbXj7A5oO-Pn",
    "https://lh3.googleusercontent.com/d/1BcHU1_QGWpc4CqSYwWKYAa2uaMfG9d_8",
    "https://lh3.googleusercontent.com/d/1anhqL-miAbYaQIRE8sv4ZvtMjtCtj2Nr",
    "https://lh3.googleusercontent.com/d/1pOt6QaxP8bzDC0Rmlr347Vtcdp0evz04",
    "https://lh3.googleusercontent.com/d/1EOwt9P8eB2DnnMwSC_yDR1iU_GK6A1FS",
    "https://lh3.googleusercontent.com/d/1fHxlQ9O8V-sMSFdM8vTd2GZD1Js-_pY6",
    "https://lh3.googleusercontent.com/d/13qwJGFMBpW8RNhw3mM9PHTGB5EFyoPpN",
    "https://lh3.googleusercontent.com/d/1FchdNn41ntOeaoOCFEx5PPQmVFkwqh_A",
    "https://lh3.googleusercontent.com/d/1ldtST3GvmtfEOU1npxGg57oTBSIdgniO",
    "https://lh3.googleusercontent.com/d/1nwaAheLWT6huXrakTeuwba6VLX3CYWLr",
    "https://lh3.googleusercontent.com/d/1Gm6fFQD5QiUzoYMXfyuiBwo-OGGsyf1K",
    "https://lh3.googleusercontent.com/d/1xnG_zR-gO3LNWh-NPsES_JFXFHt_rogv",
    "https://lh3.googleusercontent.com/d/1Ta5aGWvYDDPIVkPeS1ZF7T7_p8uiqngz",
    "https://lh3.googleusercontent.com/d/1hHt8cc3UH4o5Fo7Usp5_Cyy4leVuO5Gk",
    "https://lh3.googleusercontent.com/d/1qkH-uNsEddC5vYv7YihxdRXQBmzwyWCR",
    "https://lh3.googleusercontent.com/d/1RtST8wZD8VDu8558V4CNZgJImBGbBto4",
    "https://lh3.googleusercontent.com/d/17ofijIo91N5uy6TT_YA8Ln2GobPahbsf",
    "https://lh3.googleusercontent.com/d/1NjehlnDARHTmPlnZ1g7qLJUuRGlwaq8u",
    "https://lh3.googleusercontent.com/d/1eZc0ogSWP_HJI_l-nV4nTF1BtEc1Sp8n",
    "https://lh3.googleusercontent.com/d/1RDM2a4cb_n2sJcb52szehWhvjLGzXqiH"
  ];

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
          "kRLN9N1xb8k"
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
        <div className="mb-10 mt-10">
          <SubSectionHeading text="Photography" />
          <SectionLabel label="Photoshoots & Visuals" />
        </div>
      </div>

      {/* Photo Carousel */}
      <HScrollCarousel>
        {photoUrls.map((url, i) => (
          <PhotoBlock key={i} index={i} imageUrl={url} />
        ))}
      </HScrollCarousel>

    </section>
  );
}

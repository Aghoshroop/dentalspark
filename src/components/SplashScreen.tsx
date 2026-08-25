"use client";
import React, { useState, useEffect, useRef } from "react";

export default function SplashScreen() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const [showSplash, setShowSplash] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splash_seen");
    if (hasSeenSplash) {
      setUnmount(true);
      setShowSplash(false);
      // Wait for next tick so listeners can attach
      setTimeout(() => window.dispatchEvent(new CustomEvent("splashEnded")), 0);
    } else {
      sessionStorage.setItem("splash_seen", "true");
      setShowSplash(true);
    }
  }, []);

  useEffect(() => {
    if (showSplash !== true) return;
    
    // Only lock scroll on initial mount when splash is showing
    if (!unmount) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [unmount, showSplash]);

  useEffect(() => {
    if (showSplash !== true) return;

    // Attempt to force play in some browsers if autoplay is blocked
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }

    // Force end the splash screen after 6 seconds
    const timer = setTimeout(() => {
      setVideoEnded(true);
      window.dispatchEvent(new CustomEvent("splashEnded"));
    }, 6000);

    return () => clearTimeout(timer);
  }, [showSplash]);

  if (showSplash === null || unmount) return null;

  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#151515",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: videoEnded ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 1s cubic-bezier(0.77, 0, 0.175, 1)", // Smooth "shutter opening" easing
      }}
      onTransitionEnd={() => {
        if (videoEnded) setUnmount(true);
      }}
    >
      <video
        ref={videoRef}
        src="/splash.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

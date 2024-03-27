"use client";

import MainSection from "@/components/MainSection";
import VideoPlayer from "@/components/VideoPlayer";
import ConnectProvider from "./ConnectProvider";

const LandingPage = () => {
  return (
    <ConnectProvider>
      <div className="min-h-screen overflow-hidden relative">
        <MainSection />
        <div className="absolute left-0 top-0 z-30 w-full h-full bg-gradient-to-r opacity-90 from-black from-7% to-transparent to-20%" />
        <div className="absolute top-0 z-20 w-full h-full bg-gradient-to-b from-sky-700 opacity-50 from-60% mix-blend-overlay" />
        <VideoPlayer />
      </div>
    </ConnectProvider>
  );
};

export default LandingPage;

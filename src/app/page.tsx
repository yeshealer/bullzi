import { clusterApiUrl } from "@solana/web3.js";
import MainSection from "@/components/MainSection";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <MainSection />
      <VideoPlayer />
    </div>
  );
}

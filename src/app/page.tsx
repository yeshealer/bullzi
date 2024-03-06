"use client"

import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint } from "../api/utils/constants";
import MainSection from "@/components/MainSection";
import VideoPlayer from "@/components/VideoPlayer";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function Home() {
  const phantomWallet = new PhantomWalletAdapter();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[phantomWallet]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen overflow-hidden relative">
            <MainSection />
            <div className="absolute left-0 top-0 z-30 w-full h-full bg-gradient-to-r opacity-90 from-black from-7% to-transparent to-20%" />
            <div className="absolute top-0 z-20 w-full h-full bg-gradient-to-b from-sky-700 opacity-50 from-60% mix-blend-overlay" />
            <VideoPlayer />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

"use client";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import MainSection from "@/components/MainSection";
import VideoPlayer from "@/components/VideoPlayer";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const LandingPage = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SlopeWalletAdapter(),
      // new CoinbaseWalletAdapter(),
      // new SolflareWalletAdapter({ network }),
      // new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
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
};

export default LandingPage;

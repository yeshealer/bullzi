"use client";

import React, { useEffect, useMemo, useState } from "react";
import localFont from "next/font/local";
import WalletModal from "./WalletModal";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import useWhitelist from "@/hooks/useWhitelist";
import { LiaTelegramPlane } from "react-icons/lia";

const Horizon = localFont({ src: "../../assets/Horizon.otf" });

export default function MainSection() {
  const { connected, wallets, select, publicKey, disconnect } = useWallet();
  const wallet = useAnchorWallet();
  const { addToWhiteList, initContract, fetchData } = useWhitelist({
    wallet,
    publicKey,
  });
  const [isWhitelisted, setIsWhiteListed] = useState<boolean>(false);

  const walletAddress = useMemo(() => {
    if (!publicKey) return "";
    return publicKey.toBase58();
  }, [publicKey]);

  const handleClick = async () => {
    if (isWhitelisted) {
      disconnect();
      setIsWhiteListed(false);
      return;
    }
    if (!connected) {
      select(wallets[0].adapter.name);
      return;
    }
    await initContract();
    await addToWhiteList();
    await fetchData();
  };

  const handleFetchData = async () => {
    const counter = await fetchData();
    if (Number(counter) === 1) {
      setIsWhiteListed(true);
      return;
    }
    setIsWhiteListed(false);
  };

  useEffect(() => {
    if (!connected) return;
    handleFetchData();
  }, [connected, walletAddress]);

  return (
    <div
      className={`z-40 relative flex flex-col lg:flex-row items-center min-h-screen justify-between gap-0 lg:gap-20 py-10 text-white ${Horizon.className}`}
    >
      <div className="flex-1 flex justify-end z-10">
        <img
          src={"/images/banner.png"}
          className="min-w-[300px] min-h-[300px] w-[340px] sm:w-[400px] md:w-[550px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px]"
          alt="banner image"
          draggable={false}
        />
      </div>
      <div className="flex-1 -mt-10 lg:mt-0">
        <div className="bg-black/70 backdrop-blur-sm min-w-[360px] sm:min-w-[520px] md:min-w-[650px] lg:min-w-[480px] xl:min-w-[550px] 2xl:min-w-[650px] w-[75%] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[520px] xl:h-[600px] 2xl:h-[640px] rounded-3xl p-6 py-10 lg:py-20 flex flex-col items-center justify-around">
          <div className="flex flex-col items-center gap-2">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl 2xl:text-8xl font-bold">
              BULLZI
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl tracking-widest">
              #BULLZIMOVES
            </div>
          </div>
          <div className="cursor-pointer w-[280px] sm:w-[360px] md:w-[420px] lg:w-[320px] xl:w-[360px] 2xl:w-[420px] h-[180px] relative flex items-center justify-center">
            <button
              className={`text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl ${
                !connected ? "bg-[#24FF00] btn-box-shadow-green" : "bg-[#FF04C8] btn-box-shadow-purple"
              } py-1.5 px-1.5 rounded-xl`}
              onClick={handleClick}
            >
              <div className="border border-4 border-white px-16 py-3 rounded-xl">
                {isWhitelisted
                  ? "Disconnect"
                  : connected
                  ? "RING STASH"
                  : "Connect"}
              </div>
            </button>
          </div>
          {!isWhitelisted ? (
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase text-base sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center">
                {!connected ? "WE ARE THE GENERATION" : "REGISTER NOW"}
              </div>
              <div className="uppercase text-sm sm:text-lg md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                {!connected ? "DNT FK IT UP" : "earn rings - dnt fk it up"}
              </div>
            </div>
          ) : (
            <div className="bg-[#FF04C8] rounded-full p-4">
              <LiaTelegramPlane color="white" size={65} />
            </div>
          )}
        </div>
      </div>
      <WalletModal />
    </div>
  );
}

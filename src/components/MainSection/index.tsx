"use client";

import React, { useEffect, useMemo, useState } from "react";
import localFont from "next/font/local";
import WalletModal from "./WalletModal";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import useWhitelist from "@/hooks/useWhitelist";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsInfoSquareFill } from "react-icons/bs";

const Horizon = localFont({ src: "../../assets/Horizon.otf" });

export default function MainSection() {
  const { connected, wallets, select, publicKey, disconnect, signMessage } =
    useWallet();
  const wallet = useAnchorWallet();
  const { addToWhiteList, initContract, fetchData, signCustomMessage } =
    useWhitelist({
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
      setIsWhiteListed(false);
      return;
    }
    setIsWhiteListed(true);
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
      className={`z-40 relative flex flex-col lg:flex-row items-center min-h-screen justify-between gap-0 lg:gap-20 py-4 lg:py-10 text-white ${Horizon.className}`}
    >
      <div className="flex-1 flex justify-end z-10">
        {isWhitelisted ? (
          <div className="backdrop-blur-sm min-w-[350px] sm:min-w-[520px] md:min-w-[650px] lg:min-w-[480px] xl:min-w-[550px] 2xl:min-w-[650px] w-[75%] h-[360px] sm:h-[450px] md:h-[550px] lg:h-[470px] xl:h-[525px] 2xl:h-[600px] flex flex-col items-center justify-between">
            <div className="bg-black/70 w-full h-[48%] rounded-3xl p-4 md:p-10">
              <div className="text-center flex flex-col items-center justify-between h-full">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl tracking-widest">
                  GET READY
                </div>
                <div className="w-full justify-between flex">
                  <div className="gap-4 flex flex-col items-center">
                    <div className="text-[#24FF00] text-3xl font-bold font-mono">
                      0.00
                    </div>
                    <div className="tracking-widest text-sm">REFERAL</div>
                  </div>
                  <div className="gap-4 flex flex-col items-center">
                    <div className="text-[#FF04C8] text-3xl font-bold font-mono">
                      0.00
                    </div>
                    <div className="tracking-widest text-sm">RINGS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/70 w-full h-[48%] rounded-3xl flex justify-between p-4 md:p-10">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center text-sm gap-1 -mt-4">
                  <img src="/images/3.png" width={"70px"} height={"70px"} />
                  <div className="tracking-widest">READ ME</div>
                </div>
                <div className="flex flex-col items-center text-sm gap-4">
                  <div className="text-[#FF04C8] text-3xl font-bold font-mono">
                    0.00
                  </div>
                  <div className="tracking-widest">RINGS</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center text-sm gap-4">
                  <div className="text-[#24FF00] text-3xl font-bold font-mono">
                    0.00
                  </div>
                  <div className="tracking-widest">STOKEN</div>
                </div>
                <div className="flex flex-col items-center text-sm gap-4">
                  <div className="text-[#24FF00] text-3xl font-bold font-mono">
                    0.00
                  </div>
                  <div className="tracking-widest">LOCKED</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img
            src={"/images/banner.png"}
            className="min-w-[300px] min-h-[300px] w-[340px] sm:w-[400px] md:w-[550px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px]"
            alt="banner image"
            draggable={false}
          />
        )}
      </div>
      <div
        className={`flex-1 ${
          isWhitelisted ? "mt-4" : "-mt-10"
        } lg:mt-0 justify-center flex`}
      >
        <div className="bg-black/70 backdrop-blur-sm min-w-[350px] sm:min-w-[520px] md:min-w-[650px] lg:min-w-[480px] xl:min-w-[550px] 2xl:min-w-[650px] w-[75%] h-[360px] sm:h-[450px] md:h-[550px] lg:h-[470px] xl:h-[525px] 2xl:h-[600px] rounded-3xl p-6 py-10 lg:py-16 flex flex-col items-center justify-between">
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
              className={`text-xl sm:text-3xl lg:text-xl 2xl:text-2xl ${
                !isWhitelisted
                  ? "bg-[#24FF00] btn-box-shadow-green"
                  : "bg-[#FF04C8] btn-box-shadow-purple"
              } rounded-xl`}
              onClick={handleClick}
            >
              <div className="border border-2 border-white min-w-[280px] sm:min-w-[350px] py-3 rounded-xl">
                {isWhitelisted ? "Disconnect" : "Whitelist"}
              </div>
            </button>
          </div>
          {!isWhitelisted ? (
            <div className="flex flex-col items-center gap-2 h-[80px]">
              <div className="uppercase text-[15px] sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center">
                {!connected ? "WE ARE THE GENERATION" : "REGISTER NOW"}
              </div>
              <div className="uppercase text-[12px] sm:text-lg md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                {!connected ? "DNT FK IT UP" : "earn rings - dnt fk it up"}
              </div>
            </div>
          ) : (
            <div className="h-[80px]">
              <div className="bg-[#FF04C8] rounded-full p-4">
                <LiaTelegramPlane color="white" size={45} />
              </div>
            </div>
          )}
        </div>
      </div>
      <WalletModal />
    </div>
  );
}

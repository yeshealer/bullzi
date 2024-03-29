"use client";

import React, { useEffect } from "react";
import localFont from "next/font/local";
import WalletModal from "./WalletModal";
import { useWallet } from "@solana/wallet-adapter-react";
import { LiaTelegramPlane } from "react-icons/lia";
import { CustomWalletButton } from "./ConnectWalletButton";
import toast from "react-hot-toast";
import useWhiteList from "@/hooks/useWhitelist";

const Horizon = localFont({ src: "../../assets/Horizon.otf" });

export default function MainSection() {
  const { connected } = useWallet();
  const { saveAndFetchData, userDetails } = useWhiteList();

  const handleCopyReferralLink = () => {
    const referralLink = userDetails?.referralLink as string;

    // Copy the link to clipboard
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        console.log("Link copied to clipboard:", referralLink);
        toast.success("Link copied");
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
        toast.error("fail to copy referral link");
      });
  };

  useEffect(() => {
    saveAndFetchData();
  }, [connected]);

  return (
    <div
      className={`z-40 relative flex flex-col lg:flex-row items-center min-h-screen justify-between gap-0 lg:gap-20 py-4 lg:py-10 text-white ${Horizon.className}`}
    >
      <div className="flex-1 flex justify-end z-10 h-full">
        {connected ? (
          <div className="backdrop-blur-sm min-w-[350px] sm:min-w-[520px] md:min-w-[650px] lg:min-w-[480px] xl:min-w-[550px] 2xl:min-w-[650px] w-[75%] h-full lg:h-[470px] xl:h-[525px] 2xl:h-[600px] flex flex-col items-center justify-between gap-2">
            <div className="bg-black/70 w-full h-[150px] sm:h-[250px] lg:h-[48%] rounded-3xl p-4 md:p-10">
              <div className="text-center flex flex-col items-center justify-between h-full">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl tracking-widest">
                  GET READY
                </div>
                <button
                  onClick={handleCopyReferralLink}
                  className="bg-white text-black flex items-center justify-center mx-auto py-1 px-2 my-2 rounded-xl"
                >
                  REFERRAL CODE (SHARE)
                </button>
                <div className="w-full justify-between flex">
                  <div className="gap-2 sm:gap-4 flex flex-col items-center">
                    <div className="text-[#24FF00] text-2xl md:text-3xl font-bold font-mono">
                      {userDetails?.referList.length?.toFixed(2)}
                    </div>
                    <div className="tracking-widest text-xs sm:text-sm">
                      REFERAL
                    </div>
                  </div>
                  <div className="gap-2 sm:gap-4 flex flex-col items-center">
                    <div className="text-[#FF04C8] text-2xl md:text-3xl font-bold font-mono">
                      {userDetails?.referralCount?.toFixed(2) || 0.0}
                    </div>
                    <div className="tracking-widest text-xs sm:text-sm">
                      RINGS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/70 w-full h-[150px] sm:h-[250px] lg:h-[48%] rounded-3xl flex justify-between p-4 md:p-10">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center text-sm gap-1 -mt-4">
                  <img src="/images/3.png" width={"70px"} height={"70px"} />
                  <div className="tracking-widest text-xs sm:text-sm">
                    READ ME
                  </div>
                </div>
                <div className="flex flex-col items-center text-sm gap-2 sm:gap-4">
                  <div className="text-[#FF04C8] text-2xl md:text-3xl font-bold font-mono">
                    {userDetails?.referralCount?.toFixed(2) || 0.0}
                  </div>
                  <div className="tracking-widest text-xs sm:text-sm">
                    RINGS
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <div className="flex flex-col items-center text-sm gap-2 sm:gap-4">
                  <div className="text-[#24FF00] text-2xl md:text-3xl font-bold font-mono">
                    0.00
                  </div>
                  <div className="tracking-widest text-xs sm:text-sm">
                    STOKEN
                  </div>
                </div>
                <div className="flex flex-col items-center text-sm gap-2 sm:gap-4">
                  <div className="text-[#24FF00] text-2xl md:text-3xl font-bold font-mono">
                    0.00
                  </div>
                  <div className="tracking-widest text-xs sm:text-sm">
                    LOCKED
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-square">
            <img
              src={"/images/banner.png"}
              className="min-w-[300px] min-h-[300px] w-[340px] sm:w-[400px] md:w-[550px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px]"
              alt="banner image"
              draggable={false}
            />
          </div>
        )}
      </div>
      <div
        className={`flex-1 ${
          connected ? "-mt-16 sm:mt-2" : "-mt-28"
        } lg:mt-0 justify-center flex`}
      >
        <div className="bg-black/70 backdrop-blur-sm min-w-[350px] sm:min-w-[520px] md:min-w-[650px] lg:min-w-[480px] xl:min-w-[550px] 2xl:min-w-[650px] w-[75%] h-full lg:h-[470px] xl:h-[525px] 2xl:h-[600px] rounded-3xl p-6 lg:py-16 flex flex-col items-center justify-between gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl 2xl:text-8xl font-bold">
              BULLZI
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl tracking-widest">
              #BULLZIMOVES
            </div>
          </div>
          <div className="cursor-pointer w-[280px] sm:w-[360px] md:w-[420px] lg:w-[320px] xl:w-[360px] 2xl:w-[420px] h-full relative flex items-center justify-center">
            <CustomWalletButton />
          </div>
          {!connected ? (
            <div className="flex flex-col items-center gap-2 h-[65px] sm:h-[80px]">
              <div className="uppercase text-[15px] sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center">
                {!connected ? "WE ARE THE GENERATION" : "REGISTER NOW"}
              </div>
              <div className="uppercase text-[12px] sm:text-lg md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-center">
                {!connected ? "DNT FK IT UP" : "earn rings - dnt fk it up"}
              </div>
            </div>
          ) : (
            <div className="h-[65px] sm:h-[80px]">
              <div className="bg-[#FF04C8] rounded-full p-4">
                <LiaTelegramPlane
                  color="white"
                  className="w-[30px] sm:w-[45px] h-[30px] sm:h-[45px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <WalletModal />
    </div>
  );
}

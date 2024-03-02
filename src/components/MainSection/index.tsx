import React from "react";
import localFont from "next/font/local";
import { Audiowide } from "next/font/google";

const Horizon = localFont({ src: "./Horizon.otf" });
// const OtherFont = Audiowide({ subsets: ["latin"], weight: "400" });

export default function MainSection() {
  return (
    <div
      className={`z-20 relative flex flex-col lg:flex-row items-center min-h-screen justify-between gap-0 lg:gap-20 py-10 ${Horizon.className}`}
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
        <div className="bg-black/70 backdrop-blur-sm min-w-[360px] sm:min-w-[520px] md:min-w-[650px] lg:min-w-[480px] xl:min-w-[550px] 2xl:min-w-[650px] w-[75%] h-[450px] sm:h-[550px] md:h-[600px] lg:h-[520px] xl:h-[600px] 2xl:h-[700px] rounded-3xl p-6 flex flex-col items-center justify-around">
          <div className="flex flex-col items-center gap-2">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl 2xl:text-8xl font-bold">BULLZI</div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl tracking-widest">
              #BULLZIMOVES
            </div>
          </div>
          <div className="cursor-pointer w-[280px] sm:w-[360px] md:w-[420px] lg:w-[320px] xl:w-[360px] 2xl:w-[420px] h-[180px] relative flex items-center justify-center">
            <div className="absolute text-xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
              Connect
            </div>
            <img src="/images/connect-btn.png" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="uppercase text-base sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center">
              WE ARE THE GENERATION
            </div>
            <div className="uppercase text-sm sm:text-lg md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-center">
              DNT FK IT UP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

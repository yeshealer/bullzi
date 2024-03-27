"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import React from "react";

export const CustomWalletButton = () => {
  const { connect, connected, disconnect, publicKey } = useWallet();

  const { setVisible } = useWalletModal();

  const handleWalletConnection = async () => {
    if (!connected) {
      setVisible(true);
    }

    if (publicKey && !connected) {
      await connect();
    }

    await disconnect();
  };

  return (
    <button
      className={`text-lg sm:text-3xl lg:text-xl 2xl:text-2xl ${
        !connected
          ? "bg-[#24FF00] btn-box-shadow-green"
          : "bg-[#FF04C8] btn-box-shadow-purple"
      } rounded-xl`}
      onClick={handleWalletConnection}
    >
      <div className="border-2 border-white min-w-[250px] sm:min-w-[350px] py-3 rounded-xl">
        {connected ? "Disconnect" : "Whitelist"}
      </div>
    </button>
  );
};

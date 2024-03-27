import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSearchParams } from "next/navigation";

interface Iprops {
  referList: [string];
  referralLink: string;
  referralCount: number;
  walletAddress: string;
}

const useWhiteList = () => {
  const { disconnect, publicKey, connected } = useWallet();
  const searchParams = useSearchParams();

  const saved = useRef(false);
  const [userDetails, setUserDetails] = useState<Iprops>();

  const saveWalletAddressToDatabase = useCallback(
    async (walletAddress: string) => {
      const referrerId = searchParams.get("ref");
      const body = {
        walletAddress: walletAddress,
        referrerId: referrerId || "",
      };

      const loadingToast = toast.loading("Whitelisting your wallet...");
      try {
        await axios.post("/api/wallet", body);
        toast.dismiss(loadingToast);
        toast.success("Successfully whitelisted!");
      } catch (error: any) {
        toast.dismiss(loadingToast);
        toast.error(error.response.data);
      }
      saved.current = true;
    },
    [disconnect]
  );

  const FetchUserDetails = useCallback(async () => {
    console.log(saved.current);
    if ((saved.current = false)) return;
    const walletAddress = publicKey as unknown as string;

    try {
      const connectedUserDetails = await axios.post(
        `/api/wallet/me/${walletAddress}`
      );

      if (connectedUserDetails.data) {
        setUserDetails(connectedUserDetails.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [publicKey, saved.current]);

  const saveAndFetchData = async () => {
    if (connected && publicKey) {
      await saveWalletAddressToDatabase(publicKey as unknown as string);
      await FetchUserDetails();
    }
  };

  return {
    saveWalletAddressToDatabase,
    FetchUserDetails,
    saveAndFetchData,
    userDetails,
  };
};

export default useWhiteList;

import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSearchParams } from "next/navigation";

interface UserInfoProps {
  refId: string;
  referralCount: number;
  walletAddress: string;
}

interface Iprops {
  referList: [string];
  referralLink: string;
}

const useWhiteList = () => {
  const { disconnect, publicKey, connected } = useWallet();
  const searchParams = useSearchParams();

  const saved = useRef(false);
  const [userDetails, setUserDetails] = useState<Iprops | UserInfoProps>();
  const [allInfo, setAllInfo] = useState<UserInfoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchUserDetails = useCallback(async () => {
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

  const fetchAllInfo = async () => {
    try {
      setIsLoading(true);
      const allUserInfo = await axios.post(`/api/userinfo`);
      setAllInfo(allUserInfo.data);
      setIsLoading(false);
    } catch (err) {
      toast.error("Failed to fetch users data");
    }
  };

  const saveAndFetchData = async () => {
    if (connected && publicKey) {
      await saveWalletAddressToDatabase(publicKey as unknown as string);
      await fetchUserDetails();
    }
  };

  return {
    saveWalletAddressToDatabase,
    fetchUserDetails,
    saveAndFetchData,
    fetchAllInfo,
    userDetails,
    allInfo,
    isLoading,
  };
};

export default useWhiteList;

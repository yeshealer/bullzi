import useWhiteList from "@/hooks/useWhitelist";
import React, { useEffect } from "react";
import { MdOutlineRefresh } from "react-icons/md";

export default function AdminPanelSection() {
  const { fetchAllInfo, allInfo, isLoading } = useWhiteList();

  useEffect(() => {
    fetchAllInfo();
  }, [fetchAllInfo]);

  return (
    <div className="w-screen h-screen p-10 bg-green-400/50">
      <div className="w-full h-full bg-white/10 rounded-3xl p-10 pt-5">
        <div className="w-full flex justify-end">
          <button
            className="btn btn-sm btn-circle btn-outline"
            onClick={fetchAllInfo}
          >
            {isLoading ? (
              <span className="loading loading-spinner" />
            ) : (
              <MdOutlineRefresh className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Wallet Address</th>
                <th>Referral ID</th>
                <th>Referral Count</th>
              </tr>
            </thead>
            <tbody>
              {allInfo &&
                allInfo.map((item, index) => (
                  <tr key={item.walletAddress}>
                    <th>{index + 1}</th>
                    <td>{item.walletAddress}</td>
                    <td>{item.refId}</td>
                    <td>{item.referralCount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

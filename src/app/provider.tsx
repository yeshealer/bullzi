import React, { useMemo } from "react";
import { SessionProvider } from "next-auth/react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  // const network = WalletAdapterNetwork.Mainnet;

  // const wallets = useMemo(
  //   () => [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })],
  //   [network]
  // );

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <SessionProvider>
      {/* <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect> */}
          {/* <WalletModalProvider> */}
            {children}
            {/* </WalletModalProvider> */}
        {/* </WalletProvider>
      </ConnectionProvider> */}
    </SessionProvider>
  );
}

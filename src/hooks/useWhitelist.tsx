import { Program, AnchorProvider, web3, utils } from "@project-serum/anchor";
import { Counter } from "@/api/types/counter";
import {
  connection,
  commitmentlevel,
  counterProgramID,
  counterProgramInterface,
  whitelistProgramID,
  whitelistProgramInterface,
  endpoint,
} from "@/api/utils/constants";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import kp from "@/api/idl/keypair.json";

interface WhiteListProps {
  wallet: AnchorWallet | undefined;
  publicKey: web3.PublicKey | null;
}

async function airdrop(connection, destinationWallet, amount) {
  const airdropSignature = await connection.requestAirdrop(
    destinationWallet.publicKey,
    amount * web3.LAMPORTS_PER_SOL
  );
  const latestBlockHash = await connection.getLatestBlockhash();
  const tx = await connection.confirmTransaction({
    blockhash: latestBlockHash.blockhash,
    lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    signature: airdropSignature,
  });
  return tx;
}

const useWhitelist = ({ wallet, publicKey }: WhiteListProps) => {
  const arr = Object.values(kp._keypair.secretKey);
  const secret = new Uint8Array(arr);
  const whitelist = web3.Keypair.fromSecretKey(secret);

  const getProvider = () => {
    if (!wallet) return;
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: commitmentlevel,
    });
    return provider;
  };

  const fetchData = async (publicKey: web3.PublicKey) => {
    const provider = getProvider();

    const counterProgram = new Program(
      counterProgramInterface,
      counterProgramID,
      provider
    );
    const [counterPDA] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from(utils.bytes.utf8.encode("counter")), publicKey.toBuffer()],
      counterProgramID
    );

    try {
      const counter = await counterProgram.account.counter.fetch(counterPDA);
      console.log((counter as any).count.toNumber());
      return counter;
    } catch (err) {
      console.log(err);
    }
  };

  const InitializeCounter = async (publicKey: web3.PublicKey) => {
    const provider = getProvider();

    const counterProgram = new Program(
      counterProgramInterface,
      counterProgramID,
      provider
    );
    if (!provider) return;

    // await airdrop(provider.connection, whitelist, 1);
    const initial = await counterProgram.provider.connection.getBalance(
      whitelist.publicKey
    );
    console.log(initial);
    console.log(whitelist.publicKey.toString());

    let [counterPDA, counterBump] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from(utils.bytes.utf8.encode("counter")), publicKey.toBuffer()],
      counterProgram.programId
    );

    console.log(counterBump);

    try {
      await counterProgram.methods
        .initCounter(counterBump)
        .accounts({
          authority: publicKey,
          counter: counterPDA,
          systemProgram: web3.SystemProgram.programId,
        })
        .signers([])
        .rpc();
      const counter = await counterProgram.account.counter.fetch(counterPDA);
      // setCounter(counter);
      console.log("Your counter PublicKey: ", counterPDA.toString(), counter);
      // console.log("Your counter number is: ", counter.count.toNumber());
    } catch (e) {
      console.log(e);
    }
    try {
      await counterProgram.methods
        .pointToWhitelist()
        .accounts({
          authority: publicKey,
          counter: counterPDA,
          whitelisting: whitelist.publicKey,
          pointerToWhitelistId: whitelistProgramID,
          systemProgram: web3.SystemProgram.programId,
        })
        .signers([whitelist])
        .rpc();
      let counter = await counterProgram.account.counter.fetch(counterPDA);
      // setCounter(counter);
      console.log("HELLO", counterPDA.toString());
    } catch (e) {
      console.log(e);
    }
  };

  const initContract = async (publicKey: web3.PublicKey) => {
    try {
      const walletAddress = publicKey.toBase58();
      if (!walletAddress) throw new Error("Wallet not connected!");
      await InitializeCounter(publicKey);
    } catch (err) {
      console.log(err);
    }
  };

  const addToWhiteList = async (publicKey: web3.PublicKey) => {
    const provider = getProvider();
    const counterProgram = new Program(
      counterProgramInterface,
      counterProgramID,
      provider
    ) as Program<Counter>;
    const [counterPDA] = await web3.PublicKey.findProgramAddressSync(
      [Buffer.from(utils.bytes.utf8.encode("counter")), publicKey.toBuffer()],
      counterProgramID
    );
    console.log("counter PDA =>", counterPDA.toBase58());
    // let counter = await counterProgram.account.counter.fetch(counterPDA);
    // console.log("current counter => ", counter);
    const money = await counterProgram.provider.connection.getBalance(
      whitelist.publicKey
    );
    console.log("money is : ", money, whitelist.publicKey.toBase58());
    try {
      const [PDA, _] = await web3.PublicKey.findProgramAddressSync(
        [whitelist.publicKey.toBuffer(), publicKey.toBuffer()],
        whitelistProgramID
      );

      await counterProgram.methods
        .addOrRemove(publicKey, false)
        .accounts({
          authority: publicKey,
          counter: counterPDA,
          pdaId: PDA,
          whitelisting: whitelist.publicKey,
          updateId: whitelistProgramID,
          systemProgram: web3.SystemProgram.programId,
        })
        .signers([])
        .rpc();

      const counter = await counterProgram.account.counter.fetch(counterPDA);
      console.log("now counter => ", counter);
      console.log("Adding address", publicKey.toString(), "to the whitelist");
    } catch (err) {
      console.log(err);
    }
  };

  return {
    addToWhiteList,
    initContract,
    fetchData,
  };
};

export default useWhitelist;

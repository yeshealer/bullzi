import CounterIDL from "../idl/counter.json"
import WhitelistIDL from "../idl/whitelist.json"
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js"

export const commitmentlevel = "processed"
export const endpoint = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet")
export const connection = new Connection(endpoint, commitmentlevel)

export const counterProgramID = new PublicKey(CounterIDL.metadata.address)
export const counterProgramInterface = JSON.parse(JSON.stringify(CounterIDL))

export const whitelistProgramID = new PublicKey(WhitelistIDL.metadata.address)
export const whitelistProgramInterface = JSON.parse(JSON.stringify(WhitelistIDL))
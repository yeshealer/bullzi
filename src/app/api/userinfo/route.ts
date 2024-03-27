import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST() {
  try {
    const usersInfo = await db.user.findMany({
      select: {
        walletAddress: true,
        referralCount: true,
        refId: true,
      },
    });
    return NextResponse.json(usersInfo);
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const user = await db.user.findFirst({
      where: {
        walletAddress: id,
      },
      include: {
        referList: true,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetch user details:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

// Function to generate a random string
const generateRandomString = (length: number) => {
  return crypto.randomBytes(length).toString("hex");
};

// Function to generate referral link
const generateReferralLink = (refId: string) => {
  return `http://localhost:3000/earlyaccess?ref=${refId}`;
};

export async function POST(req: Request) {
  try {
    const { walletAddress, referrerId } = await req.json();

    if (!walletAddress || typeof walletAddress !== "string") {
      return new NextResponse("Invalid wallet address", { status: 400 });
    }

    // Check for existing wallet address
    const existingUser = await db.user.findUnique({
      where: {
        walletAddress,
      },
    });

    if (existingUser) {
      return new NextResponse("Your wallet already whitelisted", {
        status: 400,
      });
    }

    const refId = generateRandomString(3); // Increase length for better uniqueness

    // Create new user
    const newUser = await db.user.create({
      data: {
        walletAddress,
        refId,
        referralLink: generateReferralLink(refId),
      },
    });

    // If referrerId is provided, update the referrer's referred count and refer list
    if (referrerId) {
      const referrer = await db.user.findUnique({
        where: {
          refId: referrerId,
        },
      });

      if (referrer) {
        const newReferee = await db.referee.create({
          data: {
            walletAddress,
            User: {
              connect: { id: newUser.id },
            },
          },
        });

        await db.user.update({
          where: {
            id: referrer.id,
          },
          data: {
            referralCount: {
              increment: 1,
            },
            referList: {
              connect: [{ id: newReferee.id }],
            },
          },
        });
      } else {
        console.error("Referrer not found");
        // Handle case where referrer ID doesn't exist
      }
    }

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

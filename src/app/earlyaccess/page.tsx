"use client";

import LandingPage from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BULLZI",
  description: "BULLZI #BULLZIMOVE YOURE STILL EARLY",
  openGraph: {
    images: [
      "https://res.cloudinary.com/pauloski/image/upload/v1710952504/pvd9fjruyjtuvnnjen0h.png",
    ],
  },
  twitter: {
    images: [
      "https://res.cloudinary.com/pauloski/image/upload/v1710952504/pvd9fjruyjtuvnnjen0h.png",
    ],
  },
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
};

const SignupPage = () => {
  return (
    <div>
      {/* <Head>
        <meta charSet="utf-8" />
        <title>BULLZI</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          property="twitter:title"
          name="title"
          content="BULLZI"
          key="title"
        />
        <meta
          property="twitter:description"
          name="description"
          content="#BULLZIMOVE YOURE STILL EARLY"
          key={"description"}
        />
        <meta
          property="twitter:image"
          name="image"
          content="https://res.cloudinary.com/pauloski/image/upload/v1710952504/pvd9fjruyjtuvnnjen0h.png"
        />
        <meta property="twitter:type" content="website" />
        <meta property="twitter:site_name" content="BULLZI" />
        <meta property="twitter:locale" content="en_US" />
      </Head> */}
      <LandingPage />;
    </div>
  );
};

export default SignupPage;

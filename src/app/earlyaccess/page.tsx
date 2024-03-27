"use client";

import LandingPage from "@/components/LandingPage";
import Head from "next/head";

const SignupPage = () => {
  return (
    <div>
      <Head>
        <title>BULLZI</title>
        <desc>#BULLZIMOVE YOURE STILL EARLY</desc>
        <meta property="og:title" content="BULLZI" key="title" />
        <meta
          property="og:description"
          content="#BULLZIMOVE YOURE STILL EARLY"
          key={"description"}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/pauloski/image/upload/v1710952504/pvd9fjruyjtuvnnjen0h.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BULLZI" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <LandingPage />;
    </div>
  );
};

export default SignupPage;

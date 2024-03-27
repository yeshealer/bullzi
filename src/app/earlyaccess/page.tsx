"use client";

import LandingPage from "@/components/LandingPage";
import Head from "next/head";

const SignupPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>BULLZI</title>
        <meta property="og:title" name="title" content="BULLZI" key="title" />
        <meta
          property="og:description"
          name="description"
          content="#BULLZIMOVE YOURE STILL EARLY"
          key={"description"}
        />
        <meta
          property="og:image"
          name="image"
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

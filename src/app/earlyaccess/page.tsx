"use client";

import LandingPage from "@/components/LandingPage";
import { Helmet } from "react-helmet";

const SignupPage = () => {
  return (
    <div>
      <Helmet>
        <meta
          property="og:title"
          content="BULLZI #BULLZIMOVE YOURE STILL EARLY"
        />
        <meta property="og:description" content="WEBADDRESS/EARLYACCESS/CODE" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/pauloski/image/upload/v1710952504/pvd9fjruyjtuvnnjen0h.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BULLZI" />
        <meta property="og:locale" content="en_US" />
        {/* Add more OG properties as needed */}
      </Helmet>
      <LandingPage />;
    </div>
  );
};

export default SignupPage;

"use client";

import LandingPage from "@/components/LandingPage";
import { Helmet } from "react-helmet";

const SignupPage = () => {
  return (
    <div>
      <Helmet>
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
      </Helmet>
      <LandingPage />;
    </div>
  );
};

export default SignupPage;

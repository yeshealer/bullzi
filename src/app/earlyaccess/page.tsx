import LandingPage from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://res.coudinary.com"),
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
};

const SignupPage = () => {
  return <LandingPage />;
};

export default SignupPage;

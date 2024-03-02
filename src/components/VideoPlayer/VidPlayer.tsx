import React, { useEffect } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

interface VidPlayerProps {
  publicID: string;
}

export default function VidPlayer({ publicID }: VidPlayerProps) {
  return (
    <CloudinaryContext cloud_name="dbum6i1sx" className="h-full w-full">
      <Video
        publicId={publicID}
        className="w-full h-full min-h-screen object-cover"
        loop
        autoPlay
        muted
      />
    </CloudinaryContext>
  );
}

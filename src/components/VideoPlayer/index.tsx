"use client";

import React, { useEffect, useState } from "react";
import VidPlayer from "./VidPlayer";

export default function VideoPlayer() {
  const publicID = process.env.NEXT_PUBLIC_CLOUDINARY_MEDIA_ID;
  const [videoID, setVideoID] = useState<string>("");

  useEffect(() => {
    if (publicID) {
      setVideoID(publicID);
    }
  }, [publicID]);

  return (
    <div className="absolute top-0 z-10 w-full h-full">
      <VidPlayer publicID={videoID} />
    </div>
  );
}

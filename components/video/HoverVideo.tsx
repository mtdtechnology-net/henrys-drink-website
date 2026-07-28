"use client";

import React, { useRef, ComponentPropsWithoutRef } from "react";

export interface HoverVideoProps extends ComponentPropsWithoutRef<"video"> {
  src: string;
  poster?: string;
  containerClassName?: string;
  videoClassName?: string;
  onPlayStart?: () => void;
  onPlayPause?: () => void;
}

export const HoverVideo: React.FC<HoverVideoProps> = ({
  src,
  poster,
  containerClassName = "",
  videoClassName = "h-full w-full object-cover",
  onPlayStart,
  onPlayPause,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
  ...videoProps
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      onPlayStart?.();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      onPlayPause?.();
    }
  };

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        className={videoClassName}
        {...videoProps}
      />
    </div>
  );
};
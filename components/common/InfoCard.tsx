import { Comfortaa } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["500"],
});

export interface InfoCardProps {
  title: ReactNode;
  description?: ReactNode;
  subtitle?: ReactNode;
  ctaText?: string;
  href?: string;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
  ctaClassName?: string;
  align?: "left" | "right";
  shadowColor?: string; 
}

export const InfoCard = ({
  title,
  description,
  subtitle,
  ctaText = "Discover the story",
  href = "#",
  className = "",
  titleClassName = "font-perandory text-[clamp(1.25rem,18vw,4.5rem)] md:text-[6vw] xl:text-[5.5vw] leading-[0.95] text-white",
  textClassName = "text-[12px] sm:text-[16px] md:text-[20px] xl:text-[23px] 2xl:text-[27px] text-white/90",
  ctaClassName = "text-[13px] sm:text-[16px] md:text-[1.8vw] xl:text-[1.5vw] font-medium text-white underline transition-opacity hover:opacity-80 mt-2 md:mt-0",
  align = "left",
  shadowColor = "rgba(0, 0, 0, 0.55)", 
}: InfoCardProps) => {
  const isRight = align === "right";

  const textShadowStyle = {
    textShadow: `0px 4px 6.8px ${shadowColor}`,
  };

  return (
    <div
      className={`
        flex flex-col justify-between
        ${isRight ? "items-end text-right" : "items-start text-left"}
        pointer-events-none
        ${className}
      `}
    >
      <div className={`flex w-full flex-col ${isRight ? "items-end text-right" : "items-start text-left"}`}>
        <h1
          className={`w-full ${isRight ? "text-right" : "text-left"} ${titleClassName}`}
          style={{ fontStretch: "semi-condensed", ...textShadowStyle }}
        >
          {title}
        </h1>

        {description && (
  <p
    className={`${comfortaa.className} mt-2 sm:mt-4 w-full whitespace-pre-line ${isRight ? "text-right" : "text-left"} ${textClassName}`}
    style={textShadowStyle}
  >
    {description}
  </p>
)}

        {Boolean(subtitle) && (
          <p
            className={`${comfortaa.className} w-full ${isRight ? "text-right" : "text-left"} ${textClassName}`}
            style={textShadowStyle}
          >
            {subtitle}
          </p>
        )}
      </div>

      {ctaText && (
        <Link
          href={href}
          className={`${comfortaa.className} pointer-events-auto ${isRight ? "text-right" : "text-left"} ${ctaClassName}`}
          style={textShadowStyle}
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
};
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
}

export const InfoCard = ({
  title,
  description,
  subtitle,
  ctaText = "Discover the story",
  href = "#",
  className = "",
  titleClassName = "font-perandory text-[clamp(2.25rem,5.5vw,4rem)] md:text-[6vw] xl:text-[5.5vw] leading-[0.95] text-white",
  textClassName = "text-[20px] text-white/90",
  ctaClassName = "text-[2vw] md:text-[2.2vw] xl:text-[2vw] font-medium text-white underline transition-opacity hover:opacity-80",
  align = "left", 
}: InfoCardProps) => {
  const isRight = align === "right";

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
          style={{ fontStretch: "semi-condensed" }}
        >
          {title}
        </h1>

        {description && (
          <p className={`${comfortaa.className} mt-2 sm:mt-4 w-full ${isRight ? "text-right" : "text-left"} ${textClassName}`}>
            {description}
          </p>
        )}

        {subtitle && (
          <p className={`${comfortaa.className} w-full ${isRight ? "text-right" : "text-left"} ${textClassName}`}>
            {subtitle}
          </p>
        )}
      </div>

      {ctaText && (
        <Link
          href={href}
          className={`${comfortaa.className} pointer-events-auto ${isRight ? "text-right" : "text-left"} ${ctaClassName}`}
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
};
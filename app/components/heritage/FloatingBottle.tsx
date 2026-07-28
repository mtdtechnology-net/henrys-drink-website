import Image from "next/image";

export function FloatingBottle() {
  return (
    <div
      className="pointer-events-none absolute right-[4%] top-[calc(100svh-4rem)] z-[5] w-[clamp(380px,28vw,650px)] [&_img]:block [&_img]:h-auto [&_img]:w-full max-[1200px]:right-[-1%] max-[1200px]:top-[calc(100svh-5rem)] max-[1200px]:w-[clamp(340px,36vw,470px)] max-[1024px]:right-[-3%] max-[1024px]:top-[calc(100svh-4rem)] max-[1024px]:w-[clamp(310px,39vw,410px)] max-[768px]:right-[-18%] max-[768px]:top-[calc(100svh-2rem)] max-[768px]:w-[min(55vw,300px)] max-[480px]:right-[-24%] max-[480px]:w-[245px]"
      aria-hidden="true"
    >
      <Image
        src="/bottle.svg"
        alt=""
        width={410}
        height={1200}
        sizes="(max-width: 768px) 48vw, 410px"
      />
    </div>
  );
}

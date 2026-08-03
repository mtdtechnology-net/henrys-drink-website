import Image from "next/image";

export function FloatingBottle() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-[clamp(-20px,3vw,60px)] z-[20] aspect-[410/1200] w-[clamp(410px,33vw,680px)] origin-bottom scale-y-[1.10] max-[1200px]:right-[1%] max-[1200px]:w-[440px] max-[1024px]:right-[-3%] max-[1024px]:w-[380px] max-[768px]:right-[-14%] max-[768px]:w-[300px] max-[480px]:right-[-20%] max-[480px]:w-[245px] [@media(min-width:769px)_and_(max-height:1000px)]:!right-[2%] [@media(min-width:769px)_and_(max-height:1000px)]:!w-[410px] min-[1600px]:bottom-[70px] min-[1600px]:scale-y-[1.22] min-[1600px]:w-[clamp(460px,31vw,700px)]"
      aria-hidden="true"
    >
      <Image
        src="/bottle.svg"
        alt=""
        fill
        className="object-contain"
        sizes="(max-width: 768px) 48vw, 410px"
      />
    </div>
  );
}

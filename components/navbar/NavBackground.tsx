type NavbarMode = "light" | "dark";

interface NavBackgroundProps {
  mode?: NavbarMode;
}

export const NavBackground = ({ mode = "light" }: NavBackgroundProps) => {
  if (mode === "dark") {
    return (
      <div
        className="absolute inset-0 -z-10 backdrop-blur-md pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 15%, rgba(0,0,0,0.32) 30%, rgba(0,0,0,0.20) 45%, rgba(0,0,0,0.10) 65%, rgba(0,0,0,0.04) 80%, transparent 100%)",
        }}
      />
    );
  }

  return (
    <div
      className="absolute inset-0 -z-10 backdrop-blur-[2px] pointer-events-none [mask-image:linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.55) 20%, rgba(255,255,255,0.45) 35%, rgba(255,255,255,0.32) 55%, rgba(255,255,255,0.20) 75%, rgba(255,255,255,0.10) 90%, rgba(255,255,255,0.04) 98%, transparent 100%)",
      }}
    />
  );
};
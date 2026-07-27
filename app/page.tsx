import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[url('/image.svg')] bg-cover bg-center bg-no-repeat text-white">
      <h1 className="p-8 text-3xl font-bold">My Home Page</h1>
    </main>
  );
}
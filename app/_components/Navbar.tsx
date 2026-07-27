import { NavbarTextItem } from "./NavTextItem";
import { NavLogo } from "./NavLogo";
import { NavShopIcon } from "./NavShopIcon";

interface NavbarProps {
  tabs: string[];
  signatureUrl: string;
  shopIconUrl: string;
  itemCount: number;
}

export const Navbar = ({ tabs, signatureUrl, shopIconUrl, itemCount}: NavbarProps) => {
  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  return (
    <header className="fixed inset-x-0 z-50 py-5">
     
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_50%,transparent_97%)] pointer-events-none" />
     
      <nav className="relative flex h-full w-full bg-transparent px-[80px]">
        
        <div className="w-[35%] flex flex-1 gap-24 items-center justify-start">
          {leftTabs.map((tab) => (
            <NavbarTextItem key={tab} text={tab} href="/" />
          ))} 
        </div>
        
        <div className="w-[30%] flex items-center justify-center">
          <NavLogo signatureUrl={signatureUrl} />
        </div>

        <div className="w-[35%] flex flex-1 gap-24 items-center justify-end">

          {rightTabs.map((tab) => (
            <NavbarTextItem key={tab} text={tab} href="/" />
          ))}

          <NavShopIcon iconUrl={shopIconUrl} itemCount={itemCount} />

        </div>
      </nav>
    </header>
  );

};
import { NavbarTextItem } from "./NavTextItem";
import { NavLogo } from "./NavLogo";
import { NavShopIcon } from "./NavShopIcon";

interface NavbarProps {
  tabs: string[];
  signatureUrl: string;
  shopIconUrl: string;
}

export const Navbar = ({ tabs, signatureUrl, shopIconUrl }: NavbarProps) => {
  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  return (
    <nav className="fixed w-full h-[99px] flex flex-row justify-between items-center py-4 px-12 bg-transparent z-50">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_50%,transparent_97%)] pointer-events-none" />

      <div className="flex-1 flex flex-row items-center justify-around mx-auto px-8">        
        {leftTabs.map((tab) => (
          <NavbarTextItem key={tab} text={tab} href='/'/>
        ))}

      <NavLogo signatureUrl={signatureUrl} />
      

        {rightTabs.map((tab) => (
          <NavbarTextItem key={tab} text={tab} href='/'/>
        ))}
      </div>

      {/* Right Shop Icon */}
      <NavShopIcon iconUrl={'/ShopIcon.svg'} itemCount={3} />

    </nav>
  );
};
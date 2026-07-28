import Link from 'next/link';

export interface NavShopIconProps {
  href?: string;
  iconUrl: string;
  itemCount?: number;
  altText?: string;
}

export const NavShopIcon = ({
  href = '/cart',
  iconUrl,
  itemCount = 0,
  altText = 'Shopping cart',
}: NavShopIconProps) => {
  return (
    <Link
      href={href}
      aria-label={`${altText} with ${itemCount} items`}
      className="relative inline-flex items-center justify-center p-2 transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
    >
      <img
        src={iconUrl}
        alt={altText}
        className="w-6 h-6 object-contain flex-shrink-0"
      />

      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-[#95000D] rounded-full transform translate-x-1/5 -translate-y-1/5">
          {itemCount}
        </span>
      )}
    </Link>
  );
};
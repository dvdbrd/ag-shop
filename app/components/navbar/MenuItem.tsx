'use client';

import Link from "next/link";

interface MenuItemProps {
   href: string;
   label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
   href,
   label
}) => {
   return ( 
      <Link
         href={href}
         className="
            px-4
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
         "
      >
         {label}
      </Link>
    );
}
 
export default MenuItem;
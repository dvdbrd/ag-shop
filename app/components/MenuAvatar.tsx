'use client';

import Image from "next/image";

const MenuAvatar = () => {
   return ( 
      <Image 
         className="rounded-full"
         height="25"
         width="25"
         alt="Menu Avatar"
         src="/images/placeholder.png"
      />
    );
}
 
export default MenuAvatar;
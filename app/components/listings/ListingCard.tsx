'use client';

import { Listing } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../Button";

interface ListingCardProps {
  data: Listing;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId
}) => {
  const router = useRouter();

  return ( 
    <div onClick={() => router.push(`/tours/${data.title}`)} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image fill alt="Listing" src={data.imageSrc} className="object-cover h-full w-full group-hover:scale-110 transition" />
        </div>
        <div className="font-semibold text-lg">
          {data.title}
        </div>
        <div className="font-light text-neutral-500">
          {data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            ${data.price}
          </div>
          <div className="font-light">
            /person
          </div>
        </div>

      </div>
    </div>
   );
}
 
export default ListingCard;
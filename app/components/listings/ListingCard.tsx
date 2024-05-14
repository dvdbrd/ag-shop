'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Listing } from '@/src/types';

interface ListingCardProps {
  data: Listing; // Array of Listing objects
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

  const handleClick = (listingId: string) => {
    // Handle navigation to the listing details page using the provided listingId
    router.push(`/tours/${listingId}`);
  };

  return (
    <div className="col-span-1 cursor-pointer group">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <img src={data.imageSrc} alt={data.title} />
      <p>Category: {data.category}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
};

export default ListingCard;

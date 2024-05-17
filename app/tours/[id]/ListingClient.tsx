'use client';

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import { categories } from "@/app/components/navbar/Categories";
import { SafeListing } from "@/app/types"
import { useMemo } from "react";

interface ListingClientProps {
   listing: SafeListing
}

const ListingClient: React.FC<ListingClientProps> = ({
   listing
}) => {
   const category = useMemo(() => {
      return categories.find((item) => item.label === listing.category);
   }, [listing.category])
   return ( 
      <Container>
         <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col gap-6">
               <ListingHead title={listing.title} imageSrc={listing.imageSrc} id={listing.id} />
            </div>
         </div>
      </Container>
    );
}
 
export default ListingClient;
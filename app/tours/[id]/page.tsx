import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
   listingId?: string;
}

const TourPage = async ({ params }: { params: IParams }) => {
   const listing = await getListingById(params);

   if(!listing) {
      return (
         <EmptyState />
      )
   }

   return ( 
      <div>
         <ListingClient listing={listing} />
      </div>
    );
}
 
export default TourPage;
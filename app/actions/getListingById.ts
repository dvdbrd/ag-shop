import prisma from "@/app/libs/prismadb"

interface IParams {
   listingId?: string;
}

export default async function getListingById(
   params: IParams
) {
   try {
      const { listingId } = params;

      if (!listingId) {
         return null;
       }

      const listing = await prisma.listing.findUnique({
         where: {
            id: listingId
         }
      });

      if (!listing) {
         return null;
      }

      return listing
   } catch (error: any) {
      throw new Error(error)
   }
}
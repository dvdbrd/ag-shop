import { NextResponse } from "next/server";

export async function POST(
   request: Request
) {
   const body = await request.json();
   const {
      title,
      description,
      imageSrc,
      category,
      duration,
      price
   } = body;

   const listing = await prisma.listing.create({
      data: {
         title,
         description,
         imageSrc,
         category,
         duration,
         price
      }
   });
}


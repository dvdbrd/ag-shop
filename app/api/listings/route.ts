import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

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
         price: parseInt(price, 10)
      }
   });

   return NextResponse.json(listing);
}
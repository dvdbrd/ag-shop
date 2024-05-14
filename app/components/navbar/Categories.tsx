'use client';

import { FaHiking, FaRegSnowflake, FaSkiingNordic } from "react-icons/fa";
import Container from "../Container";
import { BiCycling } from "react-icons/bi";
import { GiJeep, GiMountainClimbing, GiPaddles, GiUndergroundCave } from "react-icons/gi";
import { TbKayak } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { LiaChurchSolid } from "react-icons/lia";
import { LuGrape } from "react-icons/lu";
import { PiBowlFoodFill } from "react-icons/pi";

export const categories = [
   {
      label: 'Hiking',
      icon: FaHiking,
      description: 'This is hiking tour'
   },
   {
      label: 'Cycling',
      icon: BiCycling,
      description: 'This is cycling tour'
   },
   {
      label: 'Rafting',
      icon: GiPaddles,
      description: 'This is rafting tour'
   },
   {
      label: 'Kayaking',
      icon: TbKayak,
      description: 'This is kayaking tour'
   },
   {
      label: 'Snow',
      icon: FaRegSnowflake,
      description: 'This is snow tour'
   },
   {
      label: 'Caves',
      icon: GiUndergroundCave,
      description: 'This is cave tour'
   },
   {
      label: 'Climbing',
      icon: GiMountainClimbing,
      description: 'This is cave tour'
   },
   {
      label: 'Offroad',
      icon: GiJeep,
      description: 'This is offroad tour'
   },
   {
      label: 'History',
      icon: LiaChurchSolid,
      description: 'This is historic tour'
   },
   {
      label: 'Culture',
      icon: LuGrape,
      description: 'This is cultural tour'
   },
   {
      label: 'Cuisine',
      icon: PiBowlFoodFill,
      description: 'This is cuisine tour'
   },
]

const Categories = () => {
   const params = useSearchParams();
   const category = params?.get('category');
   const pathname = usePathname();

   const isMainPage = pathname === '/';

   if (!isMainPage) {
      return null;
   }

   return ( 
      <Container>
         <div
            className="
               py-4
               flex
               flex-row
               items-center
               justify-between
               overflow-x-auto
            "
         >
            {categories.map((item) => (
               <CategoryBox
                  key={item.label}
                  label={item.label}
                  selected={category === item.label}
                  icon={item.icon}
               />
            ))}
         </div>
      </Container>
    );
}
 
export default Categories;
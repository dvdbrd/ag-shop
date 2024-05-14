'use client';

import { BiSearch } from 'react-icons/bi'

const Search = () => {
   return ( 
      <div
         className="
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-[10px]
            shadow-sm
            hover:shadow-sm
            transition
            cursor-pointer
         "
      >
         <div
            className="
               flex
               flex-row
               items-center
               justify-between
            "
         >
            <div
               className="
                  text-lg
                  font-semibold
                  px-6
               "
            >
               I Am
            </div>
            <div
               className="
                  hidden
                  sm:block
                  text-lg
                  font-semibold
                  px-6
                  border-x-[1px]
                  flex-1
                  text-center
               "
            >
               I Want         
            </div>
            <div
               className="
                  text-lg
                  pl-6
                  pr-2
                  text-gray-600
                  flex
                  flex-row
                  items-center
                  gap-3
               "
            >
               <div className="hidden sm:block">Add Travelers</div>
               <div
                  className="
                     p-2
                     bg-red-500
                     rounded-[10px]
                     text-white
                  "
               >
                  <BiSearch size={18} />
               </div>
            </div>
         </div>
      </div>
    );
}
 
export default Search;
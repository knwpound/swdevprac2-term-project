import { Banner } from "@/components/Banner";
import { CardContainer } from "@/components/CardContainer";
import { Pagination } from "@/components/reused/Pagination";
import { Plus } from 'lucide-react';

export default function Event() {
  return (
    <div className="w-full">
      <Banner />
      <div className="w-full px-10 h-[90vh] space-y-8 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif font-bold text-2xl">Events</h1>
          <div className="flex flex-row gap-1">
          <input
            type="text"
            placeholder="Search"
            className="w-[300px] bg-gray-200 px-2 rounded-md"
          />  
          <Plus size={"30"} strokeWidth={"3"} className="h-full rounded-md p-1 text-gray-500 
          hover:bg-gray-200 hover:text-gray-700 active:text-black active:bg-gray-300 transition duration-150"/>
          </div>
          
        </div>
        <CardContainer />
        <Pagination/>
      </div>
      
    </div>
  );
}

import getTickets from "@/libs/getTickets";
import { Banner } from "@/components/Banner";
import { Pagination } from "@/components/reused/Pagination";
import { TicketContainer } from "@/components/TicketContainer";
import { Plus } from 'lucide-react';
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Tickets() {
  const session = await getServerSession(authOptions);
  let tickets;
  if (session){
    tickets = await getTickets(session.user.token)
  }
  
  return (
    <div className="w-full">
      <Banner />
      <div className="w-full px-10 h-[90vh] space-y-8 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif font-bold text-2xl">My Tickets</h1>
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
        <TicketContainer ticketJson={tickets}/>
        <Pagination/>
      </div>
      
    </div>
  );
}

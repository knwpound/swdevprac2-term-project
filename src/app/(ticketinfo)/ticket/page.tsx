import getTickets from "@/libs/getTickets";
import { Banner } from "@/components/Banner";
import { Pagination } from "@/components/reused/Pagination";
import { TicketContainer } from "@/components/TicketContainer";
import { Plus } from 'lucide-react';
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SkeletonContainer } from "@/components/SkeletonContainer";


export default async function Tickets() {
  const session = await getServerSession(authOptions);
  if (!session) return
  const tickets = getTickets(session.user.token)
  
  return (
    <div className="w-full">
      <Banner />
      <div className="w-full px-10 py-15 space-y-8 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif font-bold text-2xl">My Tickets</h1>
          <div className="w-[30%] flex flex-row gap-1 justify-end">
          </div>
          
        </div>
        <Suspense fallback={<SkeletonContainer/>}>
          <TicketContainer ticketJson={tickets}/>
        </Suspense>
      
      </div>
      
    </div>
  );
}

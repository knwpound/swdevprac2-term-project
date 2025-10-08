import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { Banner } from "@/components/Banner";
import { CardContainer } from "@/components/CardContainer";
import { TicketContainer } from "@/components/TicketContainer";
import { DefaultFooter } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-full">
        <Banner></Banner>
        <div className="w-full px-10 h-[90vh] space-y-8 flex flex-col justify-center">
          <div className="flex flex-row justify-between">
            <h1 className="font-serif font-bold text-2xl">Recommend Event</h1>
            <input
              type="text"
              placeholder="Search"
              className="w-[300px] bg-gray-200 px-2 rounded-md"
            />
          </div>
          <CardContainer />
        </div>
        <div className="w-full h-screen bg-[#F7EBD3] py-15 flex flex-col items-center justify-center gap-10">
          <h1 className="font-serif font-bold text-2xl">My Tickets</h1>
          <TicketContainer />
        </div>
        <div className="w-full px-10 h-[90vh] space-y-8 flex flex-col justify-center">
          <div className="flex flex-row justify-between">
            <h1 className="font-serif font-bold text-2xl">Upcoming Events</h1>
          </div>
          <CardContainer />
        </div>
      </main>
      <DefaultFooter/>
    </div>
  );
}

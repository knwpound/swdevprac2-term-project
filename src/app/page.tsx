import { Banner, LightBanner } from "@/components/Banner";
import { CardContainer } from "@/components/CardContainer";
import { TicketContainer } from "@/components/TicketContainer";
import { DefaultFooter, LightFooter } from "@/components/Footer";
import { SkeletonContainer } from "@/components/SkeletonContainer";
import getEvents from "@/libs/getEvents";
import getTickets from "@/libs/getTickets";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function Home() {
  const sortedEvents = getEvents({ page: 1, limit: 4, sort: "asc" });
  const recentEvents = getEvents({
    sortBy: "createdAt",
    sort: "desc",
    limit: 4,
  });
  const session = await getServerSession(authOptions);

  let tickets;
  if (session) {
    tickets = await getTickets(session.user.token);
  }

  return (
    <div className="font-sans">
      <main className="w-full">
        <LightBanner />
        <div className="w-full px-10 py-15 flex flex-col justify-center">
          <div className="flex flex-row justify-between pb-10">
            <h1 className="font-serif font-bold text-2xl">Newest Event</h1>
            <input
              type="text"
              placeholder="Search"
              className="w-[300px] bg-gray-200 px-2 rounded-md"
            />
          </div>
          <Suspense fallback={<SkeletonContainer/>}>
            <CardContainer eventJson={recentEvents} />
          </Suspense>
        </div>
        {session ? (
          <div className="w-full h-screen bg-[#F7EBD3] py-15 flex flex-col items-center justify-center gap-10">
            <h1 className="font-serif font-bold text-2xl">My Tickets</h1>
            <Suspense fallback={<div>Tickets Loading...</div>}>
              <TicketContainer ticketJson={tickets} />
            </Suspense>
          </div>
        ) : null}
        <div className="w-full px-10 py-15 flex flex-col justify-center">
          <div className="flex flex-row justify-between pb-10">
            <h1 className="font-serif font-bold text-2xl">Upcoming Events</h1>
          </div>
          <Suspense fallback={<SkeletonContainer/>}>
            <CardContainer eventJson={sortedEvents} />
          </Suspense>
        </div>
      </main>
      <LightFooter />
    </div>
  );
}

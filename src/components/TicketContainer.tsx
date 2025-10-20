import { TicketCard } from "./TicketCard";
import Link from "next/link";
import { Suspense } from "react";

export async function TicketContainer({
  ticketJson,
}: {
  ticketJson: Promise<TicketJson>;
}) {
  const ticketJsonReady = await ticketJson;
  console.log(ticketJsonReady)
  return (
    <div className="w-full flex flex-row flex-wrap gap-6 justify-center">
      {ticketJsonReady.data.map((ticketItem: TicketItem) => (
        <Link key={ticketItem._id} href={`/ticket/${ticketItem._id}`}>
          <TicketCard
            key={ticketItem._id}
            name={ticketItem.event.name}
            date={ticketItem.event.eventDate}
            amount={ticketItem.ticketAmount}
          />
        </Link>
      ))}
    </div>
  );
}

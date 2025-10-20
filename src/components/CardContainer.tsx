import { EventCard } from "./EventCard";
import Link from "next/link";

export async function CardContainer({
  eventJson,
}: {
  eventJson: Promise<EventJson>;
}) {
  const eventJsonReady = await eventJson;
  console.log(eventJsonReady);
  return (
    <div className="w-full flex flex-row flex-wrap gap-6 justify-center">
      {eventJsonReady.data.map((eventItem: EventItem) => (
        <Link key={eventItem._id} href={`/event/${eventItem._id}`}>
          <EventCard
            key = {eventItem._id}
            name={eventItem.name}
            time={new Date(eventItem.eventDate).toLocaleDateString()}
            venue={eventItem.venue}
          />
        </Link>
      ))}
    </div>
  );
}

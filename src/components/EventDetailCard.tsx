export function EventDetailCard({
  date,
  time,
  venue,
  organizer,
  ticket,
}: {
  date: string;
  time: string;
  venue: string;
  organizer: string;
  ticket: string;
}) {
  return (
    <div className="w-[250px] flex flex-col gap-2 bg-white px-5 py-5 rounded-md shadow-md">
      <div className="">
        <p className="text-md font-bold">Event Date</p>
        <p className="text-sm">{date}</p>
        <p className="text-sm">{time}</p>
      </div>
      <div className="">
        <p className="text-md font-bold">Venue</p>
        <p className="text-sm">{venue}</p>
      </div>
      <div className="">
        <p className="text-md font-bold">Organizer</p>
        <p className="text-sm">{organizer}</p>
      </div>
      <div className="">
        <p className="text-md font-bold">Ticket</p>
        <p className="text-sm">{ticket} Available</p>
      </div>
    </div>
  );
}

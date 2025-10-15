import { DefaultButton } from "@/components/reused/Button";
import { Timer } from "@/components/event/Timer";
import { CardContainer } from "@/components/CardContainer";
import { DefaultFooter } from "@/components/Footer";
import { EventDetailCard } from "@/components/EventDetailCard";
import getEvent from "@/libs/getEvent";
import { formatDateTime } from "@/utils/formatDateTime";

export default async function EventDetail({params}:{params:Promise<{eid:string}>}) {
  const {eid} = await params
  const eventDetail = await getEvent(eid)
  const result = formatDateTime(eventDetail.data.eventDate)

  return (
    <div>
      <div
        className="w-full h-[400px] bg-[url(/pics/banner1.png)] bg-cover bg-[center_40%] py-15
        flex flex-col justify-center items-center"
      ></div>
      <div className="w-full flex flex-col gap-3 justify-center items-center py-10">
        <h1 className="font-serif font-bold text-xl">
          {eventDetail.data.name}
        </h1>
        <Timer targetDateISO={eventDetail.data.eventDate}/>
        <div>
          <DefaultButton text="Reserve" />
        </div>
      </div>
      <div className="w-full flex flex-row gap-25 px-5 justify-center">
        <div className="w-[50%] flex flex-col gap-3">
          <p className="font-bold text-lg">Description</p>
          <p className="text-sm">
           {eventDetail.data.description}
          </p>
          <p className="text-sm">
            Ticket purchases are subject to standard booking terms. 
            Each account may purchase a maximum of 5 tickets. 
            Cancellations are eligible for a 50% refund only 
            if requested at least 48 hours before the event starts. 
            Purchased tickets are non-transferable and cannot be redeemed for cash. 
            Attendees must present their tickets along with valid identification upon entry.
          </p>
        </div>
        <EventDetailCard date={result.date} time={result.time} venue={eventDetail.data.venue} organizer={eventDetail.data.organizer} ticket={eventDetail.data.availableTicket}/>
      </div>
      <div className="w-full px-10 h-[90vh] space-y-8 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif font-bold text-2xl">Upcoming Events</h1>
        </div>
        {/* <CardContainer /> */}
      </div>
      <DefaultFooter />
    </div>
  );
}

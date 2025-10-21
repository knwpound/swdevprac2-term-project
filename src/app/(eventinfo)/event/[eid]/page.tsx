"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import getEvent from "@/libs/getEvent";
import createTicket from "@/libs/postTicket";
import { DefaultButton } from "@/components/reused/Button";
import { Timer } from "@/components/event/Timer";
import { DefaultFooter } from "@/components/Footer";
import { EventDetailCard } from "@/components/EventDetailCard";
import { ReservationModal } from "@/components/modal/InputModal";
import { formatDateTime } from "@/utils/formatDateTime";

export default function EventDetail({ params }: { params: { eid: string } }) {
  const { eid } = params;
  // const eventDetail = await getEvent(eid)
  const router = useRouter();
  const { data: session } = useSession();

  const [eventDetail, setEventDetail] = useState<any>(null);
  const [reserveModal, setReserveModal] = useState(false);
  const [ticketAmount, setTicketAmount] = useState(0);

  useEffect(() => {
    async function fetchEvent() {
      const data = await getEvent(eid);
      setEventDetail(data);
    }
    fetchEvent();
  }, [eid]);

  if (!eventDetail) return <p>Loading...</p>;
  const result = formatDateTime(eventDetail.data.eventDate);

  async function handleReservation() {
    if (!session) return;
    try {
      const result = await createTicket({
        event: eid,
        ticketAmount: ticketAmount,
        token: session.user.token,
      });
      console.log("Ticket created:", result);
      router.push(`/ticket`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div
        className={`w-full h-[400px] py-15
        flex flex-col justify-center items-center relative`}
      >
        <Image
          src={eventDetail.data.posterPicture}
          alt=""
          fill
          className="object-cover rounded-t-lg"
        ></Image>
      </div>
      {reserveModal ? (
        <ReservationModal
          onClose={() => setReserveModal(!reserveModal)}
          onChange={(e: any) => setTicketAmount(e.target.value)}
          onClick={handleReservation}
        />
      ) : null}

      <div className="w-full flex flex-col gap-3 justify-center items-center py-10">
        <h1 className="font-serif font-bold text-xl">
          {eventDetail.data.name}
        </h1>
        <Timer targetDateISO={eventDetail.data.eventDate} />
        <div>
          {session?.user.role === "admin" ? (
            <Link href={`/event/${eid}/edit`}>
              <DefaultButton text="Edit" />
            </Link>
          ) : (
            <DefaultButton
              text="Reserve"
              onClick={() => setReserveModal(!reserveModal)}
            />
          )}
        </div>
      </div>
      <div className="w-full flex flex-row gap-25 px-5 justify-center">
        <div className="w-[50%] flex flex-col gap-3">
          <p className="font-bold text-lg">Description</p>
          <p className="text-sm">{eventDetail.data.description}</p>
          <p className="text-sm">
            Ticket purchases are subject to standard booking terms. Each account
            may purchase a maximum of 5 tickets. Cancellations are eligible for
            a 50% refund only if requested at least 48 hours before the event
            starts. Purchased tickets are non-transferable and cannot be
            redeemed for cash. Attendees must present their tickets along with
            valid identification upon entry.
          </p>
        </div>
        <EventDetailCard
          date={result.date}
          time={result.time}
          venue={eventDetail.data.venue}
          organizer={eventDetail.data.organizer}
          ticket={eventDetail.data.availableTicket}
        />
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

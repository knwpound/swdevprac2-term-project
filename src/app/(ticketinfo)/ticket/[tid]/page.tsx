"use client";
import { useState, useEffect, use } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import getTicket from "@/libs/getTicket";
import updateTicket from "@/libs/editTicker";
import deleteTicket from "@/libs/deleteTicket";
import Image from "next/image";
import { DefaultButton, LightButton } from "@/components/reused/Button";
import { DefaultInput } from "@/components/reused/DefaultInput";
import { DeleteEventModal } from "@/components/modal/InputModal";
import { formatDateTime } from "@/utils/formatDateTime";

export default function TicketDetail({
  params,
}: {
  params: Promise<{ tid: string }>;
}) {
  const router = useRouter();
  const { tid } = use(params);
  const { data: session } = useSession();

  const [ticket, setTicket] = useState<TicketItem>();
  const [totalTicket, setTotalTicket] = useState(0);
  const [eventDate, setEventDate] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchTicket() {
      if (!session) return;

      const data = await getTicket(tid, session.user.token);
      setTicket(data.data);
      setTotalTicket(data.data.ticketAmount);
      setEventDate(formatDateTime(data.data.event.eventDate).date);
    }
    fetchTicket();
  }, [tid]);

  async function handleOnSave() {
    if (!tid || !session) return;
    setDisabled(true);

    try {
      const result = await updateTicket({
        id: tid,
        ticketAmount: totalTicket,
        token: session?.user.token,
      });
      alert("Ticket updated");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  // Call Delete Event API
  async function handleOnDelete() {
    if (!tid || !session) return;

    try {
      const result = await deleteTicket(tid, session.user.token);
      alert("Ticket deleted");
      console.log("Ticket deleted:", result);
      router.push(`/ticket`);
    } catch (err) {
      console.error(err);
    }
  }
  if (!ticket) return;
  return (
    <div className="w-full flex flex-row pt-25 px-5 justify-center gap-5">
      {showModal && (
        <DeleteEventModal
          onClose={() => setShowModal(false)}
          onChange={handleOnDelete}
        />
      )}
      <div className="relative w-[50%] h-[400px] shadow-md">
        <Image
          src={ticket.event.posterPicture}
          alt=""
          fill
          className="object-cover rounded-lg"
        ></Image>
      </div>
      <div className="bg-white flex flex-col justify-center px-5 rounded-md gap-5 py-2 shadow-md">
        <div>
          <h1 className="text-2xl font-semibold">The Phomtom of Opera</h1>
          <p>Ticket id #{ticket?._id.slice(-5)}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500 font-semibold">Name</p>
            <DefaultInput
              value={ticket.user.name || ""}
              disabled={true}
            ></DefaultInput>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500 font-semibold">Date</p>
            <DefaultInput value={eventDate} disabled={true}></DefaultInput>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500 font-semibold">Total Tickets</p>
            <DefaultInput
              type="number"
              className="font-medium"
              value={totalTicket.toString()}
              disabled={disabled}
              min="1"
              max="5"
              onChange={(e) => setTotalTicket(parseInt(e.target.value, 10))}
            ></DefaultInput>
          </div>
        </div>

        <div className="w-full flex flex-row items-end gap-3 justify-end">
          {disabled ? (
            <div className="w-full flex flex-row items-end gap-3 justify-end">
              <LightButton text="Delete" onClick={() => setShowModal(true)} />
              <DefaultButton
                text="Edit"
                onClick={() => setDisabled(!disabled)}
              />
            </div>
          ) : (
            <div className="w-full flex flex-row items-end gap-3 justify-end">
              <LightButton text="Cancel" onClick={() => setDisabled(true)} />
              <DefaultButton text="Save" onClick={handleOnSave} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

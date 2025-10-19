"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import getEvent from "@/libs/getEvent";
import updateEvent from "@/libs/updateEvent";
import dayjs, { Dayjs } from "dayjs";
import { DefaultButton, LightButton } from "@/components/reused/Button";
import { MainDetailInputCard } from "@/components/event/MainDetailInputCard";
import { DateInputCard } from "@/components/event/DateInputCard";
import { TicketRangeCard } from "@/components/event/TicketRangeCard";
import { Upload } from "lucide-react";
import { PicsURLInput } from "@/components/modal/InputModal";

export default function EditEventPage() {
  const params = useParams();
  const id = params.eid as string;
  const router = useRouter();

  const [eventDetail, setEventDetail] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const event = await getEvent(id);
        setEventDetail(event.data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [venue, setVenue] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [ticket, setTicket] = useState(0);
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("eventDetail updated:", eventDetail);
    if (eventDetail) {
      const fullDate = dayjs(eventDetail.eventDate);

      setName(eventDetail.name || "");
      setVenue(eventDetail.venue || "");
      setOrganizer(eventDetail.organizer || "");
      setDetail(eventDetail.description || "");
      setDate(fullDate.startOf("day"));
      setStartTime(fullDate);
      setTicket(eventDetail.availableTicket || 0);
      setUrl(eventDetail.posterPicture || "");
    }
  }, [eventDetail]);

  if (!eventDetail) {
    return <p>Loading...</p>;
  }

  async function handleOnSave() {
    if (!date) return;

    try {
      const result = await updateEvent({
        eid: id,
        name,
        description: detail,
        eventDate: date,
        venue,
        organizer,
        availableTicket: ticket,
        posterPicture: url,
      });
      console.log("Event updated:", result);
      router.push(`/event/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex flex-col gap-5 pt-20 pb-5 px-5">
      {showModal && (
        <PicsURLInput
          onClose={() => setShowModal(false)}
          onChange={(e: any) => setUrl(e.target.value)}
          url={url}
        />
      )}
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold font-serif">Add New Event</h1>
        <div className="flex flex-row gap-3">
          <LightButton text="Cancel" />
          <DefaultButton text="Save" onClick={handleOnSave} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 bg-white shadow-md p-5 rounded-md shadow-md">
          <p className="text-lg font-semibold">Thumbnail</p>
          <div className="w-full h-[300px] flex flex-col gap-2 items-center justify-center bg-gray-200 rounded-md ">
            <div
              className="bg-white p-2 rounded-md hover:bg-black hover:text-white transition duration-250 cursor-pointer"
              onClick={(e) => setShowModal(true)}
            >
              <Upload size={"30"} className="hover:text-white" />
            </div>
            <div className="text-center hover:text-slate-600 cursor-pointer">
              <h1 className="font-semibold">Click Here to Add Photo Path</h1>
              <p className="text-sm">Ex. "https://google.drive.com"</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <MainDetailInputCard
            onChangeTitle={(e) => setName(e.target.value)}
            onChangeVenue={(e) => setVenue(e.target.value)}
            onChangeOrganizer={(e) => setOrganizer(e.target.value)}
            onChangeDetail={(e) => setDetail(e.target.value)}
            valueDetail={detail}
            valueOrganizer={organizer}
            valueTitle={name}
            valueVenue={venue}
          />
          <div className="w-[50%] flex flex-col gap-3">
            <DateInputCard
              onChangeDate={(newDate) => setDate(newDate)}
              onChangeTime={(newTime) => setStartTime(newTime)}
              dateValue={date}
              timeValue={startTime}
            />
            <TicketRangeCard onChange={setTicket} ticketValue={ticket} />
          </div>
        </div>
      </div>
    </div>
  );
}

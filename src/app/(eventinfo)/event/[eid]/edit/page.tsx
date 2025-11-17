"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import getEvent from "@/libs/getEvent";
import updateEvent from "@/libs/updateEvent";
import deleteEvent from "@/libs/deleteEvent";
import dayjs, { Dayjs } from "dayjs";
import { DefaultButton, LightButton } from "@/components/reused/Button";
import { MainDetailInputCard } from "@/components/event/MainDetailInputCard";
import { DateInputCard } from "@/components/event/DateInputCard";
import { TicketRangeCard } from "@/components/event/TicketRangeCard";
import { Upload } from "lucide-react";
import Image from "next/image";
import { PicsURLInput, DeleteEventModal } from "@/components/modal/InputModal";

export default function EditEventPage() {
  const params = useParams();
  const router = useRouter();

  const { data: session } = useSession();
  if (!session || !session.user.token) return null;

  const id = params.eid as string;

  // 1. Get Event Detail
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

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [deletedLoading, setDeletedLoading] = useState(false);

  // Event detail state
  const [name, setName] = useState("");
  const [venue, setVenue] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [ticket, setTicket] = useState(0);
  const [url, setUrl] = useState("/pics/banner1.png");

  // 2. Assign initial value
  useEffect(() => {
    
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

  // Call Update Event API
  async function handleOnSave() {
    if (!date) return;
    let combinedEventDate = date;
    if (startTime) {
      combinedEventDate = combinedEventDate.set("hour", startTime.hour()).set("minute", startTime.minute());
    }

    if (combinedEventDate.isBefore(dayjs())) {
      alert("The event date and time cannot be in the past!");
      return;
    }

    setLoading(true);

    try {
      const result = await updateEvent({
        eid: id,
        name,
        description: detail,
        eventDate: combinedEventDate,
        venue,
        organizer,
        availableTicket: ticket,
        posterPicture: url,
      });

      setLoading(false);

      console.log("Event updated:", result);
      alert(`Event ${id} updated`);
      router.push(`/event/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  // Call Delete Event API
  async function handleOnDelete() {
    if (!id || !session) return;
    setDeletedLoading(true);

    try {
      const result = await deleteEvent(id, session.user.token);
      setDeletedLoading(false);

      console.log("Event deleted:", result);
      alert(`Event ${id} deleted`);
      router.push(`/event`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex flex-col gap-5 pt-20 pb-5 px-5">
      {showModal && (
        <PicsURLInput
          onClose={() => setShowModal(false)}
          onSave={(newUrl) => setUrl(newUrl)}
          url={url}
        />
      )}
      {showDeleteModal && (
        <DeleteEventModal
          onClose={() => setShowDeleteModal(false)}
          onChange={handleOnDelete}
          loading={deletedLoading}
        />
      )}

      <div className="flex flex-row max-sm:flex-col justify-between max-sm:justify-center max-sm:gap-2">
        <h1 className="text-2xl font-bold font-serif max-sm:text-xl max-sm:text-center">
          Edit Event #{id}
        </h1>
        <div className="flex flex-row gap-3 max-sm:justify-center">
          <LightButton
            text={deletedLoading?"Deleting...":"Delete"}
            onClick={() => setShowDeleteModal(!showDeleteModal)}
            disabled={loading||deletedLoading}
          />
          <DefaultButton text={loading?"Saving..":"Save"} onClick={handleOnSave} disabled={loading||deletedLoading}/>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 bg-white shadow-md p-5 rounded-md shadow-md">
          <p className="text-lg font-semibold">Thumbnail</p>
          <div className="w-full h-[300px] relative flex flex-col items-center justify-center bg-gray-200 rounded-md overflow-hidden">
            {/* Background image */}
            {url && <Image src={url} alt="" fill className="object-cover" />}
            
            {/* Upload button */}
            <div
              className="z-10 bg-white p-2 rounded-md hover:bg-black hover:text-white transition duration-200 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <Upload size={30} />
            </div>

            {/* Text */}
            <div className="z-10 text-center mt-2 hover:text-slate-600 cursor-pointer">
              <h1 className="font-semibold">Click Here to Add Photo Path</h1>
              <p className="text-sm">Ex. "https://google.drive.com"</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 max-sm:flex-col">
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
          <div className="w-[50%] max-sm:w-full flex flex-col gap-3">
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

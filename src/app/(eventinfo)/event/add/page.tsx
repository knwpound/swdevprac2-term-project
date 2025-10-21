"use client"
import { useState } from "react";
import dayjs, {Dayjs} from "dayjs";
import { DefaultButton, LightButton } from "@/components/reused/Button";
import { MainDetailInputCard } from "@/components/event/MainDetailInputCard";
import { DateInputCard } from "@/components/event/DateInputCard";
import { TicketRangeCard } from "@/components/event/TicketRangeCard";
import { Upload } from "lucide-react";
import { PicsURLInput } from "@/components/modal/InputModal";
import Image from "next/image";
import createEvent from "@/libs/postEvent";
import { useRouter } from "next/navigation";

export  default function AddEventPage() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [venue, setVenue] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs());
  const [ticket, setTicket] = useState(0);
  const [url, setUrl] = useState("");
  const router = useRouter();

  async function handleOnSave() {
    if (!name||!date||!venue||!organizer||!ticket){
      alert("Event's Name,Date,Venue, Organizer and Available Ticket are required!");
      return;
    }
    try {
      const result = await createEvent({
        name,
        description: detail,
        eventDate: date,
        venue,
        organizer, 
        availableTicket: ticket,
        posterPicture: url,
      });
      console.log("Event created:", result);
      router.push(`/event/${result.data._id}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex flex-col gap-5 pt-20 pb-5 px-5">
      {showModal && (
        <PicsURLInput
          onClose={() => setShowModal(false)}
          onSave={(newUrl)=>setUrl(newUrl)}
          url={url}
        />
      )}
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold font-serif">Add New Event</h1>
        <div className="flex flex-row gap-3">
          <LightButton text="Cancel" onClick={()=>router.push(`/event`)}/>
          <DefaultButton text="Save" onClick={handleOnSave}/>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 bg-white shadow-md p-5 rounded-md shadow-md">
          <p className="text-lg font-semibold">Thumbnail</p>
          <div className="w-full h-[300px] relative flex flex-col items-center justify-center bg-gray-200 rounded-md overflow-hidden">
                      {/* Background image */}
                      <Image src={url} alt="" fill className="object-cover" />
          
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
        <div className="flex flex-row gap-5">
          <MainDetailInputCard
            onChangeTitle={(e) => setName(e.target.value)}
            onChangeVenue={(e) => setVenue(e.target.value)}
            onChangeOrganizer={(e) => setOrganizer(e.target.value)}
            onChangeDetail={(e) => setDetail(e.target.value)}
          />
          <div className="w-[50%] flex flex-col gap-3">
            <DateInputCard onChangeDate={(newDate) => setDate(newDate)} onChangeTime={(newTime) => setStartTime(newTime)}/>
            <TicketRangeCard onChange={setTicket} />
          </div>
        </div>
      </div>
    </div>
  );
}

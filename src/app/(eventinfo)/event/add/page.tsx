import { DefaultButton } from "@/components/reused/DefaultButton";
import { LightButton } from "@/components/reused/LightButton";
import { DefaultInput } from "@/components/reused/DefaultInput";
import { MainDetailInputCard } from "@/components/event/MainDetailInputCard";
import { DateInputCard } from "@/components/event/DateInputCard";
import { TicketRangeCard } from "@/components/event/TicketRangeCard";

export default function AddEventPage() {
  return (
    <div className="w-full flex flex-col gap-5 pt-20 pb-5 px-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold font-serif">Add New Event</h1>
        <div className="flex flex-row gap-3">
          <LightButton text="Cancel" />
          <DefaultButton text="Save" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 bg-white shadow-md p-5 rounded-md shadow-md">
          <p className="text-lg font-semibold">Thumbnail</p>
          <div className="w-full h-[300px] bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex flex-row gap-5">
          <MainDetailInputCard/>
          <div className="w-[50%] flex flex-col gap-3">
            <DateInputCard/>
            <TicketRangeCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

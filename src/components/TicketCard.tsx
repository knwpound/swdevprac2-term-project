import Image from "next/image";
import { DefaultButton } from "./reused/Button";
import { formatDateTime } from "@/utils/formatDateTime";
export function TicketCard({name,date,amount}:{name:string,date:string,amount:number}) {
  const eventDate = formatDateTime(date)
  return (
    <div className="w-[270px] h-[330px] flex flex-col bg-white rounded-lg shadow-sm
    hover:shadow-lg transition duration-150">
      <div className="relative w-full h-[60%]">
        <Image
          src={"/pics/banner2.png"}
          alt=""
          fill
          className="object-cover rounded-t-lg"
        ></Image>
      </div>
      <div className="w-full py-5 px-5 flex flex-col gap-2">
        <div className="space-y-1">
            <p className="text-sm text-gray-300 font-semibold">
              Event
            </p>
            <h1 className="font-bold text-xl leading-none">
          {name}
        </h1>
        </div>
        
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-0">
            <p className="text-sm text-gray-300 font-semibold">
              Date
            </p>
            <p className="text-md text-black font-semibold">
              {eventDate.date}
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-sm text-gray-300 font-semibold">
              Time
            </p>
            <p className="text-md text-black font-semibold">
              {eventDate.time}
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-sm text-gray-300 font-semibold">
              Amount
            </p>
            <p className="text-md text-black font-semibold">
              {amount}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
        <DefaultButton text="Edit"/>
      </div>
      </div>
      
    </div>
  );
}

import { DefaultButton } from "@/components/reused/DefaultButton";
import { LightButton } from "@/components/reused/LightButton";
import Image from "next/image";
export default function TicketDetail() {
  return (
    <div className="w-full flex flex-row pt-25 px-5 justify-center gap-5">
      <div className="relative w-[50%] h-[300px] shadow-md">
        <Image
          src={"/pics/banner2.png"}
          alt=""
          fill
          className="object-cover rounded-lg"
        ></Image>
      </div>
      <div className="bg-white flex flex-col justify-center px-5 rounded-md gap-5 py-2 shadow-md">
        <div>
          <h1 className="text-2xl font-semibold">The Phomtom of Opera</h1>
          <p>Ticket id #abcdef</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-500 font-semibold">Name</p>
          <p className="text-lg text-black font-medium">Kanokwan</p>
          <div className="flex flex-col gap-0">
            <p className="text-xs text-gray-500 font-semibold">Date</p>
            <p className="text-lg text-black font-medium">21 Oct</p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-xs text-gray-500 font-semibold">Total Tickets</p>
            <p className="text-lg text-black font-medium">4</p>
          </div>
        </div>

        <div className="w-full flex flex-row items-end gap-3 justify-end">
          <LightButton text="Cancel" />
          <DefaultButton text="Edit" />
        </div>
      </div>
    </div>
  );
}

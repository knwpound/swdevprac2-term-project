import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
export function EventCard({name,venue,time}:{name:string,venue:string,time:string}) {
  return (
    <div className="w-[250px] h-[300px] flex flex-col bg-white rounded-lg shadow-md">
      <div className="relative w-full h-[60%]">
        <Image
          src={"/pics/banner2.png"}
          alt=""
          fill
          className="object-cover rounded-t-lg"
        ></Image>
      </div>
      <div className="w-full py-5 px-5 flex flex-col gap-3">
        <h1 className="font-bold text-xl leading-none">
          {name}
        </h1>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 items-center">
            <MapPin
              color="rgba(71, 71, 71, 0.27)"
              size={"16"}
              strokeWidth={"3"}
            />
            <p className="text-sm text-gray-400 font-bold">
              {venue}
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Clock
              color="rgba(71, 71, 71, 0.27)"
              size={"16"}
              strokeWidth={"3"}
            />
            <p className="text-sm text-gray-400 font-bold">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

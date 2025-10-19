import { Banner } from "@/components/Banner";
import { CardContainer } from "@/components/CardContainer";
import { Pagination } from "@/components/reused/Pagination";
import getEvents from "@/libs/getEvents";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Events() {
  const events = getEvents();
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full">
      <Banner />
      <div className="w-full mt-10 px-10 space-y-8 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif font-bold text-2xl">Events</h1>
          <div className="flex flex-row gap-1">
            <input
              type="text"
              placeholder="Search"
              className="w-[300px] bg-gray-200 px-2 rounded-md"
            />
            {session?.user.role === "admin" ? (
              <Link href={"/event/add"}>
                <Plus
                  size={30}
                  strokeWidth={3}
                  className="h-full rounded-md p-1 text-gray-500 
               hover:bg-gray-200 hover:text-gray-700 
               active:text-black active:bg-gray-300 
               transition duration-150"
                />
              </Link>
            ) : null}
          </div>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <CardContainer eventJson={events} />
        </Suspense>
        <Pagination />
      </div>
    </div>
  );
}

import { DefaultButton } from "@/components/reused/DefaultButton";
import { Timer } from "@/components/Timer";
import { CardContainer } from "@/components/CardContainer";
import { DefaultFooter } from "@/components/Footer";
import { EventDetailCard } from "@/components/EventDetailCard";

export default function EventDetail() {
  return (
    <div>
      <div
        className="w-full h-[400px] bg-[url(/pics/banner1.png)] bg-cover bg-[center_40%] py-15
        flex flex-col justify-center items-center"
      ></div>
      <div className="w-full flex flex-col gap-3 justify-center items-center py-10">
        <h1 className="font-serif font-bold text-xl">
          The Phantom of Opera 2025
        </h1>
        <Timer />
        <div>
          <DefaultButton text="Reserve" />
        </div>
      </div>
      <div className="w-full flex flex-row gap-25 px-5 justify-center">
        <div className="w-[50%] flex flex-col gap-3">
          <p className="font-bold text-lg">Description</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. In pulvinar vulputate dui
            molestie. Sagittis consequat id urna nunc facilisis amet. Adipiscing
            orci posuere quis in pellentesque nec. Bibendum at quisque arcu
            placerat sit scelerisque lacinia faucibus nulla.Lorem ipsum dolor
            sit amet consectetur. In pulvinar vulputate dui molestie. Sagittis
            consequat id urna nunc facilisis amet. Adipiscing orci posuere quis
            in pellentesque nec. Bibendum at quisque arcu placerat sit
            scelerisque lacinia faucibus nulla.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. In pulvinar vulputate dui
            molestie. Sagittis consequat id urna nunc facilisis amet. Adipiscing
            orci posuere quis in pellentesque nec. Bibendum at quisque arcu
            placerat sit scelerisque lacinia faucibus nulla.Lorem ipsum dolor
            sit amet consectetur. In pulvinar vulputate dui molestie. Sagittis
            consequat id urna nunc facilisis amet. Adipiscing orci posuere quis
            in pellentesque nec. Bibendum at quisque arcu placerat sit
            scelerisque lacinia faucibus nulla.
          </p>
        </div>
        <EventDetailCard />
      </div>
      <div className="w-full px-10 h-[90vh] space-y-8 flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="font-serif font-bold text-2xl">Upcoming Events</h1>
        </div>
        <CardContainer />
      </div>
      <DefaultFooter />
    </div>
  );
}

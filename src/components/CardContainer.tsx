import { EventCard } from "./EventCard"
export function CardContainer(){
    return(
        <div className="w-full flex flex-row gap-6 justify-center">
            <EventCard name="CU Freshy Night 2025" time="2025" venue="SCCU"/>
            <EventCard name="CU Freshy Night 2025" time="2025" venue="SCCU"/>
            <EventCard name="CU Freshy Night 2025" time="2025" venue="SCCU"/>
            <EventCard name="CU Freshy Night 2025" time="2025" venue="SCCU"/>
          </div>
    )
}
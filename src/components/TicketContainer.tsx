import { TicketCard } from "./TicketCard"
export function TicketContainer(){
    return(
        <div className="w-full flex flex-row gap-6 justify-center">
            <TicketCard name="CU Freshy Night 2025" time="20:00" date="21 Sep" amount={"2"}/>
            <TicketCard name="CU Freshy Night 2025" time="20:00" date="21 Sep" amount={"2"}/>
            <TicketCard name="CU Freshy Night 2025" time="20:00" date="21 Sep" amount={"2"}/>
          </div>
    )
}
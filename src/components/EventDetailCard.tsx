export function EventDetailCard(){
    return(
        <div className="w-[250px] flex flex-col gap-2 bg-white px-5 py-5 rounded-md shadow-md">
          <div className="">
            <p className="text-md font-bold">Event Date</p>
            <p className="text-sm">2025 September 12th</p>
            <p className="text-sm">12:00 - 14:00</p>
          </div>
          <div className="">
            <p className="text-md font-bold">Venue</p>
            <p className="text-sm">
              Bankok International Trade & Exhibition Centre (BITEC)
            </p>
          </div>
          <div className="">
            <p className="text-md font-bold">Organizer</p>
            <p className="text-sm">SMTrue</p>
          </div>
          <div className="">
            <p className="text-md font-bold">Ticket</p>
            <p className="text-sm">350 Available</p>
          </div>
        </div>
    )
}
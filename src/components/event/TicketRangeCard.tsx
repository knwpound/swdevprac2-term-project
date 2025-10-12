export function TicketRangeCard() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-5 bg-white rounded-md shadow-md">
      <h1 className="text-lg font-semibold">Ticket Detail</h1>
      <div>
        <div className="flex flex-row justify-between">
          <p>0</p>
          <p>1000</p>
        </div>
        <input type="range" min="0" max="100" step="1" className="w-full" />
      </div>
    </div>
  );
}

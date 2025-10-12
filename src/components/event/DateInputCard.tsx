export function DateInputCard() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-5 bg-white rounded-md shadow-md">
      <h1 className="text-lg font-semibold">Date & Time</h1>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="w-full flex flex-col gap-1">
          <p className="text-sm font-semibold">Select a day</p>
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-gray-200 outline outline-gray-300
                            py-1 px-3 rounded-sm"
          />
        </div>
        <div className="w-[30%] flex flex-col gap-1">
          <p className="text-sm font-semibold">Start time</p>
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-gray-200 outline outline-gray-300
                            py-1 px-3 rounded-sm"
          />
        </div>
        <div className="w-[30%] flex flex-col gap-1">
          <p className="text-sm font-semibold">End time</p>
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-gray-200 outline outline-gray-300
                            py-1 px-3 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}

import { DefaultInput } from "../reused/DefaultInput";
export function MainDetailInputCard() {
  return (
    <div className="w-[50%] flex flex-col p-5 bg-white rounded-md shadow-md gap-2">
      <h1 className="text-lg font-semibold">Main Details</h1>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">Title</p>
        <input
          type="text"
          placeholder="Title"
          className="w-full bg-gray-200 outline outline-gray-300
                                    py-1 px-3 rounded-sm focus:outline-gray-400 focus:outline-2"
        />
      </div>
      <div className="w-full flex flex-row gap-3">
        <div className="w-[50%] flex flex-col gap-1">
          <p className="text-sm font-semibold">Venue</p>
          <DefaultInput />
        </div>
        <div className="w-[50%] flex flex-col gap-1">
          <p className="text-sm font-semibold">Organizer</p>
          <DefaultInput />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold">Detail</p>
        <textarea
          placeholder="Value"
          className="w-full h-20 bg-gray-200 outline outline-gray-300
                     py-1 px-3 rounded-sm resize-none focus:outline-gray-400 focus:outline-2
                     transition duration-150"
        ></textarea>
      </div>
    </div>
  );
}

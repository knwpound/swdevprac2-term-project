export function CardSkeletion() {
  return (
    <div className="w-[270px] h-[330px] flex flex-col bg-white rounded-lg shadow-sm
    transition duration-150">
      <div className="relative w-full h-[60%] bg-gray-200 inline inline-2 inline-white">
        
      </div>
      <div className="w-full py-5 px-5 flex flex-col gap-3">
        <div className="w-full h-4 font-bold text-xl leading-none bg-gray-200">
          
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-[40%] h-3 flex flex-row gap-1 items-center bg-gray-200"></div>
          <div className="w-[40%] h-3 flex flex-row gap-1 items-center bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

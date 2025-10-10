export function Timer(){
    return(
        <div className="flex flex-row gap-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-serif font-bold text-2xl">100</h1>
            <p className="font-serif font-semibold text-md">Days</p>
          </div>
          <p className="font-serif font-bold text-2xl">:</p>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-serif font-bold text-2xl">100</h1>
            <p className="font-serif font-semibold text-md">Hours</p>
          </div>
          <p className="font-serif font-bold text-2xl">:</p>
          <div className="flex flex-col  justify-center items-center">
            <h1 className="font-serif font-bold text-2xl">100</h1>
            <p className="font-serif font-semibold text-md">Minutes</p>
          </div>
          <p className="font-serif font-bold text-2xl">:</p>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-serif font-bold text-2xl">100</h1>
            <p className="font-serif font-semibold text-md">Second</p>
          </div>
        </div>
    )
}
import {ArrowLeft} from 'lucide-react'
export function Pagination(){
    return(
        <div className="w-full flex flex-row gap-2 text-sm justify-center">
            <div className='flex flex-row gap-1 items-center hover:underline'>
                Previous
            </div>
            <div className='flex justify-center items-center w-[20px] h-[20px] rounded-sm font-medium 
            text-white bg-black'>1</div>
            <div className='flex justify-center items-center w-[20px] h-[20px] rounded-sm font-medium 
            hover:text-white hover:bg-black'>2</div>
            <div className='flex justify-center items-center w-[20px] h-[20px] rounded-sm font-medium 
            hover:text-white hover:bg-black'>3</div>
            <div className='flex flex-row gap-1 items-center hover:underline'>
                Next
            </div>
        </div>
    )
}
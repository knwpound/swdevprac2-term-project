export function DefaultButton({text}:{text:string}){
    return(
        <button className="font-semibold text-white bg-black px-4 py-1 rounded-md
        hover:text-black hover:bg-white hover:outline hover:outline-black">{text}</button>
    )
}
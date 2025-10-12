export function LightButton({text}:{text:string}){
    return(
        <button className="font-semibold bg-white outline outline-black px-4 py-1 rounded-md
        hover:text-white hover:bg-black hover:outline hover:outline-white">{text}</button>
    )
}
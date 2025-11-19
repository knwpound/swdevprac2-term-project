"use client";
import { DefaultButton, LightButton } from "./reused/Button"

const handleCopy = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("copied!");
    } catch (err) {
      console.error("error:", err);
    }
  };

export function DefaultFooter(){
    return(
        <footer
        className="w-full h-[50vh] bg-[url(/pics/footer1.png)] bg-cover bg-[center_40%] 
      flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-white font-bold text-4xl shadow-2">
          {" "}
          MyEvent.com{" "}
        </h1>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-white text-lg">This website is part of</p>
          <p className="text-white text-md sm:text-lg text-center">2110507 Software Development Practice II</p>
        </div>
        <LightButton text="Contact" title="Copy student id" onClick={()=>handleCopy("6530005821")}/>
      </footer>
    )
}

export function LightFooter(){
  return(
        <footer
        className="w-full h-[50vh] bg-[url(/pics/footer2.jpg)] bg-cover bg-[center_40%] 
      flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-white font-bold text-4xl shadow-2">
          {" "}
          MyEvent.com{" "}
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-lg">This website is part of </p>
        <p className="text-white text-md sm:text-lg">2110507 Software Development Practice II</p>
        </div>
        <DefaultButton text="Contact" title="Copy student id" onClick={()=>handleCopy("6530005821")}/>
      </footer>
    )
}
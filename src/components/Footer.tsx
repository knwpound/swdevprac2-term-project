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
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-lg">This website is part of </p>
        <p className="text-white text-lg">2110507 Software Development Practice II</p>
        </div>
        <button className="font-bold text-black bg-white px-6 py-1 rounded-sm
        hover:text-white hover:bg-black hover:outline hover:outline-white">Contact</button>
      </footer>
    )
}
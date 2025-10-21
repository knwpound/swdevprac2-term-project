export function Banner() {
  return (
    <div
      className="w-full h-[400px] bg-[url(/pics/banner1.png)] bg-cover bg-[center_40%] py-15
        flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-caveat max-sm:text-3xl">Enjoy every moment, </h1>
      <h1 className="text-5xl font-caveat max-sm:text-3xl">create memories that last. </h1>
    </div>
  );
}

export function LightBanner() {
  return (
    <div
      className="w-full h-[400px] bg-[url(/pics/banner2.png)] bg-cover bg-[center_40%] py-15
        flex flex-col justify-center items-end"
    >
      <div className="w-[40%] flex items-center justify-center">
        <h1 className="w-[50%] text-5xl font-reenie max-sm:text-3xl">
          I have a whole universe in my mind.{" "}
        </h1>
      </div>
    </div>
  );
}

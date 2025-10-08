import {Menu} from 'lucide-react';

export default function NavBar() {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex flex-row justify-between gap-[32px] px-5 py-3 shadow-sm 
      fixed z-50 items-center bg-white"
    >
        <a className="" href="#home">
          MyEvent.com
        </a>
      <div className="flex flex-row gap-6 justify-center items-center">
        <a className="hover:underline active:font-semibold" href="#home">
          Home
        </a>
        <a className="hover:underline active:font-semibold" href="#home">
          Events
        </a>
        <a className="hover:bg-gray-200 p-1 px-2 rounded active:font-semibold" href="#lately">
          <Menu size={"15"} strokeWidth={"2"} />
        </a>
      </div>
    </div>
  );
}

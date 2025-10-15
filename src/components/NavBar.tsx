"use client";

import { DefaultButton,SecondaryButton } from "./reused/Button";
import { useRouter,usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { NavBarMenu } from "./NavBarMenu";

export default function NavBar() {
  const pathname = usePathname()
  if (pathname.startsWith('/auth')) return null

  const router = useRouter();
  const { data: session } = useSession();
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
        <a className="hover:underline" href="/">
          Home
        </a>
        <a className="hover:underline" href="/event">
          Events
        </a>
         <a className="hover:underline" href="/ticket">
          Tickets
        </a>
      </div>
      {session ? (
        <div>
          <NavBarMenu/>
        </div>
      ) : (
        <div className="flex flex-row gap-1">
          <SecondaryButton
            text="Sign up"
            onClick={() => {
              router.push("/auth/register");
            }}
          />
          <DefaultButton
            text="Login"
            onClick={() => {
              router.push("/auth/login");
            }}
          />
        </div>
      )}
    </div>
  );
}

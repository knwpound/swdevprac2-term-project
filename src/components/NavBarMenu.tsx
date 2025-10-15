"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

export function NavBarMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hover:bg-gray-200 p-1 px-2 rounded"
      onClick={(e)=> setOpen(!open)}>
        <Menu size={"15"} strokeWidth={"2"} />
      </div>
      {
        open?<div className="absolute right-5 flex flex-col py-2 bg-white shadow-md rounded-md text-center">
        <div
          className="hover:bg-slate-200 px-5 py-1 font-medium active:bg-slate-300 cursor-pointer
            transition duration-270"
        >
          My Profile
        </div>
        <div
          className="hover:bg-slate-200 px-5 py-1 font-medium active:bg-slate-300 cursor-pointer
            transition duration-270"
            onClick={() => signOut({ callbackUrl: "/auth/login" })}
        >
          Logout
        </div>
        
      </div>
        :null
      }
      
    </div>
  );
}

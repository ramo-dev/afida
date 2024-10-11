import React from "react";
import Logo from "../assets/logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 sticky top-0 w-full bg-black">
      <Logo className="flex items-center gap-3" />
      <Link href="/login" className='border-2 border-primary py-2 px-8 text-primary transition-all rounded-full hover:bg-primary hover:text-gray-200'>
        <p className=" text-lg">Login</p>
      </Link>
    </nav>
  )
}

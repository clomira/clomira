import Link from "next/link";
import React from 'react';

function NavBar() {
  return (
    <div className="bg-slate-50 grid grid-cols-2">
      <div className="pl-32 p-3">
        <img src="/clomira_logo.jpg" alt="Clomira Logo" className="h-20 w-44" />
      </div>
      <div className="flex flex-row justify-center items-center">
       <Link href="/"><div className="mr-20 cursor-pointer" >Home</div></Link>
        <Link href="/login"><div className="mr-20 cursor-pointer" >Login</div></Link>
        <Link href="/signup"><div className="mr-20 cursor-pointer" >Signup</div></Link>
      </div>
    </div>
  );
}

export default NavBar;

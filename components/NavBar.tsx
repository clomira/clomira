import Link from "next/link";

function NavBar() {
  // return (
  //   <div className="bg-slate-50 grid grid-cols-2">
  //     <div className="pl-32 p-3">
  //       <img src="/clomira_logo.jpg" alt="Clomira Logo" className="h-20 w-44" />
  //     </div>
  //     <div className="flex flex-row justify-center items-center">
  //       <Link href="/"><div className="mr-20 cursor-pointer" >Home</div></Link>
  //       <Link href="/login"><div className="mr-20 cursor-pointer" >Login</div></Link>
  //       <Link href="/signup"><div className="mr-20 cursor-pointer" >Signup</div></Link>
  //     </div>
  //   </div>
  // );
  return (
    <nav className="bg-white px-8 pt-2 shadow-md">
      <div className="-mb-px flex justify-center">
        <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">
          Home
        </a>
        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/login">
          Log In
        </a>
        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/signup">
          Sign Up
        </a>
        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3" href="/study_material">
          Study Material
        </a>
      </div>
    </nav>
  )
}

export default NavBar;
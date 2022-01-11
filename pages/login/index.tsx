import Image from "next/image";
import { ReactNode } from "react";

function login() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-100">
      <div className="grid grid-cols-2 h-3/4 w-2/3 rounded-2xl mt-24 mx-auto bg-white pt-10">
        <div className="pt-20 pl-32">
          <Image src="/login.jpg" height="300px" width="300px" />
          <div className="pl-2 mt-10 text-sm">
            Not a member yet?
            <span className="underline cursor-pointer pl-2">
              Create Account
            </span>
          </div>
        </div>
        <div className="pl-8 pt-12">
          <div className="text-4xl font-bold pb-10">Log In</div>
          <div className="border-b-2 w-72 pb-2 mt-9">
            <i className="fas fa-envelope fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Your Email"
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-9 flex">
            <i className="fas fa-user-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Password"
            />
          </div>
          <div className="flex mt-9">
            <input type="checkbox" />
            <div className="text-sm pl-3">Remember Me</div>
          </div>
          <div>
            <button className="bg-blue-400 text-white h-30 w-36 mt-9 p-3 rounded-lg hover:bg-blue-600">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

login.getLayout = function PageLayout(page: ReactNode) {
  return <div>{page}</div>;
};

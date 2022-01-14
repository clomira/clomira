import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

function signup() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-100">
      <div className="grid grid-cols-2 h-3/4 w-2/3 rounded-2xl mt-24 mx-auto bg-white pt-10">
        <div className="pl-36 pt-12">
          <div className="text-4xl font-bold pb-10">Sign Up</div>
          <div className="border-b-2 w-72 pb-2">
            <i className="fas fa-user fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Your Name"
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-envelope fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Your Email"
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7 flex">
            <i className="fas fa-user-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Password"
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Repeat Password"
            />
          </div>
          <div className="flex mt-7">
            <input type="checkbox" />
            <div className="text-sm pl-3 flex">
              <div>I agree all statements in</div>
              <div className="underline cursor-pointer pl-2">
                Terms of service
              </div>
            </div>
          </div>
          <div>
            <button className="bg-blue-400 text-white h-30 w-40 mt-7 p-3 rounded-lg hover:bg-blue-600">
              Register
            </button>
          </div>
        </div>
        <div className="pt-20 pl-20">
          <Image src="/signup.jpg" height="300px" width="300px" />
          <div className="pl-10 mt-10 text-sm flex">
            <div>Already a member?</div>
            <div className="underline cursor-pointer pl-2">
              <Link href="/login"> Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;

signup.getLayout = function PageLayout(page: ReactNode) {
  return <div>{page}</div>;
};

import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);

  const route = useRouter();

  const LoginFormSubmit = async () => {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ _userEmail: userEmail, _userPass: userPass }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();

    console.log(data);
    if (data.length) {
      route.push("/");
    } else {
      setClickSubmit(true);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-100">
      <Head>
        <title>Clomira | Login</title>
      </Head>
      <div className="grid grid-cols-2 h-3/4 w-2/3 rounded-2xl mt-24 mx-auto bg-white pt-10">
        <div className="pt-20 pl-32">
          <Image src="/login.jpg" height="300px" width="300px" />
          <div className="pl-2 mt-10 text-sm flex ">
            <div>Not a member yet?</div>
            <div className="underline cursor-pointer pl-2">
              <Link href="/signup"> Create Account</Link>
            </div>
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
              value={userEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserEmail(e.target.value)
              }
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-9 flex">
            <i className="fas fa-user-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Password"
              value={userPass}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserPass(e.target.value)
              }
            />
          </div>
          {clickSubmit ? (
            <div className="text-red-500 text-sm pt-4">
              Email / Password doesn't match
            </div>
          ) : (
            ""
          )}
          <div className="flex mt-6">
            <input type="checkbox" />
            <div className="text-sm pl-3">Remember Me</div>
          </div>
          <div>
            <button
              className="bg-blue-400 text-white h-30 w-36 mt-9 p-3 rounded-lg hover:bg-blue-600"
              onClick={LoginFormSubmit}
            >
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

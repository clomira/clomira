import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function signup() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [termAccepted, setTermAccepted] = useState("");
  const [passMatch, setPassMatch] = useState(true);

  const route = useRouter();

  const SignUpFormSubmit = async () => {
    if (userPass === userPass2 && termAccepted) {
      setPassMatch(true);
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify({
          user_name: userName,
          user_pass: userPass,
          user_email: userEmail,
        }),
        headers: { "Content-type": "application/json" },
      });

      const data = await response.json();
      if (data) {
        route.push("/login");
      }
    } else {
      setPassMatch(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-zinc-100">
      <Head>
        <title>Clomira | Signup</title>
      </Head>
      <div className="grid grid-cols-2 h-3/4 w-2/3 rounded-2xl mt-24 mx-auto bg-white pt-10">
        <div className="pl-36 pt-12">
          <div className="text-4xl font-bold pb-10">Sign Up</div>
          <div className="border-b-2 w-72 pb-2">
            <i className="fas fa-user fa-sm"></i>
            <input
              type="text"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Your Name"
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            />
          </div>
          <div className="border-b-2 w-72 pb-2 mt-7">
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
          <div className="border-b-2 w-72 pb-2 mt-7 flex">
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
          <div className="border-b-2 w-72 pb-2 mt-7">
            <i className="fas fa-lock fa-sm"></i>
            <input
              type="password"
              className="text-sm focus:outline-none pl-5 font-light"
              placeholder="Repeat Password"
              value={userPass2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserPass2(e.target.value)
              }
            />
          </div>
          {passMatch ? (
            ""
          ) : (
            <div className="text-red-500 text-sm pt-1">
              Password doesn't match
            </div>
          )}
          <div className="flex mt-7">
            <input
              type="checkbox"
              value={termAccepted}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                  setTermAccepted("yes");
                } else {
                  setTermAccepted("");
                }
              }}
            />
            <div className="text-sm pl-3 flex">
              <div>I agree all statements in</div>
              <div className="underline cursor-pointer pl-2">
                Terms of service
              </div>
            </div>
          </div>
          {termAccepted ? (
            ""
          ) : (
            <div className="text-red-500 text-sm pt-1">
              Please Accept The Terms and service
            </div>
          )}
          <div>
            <button
              className="bg-blue-400 text-white h-30 w-40 mt-7 p-3 rounded-lg hover:bg-blue-600"
              onClick={SignUpFormSubmit}
            >
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

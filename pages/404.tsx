import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Err = () => {
  const rout = useRouter();
  useEffect(() => {
    setTimeout(() => {
      rout.push("/");
    }, 10000);
  });

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <section className="py-8 px-4 text-center">
        <div className="max-w-auto md:max-w-lg mx-auto">
          <Image
            className="mb-8"
            src="/error.svg"
            height="500"
            width="500"
            alt="A person looking at wall"
          />
          <h2 className="text-5xl mb-2 font-heading">Page not found</h2>
          <p className="mb-6 text-gray-500">
            We&apos;re sorry, the page you were looking for isn&apos;t found
            here. The link you followed may either be broken or no longer
            exists. Please try again, or take a look at our.
          </p>
          <div>
            <Link href="/" passHref>
              <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Err;

Err.getLayout = function PageLayout(page: ReactNode) {
  return <div>{page}</div>;
};

import { useEffect } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

const err = () => {
  const rout = useRouter();
  useEffect(() => {
    setTimeout(() => {
      rout.push("/");
    }, 10000);
  }, []);

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
            alt=""
          />
          <h2 className="text-5xl mb-2 font-heading">Page not found</h2>
          <p className="mb-6 text-gray-500">
            We're sorry, the page you were looking for isn't found here. The
            link you followed may either be broken or no longer exists. Please
            try again, or take a look at our.
          </p>
          <div>
            <a href="/">
              <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                Back to Home
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default err;

err.getLayout = function PageLayout(page: ReactNode) {
  return <div>{page}</div>;
};

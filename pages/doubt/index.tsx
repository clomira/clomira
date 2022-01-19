import { GetStaticProps } from "next";
import Link from "next/link";

type doubtProps = {
  data: {
    title: string;
    body: string;
  }[];
  error: string;
};

const Doubts = (props: doubtProps) => {
  const { data } = props;
  return (
    <div>
      <section className="relative py-8 bg-white min-w-screen animation-fade animation-delay">
        <div className="container px-0 mx-auto  sm:px-5">
          <div className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="appearance-none w-full outline-none focus:outline-none active:outline-none"
            />
            <button
              type="submit"
              className="ml-7 outline-none focus:outline-none active:outline-none"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="flex flex-wrap mt-7 space-around justify-content align-center">
            <h5 className="  mt-1 w-10/12  font-bold text-center text-gray-800 sm:text-3xl sm:text-center sm:mx-0">
              Frequently Asked Questions
            </h5>
            <Link href="/doubt/ask" passHref>
              <button className="bg-blue-500 w-2/12 justify-self-end text-xs hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500">
                Ask A Question
              </button>
            </Link>
          </div>
          {data.map((doubt) => {
            return (
              <div
                className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow "
                key={doubt.title}
              >
                <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                  {doubt.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                  {doubt.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let data = [];
  let error = "";
  try {
    const response = await fetch("http://localhost:3000/api/doubt/topdoubts");
    data = await response.json();
  } catch {
    error = "Error occured";
  }
  return {
    props: { data, error },
    revalidate: 1,
  };
};

export default Doubts;

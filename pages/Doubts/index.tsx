import Link from "next/link";

const Doubts = () => {
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
            <Link href="/doubts/ask">
              <button className="bg-blue-500 w-2/12 justify-self-end text-xs hover:bg-blue-400 transition-colors rounded-[8px] px-[15px] py-[4px] text-white focus:ring-2 ring-blue-500">
                Ask A Question
              </button>
            </Link>
          </div>

          <div className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              How much hours should we study?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, eligendi? earum facilis incidunt? Natus iste atque in
              inventore commodi ex.
            </p>
          </div>
          <div className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              Should we focus on DSA or Development?
            </h3>
            <p className="mt-2  text-base text-gray-600 sm:text-lg md:text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              pariatur unde Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Omnis obcaecati voluptatum, error atque laudantium nisi?
              repellat praesentium aliquid suscipit quam nostrum non fugiat.
              Esse.
            </p>
          </div>
          <div className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              How much CGPA is good for placement and internship?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quisquam consequatur, expedita cupiditate mollitia repudiandae
              laborum obcaecati neque beatae facere recusandae odit optio libero
              rem aliquam dicta asperiores doloremque iusto.
            </p>
          </div>
          <div className="w-1/1 px-0 py-6 mx-auto mt-10 cursor-pointer hover:shadow-lg bg-white border border-gray-200 sm:px-8  sm:rounded-lg sm:shadow ">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              Whta are important websites for self-study?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ipsum sed veritatis itaque enim! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Minus, iusto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doubts;

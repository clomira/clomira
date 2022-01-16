const Doubt = () => {
  return (
    <div className="mt-10">
      <div className="containter mb-10 flex justify-content align-center flex-wrap mx-auto px-10 ml-20">
        <div className="w-64 mr-2 mb-20  bg-white shadow rounded border border-transparent hover:border-blue-200 ">
          <div className=" w-full checker-bg flex items-center justify-center p-4 ">
            <div
              className="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://i.pinimg.com/564x/4c/74/9e/4c749ee6db2de8fb2dd9c7751ecd77fa.jpg")',
              }}
            ></div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 mx-auto font-medium">Sahib Singh</h1>
              <button className="text-gray-500 hover:text-gray-900"></button>
            </div>
            <p className="text-gray-400 text-center text-sm my-1">
              2nd year student
            </p>
          </div>
        </div>

        <div className="bg-white ml-2 w-8/12 p-8 rounded-lg shadow-lg relative hover:shadow-2xl transition duration-500">
          <div className="grid grid-cols-2">
            <div className="mb-4">
              <div className="text-2xl text-gray-800 font-semibold">
                How much should we study?
              </div>
              <div className="text-sm flex">
                Posted in <div className="px-1 text-blue-600">General</div> 4
                years ago
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ml-72 text-gray-600 hover:text-blue-700 cursor-pointer">
              <i className="fas fa-chevron-up"></i>
              <div>512</div>
            </div>
          </div>

          <p className="text-gray-600 leading-6 tracking-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            itaque debitis saepe, eaque similique quo doloribus ducimus ex
            veniam accusamus aliquid esse, veritatis totam quia impedit tempore
            aperiam, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iusto ut atque corporis dignissimos architecto enim odit nostrum
            velit eius cum obcaecati excepturi voluptatibus quam culpa tenetur
            deserunt, laboriosam numquam labore harum ipsam minima omnis, sint
            deleniti officia. Sit tenetur deserunt delectus culpa, modi quos ab
            accusantium dignissimos consequuntur sequi dolorem harum veniam
            voluptatem reiciendis aut eligendi obcaecati distinctio eius. Rerum,
            quasi! Natus qui repudiandae vel officiis quos quia nisi! Voluptatem
            qui facere ipsum dolores, numquam asperiores totam, minus voluptates
          </p>
        </div>
      </div>

      {/* comments section   */}
      <section className="relative flex items-center justify-center antialiased bg-white mt-12 min-w-screen">
        <div className="container mt-3 px-0 mx-auto sm:px-5">
          <h3 className="flex items-center my-8">
            <span
              aria-hidden="true"
              className="flex-grow bg-gray-200 rounded h-0.5"
            ></span>
            <span className="inline-block px-4 py-1 text-lg font-medium text-center text-gray-500 bg-gray-200 rounded-full">
              Comments
            </span>
            <span
              aria-hidden="true"
              className="flex-grow bg-gray-200 rounded h-0.5"
            ></span>
          </h3>
          <div className="flex-col w-full py-4 mx-auto bg-white px-20 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
            <div className="flex flex-row">
              <img
                className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="Noob master's avatar"
                src="/cmnt.webp"
              />
              <div className="flex-col mt-1">
                <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                  Somesh Singh
                  <span className="ml-2 text-xs font-normal text-gray-500">
                    2 weeks ago
                  </span>
                </div>
                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                  How to reduce time of sleep?
                </div>
                <button className="inline-flex items-center px-1 pt-2 ml-1 mr-3 flex-column">
                  <i className="fas fa-reply"></i>
                </button>
                <button className="inline-flex items-center px-1 -ml-1 flex-column">
                  <i className="far fa-thumbs-up"></i>
                  <button className="p-4 ml-3 mt-0 bg-blue-400 rounded-full h-1 w-1 flex items-center justify-center text-2xl text-white shadow-lg cursor-pointer">
                    +
                  </button>
                </button>
              </div>
            </div>

            {/* if reply is given that is above    +    btn is clicked then display below box  */}

            <hr className="my-2 ml-16 border-gray-200" />
            <div className="flex flex-row pt-1 md-10 md:ml-16">
              <img
                className="w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="Emily's avatar"
                src="/cmnt.webp"
              />
              <div className="flex-col mt-1">
                <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                  Shubham Kumar
                  <span className="ml-2 text-xs font-normal text-gray-500">
                    5 days ago
                  </span>
                </div>
                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                  You should not reduce it.
                </div>
                <button className="inline-flex items-center px-1 pt-2 mr-3 ml-1 flex-column">
                  <i className="fas fa-reply"></i>
                </button>
                <button className="inline-flex items-center px-1 -ml-1 flex-column">
                  <i className="far fa-thumbs-up"></i>
                  <button className="p-4 ml-3 mt-0 bg-blue-400 rounded-full h-1 w-1 flex items-center justify-center text-2xl text-white shadow-lg cursor-pointer">
                    +
                  </button>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3 mt-4">
            <form className=" w-1/1 bg-white rounded-lg px-4 pt-2">
              <div className="flex flex-wrap -mx-3 mb-6 w-1/1">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  Add a new comment
                </h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                  <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Type Your Comment"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="w-full  flex justify-center align-center md:w-full px-3">
                  <input
                    type="submit"
                    className="bg-white w-1/2 text-gray-700 font-medium py-1 px-4 border
                      w-1/1 border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-blue-700 hover:text-white"
                    defaultValue="Post Comment"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doubt;

// before form tag
// that is second card

{
  /* <div className="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
            <div className="flex flex-row md-10">
              <img
                className="w-12 h-12 border-2 border-gray-300 rounded-full"
                alt="Anonymous's avatar"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
              />
              <div className="flex-col mt-1">
                <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                  Anonymous
                  <span className="ml-2 text-xs font-normal text-gray-500">
                    3 days ago
                  </span>
                </div>
                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                  Very cool! I'll have to learn more about Tailwind.
                </div>
                <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                  <svg
                    className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                    viewBox="0 0 95 78"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <button className="inline-flex items-center px-1 -ml-1 flex-column">
                  <svg
                    className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div> */
}

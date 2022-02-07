import Image from "next/image";
import { protectedRoute } from "../../components/Context/ProtectedRoute";

const Profile = () => {
  return (
    <div>
      <div className="p-10">
        <div className="p-0 bg-white shadow mt-10">
          <div className="">
            <div className="rounded-full  flex items-center justify-center mx-auto  text-indigo-500">
              <Image
                src="/login.jpg"
                className="h-60 shadow w-70 rounded-lg"
                alt=""
                height="200px"
                width="300px"
              />
            </div>
            <div className="space-x-8 flex  mt-3  justify-center">
              <label className="w-50 flex mt-3 flex-col items-center px-4 py-0 bg-white rounded-md shadow-md  border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150 transform hover:-translate-y-0.5">
                <span className="m-1 font-mano leading-normal">
                  Change photo
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-10 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Sahib Singh,
              <span className="font-serif text-gray-400">19</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">
              Kurukshetra, Haryana
            </p>
            <p className="mt-8 text-gray-500">
              Netaji Subhash University of Technology
            </p>
            <p className="mt-2 text-gray-500">
              Computer Science and Engineering
            </p>
          </div>
          <div className="mt-5 mb-10 flex flex-col justify-center">
            <p className="text-gray-600 mb-10 text-center font-light lg:px-16">
              Interested in Web Development. In short, web developers build and
              maintain websites. Web developers often work for clients who are
              trying to get their product or service onto the web. The work is
              typically very project focused and involves collaborating with a
              team that helps to coordinate the client&apos;s needs into the end
              product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default protectedRoute(Profile);

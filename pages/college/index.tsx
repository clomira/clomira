import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <main className="bg-white font-montserrat">
        <header className="h-24 sm:h-32 flex items-center">
          <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
            <div className="flex items-center"></div>
          </div>
        </header>
        <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
          <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
            <h1 className="text-4xl lg:text-6xl leading-none mb-4">
              <strong className="font-black">College</strong> Guide
            </h1>
            <p className="lg:text-lg mb-4 sm:mb-12">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            </p>
            <Link href="#" passHref>
              <div className="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white py-3 px-10 rounded-full">
                Learn more
              </div>
            </Link>
          </div>
          <div className="sm:w-3/5">
            <Image
              src="/college_guide.png"
              height="600px"
              width="600px"
              alt="A group of person sitting and discussing"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;

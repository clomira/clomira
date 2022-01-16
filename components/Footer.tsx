import Link from "next/link";

function Footer() {
  return (
    <div>
      <section className="bg-blue-300 mt-4">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link href="#" passHref>
                <div className="text-base leading-6 text-black cursor-pointer hover:text-gray-900">
                  About
                </div>
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/faq" passHref>
                <div className="text-base leading-6 text-black cursor-pointer hover:text-gray-900">
                  Doubts
                </div>
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/study_material" passHref>
                <div className="text-base leading-6 text-black cursor-pointer hover:text-gray-900">
                  PYQs
                </div>
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/" passHref>
                <div className="text-base leading-6 text-black cursor-pointer hover:text-gray-900">
                  Know Your College
                </div>
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link href="/" passHref>
                <div className="text-base leading-6 text-black cursor-pointer hover:text-gray-900">
                  Team
                </div>
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <Link href="#" passHref>
              <div className="text-black cursor-pointer hover:text-red-600">
                <i className="fab fa-instagram"></i>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="text-black cursor-pointer hover:text-red-600">
                <i className="fab fa-twitter"></i>
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="text-black cursor-pointer hover:text-red-600">
                <i className="fab fa-github"></i>
              </div>
            </Link>{" "}
            <Link href="#" passHref>
              <div className="text-black cursor-pointer hover:text-red-600">
                <i className="fab fa-youtube"></i>
              </div>
            </Link>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-black">
            © 2022 Clomira, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;

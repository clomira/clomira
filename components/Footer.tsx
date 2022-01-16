function Footer() {
  // return (
  //   <div classNameName="bg-slate-100 text-center p-8">
  //     Copyright <i classNameName="far fa-copyright"></i> 2022 Clomira Team
  //   </div>
  // );

  return (
    <div>
      <section className="bg-blue-300 mt-4">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-black hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/faq"
                className="text-base leading-6 text-black hover:text-gray-900"
              >
                Doubts
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/study_material"
                className="text-base leading-6 text-black hover:text-gray-900"
              >
                PYQs
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base leading-6 text-black hover:text-gray-900"
              >
                Know Your College
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/"
                className="text-base leading-6 text-black hover:text-gray-900"
              >
                Team
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-black hover:text-red-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-black hover:text-red-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black hover:text-red-600">
              <i className="fab fa-github"></i>
            </a>{" "}
            <a href="#" className="text-black hover:text-red-600">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center ztext-black">
            © 2022 Clomira, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;

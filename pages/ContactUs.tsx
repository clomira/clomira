import Image from "next/image";

function ContactUs() {
  return (
    <div className="grid grid-cols-2 mt-20">
      <div className="ml-20">
        <div className="text-5xl ml-20 pt-8 pb-5 font-semibold text-slate-700">
          Drop Us a Line
        </div>
        <div className="ml-20">
          <div className="pb-2 pl-1 mt-8">Full Name</div>
          <div>
            <input
              type="text"
              className="border-x border-y rounded-sm h-12 pl-4 font-extralight w-96"
              placeholder="What's your full name ?"
            />
          </div>
        </div>
        <div className="ml-20">
          <div className="pb-2 pl-1 mt-8">Email Address</div>
          <div>
            <input
              type="text"
              className="border-x border-y rounded-sm h-12 pl-4 font-extralight w-96"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="ml-20">
          <div className="pb-2 pl-1 mt-8">Message</div>
          <div>
            <textarea
              className="border-x border-y rounded-sm pl-4 font-extralight w-96 pt-4 h-40"
              placeholder="Write your message for the team here"
            ></textarea>
          </div>
        </div>
        <div className="ml-20 mt-2">
          <button className="w-72 h-10 bg-blue-600 text-white rounded-md ml-1 hover:bg-slate-200 hover:text-blue-700">
            Submit
          </button>
        </div>
      </div>
      <div>
        <Image src="/contact_us.jpg" height="650px" width="650px" />
      </div>
    </div>
  );
}

export default ContactUs;

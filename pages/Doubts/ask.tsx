import TextEditor from "../../components/TextEditor";

function AskDoubt() {
  return (
    <div className="bg-gray-50">
      <div className="w-8/12 m-auto pt-10 pb-10">
        <div className="flex items-center pl-10">
          <div className="text-4xl">Ask a Doubt</div>
        </div>
        <div className="w-full border-2 p-5 bg-white rounded-xl mt-5">
          <div className="pb-4">
            <div className="text-xl pl-1">Title</div>
            <div className="text-sm pl-1">
              Be specific and clear with the title
            </div>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Write the title of doubt here"
                className="w-full border-2 border-gray-500 rounded-lg pl-4 text-sm font-light h-10 focus:outline-none"
              />
            </div>
          </div>
          <div className="pb-4">
            <div className="text-xl pl-1">Body</div>
            <div className="text-sm pl-1">
              Make sure to write all details necessary someone need to answer
              the doubt
            </div>
            <div className="pt-2 h-96 border-2 border-gray-500 rounded-lg flex flex-row">
              <TextEditor />
            </div>
          </div>
          <div className="pb-4">
            <div className="text-xl pl-1">Tags</div>
            <div className="text-sm pl-1">
              Add some tags that describes your doubt
            </div>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Write the title of doubt here"
                className="w-full border-2 border-gray-500 rounded-lg pl-4 text-sm font-light h-10 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse mr-5">
            <button className="px-6 py-3 hover:bg-blue-400 bg-blue-200 rounded-lg">
              Post Doubt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskDoubt;

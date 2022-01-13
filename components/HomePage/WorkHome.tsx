function WorkHome() {
  return (
    <div className="flex flex-row justify-center items-center m-10">
      <div className="h-30 w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-white border-t-rose-500">
        <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
          Study Material
        </h2>
        <p className="text-zinc-500 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          praesentium.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="h-30 w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-white border-t-lime-500">
          <h2 className="font-extrabold text-2xl text-gray-600 pb-2">Doubts</h2>
          <p className="text-zinc-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            praesentium.
          </p>
        </div>
        <div className="h-30 w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-white border-t-teal-500">
          <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
            College Guide
          </h2>
          <p className="text-zinc-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            praesentium.
          </p>
        </div>
      </div>
      <div className="h-30 w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-white border-t-orange-500">
        <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
          Society Guide
        </h2>
        <p className="text-zinc-500 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          praesentium.
        </p>
      </div>
    </div>
  );
}

export default WorkHome;

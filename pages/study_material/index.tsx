import Subject from "../../components/StudyMaterialPage/Subject";
import Head from "next/head";

function StudyMaterialPage() {
  return (
    <div className="flex mt-10 ">
      <Head>
        <title>Clomira | Study Material</title>
      </Head>
      <div className="flex flex-col ml-8 mr-10 pl-10">
        <div className="border-2 px-10 py-4 rounded-lg mt-2 hover:bg-zinc-100 cursor-pointer">
          <i className="fas fa-book-reader mr-5"></i>Notes
        </div>
        <div className="border-2 px-10 py-4 rounded-lg mt-2 hover:bg-zinc-100 cursor-pointer">
          <i className="fab fa-pied-piper-alt mr-5"></i>Previous Year Q&apos;s
        </div>
        <div className="border-2 px-10 py-4 rounded-lg mt-2 hover:bg-zinc-100 cursor-pointer">
          <i className="far fa-star mr-5"></i>Recent
        </div>
        <div className="border-2 px-10 py-4 rounded-lg mt-2 hover:bg-zinc-100 cursor-pointer">
          <i className="far fa-bookmark mr-5"></i>Bookmarked
        </div>
      </div>
      <div className="flex flex-col w-8/12 ml-10 mb-20">
        <div className="flex flex-row text-neutral-500 pb-3 border-b-2 border-stone-600">
          <div className="pl-16 pr-96">Name</div>
          <div className="pl-36">Size</div>
        </div>
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="folder" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="folder" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="folder" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="folder" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="folder" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
        <Subject fileType="file" heading="Computer Science" size="100kb" />
      </div>
    </div>
  );
}

export default StudyMaterialPage;

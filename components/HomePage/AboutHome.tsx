import Image from "next/image";

function AboutHome() {
  return (
    <div>
      <div className="flex flex-row pt-20 pb-5">
        <div className="flex justify-centre items-center pl-20">
          <Image
            src="/home_page_work.jpg"
            alt="A Person Working"
            width="500"
            height="320"
          />
        </div>
        <div className="flex flex-col justify-center w-1/2 font-serif pl-6">
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et omnis
            nostrum officia explicabo iusto aliquam iure consectetur praesentium
            modi, nam quaerat expedita cupiditate necessitatibus ipsa dolorum
            dicta molestias atque corporis beatae laudantium facere a possimus
            reprehenderit. Sapiente a fugit quaerat totam iste quisquam cumque
            voluptatem, voluptates enim in necessitatibus corrupti?
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center bg-slate-50 mt-16 mb-10 pt-14 pb-20">
        <div className="text-4xl font-medium pb-9">Why Clomira?</div>
        <div className="grid grid-cols-3 pl-20 pr-20">
          <div>
            <div className="text-xl font-normal">
              Whom will you meet at Clomira?
            </div>
            <div className="pl-7 pr-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              explicabo expedita nisi beatae accusantium necessitatibus aperiam
              voluptate saepe adipisci veniam.
            </div>
          </div>
          <div>
            <div className="text-xl font-normal">
              Why should you join Clomira?
            </div>
            <div className="pl-7 pr-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              explicabo expedita nisi beatae accusantium necessitatibus aperiam
              voluptate saepe adipisci veniam.
            </div>
          </div>
          <div>
            <div className="text-xl font-normal">
              What makes Clomira special?
            </div>
            <div className="pl-7 pr-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              explicabo expedita nisi beatae accusantium necessitatibus aperiam
              voluptate saepe adipisci veniam.
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AboutHome;

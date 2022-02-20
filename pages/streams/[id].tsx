import { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <div className="">
        <div className="relative w-full transition-all ease-in bg-orange-400 aspect-video after:bg-orange-400 after:w-3 after:h-3 after:absolute after:duration-150 after:ease-in before:bg-orange-400 before:w-3 before:h-3 before:absolute before:duration-150 before:ease-in after:top-0 after:left-0 after:origin-top-left after:-rotate-45 after:scale-0 before:bottom-0 before:right-0 before:origin-bottom-right before:rotate-45 before:scale-0 after:hover:scale-100 after:hover:-rotate-45 before:hover:scale-100 before:hover:rotate-45 group">
          <img
            src="https://res.cloudinary.com/axiol/image/upload/v1569710642/CodePen/twitchThumb_wr84mp.jpg"
            alt=""
            className="relative z-10 w-full h-full duration-150 ease-in group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </div>
      </div>
      <div className="p-4 border-b border-gray-600">
        <span>채팅</span>
      </div>
      <div className="flex flex-col flex-1 px-4 pb-4 space-y-2 overflow-y-scroll h-[50vh]">
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
        <span>asdf: asdffwwwwfasdfasdfaw</span>
      </div>

      <div className="w-full max-w-md p-4 mx-auto bottom-4">
        <div className="relative flex items-center">
          <input
            type="text"
            className="w-full py-2 pl-2 pr-4 rounded-md focus:border-orange-400 focus:ring-0"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-orange-400 appearance-none cursor-pointer focus:ring-0 rounded-r-md">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stream;

import { NextPage } from "next";
import Layout from "@components/layout";
import FloatingButton from "@components/floatingButton";

const Streams: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="px-4 pb-24 space-y-12">
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <div key={i}>
              <div className="relative w-full transition-all ease-in bg-orange-400 aspect-video after:bg-orange-400 after:w-3 after:h-3 after:absolute after:duration-150 after:ease-in before:bg-orange-400 before:w-3 before:h-3 before:absolute before:duration-150 before:ease-in after:top-0 after:left-0 after:origin-top-left after:-rotate-45 after:scale-0 before:bottom-0 before:right-0 before:origin-bottom-right before:rotate-45 before:scale-0 after:hover:scale-100 after:hover:-rotate-45 before:hover:scale-100 before:hover:rotate-45 group">
                <img
                  src="https://res.cloudinary.com/axiol/image/upload/v1569710642/CodePen/twitchThumb_wr84mp.jpg"
                  alt=""
                  className="relative z-10 w-full h-full duration-150 ease-in group-hover:translate-x-2 group-hover:-translate-y-2"
                />
              </div>
              <div className="flex mt-4 space-x-2">
                <div className="h-12 rounded-full aspect-square bg-slate-400" />
                <div className="flex flex-col justify-center">
                  <span className="font-semibold text-gray-900">
                    Let&apos;s eat Potato
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Handongsuk
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <FloatingButton href="/streams/create">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;

import type { NextPage } from "next";
import Layout from "@components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4">
        <div>
          <div className="rounded-md h-96 bg-slate-400" />
          <div className="flex py-3 space-x-3 border-b border-gray-300 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-400" />
            <div className="flex flex-col items-center">
              <p className="font-medium">Steve Jebs</p>
              <p className="text-xs text-gray-600">View profile &rarr;</p>
            </div>
          </div>
          <div className="pb-6 mt-6 border-b border-gray-300">
            <h1 className="text-3xl font-bold">Galaxy S50</h1>
            <p className="mt-3 text-2xl font-bold text-gray-900">$140</p>
            <p className="my-6 text-base text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 py-1 font-medium text-white bg-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                Talk to seller
              </button>
              <button className="p-1 text-gray-400 border rounded-lg focus:outline-none focus:ring-orange-400 focus:ring-2 focus:border-transparent">
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="mb-2 aspect-square bg-slate-400" />
                <h3 className="-mb-[2px] text-gray-900">Galaxy S60</h3>
                <p className="text-sm">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;

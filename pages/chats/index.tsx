import type { NextPage } from "next";
import Layout from "@components/layout";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px] pb-20">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (_, i) => (
            <Link key={i} href={`/chats/${i}`}>
              <a className="flex items-center px-4 py-3 space-x-3 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                  <p className="text-gray-700">Steve Jebs</p>
                  <p className="text-sm text-gray-500">
                    See you tomorrow in the corner at 2pm!
                  </p>
                </div>
              </a>
            </Link>
          )
        )}
      </div>
    </Layout>
  );
};

export default Chats;

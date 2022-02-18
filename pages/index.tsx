import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 px-10 py-20 bg-slate-400 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col justify-between p-6 bg-white shadow-xl rounded-2xl dark:bg-black dark:text-white">
        <span className="text-3xl font-semibold">Select Item</span>
        <div>
          <div className="flex justify-between my-2">
            <span className="text-gray-500 dark:text-gray-400">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-gray-500 dark:text-gray-400">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
        </div>
        <div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$38</span>
        </div>
        <div className="w-1/2 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl dark:bg-black dark:border dark:border-white">
          Checkout
        </div>
      </div>
      <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
        <div className="p-6 bg-blue-500 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative px-6 pt-3 bg-white rounded-3xl -top-5">
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="absolute left-0 right-0 flex w-24 h-24 mx-auto bg-red-400 rounded-full -top-16"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center my-8">
            <span className="text-xl font-semibold">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white shadow-xl rounded-2xl"></div>
      <div className="p-6 bg-white shadow-xl rounded-2xl"></div>
    </div>
  );
};

export default Home;

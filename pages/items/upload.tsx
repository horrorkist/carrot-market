import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="flex items-center justify-center w-full h-48 text-gray-600 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:text-orange-400 hover:border-orange-400">
          <svg
            className="w-12 h-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-5">
        <label htmlFor="price" className="text-sm">
          Price
        </label>
        <div className="relative flex items-center mt-1">
          <div className="absolute left-0 flex items-center justify-center pl-3 select-none">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            className="w-full border-gray-400 rounded-lg shadow-sm appearance-none pl-7 focus:border-orange-400 focus:ring-orange-400"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 flex items-center justify-center pr-4">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div className="mt-1">
          <textarea
            className="w-full appearance-none resize-none focus:border-orange-400 focus:outline-none focus:ring-orange-400"
            rows={4}
          />
        </div>
      </div>
      <button className="w-full px-4 py-2 mt-4 text-white bg-orange-400 hover:bg-orange-500 rounded-xl focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none">
        Upload Product
      </button>
    </div>
  );
};

export default Upload;

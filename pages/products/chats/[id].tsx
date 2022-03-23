import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 pb-24 space-y-4">
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />
        <Message text="Hi how much are you selling them for?" />
        <Message reversed text="I want ￦20,000" />
        <Message text="미쳤어" />

        <div className="fixed inset-x-0 w-full max-w-md px-4 mx-auto bottom-4">
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
    </Layout>
  );
};

export default ChatDetail;

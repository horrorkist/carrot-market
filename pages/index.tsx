import type { NextPage } from "next";
import Item from "../components/item";
import Layout from "../components/layout";
import FloatingButton from "../components/floatingButton";

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar={true}>
      <div className="flex flex-col pb-20 divide-y-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            title="New iPhone 14"
            price={95}
            key={i}
            id={i}
            heart={1}
            comments={1}
          />
        ))}
        <FloatingButton href="/items/upload">
          <svg
            className="w-6 h-6"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;

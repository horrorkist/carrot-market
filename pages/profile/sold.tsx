import type { NextPage } from "next";
import Layout from "../../components/layout";
import Item from "../../components/item";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col divide-y-2">
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
      </div>
    </Layout>
  );
};

export default Sold;

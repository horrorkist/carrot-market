import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/product-list";

const Bought: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col divide-y-2">
        <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;

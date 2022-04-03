import type { NextPage } from "next";
import Layout from "@components/layout";
import Item from "@components/item";
import ProductList from "@components/product-list";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col divide-y-2">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;

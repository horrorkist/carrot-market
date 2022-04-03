import type { NextPage } from "next";
import Layout from "@components/layout";
import Item from "@components/item";
import ProductList from "@components/product-list";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col divide-y-2">
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Loved;

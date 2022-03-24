import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import FloatingButton from "@components/floatingButton";
import useUser from "../libs/client/useUser";
import useSWR from "swr";
import { Product } from "@prisma/client";

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");
  console.log(data);
  return user ? (
    <Layout title="홈" hasTabBar={true}>
      <div className="flex flex-col pb-20 divide-y-2">
        {data?.products?.map((product) => (
          <Item
            title={product.name}
            price={product.price}
            key={product.id}
            id={product.id}
            heart={1}
            comments={1}
          />
        ))}
        <FloatingButton href="/products/upload">
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
  ) : null;
};

export default Home;

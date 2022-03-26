import type { NextPage } from "next";
import Layout from "@components/layout";
import { Product, User } from "@prisma/client";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import useMutation from "../../libs/client/useMutation";
import { cls } from "../../libs/client/utils";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: Boolean;
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    toggleFav({});
    mutate({ ...data, isLiked: !data.isLiked }, false);
  };
  return (
    <Layout canGoBack>
      {data?.product ? (
        <div className="px-4">
          <div>
            <div className="rounded-md h-96 bg-slate-400" />
            <Link href={`/users/${data.product.userId}`}>
              <a className="flex py-3 space-x-3 border-b border-gray-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-400" />
                <div className="flex flex-col items-center">
                  <p className="font-medium">{data.product.user.name}</p>
                  <p className="text-xs text-gray-600">View profile &rarr;</p>
                </div>
              </a>
            </Link>
            <div className="pb-6 mt-6 border-b border-gray-300">
              <h1 className="text-3xl font-bold">{data.product.name}</h1>
              <p className="mt-3 text-2xl font-bold text-gray-900">
                ${data.product.price}
              </p>
              <p className="my-6 text-base text-gray-700">
                {data.product.description}
              </p>
              <div className="flex items-center justify-between space-x-2">
                <button className="flex-1 py-1 font-medium text-white bg-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
                  Talk to seller
                </button>
                <button
                  onClick={onFavClick}
                  className={cls(
                    "p-1 border rounded-lg focus:outline-none focus:ring-orange-400 focus:ring-2 focus:border-transparent",
                    data.isLiked ? "text-red-400" : "text-gray-400"
                  )}
                >
                  {data.isLiked ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 "
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Similar items</h2>
            <div className="grid grid-cols-2 gap-4 mt-3">
              {data.relatedProducts?.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <a>
                    <div className="mb-2 aspect-square bg-slate-400" />
                    <h3 className="-mb-[2px] text-gray-900">{product.name}</h3>
                    <p className="text-sm">${product.price}</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </Layout>
  );
};

export default ItemDetail;

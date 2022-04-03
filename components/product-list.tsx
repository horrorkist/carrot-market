import { ProductWithCounts } from "pages";
import useSWR from "swr";
import Item from "@components/item";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}

interface Record {
  id: number;
  product: ProductWithCounts;
}

interface ProductListResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);

  return data ? (
    <>
      {data[kind]?.map((record) => (
        <Item
          title={record.product.name}
          price={record.product.price}
          key={record.product.id}
          id={record.product.id}
          heart={record.product._count.favs}
          comments={1}
        />
      ))}
    </>
  ) : null;
}

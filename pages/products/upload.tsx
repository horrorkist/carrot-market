import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import Input from "@components/input";
import { InputKind } from "@libs/client/utils";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "../../libs/client/useMutation";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.replace(`/products/${data?.product?.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack>
      <form className="px-4" onSubmit={handleSubmit(onValid)}>
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
        <div className="mt-5 space-y-5">
          <Input
            register={register("name", { required: true })}
            required
            label="Name"
            name="name"
            kind={InputKind.text}
          />
          <Input
            register={register("price", { required: true })}
            required
            label="Price"
            name="price"
            kind={InputKind.price}
          />
          <TextArea
            register={register("description", { required: true })}
            required
            label="Description"
            name="description"
          />
        </div>
        <Button text={loading ? "Loading..." : "Upload Item"} />
      </form>
    </Layout>
  );
};

export default Upload;

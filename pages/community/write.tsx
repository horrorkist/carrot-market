import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Post } from "@prisma/client";
import useCoords from "../../libs/client/useCoords";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { latitude, longitude } = useCoords();
  console.log(latitude, longitude);
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] = useMutation<WriteResponse>(
    `/api/posts?latitude=${latitude}&longitude=${longitude}`
  );
  const onValid = (data: WriteForm) => {
    if (loading) return;
    post({ ...data, latitude, longitude });
  };
  useEffect(() => {
    if (data && data.ok) {
      router.replace(`/community/${data.post.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack>
      <div className="px-4">
        <form onSubmit={handleSubmit(onValid)}>
          <TextArea
            register={register("question", { required: true })}
            required
            placeholder="Ask a question!"
          />
          <Button text={loading ? "Loading..." : "Submit"} />
        </form>
      </div>
    </Layout>
  );
};

export default Write;

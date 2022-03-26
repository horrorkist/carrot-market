import type { NextPage } from "next";
import Layout from "@components/layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Answer, Post, User } from "@prisma/client";
import Link from "next/link";
import useMutation from "@libs/client/useMutation";
import TextArea from "@components/textarea";
import { cls } from "../../libs/client/utils";
import { useForm } from "react-hook-form";

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  answers: AnswerWithUser[];
  _count: {
    answers: number;
    wonderings: number;
  };
}

interface PostResponse {
  ok: boolean;
  post: PostWithUser;
  isWondering: Boolean;
}

interface AnswerForm {
  answer: string;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const { id } = router.query;
  const { data, mutate } = useSWR<PostResponse>(id ? `/api/posts/${id}` : null);
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/community");
    }
  }, [data, router]);
  const [toggleWonder, { loading }] = useMutation(`/api/posts/${id}/wonder`);
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation(`/api/posts/${id}/answer`);
  const onWonderClick = () => {
    if (loading || !data) return;
    toggleWonder({});
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            wonderings: data.isWondering
              ? data.post._count.wonderings - 1
              : data.post._count.wonderings + 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
  };
  const onValid = (data: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(data);
  };
  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);
  return data?.ok ? (
    <Layout canGoBack>
      <div>
        <span className="inline-flex my-3 ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          동네질문
        </span>
        <Link href={`/users/profiles/${data.post.user.id}`}>
          <a className="flex items-center px-4 pb-3 mb-3 space-x-3 border-b cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                {data.post.user.name}
              </p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </a>
        </Link>
        <div>
          <div className="px-4 mt-2 text-gray-700">
            <span className="font-medium text-orange-500">Q.</span>{" "}
            {data.post.question}
          </div>
          <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px]  w-full">
            <button
              onClick={onWonderClick}
              className={cls(
                "flex items-center space-x-2 text-sm cursor-pointer",
                data.isWondering ? "text-green-400" : ""
              )}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 {data.post._count.wonderings}</span>
            </button>
            <span className="flex items-center space-x-2 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 {data.post._count.answers}</span>
            </span>
          </div>
        </div>
        <div className="divide-y-2">
          {data.post.answers.map((answer) => (
            <div
              key={answer.id}
              className="flex items-center px-4 py-5 space-y-5"
            >
              <div className="flex items-start space-x-3">
                <div className="h-8 rounded-full aspect-square bg-slate-200" />
                <div>
                  <span className="block text-sm font-medium text-gray-700">
                    {answer.user.name}
                  </span>
                  <span className="block text-xs text-gray-500 ">
                    {answer.createdAt}
                  </span>
                  <p className="mt-2 text-gray-700">{answer.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form className="px-4 mt-4" onSubmit={handleSubmit(onValid)}>
          <TextArea
            register={register("answer", { required: true })}
            required
            placeholder="Answer this question!"
          />
          <button className="w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
            {answerLoading ? "Loading..." : "Reply"}
          </button>
        </form>
      </div>
    </Layout>
  ) : null;
};

export default CommunityPostDetail;

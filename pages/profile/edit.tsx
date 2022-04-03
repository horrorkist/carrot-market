import type { NextPage } from "next";
import Layout from "@components/layout";
import Button from "@components/button";
import Input from "@components/input";
import { InputKind } from "@libs/client/utils";
import { useForm } from "react-hook-form";
import useUser from "../../libs/client/useUser";
import { useEffect } from "react";
import useMutation from "@libs/client/useMutation";

interface EditProfileForm {
  email?: string;
  phone?: string;
  formErrors?: string;
}

const EditProfile: NextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();
  const [edit, { data, loading }] = useMutation("/api/users/me");
  const onValid = ({ email, phone }: EditProfileForm) => {
    console.log("click");
    if (loading) return;
    if (email === "" && phone === "") {
      return setError("formErrors", { message: "Email or Phone is required." });
    }
    edit({ email, phone });
  };
  const onError = () => {
    console.log("error");
  };
  const { user } = useUser();
  useEffect(() => {
    if (user?.email) {
      setValue("email", user.email);
    }
    if (user?.phone) {
      setValue("phone", user.phone);
    }
  }, [setValue, user]);
  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
  }, [data, setError]);
  return (
    <Layout canGoBack>
      <form
        onSubmit={handleSubmit(onValid, onError)}
        className="px-4 space-y-4"
      >
        <div className="flex items-center space-x-3">
          <div className="rounded-full w-14 h-14 bg-slate-500" />
          <label
            htmlFor="picture"
            className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          register={register("email")}
          label="Email address"
          name="email"
          kind={InputKind.email}
        />
        <Input
          register={register("phone")}
          label="Phone number"
          name="phone"
          kind={InputKind.phone}
        />
        {errors.formErrors ? (
          <span className="block my-2 font-bold text-center text-red-500">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button text={loading ? "Loading..." : "Update profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;

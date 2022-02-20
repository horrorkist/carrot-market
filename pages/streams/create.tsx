import type { NextPage } from "next";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Input from "../../components/input";
import { InputKind } from "../../libs/utils";
import TextArea from "../../components/textarea";

const StreamCreate: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4">
        <Input label="Name" name="name" kind={InputKind.text} />
        <Input label="Price" name="price" kind={InputKind.price} />
        <TextArea label="Description" name="description" />
        <Button text="Go Live" />
      </div>
    </Layout>
  );
};

export default StreamCreate;

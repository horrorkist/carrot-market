import { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4">
        <div>
          <TextArea placeholder="Ask a question!" />
          <Button text="Submit" />
        </div>
      </div>
    </Layout>
  );
};

export default Write;

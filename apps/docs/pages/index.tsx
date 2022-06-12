import { Button } from "@scope/ui";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { testing } from "./api/test";

type DocsProperties = {
  word: string;
};

const Docs = ({ word }: DocsProperties) => {
  const [message, setMessage] = useState<string>("");

  const getData = () => {
    return fetch("/api/test")
      .then((data) => data.json())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData().then((data) => {
      setMessage(data.message);
    });
  }, []);

  return (
    <div>
      <h1>DOCS</h1>
      <Button>Docs button</Button>
      <h5>{message}</h5>
      <h5>{word}</h5>
    </div>
  );
};

const getStaticProps: GetStaticProps = () => {
  const testme: string = testing();

  return {
    props: {
      word: testme
    }
  };
};

export { getStaticProps };
export default Docs;

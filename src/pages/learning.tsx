import { Layout } from "src/components/layout";
import { Question } from "src/components/question";
import { GetServerSideProps } from "next";
import type {ListWork} from "../models/work"

type Props = {
  data: ListWork[];
};

export default function Learning(props: Props): JSX.Element {
  console.log(props.data, props.data.length)
  return (
    <Layout>
      <Question workData={props.data} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const count = context.query.count;
  const isAll = context.query.all
  const res = isAll === "true"
    ? await fetch(`http://localhost:3000/users/1/works?isAll=true`)
    : await fetch(`http://localhost:3000/users/1/works?count=${count}`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

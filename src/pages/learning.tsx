import { Layout } from "src/components/layout";
import { Question } from "src/components/question";
import { GetServerSideProps } from "next";
import type { TypeQuestion } from "src/types/types";

type Props = {
  resQuestionDataList: TypeQuestion[];
};

export default function Learning({ resQuestionDataList }: Props): JSX.Element {
  return (
    <Layout>
      <Question questionDataList={resQuestionDataList} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const count = context.query.count;
  const isAll = context.query.all;
  const resQuestion =
    isAll === "true"
      ? await fetch(`http://localhost:3001/users/1/questions?isAll=true`)
      : await fetch(`http://localhost:3001/users/1/questions?count=${count}`);
  const resQuestionDataList = await resQuestion.json();
  return {
    props: {
      resQuestionDataList: resQuestionDataList,
    },
  };
};

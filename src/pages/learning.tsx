import { Layout } from "src/components/layout";
import { Question } from "src/components/question";
import { GetServerSideProps } from "next";
import type { TypeQuestion } from "../models/question";
import type { TypeAnswer } from "../models/answer";

type Props = {
  resQuestionDataList: TypeQuestion[];
  answerDataList: TypeAnswer[];
};

export default function Learning(props: Props): JSX.Element {
  console.log("questionDataList", props.resQuestionDataList)
  return (
    <Layout>
      <Question questionDataList={props.resQuestionDataList} answerDataList={props.answerDataList} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const count = context.query.count;
  const isAll = context.query.all;
  const resQuestion =
    isAll === "true"
      ? await fetch(`http://localhost:3000/users/1/questions?isAll=true`)
      : await fetch(`http://localhost:3000/users/1/questions?count=${count}`);
  const resAnswer = await fetch(`https://localhost:3000/answers`);
  const resQuestionDataList = await resQuestion.json();
  const answerDataList = await resAnswer.json();
  return {
    props: {
      resQuestionDataList: resQuestionDataList,
      answerDataList: answerDataList,
    },
  };
};

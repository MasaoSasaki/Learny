import { Layout } from "src/components/layout";
import { Question } from "src/components/question";
import { GetServerSideProps } from "next";
import type { TypeQuestion } from "../models/question";
import type { TypeAnswer } from "../models/answer";
import {shuffle} from "src/function"

type Props = {
  questionDataList: TypeQuestion[] & { questionId: number };
  answerDataList: TypeAnswer[];
};

export default function Learning(props: Props): JSX.Element {
  const questionDataList = shuffle<TypeQuestion>(props.questionDataList).map((item, index) => ({ ...item, questionId: index + 1 }));
  return (
    <Layout>
      <Question questionDataList={questionDataList} answerDataList={props.answerDataList} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const count = context.query.count;
  const isAll = context.query.all;
  const resWork =
    isAll === "true"
      ? await fetch(`http://localhost:3000/users/1/questions?isAll=true`)
      : await fetch(`http://localhost:3000/users/1/questions?count=${count}`);
  const resAnswer = await fetch(`https://localhost:3000/answers`);
  const questionDataList = await resWork.json();
  const answerDataList = await resAnswer.json();
  return {
    props: {
      questionDataList: questionDataList,
      answerDataList: answerDataList,
    },
  };
};

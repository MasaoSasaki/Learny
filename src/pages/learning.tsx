import { Layout } from "src/components/layout";
import { Question } from "src/components/question";
import { GetServerSideProps } from "next";
import type { WorkList } from "../models/work";
import type { AnswerList } from "../models/answer";
import { useState } from "react";

type Props = {
  workData: WorkList[];
  answerData: AnswerList[];
};

export default function Learning(props: Props): JSX.Element {
  const [tmpAnswerData, setTmpAnswerData] = useState<WorkList[]>(props.workData);
  const workData = props.workData.map((item, index) => ({ ...item, questionId: index + 1 }));
  console.log(workData);
  return (
    <Layout>
      <Question workData={workData} answerData={props.answerData} onClick={setTmpAnswerData} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const count = context.query.count;
  const isAll = context.query.all;
  const resWork =
    isAll === "true"
      ? await fetch(`http://localhost:3000/users/1/works?isAll=true`)
      : await fetch(`http://localhost:3000/users/1/works?count=${count}`);
  const resAnswer = await fetch(`https://localhost:3000/answers`);
  const workData = await resWork.json();
  const answerData = await resAnswer.json();
  return {
    props: {
      workData: workData,
      answerData: answerData,
    },
  };
};

import { Layout } from "src/components/layout";
import { ProfileCard } from "../components/profile-card";
import { LearningConfig } from "../components/learning-config";
import { GetServerSideProps } from "next";

type Props = {
  questionCount: number;
  name: string;
};

export default function MyPage(props: Props): JSX.Element {
  return (
    <Layout>
      <div className="max-w-4xl lg:max-w-6xl flex justify-around items-center h-auto flex-wrap mx-auto my-16 lg:my-0">
        <ProfileCard name={props.name} />
        <LearningConfig questionCount={props.questionCount} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const resUser = await fetch("http://localhost:3000/users/1"); // TODO: 1を動的に変更
  const userData = await resUser.json();
  const resQuestionList = await fetch("http://localhost:3000/users/1/questions"); // TODO: 1を動的に変更
  const questionDataList = await resQuestionList.json();
  return {
    props: {
      name: userData[0].name,
      questionCount: questionDataList.length,
    },
  };
};

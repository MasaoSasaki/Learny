import { Layout } from "src/components/layout";
import { ProfileCard } from "../components/profile-card";
import { LearningConfig } from "../components/learning-config";
import { GetServerSideProps } from "next";

type Props = {
  workCount: number;
  name: string;
};

export default function MyPage(props: Props): JSX.Element {
  return (
    <Layout>
      <div className="max-w-4xl lg:max-w-6xl flex justify-around items-center h-auto flex-wrap mx-auto my-20 lg:my-0">
        <ProfileCard name={props.name} />
        <LearningConfig workCount={props.workCount} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const resUser = await fetch("http://localhost:3000/users/1"); // TODO: ログイン中のユーザーIDに変更する
  const dataUser = await resUser.json();
  const resWork = await fetch("http://localhost:3000/users/1/works"); // TODO: ログイン中のユーザーIDに変更する
  const dataWork = await resWork.json();
  return {
    props: {
      name: dataUser[0].name,
      workCount: dataWork.length,
    },
  };
};

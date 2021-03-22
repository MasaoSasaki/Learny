import { Layout } from "src/components/layout";
import { ProfileCard } from "../components/profile-card";
import { LearningConfig } from "../components/learning-config";
import { GetServerSideProps } from "next";

type Props = { workCount: number };

export default function MyPage(props: Props): JSX.Element {
  return (
    <Layout>
      <div className="max-w-4xl lg:max-w-6xl flex justify-around items-center h-auto flex-wrap mx-auto my-20 lg:my-0">
        <ProfileCard />
        <LearningConfig workCount={props.workCount} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { workCount: data.length } }
}

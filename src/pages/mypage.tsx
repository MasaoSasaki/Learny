import { Layout } from "src/components/layout";
import { ProfileCard } from "../components/profile-card";
import { LearningConfig } from "../components/learning-config";
import { GetServerSideProps } from "next";

type Props = {
  workCount: number,
  data: any
};

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
  const res = await fetch("http://localhost:3000/users/2/works");
  const data = await res.json();
  return {
    props: {
      data: data,
      workCount: data.length,
    }
  }
}

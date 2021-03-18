import type { VFC } from "react";
import { Layout } from "src/components/layout";
import { ProfileCard } from "../components/profile-card";
import { LearningConfig } from "../components/learning-config";

const MyPage: VFC = () => {
  return (
    <Layout>
      <div className="max-w-4xl lg:max-w-6xl flex justify-around items-center h-auto flex-wrap mx-auto my-20 lg:my-0">
        <ProfileCard />
        <LearningConfig />
      </div>
    </Layout>
  );
};

export default MyPage;

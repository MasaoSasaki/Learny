import type { VFC } from "react";
import { Layout } from "src/components/layout";
import { ProfileCard } from "../components/profile-card";

const MyPage: VFC = () => {
  return (
    <Layout>
      <ProfileCard />
    </Layout>
  );
};

export default MyPage;

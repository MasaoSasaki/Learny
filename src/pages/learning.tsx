import { Layout } from "src/components/layout";
import { GetServerSideProps } from "next";

type Props = {
  workCount: number;
  data: any;
};

export default function Learning(props: Props): JSX.Element {
  return <Layout>Learning</Layout>;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("http://localhost:3000/users/2/works");
  const data = await res.json();
  return {
    props: {
      data: data,
      workCount: data.length,
    },
  };
};

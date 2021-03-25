import { Layout } from "src/components/layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Props = {
  workCount: number;
  data: any;
  count: any;
  isAll: any;
};

export default function Learning(props: Props): JSX.Element {
  const router = useRouter();
  console.log(props.data[0], props.count, props.workCount)
  console.log(props.data)
  return (
    <Layout>
      <h2>カテゴリー：{ props.data[0].workBook}</h2>
      <p>問題：{ props.data[0].question}</p>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const count = context.query.count;
  const isAll = context.query.all
  const res = isAll === "true"
    ? await fetch(`http://localhost:3000/users/1/works?isAll=true`)
    : await fetch(`http://localhost:3000/users/1/works?count=${count}`);
  const data = await res.json();
  return {
    props: {
      data: data,
      workCount: data.length,
      count: count,
      isAll: isAll,
    },
  };
};

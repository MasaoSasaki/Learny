import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>Learny</title>
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;

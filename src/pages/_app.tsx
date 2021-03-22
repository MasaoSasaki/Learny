import "src/styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
if (process.env.NODE_ENV === "development") {
  require("src/mocks");
}

import type { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Learny</title>
      </Head>
      <props.Component {...props.pageProps} />
    </ThemeProvider>
  );
};

export default App;

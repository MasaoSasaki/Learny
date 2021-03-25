import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="Hello, World!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-sans font-medium antialiased text-gray-800 leading-normal tracking-wider bg-blue-50 dark:text-gray-100 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

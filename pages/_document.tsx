import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          <link rel="manifest" href="manifest.webmanifest"/>
          <meta name="theme-color" content="#1976d2"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

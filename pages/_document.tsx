import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {/* <script src="https://livi-poc-widget1.vercel.app/_next/static/chunks/remoteEntry.js" />
        <script src="https://livi-poc-widget2.vercel.app/_next/static/chunks/remoteEntry.js" />
        <script src="https://livi-poc-widget3.vercel.app/_next/static/chunks/remoteEntry.js" /> */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
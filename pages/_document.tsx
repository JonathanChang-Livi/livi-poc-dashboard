import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { extractCritical } from "@emotion/server";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://livi-poc-widget1.vercel.app/_next/static/chunks/remoteEntry.js" />
          <script src="https://livi-poc-widget2.vercel.app/_next/static/chunks/remoteEntry.js" />
          <script src="https://livi-poc-widget3.vercel.app/_next/static/chunks/remoteEntry.js" />
          <style
            //@ts-ignore
            data-emotion-css={this.props.ids.join(" ")}
            //@ts-ignore
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
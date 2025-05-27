// pages/_document.js

import Document, { Head, Html, Main, NextScript } from "next/document";

class DefaultDocument extends Document {
  render() {
    const currentLocale = "en";

    return (
      <Html lang={currentLocale as string}>
        <Head>
          <link rel="canonical" href="http://www.paalgyula.com/" />
          <meta name="author" content="Paál Gyula" />
          <meta name="theme-color" content="#607D8B" />
          <link rel="icon" type="image/x-icon" href="favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DefaultDocument;

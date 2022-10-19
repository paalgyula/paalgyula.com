// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class DefaultDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="canonical" href="http://www.paalgyula.com/" />
          <meta name="author" content="Paál Gyula" />
          <meta name="theme-color" content="#607D8B" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic"
            rel="stylesheet"
            type="text/css"
            crossOrigin='anonymous'
          />
          <link
            href="/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />

          <link rel="icon" type="image/x-icon" href="favicon.ico" />
          <link
            rel="stylesheet"
            href="/css/bootstrap.min.css"

          />

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

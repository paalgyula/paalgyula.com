import Head from "next/head";

import "../styles/global.css";

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Paál Gyula - Digital Nomad</title>
        <meta
          name="description"
          content="I'm a professional fullstack developer with 13 years relevant software development experience."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="alternate"
          hrefLang="en-us"
          href="http://www.paalgyula.com/?lang=en"
        />
        <link
          rel="alternate"
          hrefLang="hu"
          href="http://www.paalgyula.com/?lang=hu"
        />
      </Head>
      <main className={notoSans.className + " bg-primary h-full w-full"}>
        bela
      </main>
    </>
  );
}

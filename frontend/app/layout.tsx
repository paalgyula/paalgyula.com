import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { ReactNode } from "react";
import "../styles/global.css";

const { NEXT_PUBLIC_ANALYTICS_ID } = process.env;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={"bg-primary"}>
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="How to Become an SEO Expert (8 Steps)"
        />
        <meta
          property="og:description"
          content="Get from SEO newbie to SEO pro in 8 simple steps."
        />
      </Head>
      {/* <Script
        src={
          "https://www.googletagmanager.com/gtag/js?id=" +
          NEXT_PUBLIC_ANALYTICS_ID
        }
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script> */}
      <GoogleAnalytics gaId={NEXT_PUBLIC_ANALYTICS_ID as string} />
      <body className="text-white">{children}</body>
    </html>
  );
}

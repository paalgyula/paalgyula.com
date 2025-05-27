import Script from "next/script";

import { AppProps } from "next/app";
import { FC } from "react";
// import "../styles/globals.css";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Script
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
    </Script>
    <Component {...pageProps} />
  </>
);

export default MyApp;

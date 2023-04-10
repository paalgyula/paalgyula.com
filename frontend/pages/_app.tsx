import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

import '../styles/globals.css';
import { appWithTranslation } from "next-i18next";
import { FC } from "react";

const { NEXT_PUBLIC_ANALYTICS_ID } = process.env;

const MyApp: FC<{Component: any, pageProps: any}> = ({ Component, pageProps }) => (
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

export default appWithTranslation(MyApp);

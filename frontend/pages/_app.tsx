import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

import { AppProps } from "next/app";
import theme from "theme";
// import "../styles/globals.css";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

function ProfileApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
}

export default ProfileApp;

// export default appWithTranslation(MyApp);

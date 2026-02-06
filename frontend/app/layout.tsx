import Head from "next/head";
import Script from "next/script";
import { ReactNode } from "react";
import ReportVitals from "../components/ReportVitals";
import "../styles/global.css";

const GTM_ID = "GTM-M7NWTTWZ";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={"bg-primary"}>
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Paál Gyula - Sr. Cloud Architect & Cloud Native Developer"
        />
        <meta
          property="og:description"
          content="Cloud Native software architect and developer specializing in highly scalable, next-generation cloud applications with Go, React, Node.js and modern DevOps practices."
        />
      </Head>
      <body className="text-white">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
          }}
        />
        {children}
        <ReportVitals />
      </body>
    </html>
  );
}

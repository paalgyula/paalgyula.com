import Head from "next/head";
import Script from "next/script";
import "../styles/global.css";

const { NEXT_PUBLIC_ANALYTICS_ID } = process.env;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className="text-white">{children}</body>
    </html>
  );
}

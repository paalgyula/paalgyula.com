import { Metadata } from "next";
import Image from "next/image";
import ConnnectBox from "../../app/connect-box";
import CvDropdown from "../../components/CvDropdown";

export const metadata: Metadata = {
  title: "Paál Gyula - Sr. Cloud Architect & Developer",
  description: `Highly motivated Cloud Native Software Developer with a passion for building next-generation, scalable cloud applications. Skilled in to plan and developing robust systems utilizing, go, React, node.js.`,
  alternates: {
    canonical: "/eng",
    languages: {
      en: "/eng",
      hu: "/hun",
    },
  },
  openGraph: {
    title: "Paál Gyula - Sr. Cloud Architect & Developer",
    description: `Highly motivated Cloud Native Software Developer with a passion for building next-generation, scalable cloud applications. Skilled in to plan and developing robust systems utilizing, go, React, node.js.`,
    url: "https://paalgyula.com/eng",
    siteName: "Paál Gyula's Portfolio",
    images: [
      {
        url: "https://paalgyula.com/images/namecard.webp",
        width: 600,
        height: 243,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <div className="mb-10 p-4">
        <Image
          src="/images/namecard.webp"
          alt="Paál Gyula"
          title="Paál Gyula"
          width={600}
          height={243}
        />
      </div>

      <div className="max-w-[500px] text-center font-light italic text-md md:text-xl p-4">
        Highly motivated{" "}
        <span className="text-primary">Cloud Native Software Developer</span>{" "}
        with a passion for building next-generation, scalable cloud
        applications. Skilled in to plan and developing robust systems utilizing{" "}
        <b className="font-bold">go</b>, React, node.js. Currently I am eager to
        tackle new challenges and contribute to innovative projects.
      </div>

      <div className="mt-6">
        <CvDropdown
          language="en"
          buttonLabel="Curriculum Vitae"
          openLabel="Open CV in new tab"
          downloadLabel="Download CV (PDF)"
        />
      </div>

      <div className="mt-10 text-sm flex flex-col items-center gap-2">
        <span>This page is under development...</span>
        <a
          href="/references"
          className="text-primary underline hover:no-underline"
        >
          View my professional references
        </a>
      </div>

      <div className="fixed right-0 bottom-0 text-sm font-light italic">
        <ConnnectBox />
      </div>
    </div>
  );
}

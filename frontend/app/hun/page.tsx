import { Metadata } from "next";
import Image from "next/image";
import ConnnectBox from "../../app/connect-box";
import CvDropdown from "../../components/CvDropdown";
import FullPageScroll from "components/FullPageScroll";

export const metadata: Metadata = {
  title: "Paál Gyula - Senior Cloud Architect & Fejlesztő",
  description:
    "Magasan motivált Cloud Native szoftverfejlesztő, szenvedéllyel a skálázható, új generációs felhőalkalmazások iránt. Tapasztalattal Go, React, Node.js rendszerekben.",
  alternates: {
    canonical: "/hun",
    languages: {
      en: "/eng",
      hu: "/hun",
    },
  },
  openGraph: {
    title: "Paál Gyula - Senior Cloud Architect & Fejlesztő",
    description:
      "Magasan motivált Cloud Native szoftverfejlesztő, szenvedéllyel a skálázható, új generációs felhőalkalmazások iránt. Tapasztalattal Go, React, Node.js rendszerekben.",
    url: "https://paalgyula.com/hun",
    siteName: "Paál Gyula's Portfolio",
    images: [
      {
        url: "https://paalgyula.com/images/namecard.webp",
        width: 600,
        height: 243,
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
};

const IntroductionSlide = () => (
  <div className="h-full w-full flex flex-col justify-center items-center">
    <div className="mb-10 p-4">
      <Image
        src="/images/namecard.webp"
        alt="Paál Gyula"
        title="Paál Gyula"
        width={600}
        height={243}
      />
    </div>

    <div className="max-w-125 text-center font-light italic text-md md:text-xl p-4">
      Magasan motivált{" "}
      <span className="text-primary">Cloud Native szoftverfejlesztő</span>, aki
      szenvedélyesen épít következő generációs, skálázható felhőalkalmazásokat.
      Képzett a robusztus rendszerek tervezésében és fejlesztésében,{" "}
      <b className="font-bold">go</b>, React, node.js felhasználásával. Jelenleg
      szívesen nézek szembe új kihívásokkal és járulok hozzá innovatív
      projektekhez.
    </div>

    <div className="mt-6">
      <CvDropdown
        language="hu"
        buttonLabel="Önéletrajz"
        openLabel="Megnyitás új lapon"
        downloadLabel="Letöltés PDF-ként"
      />
    </div>

    <div className="mt-10 text-sm flex flex-col items-center gap-2">
      <span>Az oldal fejlesztés alatt áll...</span>
      <a
        href="/references"
        className="text-primary underline hover:no-underline"
      >
        Referenciáim megtekintése
      </a>
    </div>

    <div className="fixed right-0 bottom-0 text-sm font-light italic">
      <ConnnectBox />
    </div>
  </div>
);

const ReferencesSlide = () => (
  <div className="h-full w-full flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold mb-6">Referenciák</h1>
    <p className="max-w-2xl text-center text-lg">
      Itt találhatók a korábbi projektjeim és munkáim részletes leírásai,
      amelyek bemutatják a szakmai tapasztalataimat és képességeimet.
    </p>
  </div>
);

export default function Page() {
  return (
    <>
      <FullPageScroll
        slides={[
          {
            id: "welcome",
            color: "#00000000",
            title: "Üdvözöllek",
            content: <IntroductionSlide />,
          },
          {
            id: "references",
            color: "#00000000",
            title: "References",
            content: <ReferencesSlide />,
          },
        ]}
      />
    </>
  );
}

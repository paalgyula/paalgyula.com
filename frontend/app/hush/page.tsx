import { PageHeader } from "components/PageHeader";
import Contacts from "components/Contacts";
import Educations from "components/Educations";
import Experiences from "components/Experiences";
import Portfolio from "components/Portfolio";
import BestSkillsPies from "components/skills/BestSkillsPies";
import SkillsChipses from "components/skills/SkillsChipses";
import Head from "next/head";

import educations from "../../data/educations.json";
import { useTranslation } from "lib/translate";
import { Metadata } from "next";
import PortfolioSection from "components/portfolio/PortfolioSection";

export const metadata: Metadata = {
  // title: "Hush",
  title: "Gyula, Paál - Digital Nomad",
  viewport: "width=device-width, initial-scale=1",
  description:
    "I'm a professional fullstack developer with 13 years relevant software development experience.",
};

export default function HungarianProfilePage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="en-us"
          href="http://www.paalgyula.com/en/"
        />
        <link
          rel="alternate"
          hrefLang="hu"
          href="http://www.paalgyula.com/hu/"
        />
      </Head>

      <PageHeader />

      <div className="wrapper container">
        <section className="experiences-section section" id="experiences">
          <Experiences />
        </section>

        <section className="education-section section" id="eudcation-section">
          <Educations educations={educations} />
        </section>

        <section
          className="skills-section section text-center"
          id="skills-section"
        >
          <h2 className="section-title">{t("knowledgebase")}</h2>

          <BestSkillsPies />

          <SkillsChipses />
        </section>

        <PortfolioSection />

        <Contacts />
      </div>
    </>
  );
}

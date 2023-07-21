import { Header } from "components";
import Contacts from "components/Contacts";
import Educations from "components/Educations";
import Experiences from "components/Experiences";
import Portfolio from "components/Portfolio";
import BestSkillsPies from "components/skills/BestSkillsPies";
import SkillsChipses from "components/skills/SkillsChipses";
import Head from "next/head";

import educations from "../../data/educations.json";
import { useTranslation } from "lib/translate";

export default function HungarianProfilePage() {
  const { t } = useTranslation();

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
          href="http://www.paalgyula.com/en/"
        />
        <link
          rel="alternate"
          hrefLang="hu"
          href="http://www.paalgyula.com/hu/"
        />
      </Head>

      <Header />

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

        <section className="portfolio-section section" id="portfolio-section">
          <h2 className="section-title">Portfolio</h2>

          <h3 className="subtitle">{t("Some of my projects")}</h3>

          <ul className="filters clearfix" id="filters">
            <li className="type active" data-filter="*">
              All
            </li>
            <li className="type" data-filter=".backend">
              Back-end
            </li>
            <li className="type" data-filter=".frontend">
              Front-end
            </li>
            <li className="type" data-filter=".appz">
              Application
            </li>
          </ul>
          <div className="items-wrapper isotope row">
            <Portfolio />
          </div>
        </section>

        <Contacts />
      </div>
    </>
  );
}

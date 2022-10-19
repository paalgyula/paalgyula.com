import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import Contacts from '../components/Contacts';
import Educations from '../components/Educations';
import Experiences from '../components/Experiences';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import BestSkillsPies from '../components/skills/BestSkillsPies.jsx';
import SkillsChipses from '../components/skills/SkillsChipses';

import educations from '../data/educations.json';

// type StaticProps = {
//   locale: string;
// };

// export async function getStaticProps({ locale }: StaticProps) {
//   return {
//     props: {
//       // ...(await serverSideTranslations(locale, ['default'])),
//       // Will be passed to the page component as props
//     },
//   };
// }

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Paál Gyula - The Mad Scientist</title>
        <meta
          name="description"
          content="I'm a professional fullstack developer with 13 years relevant software development experience."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="alternate"
          hrefLang="en-us"
          href="http://www.paalgyula.com/?lang=en"
        />
        <link
          rel="alternate"
          hrefLang="hu-hu"
          href="http://www.paalgyula.com/?lang=hu"
        />
      </Head>

      <Header />

      <div className="wrapper container">
        {/* <span
          style={{
            textAlign: 'center',
          }}
        >
          <h1>{t('Feltöltés alatt...')}</h1>
        </span>
        <br />
        <br /> */}

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
          <h2 className="section-title">{t('knowledgebase')}</h2>

          <BestSkillsPies />

          <SkillsChipses />
        </section>

        <section className="portfolio-section section" id="portfolio-section">
          <h2 className="section-title">Portfolio</h2>

          <h3 className="subtitle">{t('Some of my projects')}</h3>

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
    </div>
  );
};

export default Home;

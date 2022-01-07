import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Contacts from '../components/Contacts';
import Educations from '../components/Educations';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import BestSkillsPies from '../components/skills/BestSkillsPies';
import SkillsChipses from '../components/skills/SkillsChipses';
import { IEducation } from '../src/IEducation';
import { useTranslation } from '../src/translator';
import styles from '../styles/Home.module.css';

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

const EDUCATIONS: IEducation[] = [
  {
    degree: 'Professional Cloud Architect',
    description: 'Google Certified Cloud Architect',
    fromTo: '2022.01.04',
    school: 'PrularSight',
  },
  {
    degree: 'Blockchain Developer',
    description: 'IBM Blockchain Developer Certificate',
    fromTo: '2021.02.07',
    school: 'Cognitive Class',
  },
  {
    degree: 'Certified Ethical Hacker',
    description: 'Certificate from ethical hacking',
    fromTo: '2019.07',
    school: 'EC-Council',
  },
  {
    degree: 'Certified Angular2 Developer',
    description: 'Angular developer certification from Angular 2',
    fromTo: '2015.02.03',
    school: 'PrularSight',
  },
];

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Paál Gyula - The Mad Scientist</title>
        <meta
          name="description"
          content="I'm a professional cloud architect/developer with 13 years relevant software development experience."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className="wrapper container">
        <span
          style={{
            textAlign: 'center',
          }}
        >
          <h1>Feltöltés alatt...</h1>
        </span>
        <br />
        <br />

        <section className="education-section section" id="eudcation-section">
          <Educations educations={EDUCATIONS} />
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

          <h3 className="subtitle">Some of my projects</h3>

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
      <Script src="/analytics.js" />
    </div>
  );
};

export default Home;

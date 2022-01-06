import type { NextPage } from 'next';
import Head from 'next/head';
import Contacts from '../components/Contacts';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

// type StaticProps = {
//   locale: string;
// };

// export async function getStaticProps({ locale }: StaticProps) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['default'])),
//       // Will be passed to the page component as props
//     },
//   };
// }

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Resume - The Mad Scientist</title>
        <meta
          name="description"
          content="I'm a professional cloud architect/developer with 13 years relevant software development experience."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className="wrapper container">
        <span style={{

        }}>
          <h1>Feltöltés alatt...</h1>
        </span>
        <br />
        <br />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

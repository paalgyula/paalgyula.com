import i18next from 'i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from '../../src/translator';

import Home from '../index';


export async function getStaticProps({ locale = 'en' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['default'])),
      // Will be passed to the page component as props
    },
  };
}

const ResumePage = () => {
  const router = useRouter();
  const { language } = router.query;

  useEffect(() => {
    // change the language
    i18next.changeLanguage('en');
  });

  return (
    <Home/>
  );
};

export default ResumePage;

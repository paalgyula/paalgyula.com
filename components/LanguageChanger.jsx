import { useTranslation, LanguageSwitcher, useSelectedLanguage } from 'next-export-i18n';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

/* eslint-disable @next/next/no-img-element */
const LanguageChanger = () => {
  const selectedLanguage = useSelectedLanguage()

  if (selectedLanguage.lang === 'en') {
    return (
      <Link passHref hrefLang="hu" href="?lang=hu">
        <a className="btn">
          {/* <Image
            height={16}
            width={16}
            layout="fixed"
            src="/images/flags/hu-flag.png"
            title="Hungary"
            alt="Hungary"
          /> */}
          <img src="/images/flags/hu-flag.png" alt="Hungary" title="Hungary"/>
        </a>
      </Link>
    );
  }

  return (
    <Link passHref hrefLang="en" href="?lang=en">
      <a className="btn">
        {/* <Image
          height={16}
          width={16}
          src="/images/flags/us-flag.png"
          title="English"
          alt="English"
        /> */}
        <img src="/images/flags/us-flag.png" alt="English" title="English"/>
      </a>
    </Link>
  );
};

export default memo(LanguageChanger);

import Image from 'next/image';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  if (i18n.language === 'en') {
    return (
      <a className="btn" hrefLang="hu" href="/hu">
        <Image
          height={16}
          width={16}
          src="/images/flags/hu-flag.png"
          title="Hungary"
          alt="Hungary"
        />
      </a>
    );
  }

  return (
    <a className="btn" hrefLang="en" href="/en">
      <Image
        height={16}
        width={16}
        src="/images/flags/us-flag.png"
        title="English"
        alt="English"
      />
    </a>
  );
};

export default memo(LanguageChanger);

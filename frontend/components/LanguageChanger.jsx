import Link from "next/link";
import { memo } from "react";
import { useTranslation } from "react-i18next";

/* eslint-disable @next/next/no-img-element */
const LanguageChanger = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "en") {
    return (
      <Link passHref className="btn" hrefLang="hu" href="/hu/">
        {/* <a className="btn"> */}
        {/* <Image
            height={16}
            width={16}
            layout="fixed"
            src="/images/flags/hu-flag.webp"
            title="Hungary"
            alt="Hungary"
          /> */}
        <img src="/images/flags/hu-flag.webp" alt="Hungary" title="Hungary" />
        {/* </a> */}
      </Link>
    );
  }

  return (
    <Link passHref href="/en/" className="btn" hrefLang="en">
      {/* <a className="btn"> */}
      {/* <Image
          height={16}
          width={16}
          src="/images/flags/us-flag.webp"
          title="English"
          alt="English"
        /> */}
      <img src="/images/flags/us-flag.webp" alt="English" title="English" />
      {/* </a> */}
    </Link>
  );
};

export default memo(LanguageChanger);

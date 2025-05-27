import Link from "next/link";
import { useTranslation } from "lib/translate";
import LanguageChanger from "./LanguageChanger";
import { Box } from "@chakra-ui/react";

export const HeaderButtons = () => {
  const { t } = useTranslation();

  return (
    <Box className="actions">
      <LanguageChanger />
      <Link legacyBehavior passHref href="/tutorials">
        <a className="btn hidden-xs">
          <i className="fa fa-book" aria-hidden="true"></i>
          <span>{t("Tutorials")}</span>
          <span className="badge badge-danger">NEW</span>
        </a>
      </Link>
      <a className="btn hidden-xs" href="mailto:paalgyula@paalgyula.com">
        <i className="fa fa-paper-plane" aria-hidden="true"></i>
        <span>{t("Hire me")}</span>
      </a>
      <a className="btn" href="http://www.paalgyula.com/resume.pdf">
        <i className="fa fa-download" aria-hidden="true"></i>
        <span>{t("Download my resume")}</span>
      </a>
    </Box>
  );
};

export default HeaderButtons;

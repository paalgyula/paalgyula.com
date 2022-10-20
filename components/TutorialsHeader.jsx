import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import LanguageChanger from "./LanguageChanger";
import { HeaderSocialLinks } from "./HeaderSocialLinks";
import { useRouter } from "next/router";
import HeaderButtons from "./HeaderButtons";

export const Header = ({ title }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <header className="header">
      <div className="top-bar container-fluid">
        <HeaderButtons />

        <HeaderSocialLinks />
      </div>

      <div className="contact-info">
        <div className="container text-center">
          <ul className="list-inline">
            <li className="email">
              <i className="fa fa-envelope"></i>
              <a href="mailto:paalgyula@paalgyula.com">
                paalgyula@paalgyula.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:+36209410618">+36 20 941 0618</a>
            </li>
            <li className="website">
              <i className="fa fa-globe"></i>
              <a
                href="https://www.paalgyula.com"
                rel="noreferrer"
                target="_blank"
              >
                www.paalgyula.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-nav-space-holder hidden-xs">
        <div className="page-nav-wrapper text-center" id="page-nav-wrapper">
          <div className="container">
            <ul className="nav page-nav list-inline" id="page-nav">
              {router.pathname
                .split("/")
                .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
                .slice(0, -1)
                .filter((p) => p.trim() !== "")
                .join(" > ")}{" "}
              &gt; {title}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

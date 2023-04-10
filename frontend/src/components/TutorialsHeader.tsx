// import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import HeaderButtons from "./HeaderButtons";
import { HeaderSocialLinks } from "./HeaderSocialLinks";

type Props = {
  title: string,
  breadcrumb?: ReactNode
}

export const Header: FC<Props> = ({ title, breadcrumb }) => {
  const { t } = useTranslation();

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

      {breadcrumb && (
        <div className="page-nav-space-holder hidden-xs">
          <div className="page-nav-wrapper text-center" id="page-nav-wrapper">
            <div className="container">
              {breadcrumb}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import HeaderSocialLinks from "./HeaderSocialLinks";
import LanguageChanger from "./LanguageChanger";
import { HeaderButtons } from './HeaderButtons';

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  const { t } = useTranslation();

  const scrollTo = (e, selector) => {
    e.preventDefault();

    const element = document.querySelector(selector);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: "smooth", // smooth scroll
      });
    }
  };

  return (
    <header className="header">
      <div className="top-bar container-fluid">
        <HeaderButtons/>

        <HeaderSocialLinks />
      </div>
      <div itemScope itemType="https://schema.org/Person" className="intro">
        <div className="container text-center">
          <Image
            height={160}
            width={160}
            className="profile-image"
            src="/images/profile-image.webp"
            alt="Paál Gyula"
            title="Paál Gyula"
          />
          <h1 className="name" itemProp="name">
            {t("Gyula, Paál")}
          </h1>
          <div className="title">
            (The Mad Scientist)
            <br />
            <img src="/images/g-logo.svg" alt="Google" title="Google" />{" "}
            <span itemProp="jobTitle">Certified Cloud Architect</span>
          </div>
          <div itemProp="description" className="profile">
            {t("introduction")}
          </div>
        </div>
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
              <li>
                <a
                  className="scrollto"
                  onClick={(e) => scrollTo(e, "#experiences-section")}
                  href="#"
                >
                  {t("Experiences")}
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={(e) => scrollTo(e, "#eudcation-section")}
                >
                  {t("Educations")}
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={(e) => scrollTo(e, "#skills-section")}
                >
                  {t("Skillset")}
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={(e) => scrollTo(e, "#testimonials-section")}
                >
                  {t("Testimonals")}
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={(e) => scrollTo(e, "#portfolio-section")}
                >
                  {t("Portfolio")}
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={(e) => scrollTo(e, "#contact-section")}
                >
                  {t("Contacts")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

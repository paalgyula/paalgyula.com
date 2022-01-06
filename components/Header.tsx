import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC<{}> = () => {
  const { t } = useTranslation();

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth', // smooth scroll
      });
    }
  };

  return (
    <header className="header">
      <div className="top-bar container-fluid">
        <div className="actions">
          <a className="btn" href="/en/">
            <img
              src="/images/flags/us-flag.png"
              title="English"
              alt="English"
            />
          </a>
          <a className="btn hidden-xs" href="mailto:paalgyula@paalgyula.com">
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
            <span>{t('Hire me')}</span>
          </a>
          <a className="btn" href="http://www.paalgyula.com/resume.pdf">
            <i className="fa fa-download" aria-hidden="true"></i>
            <span>{t('Download my resume')}</span>
          </a>
        </div>

        <ul className="social list-inline">
          <li>
            <a href="https://twitter.com/paalgyula">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://plus.google.com/+PaálGyulaÖrdög">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://bitbucket.org/paalgyula">
              <i className="fa fa-bitbucket" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/paalgyula">
              <i className="fa fa-github-alt" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="skype:goofydesign?add">
              <i className="fa fa-skype" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="intro">
        <div className="container text-center">
          <img
            className="profile-image"
            src="/images/profile-image.png"
            alt="Paál Gyula"
            title="Paál Gyula"
          />
          <h1 className="name">Paál Gyula</h1>
          <div className="title">
            (Mad Scientist)
            <br/>

            <img src="/images/g-logo.svg" alt="Google" title="Google" /> Certified Cloud Architect
          </div>
          <div className="profile">
            <p>
              Cloud native software tervező vagyok, jelenleg Budapesten élek.
              Többnyire webes alkalmazásokat tervezek/kivitelezek, Go/Java(SpringBoot)/node.js és React/React Native
              használatával. Jelenleg az InterTicket Enterprise Kft. alkalmazottja vagyok,
              de nyitott vagyok új kihívásokra, most alakuló cégemmel: a <b>Progressive Innovation LAB</b> -el!
            </p>
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
              <a href="tel:+36202500012">+36 20 250 0012</a>
            </li>
            <li className="website">
              <i className="fa fa-globe"></i>
              <a href="#" target="_blank">
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
                  onClick={() => scrollTo('#experiences-section')}
                  href="#"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={() => scrollTo('#eudcation-section')}
                >
                  Educations
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={() => scrollTo('#skills-section')}
                >
                  Skillset
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={() => scrollTo('#testimonials-section')}
                >
                  Testimonals
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={() => scrollTo('#portfolio-section')}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="scrollto"
                  href="#"
                  onClick={() => scrollTo('#contact-section')}
                >
                  Contacts
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

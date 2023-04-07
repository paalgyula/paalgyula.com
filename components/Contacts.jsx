import { useTranslation } from 'react-i18next';
import * as React from 'react';

/* eslint-disable @next/next/no-img-element */
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="contact-section section" id="contact-section">
        <h2 className="section-title">{t('Contacts')}</h2>
        <div className="intro">
          <img
            className="profile-image"
            src="/images/profile-image.webp"
            alt="Paál Gyula"
            title="Paál Gyula"
          />
          <div className="dialog">
            <p>{t(`I'm ready to help you in the following as a contractor`)}</p>
            <p>
              <strong>A következőkben lehetek a segítségedre:</strong>
            </p>
            <ul className="list-unstyled service-list">
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                {t('Mobile Development')}: React Native (Cross Platform)
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                {t('Application Development')}: Java(Swing)/
                <b>Progressive Web Application (PWA)</b>/Electron
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                {t('Frontend Development')}: <b>React</b>/Angular
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                {t('Backend Development')}: <b>go</b>/SpringBoot/Node.js
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                {t('DevOps')}: CI/CD pipeline setup, containerizing existing
                applications, migrating existing infrastructure to cloud
              </li>
            </ul>
            <p>
              Írj üzenetet:{' '}
              <a href="mailto:paalgyula@paalgyula.com">
                paalgyula@paalgyula.com
              </a>{' '}
              -ra vagy hívj bátran:{' '}
              <a href="tel:+36209410618">+36 20 941 0618</a>
            </p>
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
        </div>
      </section>
    </>
  );
};

export default Contacts;

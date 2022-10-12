import * as React from 'react'

const Contacts = () => {
  return (
    <>
      <section className="contact-section section" id="contact-section">
        <h2 className="section-title">Kapcsolatfelvétel</h2>
        <div className="intro">
          <img
            className="profile-image"
            src="/images/profile-image.png"
            alt=""
          />
          <div className="dialog">
            <p>Szívesen vállalok szabadúszóként projekteket!</p>
            <p>
              <strong>A következőkben lehetek a segítségedre:</strong>
            </p>
            <ul className="list-unstyled service-list">
              <li>
                <i className="fa fa-check" aria-hidden="true"></i> Mobil
                fejlesztés: React Native
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i> Alkalmazás
                fejlesztés Java(Fx|Swing)/Qt5
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i> Front-end
                fejlesztés: React/Angular
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i> Back-end
                fejlesztés: SpringBoot/<b>go</b>/Node.js
              </li>
            </ul>
            <p>
              Írj üzenetet:{' '}
              <a href="mailto:paalgyula@paalgyula.com">
                paalgyula@paalgyula.com
              </a> -ra
              vagy hívj bátran:{' '}
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

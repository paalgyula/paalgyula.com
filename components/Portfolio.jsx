import Script from 'next/script';

import PORTFOLIO_ITEMS from '../data/portfolio.json';

const PortfolioItem = ({ item }) => {
  return (
    <div className={`item ${item.category} col-md-3 col-xs-6`}>
      <div className="item-inner">
        <figure className="figure">
          <img
            loading="lazy"
            className="img-responsive"
            src={item.image}
            alt={item.imgAlt || item.name}
          />
        </figure>
        <div className="content text-left">
          <h3 className="sub-title">
            <a href="#">{item.name}</a>
          </h3>
          <div className="meta">{item.meta}</div>
          <div className="action">
            {item.link && <a href={item.link.url}>{item.link.text}</a>}
          </div>
        </div>
        <a className="link-mask" href={item.link.url}></a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className="item appz col-md-3 col-xs-6">
        <div className="item-inner">
          <figure className="figure">
            <img
              className="img-responsive"
              src="/images/portfolio/portfolio-zombieland.webp"
              alt="ZombieLand Client"
              loading="lazy"
            />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title">
              <a href="#">ZombieLand Game Client</a>
            </h3>
            <div className="meta">Unity3D</div>
            <div className="action">
              <a href="https://github.com/paalgyula/zombieland">
                View on Github
              </a>
            </div>
          </div>
          <a
            className="link-mask"
            href="https://github.com/paalgyula/zombieland"
          ></a>
        </div>
      </div>
      <div className="item appz col-md-3 col-xs-6">
        <div className="item-inner">
          <figure className="figure">
            <img
              className="img-responsive"
              src="/images/portfolio/portfolio-ncoredroid.webp"
              alt="nCore Android Client"
              height={180}
              width={320}
              loading="lazy"
            />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title">
              <a href="#">nCore Torrent Tracker client</a>
            </h3>
            <div className="meta">Android/Java</div>
            <div className="action">
              <a href="https://github.com/paalgyula/ncoredroid">
                View on Github
              </a>
            </div>
          </div>
          <a
            className="link-mask"
            href="https://github.com/paalgyula/ncoredroid"
          ></a>
        </div>
      </div>
      {PORTFOLIO_ITEMS.map((item) => (
        <PortfolioItem item={item} key={item.name} />
      ))}

      <Script
        src="/javascript/isotope.pkgd.min.js"
        onLoad={() => {
          require('../public/javascript/isotope-activator.js');
        }}
      />
    </>
  );
};

export default Portfolio;

import Script from 'next/script';
import { IPortfolioItem } from '../src/PortfolioItem';

const PORTFOLIO_ITEMS: IPortfolioItem[] = [
  {
    category: 'frontend',
    image: '/images/portfolio/portfolio-gravatar.jpg',
    imgAlt: 'Gravatar Taglib',
    meta: 'Java',
    name: 'Gravatar JSP/JSF Tag Library',
    link: {
      text: 'View on Bitbucket',
      url: 'https://bitbucket.org/paalgyula/gravatar-taglib',
    },
  },
  {
    category: 'frontend',
    image: '/images/portfolio/portfolio-zamzi-frontend.png',
    imgAlt: 'Zamazingo',
    meta: 'Node.JS/React',
    name: 'Zamazingo Quiz Platform',
    link: {
      text: 'Visit website',
      url: 'https://zamzi.hu',
    },
  },
  {
    category: 'appz',
    image: '/images/portfolio/portfolio-zamzi-mobile.png',
    imgAlt: 'Zamazingo',
    meta: 'React Native',
    name: 'Zamazingo Quiz Platform Client',
    link: {
      text: 'Visit website',
      url: 'https://rm.zamzi.hu',
    },
  },
  {
    category: 'frontend',
    image: '/images/portfolio/portfolio-pirat.png',
    imgAlt: 'PiR@',
    meta: 'React/go',
    name: 'PiR@ Issue Tracker (WIP)',
    link: {
      text: 'Visit website',
      url: 'https://pirat.app',
    },
  },
  {
    category: 'backend',
    image: '/images/portfolio/portfolio-jegymester.png',
    imgAlt: 'Jegymester',
    meta: 'J2EE',
    name: 'jegymester.hu backend',
    link: {
      text: 'Visit website',
      url: 'https://jegymester.hu',
    },
  },{
    category: 'backend',
    image: '/images/portfolio/portfolio-ris.jpg',
    imgAlt: 'RIS',
    meta: 'C#/asp.net/Angular',
    name: 'Railway Integrated System',
    link: {
      text: 'Visit website',
      url: 'http://riseurope.eu/',
    },
  }
];

type PortfolioItemProps = {
  item: IPortfolioItem;
};

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  return (
    <div className={`item ${item.category} col-md-3 col-xs-6`}>
      <div className="item-inner">
        <figure className="figure">
          <img
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
        <a className="link-mask" href={item.link?.url}></a>
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
              src="/images/portfolio/portfolio-zombieland.jpg"
              alt="ZombieLand Client"
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
              src="/images/portfolio/portfolio-ncoredroid.jpg"
              alt="nCore Android Client"
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

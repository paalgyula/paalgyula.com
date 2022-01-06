const Portfolio = () => {
  return (
    <>
      <div className="item appz col-md-3 col-xs-6">
        <div className="item-inner">
          <figure className="figure">
            <img
              className="img-responsive"
              src="assets/images/portfolio/portfolio-zombieland.jpg"
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
              src="assets/images/portfolio/portfolio-ncoredroid.jpg"
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
      <div className="item frontend col-md-3 col-xs-6">
        <div className="item-inner">
          <figure className="figure">
            <img
              className="img-responsive"
              src="assets/images/portfolio/portfolio-gravatar.jpg"
              alt="Gravatar Taglib"
            />
          </figure>
          <div className="content text-left">
            <h3 className="sub-title">
              <a href="#">Gravatar JSP/JSF Tag Library</a>
            </h3>
            <div className="meta">Java</div>
            <div className="action">
              <a href="https://bitbucket.org/paalgyula/gravatar-taglib">
                View on Bitbucket
              </a>
            </div>
          </div>
          <a
            className="link-mask"
            href="https://bitbucket.org/paalgyula/gravatar-taglib"
          ></a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

import Link from "next/link";
import LanguageChanger from "./LanguageChanger";

export const HeaderButtons = () => {
  return (
    <div className="actions">
      <LanguageChanger />
      <Link legacyBehavior passHref href="/tutorials">
        <a className="btn hidden-xs">
          <i className="fa fa-book" aria-hidden="true"></i>
          <span>Tutorials</span> <span className="badge badge-danger">NEW</span>
        </a>
      </Link>
      <a className="btn hidden-xs" href="mailto:paalgyula@paalgyula.com">
        <i className="fa fa-paper-plane" aria-hidden="true"></i>
        <span>Hire me</span>
      </a>
      <a className="btn" href="http://www.paalgyula.com/resume.pdf">
        <i className="fa fa-download" aria-hidden="true"></i>
        <span>Download my resume</span>
      </a>
    </div>
  );
};

export default HeaderButtons;

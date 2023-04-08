import Script from 'next/script';

import { useTranslation } from "react-i18next";

import KNOWLEDGES from '../../data/knowledgebase.json';

const BestSkillsPies = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="top-skills">
        <h3 className="subtitle">{t('skills-subtitle')}</h3>
        <div className="row">
          {KNOWLEDGES.map((ki) => (
            <div key={ki.name} className="item col-xs-12 col-sm-3">
              <div className="item-inner">
                <div className="chart-easy-pie text-center">
                  <div
                    className="chart-theme-1 chart"
                    data-percent={ki.percent}
                  >
                    <span>{ki.percent}</span>%
                  </div>
                </div>
                <h4 className="skill-name">{ki.name}</h4>
                <div className="level">
                  {t(ki.title)}, {ki.years} years
                </div>
                <div className="desc"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script src="/javascript/easypiechart.min.js" onLoad={() => {
        require('../../../public/javascript/chart-activator.js')
      }}/>
    </>
  );
};

export default BestSkillsPies;

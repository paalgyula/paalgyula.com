import { useTranslation } from "../../src/translator";

const SkillsChipses = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="other-skills">
        <h3 className="subtitle">{t('another-experiences')}</h3>
        <div className="misc-skills">
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">SASS/SCSS</span>
          <span className="skill-tag">Git/GitFlow</span>
          <br />
          <span className="skill-tag text-danger">
            J2EE (JBossAS/Wildfly/WebSphere)
          </span>
          <span className="skill-tag text-danger">Spring/SpringBoot</span>
          <span className="skill-tag text-danger">C#</span>
          <span className="skill-tag text-danger">
            Qt5 (Cross Platform Development)
          </span>
          <br />
          <span className="skill-tag text-success">PostgreSQL</span>
          <span className="skill-tag text-success">MySQL</span>
          <span className="skill-tag text-success">Oracle 9+</span>
          <span className="skill-tag text-success">MongoDB</span>
        </div>
      </div>
    </>
  );
};

export default SkillsChipses;

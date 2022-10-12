import { useTranslation } from "next-export-i18n";

const Educations = ({ educations }) => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="section-title">{t('Educations')}</h2>
      <div className="row">
        {educations?.map((e) => (
          <div key={e.degree} className="item col-xs-12 col-sm-4">
            <div className="item-inner">
              <h3 className="degree">{e.degree}</h3>
              <div className="education-body">{e.school}</div>
              <div className="time">{e.fromTo}</div>
              <div className="desc">{e.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Educations;

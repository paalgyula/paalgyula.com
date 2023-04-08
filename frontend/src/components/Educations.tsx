import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IEdutcation {
  degree: string;
  school: string;
  fromTo: string;
  description: string;
}

type Props = {
  educations: IEdutcation[]
}

const Educations: FC<Props> = ({ educations }) => {
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

import { IEducation } from "lib/models";
import { FC } from "react";

type EducationsProps = {
  educations: IEducation[];
};

const Educations: FC<EducationsProps> = ({ educations }) => {
  return (
    <>
      <h2 className="section-title">Educations</h2>
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

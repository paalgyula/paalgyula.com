import Image from "next/image";
import Link from "next/link";
import experiences from "../data/experiences.json";

const Experiences = () => {
  return (
    <>
      <h2 className="section-title">Experiences</h2>
      <div className="timeline">
        {experiences.map((experience) => (
          <div key={experience.jobTitle} className="item">
            <div className="work-place">
              <h3 className="place">
                {experience.employer.image && (
                  <Image
                    src={experience.employer.image.source}
                    height={experience.employer.image.height}
                    width={experience.employer.image.width}
                    alt={experience.employer.name}
                  />
                )}
                {experience.employer.name}
              </h3>
              <div className="location hidden-xs">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {experience.employer.location ? (
                  <Link href={experience.employer.location} target="_blank">
                    {experience.employer.address}
                  </Link>
                ) : (
                  experience.employer.address
                )}
              </div>
            </div>
            <div className="job-meta">
              <div className="title">{experience.jobTitle}</div>
              <div className="time">
                {experience.from} - {experience.to || "Today"}
              </div>
            </div>
            <div className="job-desc">
              <p>{experience.description}</p>

              {experience.technologies && (
                <ul>
                  {experience.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experiences;

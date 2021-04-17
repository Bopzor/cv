import React from 'react';

const ExperienceHeader: React.FC = ({ children }) => <h4 className="experiences-header">{children}</h4>;

type ExperiencesProps = {
  data: {
    professional: {
      title: string;
      experience: {
        from: string;
        to: string;
        company: string;
        job: string;
        mission: {
          description: string;
          details: string[];
        };
      }[];
    };
    personnal: {
      title: string;
      experience: {
        from: string;
        to: string;
        name: string;
        mission: {
          description: string;
          technos: string[];
        };
      }[];
    };
  };
};

const Experiences: React.FC<ExperiencesProps> = ({ data }) => (
  <section className="experiences">
    <section>
      <ExperienceHeader>{data.professional.title}</ExperienceHeader>

      {data.professional.experience.map((xp) => (
        <article key={xp.company}>
          <div className="date">
            <p>{xp.from} -</p>
            <p>{xp.to}</p>
          </div>
          <div className="content">
            <h5>{xp.company}</h5>
            <h6>{xp.job}</h6>

            <p className="missision-description">{xp.mission.description}</p>

            {xp.mission.details.length > 0 && (
              <ul>
                {xp.mission.details.map((detail: string) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </section>

    <section>
      <ExperienceHeader>{data.personnal.title}</ExperienceHeader>

      {data.personnal.experience.map((xp) => (
        <article key={xp.name}>
          <div className="date">
            <p>{xp.from} -</p>
            <p>{xp.to}</p>
          </div>

          <div className="content">
            <h5>{xp.name}</h5>

            <p className="missision-description">{xp.mission.description}</p>

            <div className="technos">
              {xp.mission.technos.map((techno: string) => (
                <p key={techno}>{techno}</p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  </section>
);

export default Experiences;

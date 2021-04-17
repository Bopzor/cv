import React from 'react';

type FormationsProps = {
  data: {
    title: string;
    formation: {
      from: string;
      to: string;
      duration: string;
      name: string;
      academy: string;
      location: string;
    }[];
  };
};

const Formations: React.FC<FormationsProps> = ({ data }) => (
  <section className="formation">
    <h4 className="formation-header">{data.title}</h4>

    {data.formation.map((formation) => (
      <article key={formation.name}>
        <div className="date">
          <p>
            {formation.from}
            {formation.to && '-'}
          </p>
          {formation.to && <p>{formation.to}</p>}
          {formation.duration && <p>({formation.duration})</p>}
        </div>

        <div className="content">
          <h5>{formation.name}</h5>
        </div>

        <p className="location">
          {formation.academy} <span>{formation.location}</span>
        </p>
      </article>
    ))}
  </section>
);

export default Formations;

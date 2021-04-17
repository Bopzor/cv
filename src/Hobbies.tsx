import React from 'react';

type HobbiesProps = {
  data: {
    title: string;
    hobby: {
      category: string;
      content: string;
    }[];
  };
};

const Hobbies: React.FC<HobbiesProps> = ({ data }) => (
  <section className="hobbies">
    <h4 className="hobbies-header">{data.title}</h4>

    {data.hobby.map((hobby) => (
      <article key={hobby.category}>
        <p>
          <strong>
            {hobby.category}
            {hobby.content && ' :'}
          </strong>{' '}
          {hobby.content}
        </p>
      </article>
    ))}
  </section>
);

export default Hobbies;

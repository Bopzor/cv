import React from 'react';

const AsideCategoryHeader: React.FC = ({ children }) => <h4 className="aside-categoy-header">{children}</h4>;

type AsideProps = {
  data: {
    fullname: string;
    job: string;

    personnalInfo: {
      title: string;
      location: string;
      info: {
        title: string;
        link: string;
        text: string;
        sensitive?: boolean;
      }[];
    };

    skills: {
      title: string;
      language: string;
      skill: {
        title: string;
        technos: string;
      }[];
    };

    languages: {
      title: string;
      language: {
        lang: string;
        level: string;
      }[];
    };
  };
};

const Aside: React.FC<AsideProps> = ({ data }) => (
  <aside className="aside-left">
    <section>
      <h1>{data.fullname}</h1>
      <p>{data.job}</p>
    </section>

    <AsideCategoryHeader>{data.personnalInfo.title}</AsideCategoryHeader>

    <section>
      <p>{data.personnalInfo.location}</p>

      {data.personnalInfo.info.map((info) => {
        if (info.sensitive && process.env.HIDE_SENSITIVE) {
          return null;
        }

        return (
          <article key={info.title}>
            <h6>{info.title}</h6>
            <a href={info.link} className="a-no-underline">
              {info.text}
            </a>
          </article>
        );
      })}
    </section>

    <AsideCategoryHeader>{data.skills.title}</AsideCategoryHeader>

    <section className="skills">
      <p>{data.skills.language}</p>

      {data.skills.skill.map((skill) => (
        <article key={skill.title}>
          <h6>{skill.title}</h6>
          <p>{skill.technos}</p>
        </article>
      ))}
    </section>

    <AsideCategoryHeader>{data.languages.title}</AsideCategoryHeader>

    <section className="languages">
      {data.languages.language.map((lang) => (
        <article key={lang.lang}>
          <h6>{lang.lang}</h6>
          <p>{lang.level}</p>
        </article>
      ))}
    </section>
  </aside>
);

export default Aside;

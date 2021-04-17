import React from 'react';

import data from '../data/fr.json';

import Aside from './Aside';
import Experiences from './Experiences';
import Formations from './Formations';
import Hobbies from './Hobbies';

import './reset.css';
import './styles.css';

const CV: React.FC = () => {
  return (
    <main>
      <Aside data={data.aside} />

      <aside className="aside-right">
        <Experiences data={data.experiences} />
        <Formations data={data.formations} />
        <Hobbies data={data.hobbies} />
      </aside>
    </main>
  );
};

export default CV;

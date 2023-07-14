import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

const PigGame = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto">
      <div className="text-4xl text-red">Pig Game</div>;
      <div>
        <div className="text-2xl">Tech Stack</div>
        <ul>
          <li>JavaScript, HTML, CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default PigGame;

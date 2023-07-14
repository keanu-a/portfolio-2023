import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

const TagalogLearning = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto">
      <div className="text-4xl text-red">Tagalog Learning</div>

      <ProjectHeaderImage />

      <p className="mt-5">
        I started this project when I made it a goal in 2023 to learn Tagalog,
        my family's lanugage. A lot of language learning apps like Duolingo
        didn't offer tagalog, and another app called Drops just didn't have
        enough content. So I decided to create my own website that taught
        tagalog, and it would be great since I can learn as I code.
      </p>

      <div>
        <div className="text-2xl">Tech Stack</div>
        <ul>
          <li>Frontend: React, Sass</li>
          <li>Backend: Express, Node, Mongoose</li>
          <li>Database: MongoDB</li>
        </ul>
      </div>
    </main>
  );
};

export default TagalogLearning;

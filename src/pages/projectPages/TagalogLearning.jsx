import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

import tagalogLearning from '../../assets/tagalog-learning.png';

const TagalogLearning = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">Tagalog Learning</div>

      <ProjectHeaderImage
        image={tagalogLearning}
        altText="Tagalog Learning preview picture"
      />

      <div>
        <h3 className="text-2xl">Reason for Creating</h3>
        <p>
          I started this project when I made it a goal in 2023 to learn Tagalog.
          My moms side of the family all speak Tagalog but never got the change
          to learn or get taught it, but this is the year I push myself to do
          it. I my journey in learning, I noticed lot of language learning apps
          like Duolingo didn't offer tagalog, and other apps like Drops just
          didn't have enough content. So I decided to create my own website that
          taught tagalog, and it would be great since I can learn as I code.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Development</h3>
        <p>
          Decided to use Vite to develop the frontend since it is a lot faster
          than create-react-app.
        </p>
        <p>
          In the backend, I created CRUD API's using Node and Express, and
          tested all endpoints with Postman.
        </p>
        <p>
          The frontend fetches lessons from the database, and it includes all
          questions, words, and phrases needed for the lesson.
        </p>
        <p className="text-red">This project is still a work in progress!</p>
      </div>

      <div>
        <h3 className="text-2xl">Tech Stack</h3>
        <ul>
          <li>Frontend: React, Sass</li>
          <li>Backend: Express, Node, Mongoose</li>
          <li>Database: MongoDB</li>
          <li>Testing: Postman</li>
        </ul>
      </div>
    </main>
  );
};

export default TagalogLearning;

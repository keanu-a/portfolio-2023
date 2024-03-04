import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

import tagalogLearning from '../../assets/tagalog-learning.png';
import easytagalog from '../../assets/easytagalog.png';

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
          My moms side of the family all speak Tagalog but never got the chance
          to learn or get taught it, but this is the year I push myself to do
          it. I my journey in learning, I noticed lot of language learning apps
          like Duolingo didn't offer tagalog, and other apps like Drops just
          didn't have enough content. So I decided to create my own website that
          taught tagalog, and it would be great since I can learn as I code.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">2023 Development</h3>
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
        <h3 className="text-2xl">2023 Tech Stack</h3>
        <ul>
          <li>Frontend: React, Sass</li>
          <li>Backend: Express, Node, Mongoose</li>
          <li>Database: MongoDB</li>
          <li>Testing: Postman</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl">2024 Development</h3>
        <p>
          I decided to change the name to "Easy Tagalog" to make a more correct
          and catchy company name. I also decided to change the tech stack as
          technologies started evolving. Although it will make me take longer to
          make the application, I think it will make me a more well rounded
          developer.
        </p>
        <br />
        <p>
          The first big change was switching from React to Next.js, which isn't
          too big of a change but still had to learn the Next quirks. The next
          change was switching my backend from Node/Express to the Django REST
          framework. This is because I wanted to touch up on my python, and I
          also think Django has more out of the box, robust, and more secure.
          Lastly, I switched from a nonrelational database MongoDB to PostgreSQL
          hosted on Amazon RDS. This is because I wanted to touch up on my SQL
          skills. Since this is my big focus project, I wanted to learn
          everything in one project even if it will be a learning curve.
        </p>
        <p className="text-red">This project is still a work in progress!</p>
      </div>

      <ProjectHeaderImage
        image={easytagalog}
        altText="Easy Tagalog preview picture"
      />

      <div>
        <h3 className="text-2xl">2024 Tech Stack</h3>
        <ul>
          <li>Frontend: Next.js, TypeScript, Tailwind CSS</li>
          <li>Backend: Django REST framework</li>
          <li>Database: PostgreSQL hosted on Amazon RDS, Amazon S3</li>
          <li>Testing: Postman</li>
        </ul>
      </div>
    </main>
  );
};

export default TagalogLearning;

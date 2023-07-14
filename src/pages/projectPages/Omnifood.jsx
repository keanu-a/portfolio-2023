import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';
import ProjectLink from '../../components/ProjectLink';

import omnifood from '../../assets/omnifood.png';

const Omnifood = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">Omnifood</div>

      <ProjectHeaderImage image={omnifood} altText="Omnifood preview picture" />

      <ProjectLink
        link="https://omnifood-keanu.netlify.app/"
        projectName="Omnifood"
      />

      <div>
        <h3 className="text-2xl">Reason for Creating</h3>
        <p>
          This project was actually the final project of a JavaScript course
          that I took. I really wanted to learn web development so I bought a
          course that taught me mostly everything I need to know with
          JavaScript. It taught me how to make beautiful and responsive web
          pages. This project was to make a landing page for a mock company
          called "Omnifood" and they were a meal delivery service.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Tech Stack</h3>
        <ul>
          <li>JavaScript, HTML, CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default Omnifood;

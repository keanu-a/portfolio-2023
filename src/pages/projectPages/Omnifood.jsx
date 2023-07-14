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

      <p>
        This project was actually the final project of a JavaScript course I
        took. It taught me how to make beautiful and responsive web pages. This
        project was to make a landing page for a mock company called "Omnifood"
        and they were a meal delivery service. I learned the basics of
        JavaScript and the necessary CSS to make responsive designs with all
        it's components.
      </p>

      <div>
        <div className="text-2xl">Tech Stack</div>
        <ul>
          <li>JavaScript, HTML, CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default Omnifood;

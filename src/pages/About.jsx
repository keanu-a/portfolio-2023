import React from 'react';

const About = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto">
      <div className="text-4xl text-red">About Me</div>

      <div>
        <div className="text-2xl">Hello!</div>
        My name is Keanu and I have a passion for creating a variety of things
        no matter the challenge. I was lucky enough to have used a computer my
        whole life, and as I grew older, the thought of being able to create
        something on a computer and the internet felt like the best path for me.
      </div>

      <div>
        I'm currently a Computer Science major and plan to graduate Spring of
        2024. Although I have no internship experience, I have kept myself
        business with either personal projects or help tutor some of my peers. I
        am excited to see what oppurtunities my future holds.
      </div>

      <div>
        <div className="text-2xl">Technologies I use:</div>
        <ul className="grid grid-cols-2">
          <li>Python</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>C/C++</li>
          <li>Amazon S3</li>
          <li>Amazon RDS</li>
          <li>Java</li>
          <li>VSCode</li>
          <li>PyCharm</li>
          <li>Postman</li>
        </ul>
      </div>
    </main>
  );
};

export default About;

import React from 'react';

import ProjectCard from '../components/ProjectCard';

import omnifood1 from '../assets/omnifood-landing-page-1.png';
import tagalogLearning from '../assets/tagalog-learning-page-1.png';
import pigGame from '../assets/pig-game.png';
import pomodoro from '../assets/pomodoro.png';
import routineTracker from '../assets/simple-routine-track-2.png';

import Footer from '../components/Footer';

const projectInfo = [
  {
    title: 'Tagalog Learning (WIP)',
    url: '/tagalog-learning',
    year: 2023,
    picture: tagalogLearning,
    altText: 'Tagalog Learning preview',
    stack: ['React', 'Express', 'Node', 'MongoDB'],
  },
  {
    title: 'Routine Tracker',
    url: '/routine-tracker',
    year: 2023,
    picture: routineTracker,
    altText: 'Routine Tracker preview',
    stack: ['React', 'CSS'],
  },
  {
    title: 'Omnifood',
    url: '/omnifood',
    year: 2022,
    picture: omnifood1,
    altText: 'Omnifood preview',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Pig Game',
    url: '/piggame',
    year: 2022,
    picture: pigGame,
    altText: 'Pig Game preview',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Pomodoro Timer',
    url: '/pomodoro',
    year: 2021,
    picture: pomodoro,
    altText: 'Pomodoro preview',
    stack: ['Python'],
  },
];

const Home = () => {
  return (
    <>
      <main className="h-full w-[96%] flex mt-16 m-auto">
        <div className="flex flex-col justify-center mb-60 w-full">
          <div className="text-5xl text-red mb-8 max-sm:text-center">
            I'm Keanu
          </div>
          <div className="max-sm:text-center">
            <div className="text-2xl max-sm:text-base">
              Student at the University of Nevada, Las Vegas
            </div>
            <div className="text-2xl max-sm:text-base">
              Aspiring Software Engineer
            </div>
          </div>

          <div className="work mt-16">
            {projectInfo.map((project, idx) => (
              <div key={idx}>
                <ProjectCard
                  title={project.title}
                  url={project.url}
                  year={project.year}
                  picture={project.picture}
                  altText={project.altText}
                  stack={project.stack}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;

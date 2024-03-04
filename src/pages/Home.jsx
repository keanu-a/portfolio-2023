import React from 'react';

import ProjectCard from '../components/ProjectCard';

import muver from '../assets/muver.png';
import lvk9f from '../assets/lvk9f.png';
import omnifood from '../assets/omnifood.png';
import tagalogLearning from '../assets/tagalog-learning.png';
import pigGame from '../assets/pig-game.png';
import pomodoro from '../assets/pomodoro.png';
import routineTracker from '../assets/routine-tracker.png';

import Footer from '../components/Footer';

const projectInfo = [
  {
    title: 'Tagalog Learning (WIP)',
    url: '/tagalog-learning',
    year: '2023 - 2024',
    picture: tagalogLearning,
    altText: 'Tagalog Learning preview',
  },
  {
    title: 'The Las Vegas K-9 Foundation',
    url: '/las-vegas-k9-foundation',
    year: '2023 - 2024',
    picture: lvk9f,
    altText: 'The Las Vegas K-9 Foundation preview',
  },
  {
    title: 'Muver',
    url: '/muver',
    year: '2023',
    picture: muver,
    altText: 'Muver preview',
  },
  {
    title: 'Routine Tracker',
    url: '/routine-tracker',
    year: '2023',
    picture: routineTracker,
    altText: 'Routine Tracker preview',
  },
  {
    title: 'Omnifood',
    url: '/omnifood',
    year: '2022',
    picture: omnifood,
    altText: 'Omnifood preview',
  },
  {
    title: 'Pig Game',
    url: '/pig-game',
    year: '2022',
    picture: pigGame,
    altText: 'Pig Game preview',
  },
  {
    title: 'Pomodoro Timer',
    url: '/pomodoro',
    year: '2021',
    picture: pomodoro,
    altText: 'Pomodoro preview',
  },
];

const Home = () => {
  return (
    <>
      <main className="h-full w-[96%] flex mt-16 m-auto">
        <div className="flex flex-col justify-center mb-20 w-full">
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

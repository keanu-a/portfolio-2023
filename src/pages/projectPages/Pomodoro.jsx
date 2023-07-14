import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

import pomodoro from '../../assets/pomodoro.png';

const Pomodoro = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">Pomodoro Timer</div>

      <ProjectHeaderImage
        image={pomodoro}
        altText="Pomodoro Timer app preview picture"
      />

      <div>
        <h3 className="text-2xl">Overview</h3>
        <p>
          This is a pomodoro timer made with python using the Tkinter library.
          The pomodoro timer is supposed to be a method to have efficient
          studying or working. The way the timer works is that a user works for
          25 minutes then has a 5 minute break. This is repeated 3 or 4 times to
          create a full efficient method of studying/working.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Tech Stack</h3>
        <ul>
          <li>Python, Tkinter Library</li>
        </ul>
      </div>
    </main>
  );
};

export default Pomodoro;

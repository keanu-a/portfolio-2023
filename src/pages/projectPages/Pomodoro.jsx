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

      <p>
        This is a pomodoro timer made with python using the Tkinter library. The
        pomodoro timer is supposed to be a method to have efficient studying or
        working. The way the timer works is that a user works for 25 minutes
        then has a 5 minute break. This is repeated 3 or 4 times. The program is
        written so it can be easily changed to 45 minutes of working time or 15
        minute break times.
      </p>

      <div>
        <div className="text-2xl">Tech Stack</div>
        <ul>
          <li>Python, Tkinter Library</li>
        </ul>
      </div>
    </main>
  );
};

export default Pomodoro;

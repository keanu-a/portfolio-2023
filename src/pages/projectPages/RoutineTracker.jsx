import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';
import ProjectLink from '../../components/ProjectLink';

import routineTracker from '../../assets/routine-tracker.png';

const RoutineTracker = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">Routine Tracker</div>

      <ProjectHeaderImage
        image={routineTracker}
        altText="Routine Tracker preview pictures"
      />

      <ProjectLink
        link="https://simple-routine-tracker.vercel.app/"
        projectName="Routine Tracker"
      />

      <p>
        I decided to create this small application because I caught myself not
        completing my routines every week. I would simply just do my routines
        based on when I remember but most of the time not remember when the last
        time I did it was. I made a ToDo list a couple years ago, so I knew this
        would be something I can create quickly.
      </p>

      <p>
        Although this can be used as a To-Do list, it is supposed to be used to
        track routine actions and repeat them every couple days. All actions
        added will be kept in local storage for users.
      </p>

      <div>
        <div className="text-2xl">Tech Stack</div>
        <ul>
          <li>React, CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default RoutineTracker;

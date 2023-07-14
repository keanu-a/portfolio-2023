import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

import routineTracker from '../../assets/routine-tracker.png';

const RoutineTracker = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto">
      <div className="text-4xl text-red">Routine Tracker</div>
      <ProjectHeaderImage
        image={routineTracker}
        altText="Routine Tracker preview pictures"
      />
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

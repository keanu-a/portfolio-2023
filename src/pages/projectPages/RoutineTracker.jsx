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

      <div>
        <h3 className="text-2xl">Reason for Creating</h3>
        <p>
          I made this application because I was in dire need to keep track of my
          routine. I have a pretty consistent routine every week, but I would
          constantly just do things from the top of my head. With this app, I
          can visually see and keep track of what I need to do in a day still.
        </p>
        <p>
          A couple years ago I made a To-Do app, so this is just an upgraded
          version. Although shouldn't be used as a To Do app since actions
          should be repeated over time.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Development</h3>
        <p>
          I wanted actions to be saved by users that used this application, but
          I didn't want to use a database as I thought that would be overkill.
          All actions added and deleted to a user's routine will be saved to
          their local storage. The reason I chose to use local storage is
          because there is no sensitive data be saved, or at least there
          shouldn't be.
        </p>
        <p>I deployed this app using Vercel.</p>
      </div>

      <div>
        <h3 className="text-2xl">Tech Stack</h3>
        <ul>
          <li>React, CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default RoutineTracker;

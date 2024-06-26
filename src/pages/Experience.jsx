import React from 'react';

const Experience = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto">
      <div className="text-4xl text-red">Experience</div>

      <div className="experience">
        <h1 className="text-2xl">Experience</h1>
        <div>
          The Las Vegas K-9 Foundation: Web Developer (September 2023 - Present)
        </div>
        <div>
          Ntooitive Digital: Project Manager Intern (March 2024 – May 2024)
        </div>
        <div>
          University of Nevada, Las Vegas: Undergraduate Teaching Assistant
          (January 2024 – May 2024)
        </div>
        <div>Freelance: Coding Tutor (April 2022 – July 2022)</div>
      </div>

      <div className="education">
        <h1 className="text-2xl">Education</h1>
        <div>University of Nevada, Las Vegas (Aug. 2021 – May 2024)</div>
        <div>
          University of Nevada, Reno (Aug. 2019 – July 2021) - Transferred to
          UNLV
        </div>
      </div>

      <div className="relevant-coursework">
        <h1 className="text-2xl">Relevant Coursework</h1>
        <div>CS 477: Algorithms</div>
        <div>CS 472: Software Engineering</div>
        <div>CS 469: Intro to Digital Image Processing</div>
        <div>CS 460: Compiler Construction</div>
        <div>CS 370: Operating Systems</div>
        <div>CS 302: Data Structures</div>
        <div>CS 442: Cloud Computing</div>
        <div>CS 443: Information Assurance</div>
        <div>CS 437: Building Applications in the Cloud</div>
        <div>CS 422: Intro to Machine Learning</div>
      </div>

      <div className="involvement">
        <h1 className="text-2xl">Campus Involvment & Leadership</h1>
        <div>Lambda Psi Rho (2019 – 2021)</div>
        <div>
          - Roles Held: Vice President of Development, Executive Vice President,
          Marketing Chair{' '}
        </div>
      </div>
    </main>
  );
};

export default Experience;

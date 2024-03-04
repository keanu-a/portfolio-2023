import muver from '../../assets/muver.png';
import muverUML from '../../assets/muver-uml.png';
import muverPoster from '../../assets/muver-poster.png';
import muverPrototype from '../../assets/muver-prototype.png';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';
import ProjectLink from '../../components/ProjectLink';

const Muver = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">Muver</div>

      <ProjectHeaderImage image={muver} altText="Muver preview picture" />

      <ProjectLink link="https://muver.io/" projectName="Muver" />

      <div>
        <h3 className="text-2xl">Overview</h3>
        <p>
          This web application was developed in my CS 472 Software Engineering
          class where I worked with a team of 6 other students.
        </p>
        <br />
        <p>
          Muver is an online service that connects people who need help moving
          items from one place to another, with people who are able to help
          them. Our app is geared for individuals with smaller residential
          moving jobs within the Las Vegas Valley. Users will be able to post
          job requests and movers can then accept these jobs. Muver also aims to
          be an information hub for all the details of a moving job which can be
          reviewed by both the mover and customer.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Roles</h3>
        <p>
          Many of us had different roles within the application. One other
          member and I had experience in React, and I was the only one with
          knowledge in Node/Express/MongoDB. However, everyone on the team was
          willing to learn React, and I mostly dealt with the backend since I
          didn't want all members to be overwhelmed with learning multiple
          frameworks at once.
        </p>
        <br />
        <p>
          My team built the frontend, and I mostly stuck to the backend and
          built all the APIs for fetching and creating data regarding users and
          moves into the mongo database. Towards the middle of the semester, one
          of my teammates and I had to step up to take the role as co-leaders
          since some tasks weren't being finished in time.
        </p>
        <br />
        <p>
          Some members had trouble with Git and Github so I created a document
          that went into much detail on how we will be using Git throughout the
          semester, and it helped everyone tremendously.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Research</h3>
        <p>
          We had to do research on existing competitors and found some like
          Dolly, Taskrabbit, and GoShare. We had to find some credible research
          articles that could help us make a better product. We found that gig
          economy apps like Uber, Airbnb, Doordash, and now our app can benefit
          people very much in having an extra income. We also conducted 3
          interviews to see what we can improve on our old prototype, and what
          should be added to our app.
        </p>
        <br />
        <p>
          We also conducted 3 interviews to see what we can improve on our old
          prototype, what should be added to our app, and advice on what all
          moving companies provide.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Design & Implementation</h3>
        <p>Below is a picture of our UML diagram of all our react components</p>
        <ProjectHeaderImage
          image={muverUML}
          altText="Muver UML preview picture"
        />

        <br />
        <p>Below is some pictures of our rough first implementation</p>
        <ProjectHeaderImage
          image={muverPrototype}
          altText="Muver first implementation preview picture"
        />

        <br />

        <p>Below is our competition poster</p>
        <ProjectHeaderImage
          image={muverPoster}
          altText="Muver competition poster preview picture"
        />
      </div>

      <div>
        <h3 className="text-2xl">Tech Stack</h3>
        <ul>
          <li>
            React, Node, TypeScript, JavaScript, Express.js, MongoDB,
            Mongoose.js, Docker
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Muver;

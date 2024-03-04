import lvk9f from '../../assets/lvk9f.png';
import lvk9fDrafts from '../../assets/lvk9f-drafts.png';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';
import ProjectLink from '../../components/ProjectLink';

const Lvk9f = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">The Las Vegas K-9 Foundation</div>

      <ProjectHeaderImage
        image={lvk9f}
        altText="Las Vegas K-9 Foundation preview picture"
      />

      <ProjectLink
        link="https://lasvegask9foundation.org"
        projectName="Las Vegas K-9 Foundation"
      />

      <div>
        <h3 className="text-2xl">Reason for Creating</h3>
        <p>
          My mom is apart of this new nonprofit organization called the Las
          Vegas K-9 foundation. She expressed that I have some background in web
          development and the organization asked me if I could make them a
          website. I thought this would be a great learning experience in
          working with clients to make a real world product so of course I
          accepted.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">The process</h3>
        <p>
          First, I did some research on what nonprofit organization websites
          should look like. Since the organization is made up of three kennel
          clubs in Las Vegas, I first took inspiration from those sites first. I
          then branched out to look at other nonprofits in Nevada like Outdoors
          Nevada, Three Square, Teach For America, The Asian Community
          Development Council, and many others. I recognized that these websites
          usually have a bold but playful design, and I definitely wanted to
          implement that into my website for the LVK9F.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Drafts</h3>
        <p>
          Next, I made some drafts on Figma and shared it with the organization
          to see if they liked the direction I was going, and thankfully they
          did! From the pictures below, the left picture is my first draft, and
          the right picture is my second draft. I had to make some color changes
          due to accessibility purposes.
        </p>
      </div>

      <ProjectHeaderImage
        image={lvk9fDrafts}
        altText="Las Vegas K-9 Foundation figma drafts picture"
      />

      <div>
        <h3 className="text-2xl">Whats next?</h3>
        <p>
          Lastly, I developed the website using React and Tailwind CSS. So far
          the donation page is not up just yet, because the organization will be
          utilizing Stripe for a more secure payment system than me creating a
          payment page. Also, I will continue to make revisions and add events
          when needed. Also, I was paid for this project which was another great
          thing!
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Tech Stack</h3>
        <ul>
          <li>React, TypeScript, Tailwind CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default Lvk9f;

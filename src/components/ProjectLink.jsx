import React from 'react';

const ProjectLink = ({ link, projectName }) => {
  return (
    <div className="text-2xl">
      Link:{' '}
      <a href={link} target="_blank" className="hover:text-green duration-200">
        {projectName}
      </a>
    </div>
  );
};

export default ProjectLink;

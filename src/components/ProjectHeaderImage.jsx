import React from 'react';

const ProjectHeaderImage = ({ image, altText }) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <img src={image} alt={altText} className="w-full" />
    </div>
  );
};

export default ProjectHeaderImage;

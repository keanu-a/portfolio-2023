import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, url, year, picture, altText, stack }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(url);
  };

  return (
    <div
      className="group h-fit flex max-sm:flex-col mb-10 rounded-2xl shadow-md hover:cursor-pointer hover:bg-white hover:text-red bg-red text-white hover:-translate-y-4 duration-700"
      onClick={() => handleOnClick()}
    >
      <div className="w-10/12 group-hover:opacity-80 max-sm:w-full">
        <img
          src={picture}
          alt={altText}
          className="sm:rounded-l-2xl max-sm:rounded-t-2xl object-contain max-sm:w-full"
        />
      </div>
      <div className="select-none p-5 rounded-r-2xl flex flex-col justify-center text-center w-full">
        <div className="text-4xl max-sm:text-2xl">{title}</div>
        <div>{year}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';

import ProjectHeaderImage from '../../components/ProjectHeaderImage';

import pigGame from '../../assets/pig-game.png';

const PigGame = () => {
  return (
    <main className="h-full w-[80%] flex flex-col gap-16 mt-16 m-auto mb-8">
      <div className="text-4xl text-red">Pig Game</div>

      <ProjectHeaderImage
        image={pigGame}
        altText="Pig Game app preview picture"
      />

      <p>
        This is a project I did while taking a JavaScript course. Pig Game is
        meant to be played by two players, and whoever ends with the most points
        wins. There is a catch though, if a player rolls a 1, then your points
        are reset. In each turn, a player has a turn to roll the dice to
        increase their points, or hold and pass the turn to the next player.
      </p>

      <div>
        <div className="text-2xl">Tech Stack</div>
        <ul>
          <li>JavaScript, HTML, CSS</li>
        </ul>
      </div>
    </main>
  );
};

export default PigGame;

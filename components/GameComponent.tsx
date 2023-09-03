import React, { useState } from 'react';
import { GameEngine, GameEvent } from '../lib/gameEngine';
import AdventureText from './AdventureText';
import ChoiceButton from './ChoiceButton';

interface GameComponentProps {
  initialEvent: GameEvent;
}

const GameComponent: React.FC<GameComponentProps> = ({ initialEvent }) => {
  const [currentEvent, setCurrentEvent] = useState(initialEvent);

  const chooseOption = (optionIndex: number) => {
    const nextEvent = GameEngine.playGame(currentEvent, optionIndex);
    setCurrentEvent(nextEvent);
  };

  return (
    <div>
      <AdventureText text={currentEvent.text} />
      {currentEvent.options.map((option, index) => (
        <ChoiceButton key={index} text={option.text} onClick={() => chooseOption(index)} />
      ))}
    </div>
  );
};

export default GameComponent;
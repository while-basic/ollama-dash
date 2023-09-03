import React from 'react';

interface ChoiceButtonProps {
  choice: string;
  chooseOption: (choice: string) => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, chooseOption }) => {
  return (
    <button id="choice-button" onClick={() => chooseOption(choice)}>
      {choice}
    </button>
  );
};

export default ChoiceButton;
import React from 'react';

interface AdventureTextProps {
  text: string;
}

const AdventureText: React.FC<AdventureTextProps> = ({ text }) => {
  return (
    <div id="adventure-text">
      <p>{text}</p>
    </div>
  );
};

export default AdventureText;
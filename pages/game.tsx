import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import GameComponent from '../components/GameComponent';
import { GameEngine } from '../lib/gameEngine';

interface GameProps {
  initialGameState: any;
}

const Game: React.FC<GameProps> = ({ initialGameState }) => {
  const [gameState, setGameState] = useState(initialGameState);

  const handleChoice = (choiceIndex: number) => {
    const newGameState = GameEngine.playGame(gameState, choiceIndex);
    setGameState(newGameState);
  };

  return (
    <Layout title="Text Adventure Game">
      <div id="game-container">
        <GameComponent gameState={gameState} onChoice={handleChoice} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialGameState = GameEngine.initializeGame();
  return { props: { initialGameState } };
};

export default Game;
```typescript
type GameState = {
  currentScene: string;
  inventory: string[];
};

type GameOption = {
  description: string;
  nextScene: string;
};

type GameScene = {
  title: string;
  description: string;
  options: GameOption[];
};

type GameData = {
  initialScene: string;
  scenes: Record<string, GameScene>;
};

const gameData: GameData = {
  initialScene: "start",
  scenes: {
    start: {
      title: "Start",
      description: "You are in a dark room. There are two doors.",
      options: [
        { description: "Go through the left door", nextScene: "leftRoom" },
        { description: "Go through the right door", nextScene: "rightRoom" },
      ],
    },
    leftRoom: {
      title: "Left Room",
      description: "You are in a room with a treasure chest.",
      options: [
        { description: "Open the chest", nextScene: "treasure" },
        { description: "Go back", nextScene: "start" },
      ],
    },
    rightRoom: {
      title: "Right Room",
      description: "You are in a room with a monster.",
      options: [
        { description: "Fight the monster", nextScene: "fight" },
        { description: "Run away", nextScene: "start" },
      ],
    },
    // More scenes...
  },
};

const initialState: GameState = {
  currentScene: gameData.initialScene,
  inventory: [],
};

function playGame(state: GameState, optionIndex: number): GameState {
  const currentScene = gameData.scenes[state.currentScene];
  const selectedOption = currentScene.options[optionIndex];
  return {
    ...state,
    currentScene: selectedOption.nextScene,
  };
}

export { GameState, GameData, GameOption, GameScene, gameData, initialState, playGame };
```
export interface IGameEngine {
  playGame: () => void;
  chooseOption: (option: number) => void;
}

export interface IGameState {
  currentScene: string;
  inventory: string[];
}

export interface IGameOption {
  text: string;
  nextScene: string;
}

export interface IGameScene {
  title: string;
  description: string;
  options: IGameOption[];
}
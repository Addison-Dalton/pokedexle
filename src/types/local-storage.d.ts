// eventually can expand this to include other local storage items
type LocalStorageOptions = LocalStorageSettings & LocalStorageGame;

type LocalStorageSettings = {
  hardMode?: boolean;
  generations?: [number, number];
};

type LocalStorageGame = {
  hideIntro: boolean;
  // TODO: this could hold which game type someone wants to play (daily, freeplay)
};

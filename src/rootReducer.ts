import { combineReducers } from "@reduxjs/toolkit";

import gameReducer from './services/game/slice';
import settingsReducer from './services/settings/slice';

const rootReducer = combineReducers({
  game: gameReducer,
  settings: settingsReducer
});

export type PokedexleStore = ReturnType<typeof rootReducer>;

export default rootReducer;

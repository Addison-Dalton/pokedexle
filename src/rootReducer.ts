import { combineReducers } from "@reduxjs/toolkit";

import gameReducer from './services/game/slice';

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;

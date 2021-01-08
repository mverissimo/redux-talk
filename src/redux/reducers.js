import { combineReducers } from "redux";

import { Reducer as Character } from "./modules/character";

const reducers = () =>
  combineReducers({
    character: Character,
  });

export default reducers;

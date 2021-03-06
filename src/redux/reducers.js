import { combineReducers } from "redux";

import { Reducer as Character } from "./modules/character";

let reducers = () =>
  combineReducers({
    character: Character,
  });

export default reducers;

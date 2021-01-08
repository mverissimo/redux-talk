import { fork } from "redux-saga/effects";

import CharacterSagas from "./modules/character/sagas";

export default function* root() {
  yield fork(CharacterSagas);
}

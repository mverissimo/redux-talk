import { takeLatest, call, put } from "redux-saga/effects";

import { Constants, Actions } from ".";

import * as api from "../../../services";

function* getById({ id }) {
  try {
    const character = yield call(api.getCharacter, id);

    yield put(Actions.getCharacterSuccess(character));
  } catch (e) {
    yield put(Actions.getCharacterFailure(e.data.error));
    // yield call(Alert.error, "Someone wrong when fetching your character...!");
  }
}

function* getAll({ page }) {
  try {
    const characters = yield call(api.getCharacters, page);

    yield put(Actions.getAllSuccess(characters));
  } catch (e) {
    yield put(Actions.getAllFailure(e.data.error));
    // yield call(Alert.error, "Someone wrong when fetching the characters...!");
  }
}

export default function* root() {
  yield takeLatest(Constants.CHARACTER_GET, getById);
  yield takeLatest(Constants.CHARACTER_GET_ALL, getAll);
}

import { takeLatest, call, put } from "redux-saga/effects";
import toast from "react-hot-toast";

import { Constants, Actions } from ".";

import * as api from "../../../services";

function* getAll({ page }) {
  try {
    let characters = yield call(api.getCharacters, page);

    yield put(Actions.getAllSuccess(characters));
  } catch (e) {
    yield put(Actions.getAllFailure(e.data.error));
    yield call(toast.error, e.data.error);
  }
}

export default function* root() {
  yield takeLatest(Constants.CHARACTER_GET_ALL, getAll);
}

import produce from 'immer';

import { Constants } from '.';

const initialState = {
  list: {
    isRequest: true,
    status: 'all',
    statusById: {},
    idList: {
      all: [],
      alive: [],
      dead: [],
      unknown: []
    },
    hasNext: null
  }
};

export default function reducer(state = initialState, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Constants.CHARACTER_GET_ALL:
        draft.list.isRequest = true;

        break;

      case Constants.CHARACTER_GET_ALL_SUCCESS:
        draft.list.isRequest = false;
        draft.list.pages = action.payload.info.pages;
        draft.list.hasNext = action.payload.info.next;

        action.payload.results.forEach((character) => {
          draft.list.idList.all.push(character.id);
          draft.list.statusById[character.id] = character;

          if (character.status === 'Alive') {
            draft.list.idList.alive.push(character.id);
          }

          if (character.status === 'Dead') {
            draft.list.idList.dead.push(character.id);
          }

          if (character.status === 'unknown') {
            draft.list.idList.unknown.push(character.id);
          }
        });

        break;

      case Constants.CHARACTER_GET_ALL_FAILURE:
        draft.list.isRequest = false;
        draft.list.error = action.error;

        break;

      case Constants.FILTER_CHARACTERS:
        draft.list.status = action.status;

        break;

      default:
        return state;
    }
  });
}

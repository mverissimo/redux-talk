import { Constants } from ".";

const initialState = {
  list: {
    isRequest: true,
    status: "all",
    statusById: {},
    idList: {
      all: [],
      alive: [],
      dead: [],
      unknown: [],
    },
    hasNext: null,
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

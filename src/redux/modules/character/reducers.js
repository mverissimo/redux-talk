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
    case Constants.CHARACTER_GET_ALL:
      return {
        ...state,
        list: {
          ...state.list,
          isRequest: true,
        },
      };

    case Constants.CHARACTER_GET_ALL_SUCCESS:


      return {
        ...state,
        list: {
          ...state.list,
          isRequest: false,
        },
      };

    default:
      return state;
  }
}

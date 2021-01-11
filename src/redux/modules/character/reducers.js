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
      const statusById = {};
      const idList = {
        all: [],
        alive: [],
        dead: [],
        unknown: [],
      };

      action.payload.results.forEach((character) => {
        statusById[character.id] = character;
        idList.all.push(character.id);

        if (character.status === "Alive") {
          idList.alive.push(character.id);
        }

        if (character.status === "Dead") {
          idList.dead.push(character.id);
        }

        if (character.status === "unknown") {
          idList.unknown.push(character.id);
        }
      });
     
      return {
        ...state,
        list: {
          ...state.list,
          isRequest: false,
          pages: action.payload.info.pages,
          hasNext: action.payload.info.next,
          statusById,
          idList
        },
      };

    case Constants.FILTER_CHARACTERS:
      return {
        ...state,
        list: {
          ...state.list,
          status: action.status,
        },
      };

    default:
      return state;
  }
}

import { INITIAL_STATE } from "../state";
import { LIST_MODE, SORT_MODE, SET_FILTER } from "../actions";

const blip = (state = INITIAL_STATE, action) => {
  const { isList, sortMode, filter } = action;

  switch (action.type) {
    case LIST_MODE:
      return { ...state, isList };
    case SORT_MODE:
      return { ...state, sortMode };
    case SET_FILTER:
      return { ...state, filter };
    default:
      return state;
  }
};

export { blip };

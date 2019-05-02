import { type as CurrentPageType } from "../Actions/SetCurrentPage";

const defaultState = 1;

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case CurrentPageType: {
      return payload;
    }
    default:
      return state;
  }
}

export default reducer;

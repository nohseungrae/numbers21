import { BOARD_FAIL, BOARD_LOAD, BOARD_DETAIL_LOAD } from "../Actions/type";

const initialState = {
  board: [],
  detail: null,
  error: null,
  loading: true
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOARD_LOAD:
      return { ...state, board: payload, loading: false };
    case BOARD_DETAIL_LOAD:
      return { ...state, detail: payload.shift(), loading: false };
    case BOARD_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

import axios from "axios";
import { MEDIA_FAIL_MAIN, MEDIA_LOAD_MAIN } from "./type";

export const mainMedia = () => async dispatch => {
  try {
    const res = await axios.get("api/media/main");
    dispatch({ type: MEDIA_LOAD_MAIN, payload: res.data });
  } catch (error) {
    dispatch({ type: MEDIA_FAIL_MAIN, payload: "---실패---" });
  }
};
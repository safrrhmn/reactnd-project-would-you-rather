import { loadUserSuccess } from "./actions";
import { _getUsers } from "../_DATA";

export const loadUserDataFromFile = () => async (dispatch, getState) => {
  try {
    const result = await _getUsers();
    console.log(result)
    dispatch(
      loadUserSuccess([result.johndoe, result.sarahedo, result.tylermcginnis])
    );
  } catch (error) {
    console.log(error);
  }
};

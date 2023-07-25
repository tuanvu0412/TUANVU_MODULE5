import axios from "axios";


export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";


export const getUser = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://localhost:8080/userlist"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  };
};
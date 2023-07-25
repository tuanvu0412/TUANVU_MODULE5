import axios from "axios";


export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export const getUser = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://localhost:8080/userlist"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    },
    );
  };
};
export const deleteUser = (id) => {
  return async dispatch => {
    const response = await axios.delete(
      `http://localhost:8080/userlist/${id}`
    );
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data
    },
    );
  }
}
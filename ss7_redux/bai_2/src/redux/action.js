import axios from "axios";
import { deleteUsers, getListUser } from "../service/UserService";


export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export const getUser = () => {
  return async dispatch => {
    const data = await getListUser();
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: data
    },
    );
  };

};
export const deleteUser = (id) => {
  return async dispatch => {
   await deleteUsers(id)
   const data = await getListUser();
   dispatch({
     type: FETCH_USER_SUCCESS,
     payload: data
   },
   );
  };
};
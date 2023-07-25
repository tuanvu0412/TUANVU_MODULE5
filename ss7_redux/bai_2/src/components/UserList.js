import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react';
import { getUser } from "../redux/action";
import axios from 'axios';
import { deleteUser } from "../service/UserService";

function User() {
    const dispatch = useDispatch();

     const users = useSelector(state => state.users);
    
    useEffect(() => {
        dispatch(getUser());
      }, []);
  

      
   const handelDelete=(id)=>{
        if(window.confirm('Are you sure for delete this user???')){
          deleteUser(`${id}`)
           .then(reponse=>  {
            alert('Delete success');
           }).catch(error=>{
            console.log(error);
           }) 
        }
   }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handelDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;
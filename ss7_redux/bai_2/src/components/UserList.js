import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUser, deleteUser } from "../redux/action";

function User() {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);
    console.log(users);

    useEffect(() => {
        dispatch(getUser());
    }, []);



    const handelDelete = (id) => {
        if (window.confirm('Are you sure for delete this user???')) {
            alert('Delete success');
            dispatch(deleteUser(id));
        } else {
            console.log("khong thanh cong");
        };
    }

    return (
        <div>
            {console.log("aaaa" + users)}
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
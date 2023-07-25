import { useEffect, useState } from 'react';
import { getListUser } from '../service/userService';
import axios from 'axios';


const UserList = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        const data = await getListUser();
        setUser(data);

    }

    const handleDelete = (id) => {
        if (window.confirm('are you sure for delete this user???')) {
            axios.delete(`http://localhost:8080/userList/${id}`)
                .then(reponse => {
                    alert('Delete success!');
                    setUser(users.filter(user => user.id !== id));
                }).catch(error => {
                    console.log(error);
                })
        }
    };
    console.log(users)
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
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default UserList;
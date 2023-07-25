
import axios from 'axios';

export async function getListUser(){
    const res= await axios.get('http://localhost:8080/userList');
    return res.data;
}

export async function createUser(user){
    await axios.post('http://localhost:8080/userList',user);

}

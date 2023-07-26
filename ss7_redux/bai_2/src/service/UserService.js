import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080';

export async function getListUser () {
    const res = await axios.get('/userlist');
    return res.data;
}
export async function createUses(user){
    await axios.post('http://localhost:8080/userlist',user);
}
export async function deleteUsers(id){
 const res =  await axios.delete(`http://localhost:8080/userlist/${id}`);
    return res.data;
}

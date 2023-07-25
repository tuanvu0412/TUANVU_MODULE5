import axios from "axios";

export async function getListUser(){
    const res= await axios.get('http://localhost:8080/userlist');
    return res.data;
};

export async function createUser(user){
    await axios.post('http://localhost:8080/userlist',user);
}
export async function deleteUser(id){
 const res =  await axios.delete(`http://localhost:8080/userlist/${id}`);
    return res.data;
}

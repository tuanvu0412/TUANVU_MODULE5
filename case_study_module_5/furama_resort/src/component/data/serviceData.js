import axios from "axios";

export async function getListService(){
    const res= await axios.get('http://localhost:8080/services');
    return res.data;
};

export async function createService(service){
    await axios.post('http://localhost:8080/services',service);
}

export async function createVilla(villa){
    await axios.post('http://localhost:8080/services',villa);
}
export async function createRoom(room){
    await axios.post('http://localhost:8080/services',room);
}
export async function createHouse(house){
    await axios.post('http://localhost:8080/services',house);
}
export async function getListType(){
 const res=  await axios.get('http://localhost:8080/types');
    return res.data;
}
export async function findByid(id){
   const res= await axios.get(`http://localhost:8080/types/${id}`)
   return res.data
}
import axios from "axios";

export async function getListService(){
    const res= await axios.get('http://localhost:8080/service');
    return res.data;
};

export async function createService(service){
    await axios.post('http://localhost:8080/service',service);
}

export async function getListCustomer(){
    const res= await axios.get('http://localhost:8080/customers');
    return res.data;
};
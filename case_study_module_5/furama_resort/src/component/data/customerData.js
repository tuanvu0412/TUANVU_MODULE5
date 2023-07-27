import axios from "axios";

export async function getListCustomer(){
    const res= await axios.get('http://localhost:8080/customers');
    return res.data;
};
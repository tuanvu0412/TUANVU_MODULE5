import axios from "axios";

export async function getListCustomer(){
    const res= await axios.get('http://localhost:8080/customers');
    return res.data;
};
export async function createCustomer(customer){
    await axios.post('http://localhost:8080/customers', customer);
}
export async function getListTypeCustomer(){
    const res= await axios.get('http://localhost:8080/customerTypes')
    return res.data;
}
export async function findCustomerById(id) {
    const res = await axios.get(`http://localhost:8080/customerTypes/${id}`)
    return res.data
}
export async function findGenderById(id) {
    const res = await axios.get(`http://localhost:8080/genders/${id}`)
    return res.data
}
export async function getGender(){
    const res= await axios.get('http://localhost:8080/genders')
    return res.data
}
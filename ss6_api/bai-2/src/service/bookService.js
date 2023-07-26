import axios from "axios";

export async function getListBook(){
    const res= await axios.get('http://localhost:8080/listBook');
    return res.data;
}

export async function createBook(book){
    await axios.post('http://localhost:8080/listBook',book);
}
export async function deleteBook(id){
    const res= await axios.delete(`http://localhost:8080/listBook/${id}`)
    return res.data
}
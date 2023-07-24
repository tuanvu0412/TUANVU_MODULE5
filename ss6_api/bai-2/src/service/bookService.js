import axios from "axios";

export async function getListBook(){
    const res= await axios.get('http://localhost:8080/books');
    return res.data;
}

export async function createBook(book){
    await axios.post('http://localhost:8080/books',book);
}
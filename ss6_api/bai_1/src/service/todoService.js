import axios from "axios";


export async function getListTodo(){
    const res= await axios.get('http://localhost:8080/todoList');
    return res.data;

}

export async function createTodo(todo){
    await axios.post('http://localhost:8080/todoList',todo)
}
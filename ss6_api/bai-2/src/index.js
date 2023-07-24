import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import BookList from './component/ListBook';
import AddBook from './component/AddBook';
import EditBook from './component/EditBook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<BookList></BookList>}></Route>
    <Route path='/new-book' element={<AddBook></AddBook>}></Route>
    <Route path='/edit-book' element={<EditBook></EditBook>}></Route>
  </Routes>
  
  </BrowserRouter>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

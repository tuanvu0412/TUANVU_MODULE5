import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getListBook } from '../service/bookService';
import './book.css';
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const data = await getListBook();
    setBooks(data);
    console.log(data);
  }
  const handleDelete = (id) => {
    if (window.confirm('are you sure for delete this book?')) {
      axios.delete(`http://localhost:8080/listBook/${id}`)
        .then(response => {
          alert('Delete success');
          setBooks(books.filter(book => book.id !== id));
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>Library</h1>
      <Link to="/new-book">Add a new Book</Link>
      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <Link to={`/edit-book/${book.id}`}>Edit</Link>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
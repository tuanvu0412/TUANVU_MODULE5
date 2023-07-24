import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setQuantity(response.data.quantity);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleEditBookSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/books/${id}`, { title, quantity })
      .then(response => {
        alert('Update success');
        history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleEditBookSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBook;
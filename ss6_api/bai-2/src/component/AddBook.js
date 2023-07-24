import React, { useState } from 'react';

import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');


  const handleAddBookSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/listBook', { title, quantity })
      .then(response => {
        alert('Create success');
      
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create a new Book</h1>
      <form onSubmit={handleAddBookSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddBook;
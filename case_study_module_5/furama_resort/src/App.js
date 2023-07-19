import logo from './logo.svg';
import './App.css';
import React from 'react';


const ListService = [
  {
    id: 1,
    name: 'Spa',
    price: 100,
    description: 'abc'
  },
  {
    id: 2,
    name: 'Buffet',
    price: 100,
    description: 'abc'
  },
  {
    id: 3,
    name: 'Gym',
    price: 100,
    description: 'abc'
  }
]
function App(){
    return (
      ListService.map(listService => (
        <tr key={listService.id}>
          <td>{listService.name}</td>
          <td>{listService.price}</td>
          <td>{listService.description}</td>
        </tr>
      ))
    );
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const students = [
  {
    id:1,
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    id:2,
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    id:3,
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    id:4,
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    id:5,
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    id:6,
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  students.map(student =>
    (
   <tr key={student.id}>
     <td>{student.company}</td>
     <td>{student.contact}</td>
     <td>{student.country}</td>
   </tr>
  ))
);
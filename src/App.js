import React from 'react';
import './style.css';

export default function App() {
  const data = [
    { name: 'Anom', age: 19, gender: 'Male' },
    { name: 'Megha', age: 19, gender: 'Female' },
    { name: 'Subham', age: 25, gender: 'Male' },
  ];

  return (
    <div>
      <h1>Basic table in React js</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>

        {data.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

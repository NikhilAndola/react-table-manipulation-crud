import React from 'react';
import { TableComp } from './TableComp';
import { ReactNode } from './ReactNode';
import { Parent } from './passingChildren/Parent';
import { TableCrud } from './tableCrud/TableCrud';

export default function App() {
  const data = [
    { name: 'Anom', age: 19, gender: 'Male' },
    { name: 'Megha', age: 19, gender: 'Female' },
    { name: 'Nikhil', age: 25, gender: 'Male' },
    { name: 'Subham', age: 23, gender: 'Male' },
    { name: 'Nilesh', age: 24, gender: 'Male' },
    { name: 'Sachin', age: 27, gender: 'Male' },
    { name: 'Rohit', age: 28, gender: 'Male' },
  ];

  return (
    <>
      <div
        style={{ overflowY: 'scroll', height: '300px', marginBottom: '50px' }}
      >
        <h1>Basic table in React js</h1>

        {/* Passing whole (React Node)component as a prop */}
        <TableComp data={data} comp={<ReactNode data={data} />} />

        {/* props.children in react */}
        <Parent />
      </div>
      <TableCrud />
    </>
  );
}

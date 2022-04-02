import React from 'react';

export const TableComp = ({ data, comp }) => {
  // const { data: data, comp } = props;

  return (
    <>
      {comp}
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>

        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

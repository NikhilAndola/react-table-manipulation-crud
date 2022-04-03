import React from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

export const TableComp = ({ data, comp }) => {
  // const { data: data, comp } = props;
  const [txtB, setTxt] = React.useState(true);

  return (
    <>
      {comp}
      <table className={styles.table}>
        <tr>
          <th className={clsx(styles.bgClr, { [styles.textClr]: txtB })}>
            Name
          </th>
          <th>Age</th>
          <th>Gender</th>
        </tr>

        {data.map((item, index) => (
          <tr key={index}>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.age}</td>
            <td className={styles.td}>{item.gender}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

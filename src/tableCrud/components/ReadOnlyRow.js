import React from 'react';
import clsx from 'clsx';
import styles from '../tabstyle.module.css';

const ReadOnlyRow = ({ item, key }) => {
  return (
    <>
      <tr key={key}>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.fullName}</td>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.address}</td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          {item.phoneNumber}
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.email}</td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;

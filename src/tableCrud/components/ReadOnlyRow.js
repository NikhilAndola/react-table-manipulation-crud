import React from 'react';
import clsx from 'clsx';
import styles from '../tabstyle.module.css';

const ReadOnlyRow = ({ item, key, handleEditClick }) => {
  return (
    <>
      <tr key={key}>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.fullName}</td>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.address}</td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          {item.phoneNumber}
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.email}</td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, item)}
          >
            edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;

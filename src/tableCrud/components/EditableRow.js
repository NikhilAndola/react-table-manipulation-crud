import React from 'react';
import clsx from 'clsx';
import styles from '../tabstyle.module.css';

const EditableRow = ({ item }) => {
  return (
    <>
      <tr key={key}>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          <input type="text" required="required" placeholder="Enter a name..." name="fullName"/>
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.address}</td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          {item.phoneNumber}
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>{item.email}</td>
      </tr>
    </>
  );
};

export default EditableRow`;

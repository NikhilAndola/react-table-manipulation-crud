import React, { useState } from 'react';
import styles from './tabstyle.module.css';
import clsx from 'clsx';
import data from '../mock.data.json';

export const TableCrud = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <>
      <h2>Making table crud app</h2>
      <div className={styles.appContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th
                className={clsx(styles.tdth, { [styles.tableheading]: true })}
              >
                Name
              </th>
              <th className={clsx(styles.tdth, styles.tableheading)}>
                Address
              </th>
              <th className={clsx(styles.tdth, styles.tableheading)}>
                Phone No
              </th>
              <th className={clsx(styles.tdth, styles.tableheading)}>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td className={clsx(styles.tdth, styles.tablebody)}>
                  {item.fullName}
                </td>
                <td className={clsx(styles.tdth, styles.tablebody)}>
                  {item.address}
                </td>
                <td className={clsx(styles.tdth, styles.tablebody)}>
                  {item.phoneNumber}
                </td>
                <td className={clsx(styles.tdth, styles.tablebody)}>
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

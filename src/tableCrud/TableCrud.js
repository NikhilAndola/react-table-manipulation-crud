import React from 'react';
import styles from './tabstyle.module.css';
import clsx from 'clsx';

export const TableCrud = () => {
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
            <tr>
              <td className={clsx(styles.tdth, styles.tablebody)}>Nick</td>
              <td className={clsx(styles.tdth, styles.tablebody)}>
                3b2 mohali
              </td>
              <td className={clsx(styles.tdth, styles.tablebody)}>
                999-223-4567
              </td>
              <td className={clsx(styles.tdth, styles.tablebody)}>
                Nick@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

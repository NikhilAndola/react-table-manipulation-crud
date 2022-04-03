import React from 'react';
import styles from './tabstyle.module.css';

export const TableCrud = () => {
  return (
    <>
      <h2>Making table crud app</h2>
      <div className={styles.appContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tdth}>Name</th>
              <th className={styles.tdth}>Address</th>
              <th className={styles.tdth}>Phone No</th>
              <th className={styles.tdth}>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdth}>Nick</td>
              <td className={styles.tdth}>3b2 mohali</td>
              <td className={styles.tdth}>999-223-4567</td>
              <td className={styles.tdth}>Nick@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

import React, { useState } from 'react';
import styles from './tabstyle.module.css';
import clsx from 'clsx';
import data from '../mock.data.json';
import { nanoid } from 'nanoid';

export const TableCrud = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleAddFormChange = (event) => {
    console.log(event);
    event.preventDefault();
    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newContacts = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
  };

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
            {contacts.map((item, key) => (
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

        <h2>Add a contact</h2>
        <form>
          <input
            type="text"
            name="fullName"
            required="required"
            value={addFormData.fullName}
            onChange={handleAddFormChange}
            placeholder="Enter your name..."
          />
          <input
            type="text"
            name="address"
            required="required"
            value={addFormData.address}
            onChange={handleAddFormChange}
            placeholder="Enter your address..."
          />
          <input
            type="tel"
            name="phoneNumber"
            required="required"
            value={addFormData.phoneNumber}
            onChange={handleAddFormChange}
            placeholder="Enter your phone number..."
          />
          <input
            type="email"
            name="email"
            required="required"
            value={addFormData.email}
            onChange={handleAddFormChange}
            placeholder="Enter your email..."
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

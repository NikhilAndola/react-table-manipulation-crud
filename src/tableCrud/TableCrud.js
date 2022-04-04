import React, { useState } from 'react';
import styles from './tabstyle.module.css';
import clsx from 'clsx';
import data from '../mock.data.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

export const TableCrud = () => {
  const [contacts, setContacts] = useState(data);
  console.log(contacts);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editContactId, setEditContactId] = useState(null);
  console.log(editFormData);

  const handleAddFormChange = (event) => {
    console.log(event);
    event.preventDefault();
    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditContactId(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
  };

  const newContacts = [...contacts];

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  return (
    <>
      <h2>Making table crud app</h2>
      <div className={styles.appContainer}>
        <form>
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
                <th className={clsx(styles.tdth, styles.tableheading)}>
                  Email
                </th>
                <th className={clsx(styles.tdth, styles.tableheading)}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item, key) => (
                <>
                  {editContactId === item.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      item={item}
                      key={key}
                      handleEditClick={handleEditClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>

        <h2>Add a contact</h2>
        <form onSubmit={handleAddFormSubmit}>
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

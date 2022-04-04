import React from 'react';
import clsx from 'clsx';
import styles from '../tabstyle.module.css';

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <>
      <tr>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          />
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          <input
            type="text"
            required="required"
            placeholder="Enter a address..."
            name="address"
            value={editFormData.address}
            onChange={handleEditFormChange}
          />
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          <input
            type="tel"
            required="required"
            placeholder="Enter phone number..."
            name="phoneNumber"
            value={editFormData.phoneNumber}
            onChange={handleEditFormChange}
          />
        </td>
        <td className={clsx(styles.tdth, styles.tablebody)}>
          <input
            type="text"
            required="required"
            placeholder="Enter email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <button type="submit">Save</button>
        </td>
      </tr>
    </>
  );
};

export default EditableRow;

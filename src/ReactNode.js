import React from 'react';

export const ReactNode = ({ data }) => {
  return (
    <>
      Hello how are you?
      <span>{data[0].name}</span>
    </>
  );
};

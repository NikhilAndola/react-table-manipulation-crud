import React from 'react';
import { Children } from './Children';
import { Hello } from './Hello';

export const Parent = () => {
  return (
    <>
      <div>Parent component </div>
      <Children>
        <Hello />
      </Children>
    </>
  );
};

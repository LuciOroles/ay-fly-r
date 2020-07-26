import React, { FunctionComponent } from 'react';

type CheckmarkType = {
  onChange: Function;
  label: string;
};

const Checkmark: FunctionComponent<CheckmarkType> = ({ label, onChange }) => {
  return (
    <label htmlFor={label}>
      {label}
      <input
        type="checkbox"
        id={`${label}_id`}
        onChange={({ target }) => {
          onChange(target.checked);
        }}
      ></input>
    </label>
  );
};

export default Checkmark;

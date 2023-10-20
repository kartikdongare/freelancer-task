import React from 'react';
import { CheckboxProps } from '../datatype'

const CheckBox: React.FC<CheckboxProps> = ({ index, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(index);
  };

  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      Checkbox {index}
    </label>
  );
};

export default CheckBox;

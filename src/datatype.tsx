//link
export const API_BASE_URL = 'https://navirego-interview-mc3narrsb-volodymyr-matselyukh.vercel.app/api/letters';

// data type
export interface CheckboxProps {
  index: number;
  checked: boolean;
  onChange: (index: number) => void;
}

export interface DisplayComponentProps {
  checkboxNumber: number;
}
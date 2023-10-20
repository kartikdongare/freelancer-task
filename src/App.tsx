import React, { useState } from 'react';
import Checkbox from './Component/CheckBox';
import DisplayLetter from './Component/DisplayLetter';
import './App.scss';

const App: React.FC = () => {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(Array(7).fill(false));
  const handleCheckboxChange = (index: number) => {
    const updatedCheckedBoxes = [...checkedBoxes];
    updatedCheckedBoxes[index] = !updatedCheckedBoxes[index];
    setCheckedBoxes(updatedCheckedBoxes);
  };

  return (
    <div className="app">
      <div className="checkbox-container">
        {Array.from({ length: 7 }, (_, index) => (
          <Checkbox
            key={index}
            index={index}
            checked={checkedBoxes[index]}
            onChange={handleCheckboxChange}
          />
        ))}
      </div>
      <div className="display-container">
        {checkedBoxes.map((checked, index) => (
          checked && <DisplayLetter key={index} checkboxNumber={index} />
        ))}
      </div>
    </div>
  );
};

export default App;


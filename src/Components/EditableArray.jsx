import React, { useState, useEffect } from 'react';
import Tree from './Tree';

function EditableArray() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(array.join(','));
  }, [array]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    const newArray = inputValue
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item !== '')
      .map((item) => (item === 'null' ? 'null' : isNaN(item) ? item : Number(item)));
    setArray(newArray);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
      e.target.blur();
    }
  };

  return (
    <div>
      <h2>Editable Array</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
        placeholder="Enter elements separated by commas"
      />
      <div style={{ marginTop: '16px' }}>
        <strong>Current Array:</strong> {JSON.stringify(array)}
      </div>
      <Tree array={array} />
    </div>
  );
}

export default EditableArray;

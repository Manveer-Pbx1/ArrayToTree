import React, { useState, useEffect } from 'react';

function EditableArray() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Synchronize inputValue with array
  useEffect(() => {
    setInputValue(array.join(','));
  }, [array]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleBlur = () => {
    const newArray = inputValue.split(',').map(item => item.trim()).filter(item => item !== '').map(item=>(item === 'null' ? 'null': isNaN(item) ? item : Number(item)));
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
    </div>
  );
}

export default EditableArray;

import React, { useState } from 'react';
import Picker from 'react-ios-pcr';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('Apple');
  
  const options = ['Apple', 'Orange', 'Banana', 'Grape', 'Peach'];

  return (
    <div style={{ width: '200px', margin: '50px auto' }}>
      <h3>과일 선택: {selectedValue}</h3>
      <Picker
        value={selectedValue}
        onChange={(val) => setSelectedValue(val)}
      >
        {options.map((option) => (
          <Picker.Item key={option} value={option}>
            {option}
          </Picker.Item>
        ))}
      </Picker>
    </div>
  );
};

export default App;

// src/ChoicePage.js
import React, { useState } from 'react';


const ChoicePage = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <div>
      <h1>Choose Your Option</h1>

      <div>
        <h2>For All Ages</h2>
        <div>
          <button onClick={() => handleChoiceSelect('Option A')}>Option A</button>
          <button onClick={() => handleChoiceSelect('Option B')}>Option B</button>
        </div>
        {selectedChoice && <p>You selected: {selectedChoice} for all ages.</p>}
      </div>

      <div>
        <h2>For Kids</h2>
        <div>
          <button onClick={() => handleChoiceSelect('Kid Option X')}>Kid Option X</button>
          <button onClick={() => handleChoiceSelect('Kid Option Y')}>Kid Option Y</button>
        </div>
        {selectedChoice && <p>You selected: {selectedChoice} for kids.</p>}
      </div>
    </div>
  );
};

export default ChoicePage;

// src/components/ScenarioSelection.js
import React from 'react';

const ScenarioSelection = ({ onSelectScenario }) => {
  return (
    <div>
      <h2>Select a Crisis Scenario</h2>
      <button onClick={() => onSelectScenario('drought')}>Drought</button>
      <button onClick={() => onSelectScenario('war')}>War</button>
      <button onClick={() => onSelectScenario('pandemic')}>Pandemic</button>
    </div>
  );
};

export default ScenarioSelection;


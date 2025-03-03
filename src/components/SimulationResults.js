// src/components/SimulationResults.js
import React from 'react';

const SimulationResults = ({ data }) => {
  return (
    <div>
      <h2>Simulation Results</h2>
      <p>Food Supply: {data.foodSupply}</p>
      <p>Population: {data.population}</p>
      {/* Display graphs or charts here */}
    </div>
  );
};

export default SimulationResults;


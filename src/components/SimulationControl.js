// src/components/SimulationControl.js
import React from 'react';

const SimulationControl = ({ startSimulation, stopSimulation }) => {
  return (
    <div>
      <button onClick={startSimulation}>Start Simulation</button>
      <button onClick={stopSimulation}>Stop Simulation</button>
    </div>
  );
};

export default SimulationControl;


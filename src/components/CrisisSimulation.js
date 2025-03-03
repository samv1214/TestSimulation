// src/components/CrisisSimulation.js
import React, { useState, useEffect } from 'react';
import ScenarioSelection from './ScenarioSelection';
import SimulationControl from './SimulationControl';
import SimulationResults from './SimulationResults';

const CrisisSimulation = () => {
  const [scenario, setScenario] = useState(null);
  const [simulationData, setSimulationData] = useState({
    foodSupply: 100,
    population: 1000,
  });
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = () => {
    setIsRunning(true);
    simulateCrisis();
  };

  const stopSimulation = () => {
    setIsRunning(false);
  };

  const simulateCrisis = () => {
    // Simulation logic based on selected scenario
    let interval = setInterval(() => {
      if (!isRunning) clearInterval(interval);
      setSimulationData((prevData) => {
        let newFoodSupply = prevData.foodSupply - 1; // Simulate food depletion
        let newPopulation = prevData.population + 2; // Simulate population growth
        if (scenario === 'drought') newFoodSupply -= 2;
        if (scenario === 'war') newFoodSupply -= 3;
        return { foodSupply: newFoodSupply, population: newPopulation };
      });
    }, 1000); // Update every second
  };

  const handleSelectScenario = (selectedScenario) => {
    setScenario(selectedScenario);
  };

  return (
    <div>
      <ScenarioSelection onSelectScenario={handleSelectScenario} />
      <SimulationControl startSimulation={startSimulation} stopSimulation={stopSimulation} />
      <SimulationResults data={simulationData} />
    </div>
  );
};

export default CrisisSimulation;


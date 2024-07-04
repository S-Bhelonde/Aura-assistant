import React from 'react';
import Schedule from './Components/Schedule';
import VoiceCommands from './Components/VoiceCommands';
import HealthMetrics from './Components/HealthMetrics';
import PomodoroTimer from './Components/PomodoroTimer';
import Chores from './Components/Chores';
import ShoppingList from './Components/ShoppingList';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Schedule />
      <VoiceCommands />
      <HealthMetrics />
      <PomodoroTimer />
      <Chores />
      <ShoppingList />
    </div>
  );
};

export default Dashboard;

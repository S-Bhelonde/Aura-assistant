import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tasks from './Components/Tasks';
import Schedule from './Components/Schedule';
import VoiceCommands from './Components/VoiceCommands';
import Chores from './Components/Chores';
import ShoppingList from './Components/ShoppingList';
import HealthMetric from './Components/HealthMetric';
import PomodoroTimer from './Components/PomodoroTimer';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <Tasks />
      <Schedule />
      <VoiceCommands />
      <Chores />
      <ShoppingList />
      <HealthMetric />
      <PomodoroTimer />
      <ToastContainer />
    </div>
  );
};

export default App;

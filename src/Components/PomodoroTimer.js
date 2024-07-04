import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

const PomodoroTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev === 0) {
            clearInterval(timer);
            return 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>{formatTime(secondsLeft)}</div>
      <button onClick={() => setIsRunning(true)}><FaPlay /></button>
      <button onClick={() => setIsRunning(false)}><FaPause /></button>
      <button onClick={() => setSecondsLeft(25 * 60)}><FaRedo /></button>
    </div>
  );
};

export default PomodoroTimer;

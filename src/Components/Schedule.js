import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [scheduleInput, setScheduleInput] = useState({ time: '', activity: '' });

  const handleScheduleChange = e => {
    setScheduleInput({ ...scheduleInput, [e.target.name]: e.target.value });
  };

  const addScheduleItem = () => {
    if (!scheduleInput.time || !scheduleInput.activity) return;
    setSchedule([...schedule, { id: schedule.length + 1, ...scheduleInput }]);
    setScheduleInput({ time: '', activity: '' });
  };

  const deleteScheduleItem = id => {
    setSchedule(schedule.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Schedule</h2>
      <div>
        <input
          type="time"
          name="time"
          value={scheduleInput.time}
          onChange={handleScheduleChange}
        />
        <input
          type="text"
          name="activity"
          value={scheduleInput.activity}
          onChange={handleScheduleChange}
          placeholder="Activity"
        />
        <button onClick={addScheduleItem}><FaPlus /></button>
      </div>
      <ul>
        {schedule.map(item => (
          <li key={item.id}>
            <span>{item.time} - {item.activity}</span>
            <button onClick={() => deleteScheduleItem(item.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;

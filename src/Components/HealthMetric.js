import React, { useState } from 'react';
import './HealthMetric.css';
import '@fortawesome/fontawesome-free/css/all.css';

const HealthMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const [metricInput, setMetricInput] = useState({ 
    date: '', 
    weight: '', 
    bloodPressure: '', 
    heartRate: '', 
    steps: '', 
    sleepHours: '' 
  });

  const handleMetricChange = e => {
    setMetricInput({ ...metricInput, [e.target.name]: e.target.value });
  };

  const detectStepsAndHeartRate = () => {
    // Simulating step and heart rate detection
    const simulatedSteps = Math.floor(Math.random() * 10000);
    const simulatedHeartRate = Math.floor(Math.random() * 40) + 60;
    
    setMetricInput({
      ...metricInput,
      steps: simulatedSteps.toString(),
      heartRate: simulatedHeartRate.toString()
    });
  };

  const addMetric = () => {
    if (!metricInput.date || !metricInput.weight || !metricInput.bloodPressure || !metricInput.heartRate || !metricInput.steps || !metricInput.sleepHours) return;
    setMetrics([...metrics, { id: metrics.length + 1, ...metricInput }]);
    setMetricInput({ date: '', weight: '', bloodPressure: '', heartRate: '', steps: '', sleepHours: '' });
  };

  return (
    <div className="health-metrics">
      <h2>Health Metrics</h2>
      <div>
        <div className="input-group">
          <div className="icon"><i className="fas fa-calendar"></i></div>
          <input
            type="text"
            name="date"
            value={metricInput.date}
            onChange={handleMetricChange}
            placeholder="Date (YYYY-MM-DD)"
          />
        </div>
        <div className="input-group">
          <div className="icon"><i className="fas fa-weight"></i></div>
          <input
            type="text"
            name="weight"
            value={metricInput.weight}
            onChange={handleMetricChange}
            placeholder="Weight (kg)"
          />
        </div>
        <div className="input-group">
          <div className="icon"><i className="fas fa-tachometer-alt"></i></div>
          <input
            type="text"
            name="bloodPressure"
            value={metricInput.bloodPressure}
            onChange={handleMetricChange}
            placeholder="Blood Pressure (mmHg)"
          />
        </div>
        <div className="input-group">
          <div className="icon"><i className="fas fa-heartbeat"></i></div>
          <input
            type="text"
            name="heartRate"
            value={metricInput.heartRate}
            onChange={handleMetricChange}
            placeholder="Heart Rate (bpm)"
          />
        </div>
        <div className="input-group">
          <div className="icon"><i className="fas fa-shoe-prints"></i></div>
          <input
            type="text"
            name="steps"
            value={metricInput.steps}
            onChange={handleMetricChange}
            placeholder="Steps"
          />
        </div>
        <div className="input-group">
          <div className="icon"><i className="fas fa-bed"></i></div>
          <input
            type="text"
            name="sleepHours"
            value={metricInput.sleepHours}
            onChange={handleMetricChange}
            placeholder="Sleep Hours"
          />
        </div>
        <button onClick={detectStepsAndHeartRate}>Detect Steps and Heart Rate</button>
        <button onClick={addMetric}>Add</button>
      </div>
      <ul>
        {metrics.map(metric => (
          <li key={metric.id}>
            <div className="metric-container">
              <div className="metric-circle">
                <div className="metric-label">Date</div>
                <div className="metric-value">{metric.date}</div>
              </div>
              <div className="metric-circle">
                <div className="metric-label">Weight</div>
                <div className="metric-value">{metric.weight} kg</div>
              </div>
              <div className="metric-circle">
                <div className="metric-label">BP</div>
                <div className="metric-value">{metric.bloodPressure} mmHg</div>
              </div>
              <div className="metric-circle">
                <div className="metric-label">HR</div>
                <div className="metric-value">{metric.heartRate} bpm</div>
              </div>
              <div className="metric-circle">
                <div className="metric-label">Steps</div>
                <div className="metric-value">{metric.steps}</div>
              </div>
              <div className="metric-circle">
                <div className="metric-label">Sleep</div>
                <div className="metric-value">{metric.sleepHours} hrs</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthMetrics;

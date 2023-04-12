import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(props.seconds);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    startCounter();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const startCounter = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetCounter = () => {
    setSeconds(0);
  };

  const resumeCounter = () => {
    if (!intervalId) {
      startCounter();
    }
  };

  return (
    <div>
      <FontAwesomeIcon icon={faClock} />
      <span>{seconds}</span>
      <button onClick={stopCounter}>Stop</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={resumeCounter}>Resume</button>
    </div>
  );
};

window.onload = function () {
  ReactDOM.render(
    <SecondsCounter seconds={0} />,
    document.getElementById('app')
  );
};

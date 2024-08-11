import { useRef, useState } from 'react';
import './Age.css';

const Age = () => {
  const [age, setAge] = useState(null);
  const yearOfBirth = useRef();

  const handleAgeCalc = () => {
    const today = new Date().getFullYear();
    const birthYear = Number(yearOfBirth.current.value);
    if (!isNaN(birthYear) && birthYear <= today) {
      const myAge = today - birthYear;
      setAge(myAge);
    } else {
      setAge('Invalid year');
    }
    yearOfBirth.current.value = '';
  };

  return (
    <div className="age-container">
      <div className="age-card">
        <h1 className="age-title">Age Calculator</h1>
        <input
          type="text"
          placeholder="Enter your year of birth"
          ref={yearOfBirth}
          className="age-input"
        />
        <button onClick={handleAgeCalc} className="age-button">Calculate My Age</button>
        {age !== null && (
          <p className="age-result">
            {age === 'Invalid year' ? age : `Your age is: ${age}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default Age;

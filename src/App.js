import React, { useState } from 'react';

function YourComponent() {
  const [inputValues, setInputValues] = useState(['', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const validateInput = () => {
    if (inputValues[0] === '' || inputValues[1] === '') {
      setErrorMessage('Error: one or both inputs are empty.');
    } else {
      // console.log('Input values are valid:', inputValues[0], inputValues[1]);
      console.log('validation successful');
      debugger
      showOutput();
    }
  };

  const showOutput = () => {
    const number1 = parseInt(inputValues[5]);
    const number2 = parseInt(inputValues[1]);
    const sum = number1 + number2;
    setErrorMessage('');
    setResult(`${number1} + ${number2} = ${sum}`);
  };



  return (
    <div>
      <input
        type="text"
        placeholder="Input 1"
        value={inputValues[0]}
        onChange={(e) => handleInputChange(e, 0)}
      />
      <input
        type="text"
        placeholder="Input 2"
        value={inputValues[1]}
        onChange={(e) => handleInputChange(e, 1)}
      />
      <p>{errorMessage}</p>
      <button onClick={validateInput}>Validate</button>
      <p>{result}</p>
    </div>
  );
}

export default YourComponent;

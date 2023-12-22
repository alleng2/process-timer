import React, { useState } from 'react';
function Content() {
  // Define state for the counter
  const [counter, setCounter] = useState(0);
  // Event handler for the button click
  const handleButtonClick = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <p>
        Counter: {counter}
      </p>
      <p>
        <button onClick={handleButtonClick}>Increment Counter</button>
      </p>
      <p>
        <button onClick={handleReset}>Reset Counter</button>
      </p>
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Increment Counter</button>
    </div>
  );
}
export default Content;
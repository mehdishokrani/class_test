import { useState } from 'react';
import style from "./StateExample.module.css"

function StateExample() {
  // Initialize a state variable for the entered message
  const [enteredMessage, setEnteredMessage] = useState('');

  // Event handler for handling input changes
  const handleInputChange = (event) => {
    // Update the state with the entered message
    setEnteredMessage(event.target.value);
  };

  return (
    <div>
      <h2>React State Example</h2>
      <input
        type="text"
        placeholder="Enter a message"
        className={style.textbox}
        value={enteredMessage}
        onChange={handleInputChange} // Attach the event listener
      />
      <p className={style.paragrapgh}>You entered: <span className={style.enteredtext}>{enteredMessage}</span> </p>
    </div>
  );
}

export default StateExample;

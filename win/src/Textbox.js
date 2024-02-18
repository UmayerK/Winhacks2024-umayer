import React, { useState } from 'react';
import getRating from './api';

function TextBox() {
  const [inputText, setInputText] = useState(""); // State to store input text

  const handleSubmit = () => {    
    alert('You entered: ' + inputText);
    return;
    getRating(inputText); // Call the getRating function from the API file (api.js)
  };

  const handleChange = (event) => {
    // Update the input text state
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      // Call the handleSubmit function if "Enter" is pressed
      handleSubmit();
    }
  };

  return (
    <div className="text-3xl font-bold flex flex-col justify-center absolute top-0 left-0 right-0">
      <form className="font-bold flex flex-col items-center relative">
        <textarea 
          id="textbox" 
          name="textbox" 
          className="text-black w-[40%] h-[25vh] text-md font-normal resize-none mt-[5%]"
          onChange={handleChange} // Call handleChange function when the input value changes
          onKeyPress={handleKeyPress} // Call handleKeyPress function when a key is pressed
          placeholder="hello" // Set the default text to "hello"
        />

        <button 
          className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4  border-blue-700 hover:border-blue-500 rounded mb-[1%] mr-[31%]"
          onClick={handleSubmit} // Call handleSubmit function when the button is clicked
        >
          Scan
        </button>
      </form>
    </div>
  );
}

export default TextBox;

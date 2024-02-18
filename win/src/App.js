import React from 'react';
import Form from './Textbox.js'; // Importing the Form component
import Posts from './Posts'; 


function App() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-black min-h-screen flex items-center justify-center">
      {/* Apply the gradient background to the entire container */}
      <div className="text-white text-center">
        {/* Content */}
        <section className="flex flex-col items-center justify-center h-full">
          <Form />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </section>
      </div>
    </div>
  );
}

export default App;

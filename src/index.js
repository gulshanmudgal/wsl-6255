import React from 'react'
import ReactDOM from 'react-dom';
import Test from './Test';

const App = () => {
  return (
    <div>
      {
        /* 
          Got to Test.js and change the text, 
          observe the change will reflect on the UI, 
          but changing the text in below div wouldn't reload automatically. 
        */
      }
      <Test />
      <div>Changing this line wouldn't hot reload.</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
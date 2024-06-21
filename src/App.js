import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Title from './components/title';
import Resume from './components/resume';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Resume />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Title from './components/page-sections/title';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Title />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

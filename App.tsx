import React from 'react';
import { Routes, Route } from 'react-router-dom'
import  MainComponent  from './Component/MainComponent'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<MainComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;

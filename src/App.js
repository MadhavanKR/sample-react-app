import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clearance from './components/clearance/Clearance';
import  AppMenu from './components/Menu/AppMenu';

function App() {
  return (
    <div className="App">
      {/* <Clearance></Clearance> */}
      <AppMenu></AppMenu>
    </div>
  );
}

export default App;

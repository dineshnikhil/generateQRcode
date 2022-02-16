import React from 'react';
import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import LoginForm from './components/Forms/LoginForm';

function App() {
  const [logStatus, setLogStatus] = useState(false);

  function onLogStatusHandler() {
    setLogStatus(true);
  }

  function offLogStatusHandler() {
    setLogStatus(false);
  }

  return (
    <React.Fragment>
      {logStatus && <LoginForm onClose={offLogStatusHandler} />}
      <Home onShow={onLogStatusHandler} />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './styles/styles.css';
import Home from './Home';
import SetKey from './SetKey';
import WebSocketUpdates from './WebSocket';

// App component to render the Home, SetKey, and WebSocketUpdates components
function App() {
  return (
    <div >
      <nav>
        <ul className='navbar'>
          <li className='home-content'>Home</li>
          <li>Set Key</li>
          <li>WebSocket Updates</li>
        </ul>
      </nav>
      <Home />
      <SetKey />
      <WebSocketUpdates />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

// WebSocketUpdates component to display real-time updates from the WebSocket server
function WebSocketUpdates() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setEntries(data);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className='container'>
      <h1>Real-Time WebSocket Updates</h1>
      <div className='websocket-updates'>
        {entries.map(({ key, value, expiration }, index) => (
          <div className='update-entry' key={index}>
            <p>Key: {key}</p>
            <p>Value: {value}</p>
            <p>Expires at: {new Date(expiration).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebSocketUpdates;

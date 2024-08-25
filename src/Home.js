import React, { useState } from 'react';
import axios from 'axios';

// Home component to fetch a key/value pair from the cache
function Home() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Function to fetch a key/value pair from the cache
  const fetchCacheKey = async () => {
    setIsError(false);
    try {
      const response = await axios.get('http://localhost:8080/cache', { 
        params: { key },
      });

      if (response.status === 200 && response.data.value) {
        setValue(response.data.value);
        setMessage('Key fetched successfully');
      } else {
        setValue('N/A');
        setMessage('Key not found in cache');
      }
    } catch (error) {
      setMessage(error.response.data.error);
      setValue('');
      console.error(error);
      setIsError(true);
    }
  };

  return (
    <div className='container'>
    <h1>Current Cache Key</h1>
    <div className='set-key-content'>
      <label>Key: </label>
      <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
    </div>
    {value && <div className='set-key-content'>
      <label>Value: {value}</label>
    </div>}
    <button className='set-key-content button set-key-content button:hover service-button grow' onClick={fetchCacheKey}>Fetch Key from Cache</button>
    {message && <p style={ {color:isError ? 'red' : "green"}}>{message}</p>}
  </div>
  );
}

export default Home;

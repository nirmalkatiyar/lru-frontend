import React, { useState } from 'react';
import axios from 'axios';

// SetKey component to set a new key/value pair in the cache
function SetKey() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [expiration, setExpiration] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  // Function to set a new key/value pair in the cache
  const setCacheKey = async () => {
  console.log(value,"value");
  setIsError(false);

    try {
      const response = await axios.post('http://localhost:8080/cache', {
          key,
          value,
          expiration: expiration.toString(),
      });
      console.log(response);
      if (response.data.code === 200) {
        setMessage('Key set successfully');
      } else {
        setMessage('Failed to set key');
      }
    } catch (error) {
      setMessage(error.response.data.error);
      console.error(error);
      setIsError(true);
    }

    // Reset the input fields
    setKey('');
    setValue('');
    setExpiration('');
  };

  return (
    <div className='container'>
      <h1>Set a New Key/Value Pair</h1>
      <div className='set-key-content'>
        <label>Key: </label>
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
      </div>
      <div className='set-key-content'>
        <label>Value: </label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className='set-key-content'>
        <label>Expiration Time (in seconds): </label>
        <input type="number" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
      </div>
      <button className='set-key-content button set-key-content button:hover button:hover service-button grow' onClick={setCacheKey}>Set Key/Value Pair</button>
      {message && <p style={ {color:isError ? 'red' : "green"}}>{message}</p>}
    </div>
  );
}

export default SetKey;

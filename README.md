
# LRU Cache Manager Frontend

## Overview
The LRUCacheManager-Frontend is a React-based web application that provides a user interface for interacting with the LRU Cache API. The app allows users to set, retrieve, and monitor cache entries in real-time through a WebSocket connection.

## Features
1. Home: View the current cache key-value pair stored in the cache.
2. Set Key: Add or update cache entries with expiration times.
3. WebSocket Updates: Monitor real-time updates of cache entries.
4. Responsive Design: Optimized for both desktop and mobile views.

## Project Structure
    ├── public
    │   ├── index.html          # Main HTML template
    │   └── favicon.ico         # Favicon for the app
    ├── src
    |   |--styles
    |   |    |---styles.css
    │   ├── Home.js         # Home page component
    │   ├── SetKey.js       # Set Key page component
    │   |── WebSocket.js # WebSocket updates page component
    │   ├── App.js              # Main app component
    │   ├── index.js            # Entry point for React
    │   ├── App.css
    |   |---index.css
    ├── package.json            # Project dependencies and scripts
    ├── README.md               # Project documentation

## Installation
    git clone <url>
    cd <directory name>
## Dependenciesnpm 
    npm install

## Run the app
    npm start

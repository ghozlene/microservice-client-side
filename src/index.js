import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

// Create a root.
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// During an update, there is no need to pass the container again
root.render(<App />);

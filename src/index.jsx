import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import FlashcardsPage from './flashcardsPage';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/public" element={<App />} />
      <Route path="/flashcards" element={<FlashcardsPage />} />
    </Routes>
  </Router>
);
serviceWorkerRegistration.unregister();
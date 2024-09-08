import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Appoint from './appointment';



function App() {
  return (
    <Router>
    <ErrorBoundary>
      <Routes>
      <Route path="/" element={<Appoint />}></Route>
      </Routes>  
    </ErrorBoundary>
  </Router>
  );
}

export default App;

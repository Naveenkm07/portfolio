import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Portfolio from './pages/Portfolio';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

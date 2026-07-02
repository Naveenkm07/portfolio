import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Portfolio from './pages/Portfolio';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="App">
        {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
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

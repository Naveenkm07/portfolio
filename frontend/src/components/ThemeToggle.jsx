import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import '../styles/theme-toggle.css';

const ThemeToggle = () => {
  try {
    const { theme, toggleTheme } = useTheme();

    const getIcon = () => {
      switch (theme) {
        case 'light':
          return <Sun size={20} />;
        case 'dark':
          return <Moon size={20} />;
        case 'system':
          return <Monitor size={20} />;
        default:
          return <Sun size={20} />;
      }
    };

    const getLabel = () => {
      switch (theme) {
        case 'light':
          return 'Light';
        case 'dark':
          return 'Dark';
        case 'system':
          return 'System';
        default:
          return 'Light';
      }
    };

    return (
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        title={`Current theme: ${getLabel()}. Click to switch theme.`}
        aria-label={`Toggle theme. Current: ${getLabel()}`}
      >
        {getIcon()}
        <span className="theme-label">{getLabel()}</span>
      </button>
    );
  } catch (error) {
    console.error('ThemeToggle error:', error);
    return (
      <button className="theme-toggle" onClick={() => {}}>
        <Sun size={20} />
        <span className="theme-label">Light</span>
      </button>
    );
  }
};

export default ThemeToggle;

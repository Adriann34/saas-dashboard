import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex h-screen overflow-hidden">
          <Sidebar collapsed={sidebarCollapsed} onToggle={setSidebarCollapsed} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
            <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
              <Dashboard />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
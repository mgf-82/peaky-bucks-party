import React from 'react';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Bookie from './components/Bookie';
import WinnersTax from './components/WinnersTax';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="content-stack">
        <Schedule />
        <Bookie />
        <WinnersTax />
      </main>
    </div>
  );
};

export default App;

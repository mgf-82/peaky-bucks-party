import React from 'react';
import HeroHeader from './components/HeroHeader';
import FlashySchedule from './components/FlashySchedule';
import FlashyBookie from './components/FlashyBookie';
import FlashyWinnersTax from './components/FlashyWinnersTax';
import DressCodePanel from './components/DressCodePanel';

const App = () => {
  return (
    <div className="app-shell">
      <div className="atmosphere atmosphere-left" aria-hidden="true" />
      <div className="atmosphere atmosphere-right" aria-hidden="true" />
      <div className="pinstripe-overlay" aria-hidden="true" />
      <HeroHeader />
      <section className="odds-ribbon" aria-label="Event highlights">
        <div className="odds-chip">
          <span className="odds-label">Dress Code</span>
          <strong>Shelby Dress Code</strong>
        </div>
        <div className="odds-chip">
          <span className="odds-label">Mood</span>
          <strong>Speakeasy Chaos</strong>
        </div>
        <div className="odds-chip">
          <span className="odds-label">Confidence</span>
          <strong>High Roller Energy</strong>
        </div>
      </section>
      <section className="must-do-card" aria-labelledby="must-do-title">
        <div>
          <p className="closing-eyebrow">Must Dos</p>
          <h2 className="must-do-title" id="must-do-title">Complete this before karting.</h2>
          <p className="must-do-text">
            OZ E-Karts registration and waiver needs to be done before race day so nobody is
            standing around at the rendezvous point filling forms.
          </p>
        </div>
        <a
          className="must-do-link"
          href="https://web.racefacer.com/kiosk/ozekarts?booking=5142271b-4054-4907-89f1-8cdd47e982ec"
          target="_blank"
          rel="noopener noreferrer"
        >
          OZK0173 Pre-Registration Link
        </a>
      </section>
      <DressCodePanel />
      <main className="content-stack">
        <FlashySchedule />
        <FlashyBookie />
        <FlashyWinnersTax />
      </main>
      <section className="closing-card">
        <p className="closing-eyebrow">House Rules</p>
        <h2 className="closing-title">Make it loud. Keep it classy. Leave with stories.</h2>
        <p className="closing-copy">
          This is a full-night campaign with polished looks, reckless confidence, and enough
          bookmaker swagger to keep the groom well supplied.
        </p>
      </section>
    </div>
  );
};

export default App;

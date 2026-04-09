import React from 'react';
import HeroHeader from './components/HeroHeader';
import FlashySchedule from './components/FlashySchedule';
import FlashyBookie from './components/FlashyBookie';
import DressCodePanel from './components/DressCodePanel';
import WinnersTax from './components/WinnersTax';
import RsvpPanel from './components/RsvpPanel';

const App = () => {
  return (
    <div className="app-shell">
      <div className="atmosphere atmosphere-left" aria-hidden="true" />
      <div className="atmosphere atmosphere-right" aria-hidden="true" />
      <div className="pinstripe-overlay" aria-hidden="true" />
      <HeroHeader />
      <section className="event-facts" aria-label="Event facts">
        <div className="event-fact">
          <span className="event-fact-label">Date</span>
          <strong>18 April 2026</strong>
        </div>
        <div className="event-fact">
          <span className="event-fact-label">Area</span>
          <strong>Adelaide CBD</strong>
        </div>
        <div className="event-fact">
          <span className="event-fact-label">Stops</span>
          <strong>5 locks for the ledger</strong>
        </div>
        <div className="event-fact">
          <span className="event-fact-label">Mood</span>
          <strong>Speakeasy chaos</strong>
        </div>
      </section>
      <RsvpPanel />
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
      <main className="page-layout">
        <div className="primary-column">
          <FlashySchedule />
        </div>
        <aside className="support-column">
          <DressCodePanel />
          <FlashyBookie />
          <WinnersTax />
        </aside>
      </main>
      <section className="closing-card">
        <p className="closing-eyebrow">Final Word</p>
        <h2 className="closing-title">Make it loud. Keep it classy. Leave with stories.</h2>
        <p className="closing-copy">
          Everything important is above: register before race day, show up dressed properly, and
          follow the running order once the engines fire. After that, the only job left is to make
          the groom look like he planned a legendary day out.
        </p>
      </section>
    </div>
  );
};

export default App;

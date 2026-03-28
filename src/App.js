import React from 'react';
import HeroHeader from './components/HeroHeader';
import FlashySchedule from './components/FlashySchedule';
import FlashyBookie from './components/FlashyBookie';
import FlashyWinnersTax from './components/FlashyWinnersTax';

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
          <strong>Peaky Blinders Style</strong>
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
      <section className="dress-code-card" aria-labelledby="dress-code-title">
        <div className="dress-code-copy">
          <p className="closing-eyebrow">Wardrobe Order</p>
          <h2 className="dress-code-title" id="dress-code-title">Flat cap is mandatory.</h2>
          <p className="dress-code-text">
            Dress code is full Peaky Blinders energy: dark layers, sharp shirt, polished shoes,
            and a proper flat cap on your head before first drinks.
          </p>
        </div>
        <div className="flat-cap-links">
          <a
            className="cap-link-card"
            href="https://www.target.com.au/p/mens-textured-flat-cap/71597065"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cap-link-tier">Cheap</span>
            <strong>Target Mens Textured Flat Cap</strong>
            <span>About A$15</span>
          </a>
          <a
            className="cap-link-card"
            href="https://hatstoreaustralia.com/tropic-507-ventair-black-flat-cap-kangol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cap-link-tier">Mid</span>
            <strong>Kangol Tropic 507 Ventair Flat Cap</strong>
            <span>About A$88.99</span>
          </a>
          <a
            className="cap-link-card"
            href="https://hatstoreaustralia.com/tropic-507-charoal-flat-cap-kangol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="cap-link-tier">Premium</span>
            <strong>Kangol Tropic 507 Flat Cap</strong>
            <span>About A$120.99</span>
          </a>
        </div>
      </section>
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

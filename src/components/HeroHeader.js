import React, { useState } from 'react';
import ShelbyBadge from './ShelbyBadge';

const quotes = [
  'By order of the Peaky Blinders.',
  "You don't get what you deserve, you get what you take.",
  'The past is not my concern. The future is no longer my concern.',
  'In the end, we all get what we deserve.',
  "I'm not a traitor to my class. I am just an extreme example of what a traitor to my class looks like.",
];

const HeroHeader = () => {
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <header className="hero-card">
      <div className="hero-topline">
        <p className="eyebrow">Bucks Party Guide</p>
        <div className="status-badge">Adelaide After Dark</div>
      </div>
      <div className="hero-grid">
        <div className="hero-copy-block">
          <p className="hero-kicker">By order of the groom</p>
          <h1 className="hero-title">The Order of the Peaky Blinders</h1>
          <p className="hero-meta">18 April 2026 | Adelaide CBD | Bowls, karts, casino, rooftops</p>
          <blockquote className="hero-quote">{quote}</blockquote>
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#schedule">
              View the Action
            </a>
            <a className="hero-button hero-button-secondary" href="#bookie">
              Check the Odds
            </a>
          </div>
        </div>
        <div className="hero-sidecard">
          <ShelbyBadge />
          <p className="sidecard-label">Tonight&apos;s Ledger</p>
          <div className="sidecard-row">
            <span>Stops</span>
            <strong>5</strong>
          </div>
          <div className="sidecard-row">
            <span>Starting Bell</span>
            <strong>12:00 PM</strong>
          </div>
          <div className="sidecard-row">
            <span>Risk Profile</span>
            <strong>Delightfully poor</strong>
          </div>
          <div className="sidecard-row">
            <span>Expected Finish</span>
            <strong>Questionable</strong>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;

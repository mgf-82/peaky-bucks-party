import React, { useState } from 'react';

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
      <div className="hero-copy-block">
        <p className="hero-kicker">By order of the groom</p>
        <h1 className="hero-title">The Order of the Peaky Blinders</h1>
        <p className="hero-meta">
          One clear mission: get the crew registered, dressed sharply, and through the full run
          from karts to rooftops without losing the plot too early.
        </p>
        <blockquote className="hero-quote">{quote}</blockquote>
        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#rsvp">
            RSVP Now
          </a>
          <a className="hero-button hero-button-primary" href="#schedule">
            View the Day Plan
          </a>
          <a className="hero-button hero-button-secondary" href="#dress-code">
            Dress Code
          </a>
          <a className="hero-button hero-button-secondary" href="#bookie">
            Check the Odds
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;

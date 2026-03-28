import React from 'react';
import { useState } from 'react';

const quotes = [
    "By order of the Peaky Blinders.",
    "You don’t get what you deserve, you get what you take.",
    "The past is not my concern. The future is no longer my concern.",
    "In the end, we all get what we deserve.",
    "I’m not a traitor to my class. I am just an extreme example of what a traitor to my class looks like."
];

const Header = () => {
    const [quote] = useState(() => {
        return quotes[Math.floor(Math.random() * quotes.length)];
    });

    return (
        <header className="hero-card">
            <p className="eyebrow">Bucks Party Guide</p>
            <h1 className="hero-title">The Order of the Peaky Blinders</h1>
            <p className="hero-meta">18 April 2026 | Adelaide CBD</p>
            <blockquote className="hero-quote">{quote}</blockquote>
        </header>
    );
};

export default Header;

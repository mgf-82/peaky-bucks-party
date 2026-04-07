import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const FlashyBookie = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="panel-card" id="bookie">
      <button type="button" className="panel-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <p className="panel-eyebrow">Odds Board</p>
          <h2 className="panel-title">The Bookie</h2>
        </div>
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="panel-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="panel-copy">
              Suggested budget tiers for the casino stop. Use this as a rough comfort guide, not a
              dare.
            </p>
            <div className="tier-list">
              <div className="tier-card">
                <div className="tier-header">
                  <h3>Tier 1 | Social</h3>
                  <span className="tier-tag">Warm-Up</span>
                </div>
                <p className="tier-budget">Budget: $50</p>
                <p className="tier-detail">
                  A tidy little flutter for good banter and safe optimism.
                </p>
              </div>
              <div className="tier-card">
                <div className="tier-header">
                  <h3>Tier 2 | Mid-Tier</h3>
                  <span className="tier-tag">Live Wire</span>
                </div>
                <p className="tier-budget">Budget: $200</p>
                <p className="tier-detail">
                  Enough confidence to talk like a bookmaker and back it up.
                </p>
              </div>
              <div className="tier-card">
                <div className="tier-header">
                  <h3>Tier 3 | High Roller</h3>
                  <span className="tier-tag">Main Character</span>
                </div>
                <p className="tier-budget">Budget: $300+ at The District Poker Room</p>
                <p className="tier-detail">
                  For the man who hears &quot;bad idea&quot; and calls it destiny.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlashyBookie;

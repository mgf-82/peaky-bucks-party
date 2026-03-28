import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const scheduleItems = [
  {
    time: 'TBC',
    activity: 'Lawn Bowls @ Torrensville Bowls',
    budget: '$25 each',
    note: 'Strong opener and a civilised way to start the chaos.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Torrensville+Bowls',
  },
  {
    time: 'TBC',
    activity: 'Go-Karting @ P1 Entertainment',
    budget: '$140 each',
    note: 'Main spend early in the day, but worth it.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=P1+Entertainment',
  },
  {
    time: 'TBC',
    activity: 'Casino & Pre-Drinks @ SkyCity Adelaide',
    budget: 'See the bookie',
    note: 'Budget depends how brave you are. Check the odds board below.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=SkyCity+Adelaide',
  },
  {
    time: 'TBC',
    activity: 'Belles Hot Chicken @ Hindley St',
    budget: 'Buy your own',
    note: 'Feed yourself properly before the late shift.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Belles+Hot+Chicken',
  },
  {
    time: 'TBC',
    activity: 'Rooftop Meetup with Hens @ Location TBC',
    budget: 'Who knows',
    note: 'Financial forecasting becomes unreliable at this point.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Location+TBC',
  },
];

const FlashySchedule = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="panel-card" id="schedule">
      <button type="button" className="panel-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <p className="panel-eyebrow">Field Report</p>
          <h2 className="panel-title">The Schedule</h2>
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
              Rough guide only for now. The exact timings are still TBC, but this is the shape of
              the day and the kind of damage each stop is likely to do to the wallet.
            </p>
            <ul className="schedule-list">
              {scheduleItems.map((item, index) => (
                <li key={item.activity} className="schedule-item">
                  <div className="schedule-row">
                    <div className="schedule-time">{item.time}</div>
                    <div className="schedule-badge">Stop {index + 1}</div>
                  </div>
                  <div className="schedule-activity">{item.activity}</div>
                  <div className="schedule-budget-row">
                    <span className="schedule-budget-label">Budget</span>
                    <strong className="schedule-budget-value">{item.budget}</strong>
                  </div>
                  <p className="schedule-note">{item.note}</p>
                  <a
                    href={item.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-link"
                  >
                    Open in Maps
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlashySchedule;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const scheduleItems = [
  {
    time: '12:00 PM',
    activity: 'Go-Karting @ OZ E-Karts, Holden Hill',
    budget: '$100pp',
    note: 'This is the rendezvous point, so everyone starts here.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=OZ+E-Karts+Holden+Hill',
  },
  {
    time: '3:00 PM',
    activity: 'Lawn Bowls @ Adelaide Bowling Club',
    budget: '$25',
    note: 'Strong follow-up move once the karts have done the damage.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Adelaide+Bowling+Club',
  },
  {
    time: '5:00 PM',
    activity: 'Casino & Pre-Drinks @ SkyCity Adelaide',
    budget: 'See the bookie',
    note: 'Budget depends how brave you are. Check the odds board below.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=SkyCity+Adelaide',
  },
  {
    time: '7:15 PM',
    activity: 'Belles Hot Chicken @ Hindley St',
    budget: 'Buy your own',
    note: 'Feed yourself properly before the late shift.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Belles+Hot+Chicken',
  },
  {
    time: '8:30 - 9:00PM',
    activity: 'Rooftop Meetup with Hens @ 2KW Bar & Restaurant',
    budget: 'Who knows',
    note: 'Financial forecasting becomes unreliable at this point.',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=2KW+Bar+%26+Restaurant',
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
              The running order is taking shape now. A few pieces are locked in, a few are still
              flexible, but this is the current plan and the kind of damage each stop is likely to
              do to the wallet.
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

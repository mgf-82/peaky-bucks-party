import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const scheduleItems = [
  {
    time: '12:00 PM',
    activity: 'Lawn Bowls @ Torrensville Bowls',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Torrensville+Bowls',
  },
  {
    time: '2:30 PM',
    activity: 'Go-Karting @ P1 Entertainment',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=P1+Entertainment',
  },
  {
    time: '4:30 PM',
    activity: 'Casino & Pre-Drinks @ SkyCity Adelaide',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=SkyCity+Adelaide',
  },
  {
    time: '7:15 PM',
    activity: 'Belles Hot Chicken @ Hindley St',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Belles+Hot+Chicken',
  },
  {
    time: '8:30 PM',
    activity: 'Rooftop Meetup with Hens @ Location TBC',
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
              A clean opening run that starts gentlemanly and ends somewhere between tactical
              masterpiece and beautiful disaster.
            </p>
            <ul className="schedule-list">
              {scheduleItems.map((item, index) => (
                <li key={item.time} className="schedule-item">
                  <div className="schedule-row">
                    <div className="schedule-time">{item.time}</div>
                    <div className="schedule-badge">Stop {index + 1}</div>
                  </div>
                  <div className="schedule-activity">{item.activity}</div>
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

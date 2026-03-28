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

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSchedule = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="panel-card">
      <button type="button" className="panel-toggle" onClick={toggleSchedule}>
        <h2 className="panel-title">The Schedule</h2>
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="panel-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="schedule-list">
              {scheduleItems.map((item, index) => (
                <li key={index} className="schedule-item">
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-activity">{item.activity}</div>
                  <a href={item.mapsLink} target="_blank" rel="noopener noreferrer" className="maps-link">Open in Maps</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Schedule;

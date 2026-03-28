import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const Bookie = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="panel-card">
            <button type="button" className="panel-toggle" onClick={toggleAccordion}>
                <h2 className="panel-title">The Bookie</h2>
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
                        <div className="tier-list">
                            <div className="tier-card">
                                <h3>Tier 1 | Social</h3>
                                <p>Budget: $50</p>
                            </div>
                            <div className="tier-card">
                                <h3>Tier 2 | Mid-Tier</h3>
                                <p>Budget: $200</p>
                            </div>
                            <div className="tier-card">
                                <h3>Tier 3 | High Roller</h3>
                                <p>Budget: $300+ at The District Poker Room</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Bookie;

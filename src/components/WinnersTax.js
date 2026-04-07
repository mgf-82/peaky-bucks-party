import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const WinnersTax = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="panel-card">
            <button type="button" className="panel-toggle" onClick={toggleAccordion}>
                <h2 className="panel-title">The Winner&apos;s Tax</h2>
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
                        <p className="panel-copy">
                            The "Bucks Tax" is a fun way to ensure the groom's drinks are covered. 
                            Remember, 10% of all gambling winnings will go toward the groom's drinks.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WinnersTax;

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const capOptions = [
  {
    tier: 'Cheap',
    name: 'Target Flat Cap',
    price: 'About A$5',
    href: 'https://www.target.com.au/p/flat-cap/70047547',
  },
  {
    tier: 'Affordable',
    name: 'Target Mens Textured Flat Cap',
    price: 'About A$15',
    href: 'https://www.target.com.au/p/mens-textured-flat-cap/71597065',
  },
  {
    tier: 'Shelby',
    name: 'Shelby Gangster Mens Grey 1920s Flat Cap',
    price: 'About A$18.99',
    href: 'https://www.heavencostumes.com.au/products/shelby-gangster-grey-flat-cap-hat',
  },
  {
    tier: 'Mid',
    name: 'Avenel Finch Linen Cotton Flat Cap',
    price: 'About A$67.50',
    href: 'https://thehatstore.com.au/products/avenel-finch-linen-cotton-flat-cap-taupe',
  },
  {
    tier: 'Shelby',
    name: 'Failsworth Linen Alfie Cap',
    price: 'About A$95',
    href: 'https://thehatstore.com.au/products/failsworth-linen-alfie-cap-natural',
  },
  {
    tier: 'Sharp',
    name: 'Kangol 504 Ventair Tropic Cap',
    price: 'About A$90',
    href: 'https://cityhatters.com.au/products/kangol-tropic-ventair-505',
  },
  {
    tier: 'Premium',
    name: 'Kangol Tropic 507 Flat Cap',
    price: 'About A$120.99',
    href: 'https://hatstoreaustralia.com/tropic-507-charoal-flat-cap-kangol',
  },
];

const DressCodePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="dress-code-card" id="dress-code">
      <button type="button" className="dress-code-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="dress-code-copy">
          <p className="closing-eyebrow">Wardrobe Order</p>
          <h2 className="dress-code-title">Shelby Dress Code</h2>
          <p className="dress-code-text">
            Peaky Blinders style only. Flat cap is mandatory. Click in for the buying guide, from
            cheap backup options to proper statement pieces.
          </p>
          <p className="dress-code-hint">
            {isOpen ? 'Hide flat cap buying options' : 'Tap to view flat cap buying options'}
          </p>
        </div>
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="dress-code-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="dress-code-text">
              Aim for dark layers, sharp shirt, polished shoes, and a proper flat cap on your
              head before first drinks. If anyone asks, this is non-negotiable.
            </p>
            <div className="style-guide">
              <div className="style-tip">
                <span className="style-tip-label">Top Half</span>
                <strong>White or dark button-up, optional waistcoat, structured jacket</strong>
              </div>
              <div className="style-tip">
                <span className="style-tip-label">Bottom Half</span>
                <strong>Tailored trousers or dark chinos, no boardies, no ripped denim</strong>
              </div>
              <div className="style-tip">
                <span className="style-tip-label">Footwear</span>
                <strong>Dress shoes or clean boots, polished enough for casino entry</strong>
              </div>
              <div className="style-tip">
                <span className="style-tip-label">Non-Negotiable</span>
                <strong>Flat cap on arrival, dark palette, look like you mean business</strong>
              </div>
            </div>
            <div className="flat-cap-links">
              {capOptions.map((cap) => (
                <a
                  key={cap.name}
                  className="cap-link-card"
                  href={cap.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cap-link-tier">{cap.tier}</span>
                  <strong>{cap.name}</strong>
                  <span>{cap.price}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DressCodePanel;

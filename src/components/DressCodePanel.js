import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronIcon from './ChevronIcon';

const capOptions = [
  {
    tier: 'Cheap | Black',
    name: 'Target Flat Cap - Black',
    price: 'About A$5',
    href: 'https://www.target.com.au/p/flat-cap/70047547',
  },
  {
    tier: 'Affordable | Grey',
    name: 'Target Herringbone Flat Cap - Grey',
    price: 'About A$15',
    href: 'https://www.target.com.au/p/herringbone-flat-cap/70978094',
  },
  {
    tier: 'Affordable | Black',
    name: 'Target Mens Cotton Flat Cap - Black',
    price: 'About A$15',
    href: 'https://www.target.com.au/p/mens-cotton-flat-cap/71596471',
  },
  {
    tier: 'Ghelter | Black',
    name: 'Ghelter Classic Mesh Flat Cap - Black',
    price: 'About EUR 14.90',
    href: 'https://www.ghelter.com/products/ghelter-classic-mesh-flat-cap',
  },
  {
    tier: 'Shelby | Grey',
    name: 'Target Mens Textured Flat Cap',
    price: 'About A$15',
    href: 'https://www.target.com.au/p/mens-textured-flat-cap/71597065',
  },
  {
    tier: 'Ghelter | Grey',
    name: 'Gatsby Series Flat Cap - Gray',
    price: 'About EUR 28.90',
    href: 'https://www.ghelter.com/products/gatsby-series-flat-cap',
  },
  {
    tier: 'Shelby',
    name: 'Shelby Gangster Mens Grey 1920s Flat Cap',
    price: 'About A$18.99',
    href: 'https://www.heavencostumes.com.au/products/shelby-gangster-grey-flat-cap-hat',
  },
  {
    tier: 'Mid | Taupe-Grey',
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
    <section className="dress-code-card panel-card-compact" id="dress-code">
      <div className="dress-code-copy">
        <p className="closing-eyebrow">Wardrobe Order</p>
        <h2 className="dress-code-title">Shelby Dress Code</h2>
        <p className="dress-code-text">
          Show up looking sharp: white shirt, black tie, dark trousers, proper shoes, and a flat
          cap on arrival.
        </p>
      </div>
      <div className="dress-code-content dress-code-summary">
        <div className="style-guide">
          <div className="style-tip">
            <span className="style-tip-label">Top Half</span>
            <strong>White button-up and black tie. Jacket or waistcoat is optional.</strong>
          </div>
          <div className="style-tip">
            <span className="style-tip-label">Bottom Half</span>
            <strong>Black or charcoal trousers. Dark chinos work if they still look sharp.</strong>
          </div>
          <div className="style-tip">
            <span className="style-tip-label">Footwear</span>
            <strong>Boots or clean dress shoes, comfortable enough to survive the full day.</strong>
          </div>
          <div className="style-tip">
            <span className="style-tip-label">Non-Negotiable</span>
            <strong>Flat cap on arrival, dark palette, and no casual gear killing the look.</strong>
          </div>
        </div>
        <button
          type="button"
          className="panel-toggle dress-code-toggle-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <p className="panel-eyebrow">Buying Guide</p>
            <p className="dress-code-hint">Open the flat-cap shortlist</p>
          </div>
          <ChevronIcon direction={isOpen ? 'up' : 'down'} />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="dress-code-shopping"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
            >
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
      </div>
    </section>
  );
};

export default DressCodePanel;

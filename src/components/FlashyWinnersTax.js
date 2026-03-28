import React from 'react';

const FlashyWinnersTax = () => {
  return (
    <section className="panel-card" id="tax">
      <p className="panel-eyebrow">Collection Notice</p>
      <h2 className="panel-title">The Winner&apos;s Tax</h2>
      <div className="tax-highlight">
        <span className="tax-value">10%</span>
        <p className="tax-copy">of all gambling winnings goes straight to the groom&apos;s drinks fund.</p>
      </div>
      <p className="panel-copy">
        The house always gets a taste, and tonight the house is the groom. Win big, celebrate
        hard, and kick in your share like a proper gentleman of dubious character.
      </p>
      <div className="tax-rules">
        <div className="tax-rule">
          <span className="tax-rule-label">Reason</span>
          <strong>Keep the drinks flowing</strong>
        </div>
        <div className="tax-rule">
          <span className="tax-rule-label">Spirit</span>
          <strong>Generous, smug, mandatory</strong>
        </div>
      </div>
    </section>
  );
};

export default FlashyWinnersTax;

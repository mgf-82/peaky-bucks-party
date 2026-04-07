import React from 'react';

const WinnersTax = () => {
  return (
    <section className="panel-card panel-card-compact" id="winners-tax">
      <div className="panel-toggle panel-toggle-static">
        <div>
          <p className="panel-eyebrow">House Rule</p>
          <h2 className="panel-title">The Winner&apos;s Tax</h2>
        </div>
        <div className="tax-chip">10%</div>
      </div>
      <div className="panel-content">
        <p className="panel-copy">
          Any gambling winnings owe a ten percent cut to the groom&apos;s drinks fund. Win big,
          celebrate hard, then pay the house.
        </p>
        <div className="tax-rules tax-rules-compact">
          <div className="tax-rule">
            <span className="tax-rule-label">Reason</span>
            <strong>Keep the drinks flowing</strong>
          </div>
          <div className="tax-rule">
            <span className="tax-rule-label">Spirit</span>
            <strong>Generous, smug, mandatory</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersTax;

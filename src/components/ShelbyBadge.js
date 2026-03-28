import React from 'react';

const ShelbyBadge = () => {
  return (
    <div className="shelby-badge" aria-label="Peaky Blinders inspired crest">
      <div className="shelby-badge-ring">
        <div className="shelby-badge-core">
          <p className="shelby-badge-top">By Order Of The</p>
          <div className="shelby-badge-monogram">PB</div>
          <div className="shelby-badge-divider" />
          <p className="shelby-badge-bottom">Peaky Blinders</p>
        </div>
      </div>
    </div>
  );
};

export default ShelbyBadge;

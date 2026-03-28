import React from 'react';

const ShelbyBadge = () => {
  return (
    <div className="shelby-badge" aria-label="Peaky Blinders inspired blade mark">
      <div className="blade-badge">
        <div className="blade-notch blade-notch-left-top" />
        <div className="blade-notch blade-notch-left-bottom" />
        <div className="blade-notch blade-notch-right-top" />
        <div className="blade-notch blade-notch-right-bottom" />
        <div className="blade-inner">
          <p className="blade-line blade-line-top">Peaky</p>
          <div className="blade-divider" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="blade-line blade-line-bottom">Blinders</p>
        </div>
      </div>
    </div>
  );
};

export default ShelbyBadge;

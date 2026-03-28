import React from 'react';

const ShelbyBadge = () => {
  return (
    <div className="shelby-badge" aria-label="Order of the Peaky Blinders inspired emblem">
      <svg viewBox="0 0 320 320" role="img" aria-hidden="true">
        <circle cx="160" cy="160" r="150" className="badge-ring" />
        <circle cx="160" cy="160" r="121" className="badge-inner-ring" />
        <path
          className="badge-cap"
          d="M98 124c9-28 36-48 70-50 38-2 73 17 92 46-8 10-22 14-36 13 2 8-2 17-9 21-9 5-20 4-31 2-15-3-31-6-46-2-10 3-20 8-31 7-8-1-15-5-20-11 2-9 6-18 11-26z"
        />
        <path
          className="badge-face"
          d="M127 141c9-8 22-11 34-10 17 2 33 11 43 25 8 11 11 24 11 37-1 21-9 41-24 56-15 16-39 25-61 18-18-5-31-21-36-39-5-18-4-39 4-56 6-12 15-23 29-31z"
        />
        <path
          className="badge-shadow"
          d="M164 129c17 4 32 14 41 29 7 11 10 25 9 38-1 21-9 41-24 56-11 12-29 20-46 20l20-143z"
        />
        <path
          className="badge-collar"
          d="M118 244c10-11 23-20 38-24l7 21 17-20c13 3 24 11 32 22-28 18-66 20-94 1z"
        />
        <path
          className="badge-highlight"
          d="M149 176c7-5 16-7 24-5-5 3-10 7-14 12-7 0-13 2-19 4 2-4 5-8 9-11z"
        />
        <path
          id="badge-top-text"
          d="M53 162a107 107 0 0 1 214 0"
          fill="none"
        />
        <path
          id="badge-bottom-text"
          d="M267 158a107 107 0 0 1-214 0"
          fill="none"
        />
        <text className="badge-text">
          <textPath href="#badge-top-text" startOffset="50%" textAnchor="middle">
            BY ORDER OF THE
          </textPath>
        </text>
        <text className="badge-text badge-text-bottom">
          <textPath href="#badge-bottom-text" startOffset="50%" textAnchor="middle">
            PEAKY BLINDERS
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default ShelbyBadge;

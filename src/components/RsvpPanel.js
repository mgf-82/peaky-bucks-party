import React, { useState } from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/michael.g.ferguson@gmail.com';
const attendanceOptions = [
  { value: 'Yes, I am attending', label: 'Yes, I am attending' },
  { value: 'No, I am not attending', label: 'No, I am not attending' },
  { value: 'Other', label: 'Other' },
];

const initialForm = {
  name: '',
  attendance: 'Yes, I am attending',
  otherDetails: '',
};

const confirmedAttendees = [
  'The Buck',
  'Gus F',
  'Jaz P',
  'Jon P',
  'John P',
  'Dustin B',
  'Jeff B',
  'Michael W',
  'Allan W',
];

const confirmedOutAttendees = ['Matt T'];

const RsvpPanel = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === 'attendance' && value !== 'Other' ? { otherDetails: '' } : {}),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const payload = new FormData();
    payload.append('name', formData.name.trim());
    payload.append('attendance', formData.attendance);
    payload.append(
      'other_details',
      formData.attendance === 'Other' ? formData.otherDetails.trim() : 'N/A'
    );
    payload.append('_subject', 'Peaky Bucks Attendance');
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');
    payload.append('_honey', '');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormData(initialForm);
      setStatus({
        type: 'success',
        message: 'Attendance sent. Gus will get the notification shortly.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Could not send the RSVP right now. Please try again in a moment.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rsvp-card" id="rsvp" aria-labelledby="rsvp-title">
      <div className="rsvp-copy">
        <p className="closing-eyebrow">RSVP Ledger</p>
        <h2 className="must-do-title" id="rsvp-title">Lock in your attendance.</h2>
        <p className="must-do-text">
          Send your answer here so Gus gets a proper attendance notification without chasing
          everyone down.
        </p>
        <div className="attendance-columns" aria-labelledby="confirmed-title">
          <div className="confirmed-list-card confirmed-list-card-in">
            <div className="confirmed-list-header">
              <p className="panel-eyebrow" id="confirmed-title">Confirmed Attendees</p>
              <span className="status-badge">{confirmedAttendees.length} locked in</span>
            </div>
            <ul className="confirmed-list confirmed-list-two-column">
              {confirmedAttendees.map((attendee) => (
                <li key={attendee} className="confirmed-list-item">
                  <span className="confirmed-bullet" aria-hidden="true" />
                  <span>{attendee}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="confirmed-list-card confirmed-list-card-out" aria-labelledby="confirmed-out-title">
            <div className="confirmed-list-header">
              <p className="panel-eyebrow" id="confirmed-out-title">Confirmed Out</p>
              <span className="status-badge">{confirmedOutAttendees.length} out</span>
            </div>
            <p className="confirmed-out-note">No dramas, noted and off the board for the day.</p>
            <ul className="confirmed-list confirmed-list-out">
              {confirmedOutAttendees.map((attendee) => (
                <li key={attendee} className="confirmed-list-item">
                  <span className="confirmed-bullet confirmed-bullet-out" aria-hidden="true" />
                  <span>{attendee}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="payment-card" aria-labelledby="payment-title">
          <div className="confirmed-list-header">
            <p className="panel-eyebrow" id="payment-title">Payment Details</p>
            <span className="status-badge">$125.00 owed</span>
          </div>
          <div className="payment-grid">
            <div className="payment-item">
              <span className="rsvp-label">PAYID For Gus</span>
              <strong>0404 292 668</strong>
            </div>
            <div className="payment-item">
              <span className="rsvp-label">Total Owed</span>
              <strong>$125.00</strong>
            </div>
          </div>
        </div>
      </div>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label className="rsvp-field">
          <span className="rsvp-label">Name</span>
          <input
            className="rsvp-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label className="rsvp-field">
          <span className="rsvp-label">Attendance</span>
          <select
            className="rsvp-input rsvp-select"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
          >
            {attendanceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        {formData.attendance === 'Other' && (
          <label className="rsvp-field-full">
            <span className="rsvp-label">Other details</span>
            <textarea
              className="rsvp-input rsvp-textarea"
              name="otherDetails"
              value={formData.otherDetails}
              onChange={handleChange}
              placeholder="Add your note here"
              rows="4"
              required
            />
          </label>
        )}
        <button className="rsvp-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Attendance'}
        </button>
        {status.message && (
          <p className={`rsvp-status rsvp-status-${status.type}`} role="status">
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default RsvpPanel;

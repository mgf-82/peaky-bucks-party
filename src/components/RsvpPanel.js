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

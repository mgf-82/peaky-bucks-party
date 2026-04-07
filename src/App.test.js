import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

describe('App page integrity', () => {
  it('renders the main structure and key sections', () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain('The Order of the Peaky Blinders');
    expect(html).toContain('aria-label="Event facts"');
    expect(html).toContain('Complete this before karting.');
    expect(html).toContain('The Day Plan');
    expect(html).toContain('Shelby Dress Code');
    expect(html).toContain('The Bookie');
    expect(html).toContain('The Winner&#x27;s Tax');
    expect(html).toContain('class="page-layout"');
    expect(html).toContain('class="primary-column"');
    expect(html).toContain('class="support-column"');
  });

  it('keeps jump target ids wired into the rendered page', () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain('id="schedule"');
    expect(html).toContain('id="dress-code"');
    expect(html).toContain('id="bookie"');
    expect(html).toContain('id="winners-tax"');
  });
});

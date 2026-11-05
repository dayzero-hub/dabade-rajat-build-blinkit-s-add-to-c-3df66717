import { describe, expect, it } from 'vitest';
import { mustQuery } from './dom.ts';

describe('mustQuery', () => {
  it('returns the element typed as asked', () => {
    document.body.innerHTML = '<button id="go">Go</button>';
    const button = mustQuery('#go', HTMLButtonElement);
    expect(button.textContent).toBe('Go');
  });

  it('names the selector when the element is missing', () => {
    document.body.innerHTML = '';
    expect(() => mustQuery('#nope', HTMLButtonElement)).toThrow('Missing element: #nope');
  });

  it('refuses the wrong element type', () => {
    document.body.innerHTML = '<div id="go"></div>';
    expect(() => mustQuery('#go', HTMLButtonElement)).toThrow('is not a HTMLButtonElement');
  });
});

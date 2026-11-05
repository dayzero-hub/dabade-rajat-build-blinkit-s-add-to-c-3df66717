import { describe, expect, it } from 'vitest';
import { formatRupees } from './money.ts';

describe('formatRupees', () => {
  it('formats paise as Indian rupees', () => {
    expect(formatRupees(129900)).toBe('₹1,299.00');
  });

  it('uses Indian digit grouping', () => {
    expect(formatRupees(1234567800)).toBe('₹1,23,45,678.00');
  });

  it('refuses fractional paise', () => {
    expect(() => formatRupees(10.5)).toThrow('whole paise');
  });
});

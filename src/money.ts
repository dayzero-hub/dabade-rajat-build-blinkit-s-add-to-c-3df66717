// Money is an integer number of paise everywhere in code. Rupees exist only on screen.
export function formatRupees(paise: number): string {
  if (!Number.isInteger(paise)) {
    throw new Error(`formatRupees expects whole paise, got ${paise}`);
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(paise / 100);
}

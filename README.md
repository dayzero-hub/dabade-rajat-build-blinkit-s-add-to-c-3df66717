# fe-ts-dom-starter

Vite + TypeScript (strict mode, no framework) starter for DayZer0's browser TypeScript briefs.
It is a plain HTML page driven by TypeScript, with ESLint and Vitest already set up.

## What's in it

- `index.html` — the page. Your brief's markup goes here.
- `src/main.ts` — the entry point the page loads.
- `src/dom.ts` — `mustQuery(selector, ElementType)`, a typed DOM query that throws an error naming the selector instead of returning `null`.
- `src/money.ts` — `formatRupees(paise)`, formatting an integer number of paise as Indian rupees.
- `src/*.test.ts` — Vitest tests for both, running in a simulated browser (jsdom).
- `tsconfig.json` — `"strict": true`. Leave it on.
- `eslint.config.js` — typescript-eslint's strict rules, with `any` and non-null assertions (`!`) as errors.

## Run it

You need Node.js 20 or newer. Check with:

```bash
node --version
```

Then, from this folder:

```bash
npm install
npm run dev
```

Open the `Local:` address it prints. The page says **"The starter is running. Example price: ₹1,299.00"**.
Stop it with Ctrl+C.

## Check it

```bash
npm test          # Vitest — all tests should pass
npm run lint      # ESLint — no output means clean
npm run build     # type-check with tsc, then build to dist/
```

`npx tsc --noEmit` type-checks without building. The dev server shows the page even when the types
are wrong — the type checker is what tells you.

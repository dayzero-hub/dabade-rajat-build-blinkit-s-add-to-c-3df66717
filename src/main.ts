import './style.css';
import { mustQuery } from './dom.ts';
import { formatRupees } from './money.ts';

const status = mustQuery('#status', HTMLParagraphElement);
status.textContent = `The starter is running. Example price: ${formatRupees(129900)}`;

import './style.css';
import { mustQuery } from './dom.ts';
import { formatRupees } from './money.ts';
import { products } from './products.ts';

const grid = mustQuery('#grid', HTMLElement);

const quantities: Map<string, number> = new Map(products.map((product) => [product.id, 0]));

function getQuantity(id: string): number {
  return quantities.get(id) ?? 0;
}

function makeButton(id: string, action: string, text: string, label?: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = text;
  button.dataset.id = id;
  button.dataset.action = action;
  if (label) button.setAttribute('aria-label', label);
  return button;
}

function render(): void {
  const cards = products.map((product) => {
    const card = document.createElement('article');
    card.className = 'card';

    const name = document.createElement('h2');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = formatRupees(product.pricePaise);

    card.append(name, price);

    const quantity = getQuantity(product.id);
    if (quantity === 0) {
      card.append(makeButton(product.id, 'add', 'Add'));
    } else {
      const count = document.createElement('span');
      count.textContent = String(quantity);

      const plus = makeButton(product.id, 'plus', '+', `Add one ${product.name}`);
      plus.disabled = quantity >= product.stockLimit;

      card.append(makeButton(product.id, 'minus', '−', `Remove one ${product.name}`), count, plus);
    }
    return card;
  });
  grid.replaceChildren(...cards);
}

grid.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLButtonElement)) return;
  const { id, action } = event.target.dataset;
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const quantity = getQuantity(product.id);
  if ((action === 'add' || action === 'plus') && quantity < product.stockLimit) {
    quantities.set(product.id, quantity + 1);
  } else if (action === 'minus' && quantity > 0) {
    quantities.set(product.id, quantity - 1);
  }
  render();
});

render();

import './style.css';
import { mustQuery } from './dom.ts';
import { formatRupees } from './money.ts';
import { products, type Product } from './products.ts';

const grid = mustQuery('#grid', HTMLElement);

function renderGrid(products: Product[]): void {
  const cards = products.map((product) => {
    const card = document.createElement('article');
    card.className = 'card';

    const name = document.createElement('h2');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = formatRupees(product.pricePaise);

    const add = document.createElement('button');
    add.type = 'button';
    add.textContent = 'Add';
    add.dataset.id = product.id;

    card.append(name, price, add);
    return card;
  });
  grid.replaceChildren(...cards);
}

renderGrid(products);

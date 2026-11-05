export type Product = {
  id: string;
  name: string;
  pricePaise: number;
  stockLimit: number;
};

export const products: Product[] = [
  { id: 'milk-500', name: 'Toned Milk 500 ml', pricePaise: 2900, stockLimit: 5 },
  { id: 'bread-400', name: 'Brown Bread 400 g', pricePaise: 4900, stockLimit: 3 },
  { id: 'eggs-6', name: 'Farm Eggs (6 pcs)', pricePaise: 5400, stockLimit: 4 },
  { id: 'banana-6', name: 'Banana (6 pcs)', pricePaise: 3900, stockLimit: 6 },
  { id: 'atta-5kg', name: 'Whole Wheat Atta 5 kg', pricePaise: 24900, stockLimit: 2 },
  { id: 'chips-50', name: 'Salted Potato Chips 50 g', pricePaise: 2000, stockLimit: 10 },
];

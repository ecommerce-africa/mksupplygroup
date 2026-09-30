import categoryJuices from '../assets/images/category-juices.jpg';
import categoryWater from '../assets/images/category-water.jpg';
import categorySoftDrinks from '../assets/images/category-soft-drinks.svg';
import mango250 from '../assets/images/pran-mango-250ml.webp';
import mango500 from '../assets/images/pran-mango-500ml.webp';
import mango1l from '../assets/images/pran-mango-1l.webp';
import waterSmall from '../assets/images/pran-water-small.webp';
import water2l from '../assets/images/pran-water-2l.webp';
import water5l from '../assets/images/pran-water-5l.webp';

// Categories shown in "Popular categories".
// comingSoon: true greys the card out. Later this can come from the API.
export const categories = [
  { id: 'juices', image: categoryJuices, anchor: '#juices', comingSoon: false },
  { id: 'water', image: categoryWater, anchor: '#water', comingSoon: false },
  { id: 'softDrinks', image: categorySoftDrinks, anchor: null, comingSoon: true },
];

// Product lines. Names and descriptions live in the translation files
// under products.<id>. Barcodes (EAN) from pranfoods.net.
export const productLines = [
  {
    id: 'juices',
    wellColor: 'citrus100',
    items: [
      { id: 'pran-mango-250', size: '250 ml', ean: '841165100385', image: mango250 },
      { id: 'pran-mango-500', size: '500 ml', ean: '841165100392', image: mango500 },
      { id: 'pran-mango-1l', size: '1 L', ean: '841165100408', image: mango1l },
    ],
  },
  {
    id: 'water',
    wellColor: 'surface200',
    items: [
      { id: 'pran-water-250', size: '250 ml', ean: '846656004043', image: waterSmall },
      { id: 'pran-water-500', size: '500 ml', ean: '846656000205', image: waterSmall },
      { id: 'pran-water-1l', size: '1 L', ean: '846656002162', image: waterSmall },
      { id: 'pran-water-2l', size: '2 L', ean: '846656001738', image: water2l },
      { id: 'pran-water-5l', size: '5 L', ean: '841165130245', image: water5l },
    ],
  },
];

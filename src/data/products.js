import categoryJuices from '../assets/images/category-juices.png';
import categoryWater from '../assets/images/category-water.png';
import categorySpecialty from '../assets/images/category-specialty-drinks.png';
import categorySoftDrinks from '../assets/images/category-soft-drinks.svg';
import mango250 from '../assets/images/pran-mango-250ml.webp';
import mango500 from '../assets/images/pran-mango-500ml.webp';
import mango1l from '../assets/images/pran-mango-1l.webp';
import waterSmall from '../assets/images/pran-water-small.png';
import water2l from '../assets/images/pran-water-2l.png';
import water5l from '../assets/images/pran-water-5l.png';
import drinkoStrawberry from '../assets/images/drinko-float-strawberry-250ml.webp';
import drinkoMango from '../assets/images/drinko-float-mango-250ml.webp';
import drinkoLitchi from '../assets/images/drinko-float-litchi-250ml.webp';
import drinkoPineapple from '../assets/images/drinko-float-pineapple-250ml.webp';
import aloeVera500 from '../assets/images/pran-aloe-vera-500ml.webp';

// Categories shown in "Popular categories".
// comingSoon: true greys the card out. Later this can come from the API.
export const categories = [
  { id: 'juices', image: categoryJuices, anchor: '#juices', comingSoon: false },
  { id: 'water', image: categoryWater, anchor: '#water', comingSoon: false },
  { id: 'specialty', image: categorySpecialty, anchor: '#specialty', comingSoon: false },
  { id: 'softDrinks', image: categorySoftDrinks, anchor: null, comingSoon: true },
];

// Product lines. Names and descriptions live in the translation files under products.<id>.
// Optional per item:
//   nameKey    → own product name from products.<id>.items.<nameKey> (else the line name)
//   featureKey → shows "Contains: …" from products.<id>.features.<featureKey> instead of the barcode
// Barcodes (EAN) from pranfoods.net.
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
  {
    id: 'specialty',
    wellColor: 'citrus100',
    items: [
      { id: 'drinko-float-strawberry-250', size: '250 ml', image: drinkoStrawberry, nameKey: 'drinkoStrawberry', featureKey: 'nataDeCoco' },
      { id: 'drinko-float-mango-250', size: '250 ml', image: drinkoMango, nameKey: 'drinkoMango', featureKey: 'nataDeCoco' },
      { id: 'drinko-float-litchi-250', size: '250 ml', image: drinkoLitchi, nameKey: 'drinkoLitchi', featureKey: 'nataDeCoco' },
      { id: 'drinko-float-pineapple-250', size: '250 ml', image: drinkoPineapple, nameKey: 'drinkoPineapple', featureKey: 'nataDeCoco' },
      { id: 'pran-aloe-vera-500', size: '500 ml', image: aloeVera500, nameKey: 'aloeVera', featureKey: 'aloeVera' },
    ],
  },
];
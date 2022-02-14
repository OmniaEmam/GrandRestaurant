import images from './images';

const wines = [
  {
    title: 'Strawberry Krazy',
    price: '$56',
    tags:  'Cup',
  },
  {
    title: 'Blueberry Delight',
    price: '$59',
    tags:  'Cup',
  },
  {
    title: 'The Grape Escape',
    price: '$44',
    tags:  'Bottle | 750 ml',
  },
  {
    title: 'Fresh Squeezed',
    price: '$31',
    tags:  'Bottle | 750 ml',
  },
  {
    title: 'Orange Nation',
    price: '$26',
    tags:  'Bottle | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Power Punch',
    price: '$20',
    tags: 'soda | 30 ml',
  },
  {
    title: "Juicy Jamboree",
    price: '$16',
    tags:  'soda | 50 ml',
  },
  {
    title: 'Grape Expectations Juice',
    price: '$10',
    tags:  'Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags:  'soda | Brown sugar',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags:  'soda | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };

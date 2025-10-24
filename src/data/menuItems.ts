import pizzaImg from '@/assets/pizza.jpg';
import burgerImg from '@/assets/burger.jpg';
import saladImg from '@/assets/salad.jpg';
import pastaImg from '@/assets/pasta.jpg';
import momosImg from '@/assets/momos.jpg';

import lavaCakeImg from '@/assets/lava-cake.jpg';
import tiramisuImg from '@/assets/tiramisu.jpg';
import cheesecakeImg from '@/assets/cheesecake.jpg';
import donutImg from '@/assets/donut.jpg';

import orangeJuiceImg from '@/assets/orange-juice.jpg';
import mangoSmoothieImg from '@/assets/mango-smoothie.jpg';
import berryJuiceImg from '@/assets/berry-juice.jpg';

import vanillaIcecreamImg from '@/assets/vanilla-icecream.jpg';
import chocolateIcecreamImg from '@/assets/chocolate-icecream.jpg';
import strawberryIcecreamImg from '@/assets/strawberry-icecream.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'dishes' | 'desserts' | 'drinks' | 'icecream';
}

export const menuItems: MenuItem[] = [
  // Dishes
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil',
    price: 199,
    image: pizzaImg,
    category: 'dishes',
  },
  {
    id: '2',
    name: 'Grilled Chicken Burger',
    description: 'Juicy grilled chicken patty with lettuce, tomato, and special sauce',
    price: 299,
    image: burgerImg,
    category: 'dishes',
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan, croutons, and Caesar dressing',
    price: 249,
    image: saladImg,
    category: 'dishes',
  },
  {
    id: '4',
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with bacon, eggs, and parmesan cheese',
    price: 399,
    image: pastaImg,
    category: 'dishes',
  },
  {
    id: '5',
    name: 'Tandoori Chicken Momos',
    description: 'Grilled to perfection, and served with smoky mint chutney for a flavorful.',
    price: 119,
    image: momosImg,
    category: 'dishes',
  },

  // Desserts
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center',
    price: 149,
    image: lavaCakeImg,
    category: 'desserts',
  },
  {
    id: '7',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 179,
    image: tiramisuImg,
    category: 'desserts',
  },
  {
    id: '8',
    name: 'Cheesecake',
    description: 'Creamy New York-style cheesecake with berry compote',
    price: 149,
    image: cheesecakeImg,
    category: 'desserts',
  },
  {
    id: '9',
    name: 'Donut',
    description: 'Glazed with sweet icing or topped with sprinkles for a delightful sugary treat.',
    price: 49,
    image: donutImg,
    category: 'desserts',
  },
  // Drinks
  {
    id: '10',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice packed with vitamin C',
    price: 49,
    image: orangeJuiceImg,
    category: 'drinks',
  },
  {
    id: '11',
    name: 'Mango Smoothie',
    description: 'Thick and creamy mango smoothie with a hint of mint',
    price: 79,
    image: mangoSmoothieImg,
    category: 'drinks',
  },
  {
    id: '12',
    name: 'Berry Blast',
    description: 'Mixed berry juice with strawberries, blueberries, and raspberries',
    price: 69,
    image: berryJuiceImg,
    category: 'drinks',
  },
  // Ice Cream
  {
    id: '13',
    name: 'Vanilla Dream',
    description: 'Premium vanilla ice cream made with real vanilla beans',
    price: 99,
    image: vanillaIcecreamImg,
    category: 'icecream',
  },
  {
    id: '14',
    name: 'Chocolate Fudge',
    description: 'Rich chocolate ice cream with fudge swirls',
    price: 149,
    image: chocolateIcecreamImg,
    category: 'icecream',
  },
  {
    id: '15',
    name: 'Strawberry Delight',
    description: 'Fresh strawberry ice cream with real fruit pieces',
    price: 139,
    image: strawberryIcecreamImg,
    category: 'icecream',
  },
];

import pizzaImg from '@/assets/pizza.jpg';
import burgerImg from '@/assets/burger.jpg';
import saladImg from '@/assets/salad.jpg';
import pastaImg from '@/assets/pasta.jpg';
import lavaCakeImg from '@/assets/lava-cake.jpg';
import tiramisuImg from '@/assets/tiramisu.jpg';
import cheesecakeImg from '@/assets/cheesecake.jpg';
import orangeJuiceImg from '@/assets/orange-juice.jpg';
import mangoSmoothieImg from '@/assets/mango-smoothie.jpg';
import berryJuiceImg from '@/assets/berry-juice.jpg';
import vanillaIcecreamImg from '@/assets/vanilla-icecream.jpg';
import chocolateIcecreamImg from '@/assets/chocolate-icecream.jpg';
import strawberryIcecreamImg from '@/assets/strawberry-icecream.jpg';

export const menuItems = [
  // Dishes
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil',
    price: 12.99,
    image: pizzaImg,
    category: 'dishes',
  },
  {
    id: '2',
    name: 'Grilled Chicken Burger',
    description: 'Juicy grilled chicken patty with lettuce, tomato, and special sauce',
    price: 9.99,
    image: burgerImg,
    category: 'dishes',
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan, croutons, and Caesar dressing',
    price: 7.99,
    image: saladImg,
    category: 'dishes',
  },
  {
    id: '4',
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with bacon, eggs, and parmesan cheese',
    price: 11.99,
    image: pastaImg,
    category: 'dishes',
  },
  // Desserts
  {
    id: '5',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center',
    price: 6.99,
    image: lavaCakeImg,
    category: 'desserts',
  },
  {
    id: '6',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 5.99,
    image: tiramisuImg,
    category: 'desserts',
  },
  {
    id: '7',
    name: 'Cheesecake',
    description: 'Creamy New York-style cheesecake with berry compote',
    price: 6.49,
    image: cheesecakeImg,
    category: 'desserts',
  },
  // Drinks
  {
    id: '8',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice packed with vitamin C',
    price: 4.99,
    image: orangeJuiceImg,
    category: 'drinks',
  },
  {
    id: '9',
    name: 'Mango Smoothie',
    description: 'Thick and creamy mango smoothie with a hint of mint',
    price: 5.49,
    image: mangoSmoothieImg,
    category: 'drinks',
  },
  {
    id: '10',
    name: 'Berry Blast',
    description: 'Mixed berry juice with strawberries, blueberries, and raspberries',
    price: 5.99,
    image: berryJuiceImg,
    category: 'drinks',
  },
  // Ice Cream
  {
    id: '11',
    name: 'Vanilla Dream',
    description: 'Premium vanilla ice cream made with real vanilla beans',
    price: 3.99,
    image: vanillaIcecreamImg,
    category: 'icecream',
  },
  {
    id: '12',
    name: 'Chocolate Fudge',
    description: 'Rich chocolate ice cream with fudge swirls',
    price: 4.49,
    image: chocolateIcecreamImg,
    category: 'icecream',
  },
  {
    id: '13',
    name: 'Strawberry Delight',
    description: 'Fresh strawberry ice cream with real fruit pieces',
    price: 4.29,
    image: strawberryIcecreamImg,
    category: 'icecream',
  },
];

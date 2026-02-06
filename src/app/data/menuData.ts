export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isVeg: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot';
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'all-day-breakfast',
    name: 'All Day Breakfast',
    icon: '🌅',
    items: [
      {
        id: 'egg-hopper',
        name: 'Egg Hopper',
        description: 'Traditional Sri Lankan crispy bowl-shaped pancake with egg',
        price: 'Rs. 150',
        isVeg: false,
        spiceLevel: 'mild',
      },
      {
        id: 'plain-hopper',
        name: 'Plain Hopper',
        description: 'Crispy rice flour pancake',
        price: 'Rs. 80',
        isVeg: true,
      },
      {
        id: 'cheese-omelette',
        name: 'Cheese Omelette',
        description: 'Fluffy omelette with local cheese',
        price: 'Rs. 280',
        isVeg: false,
        spiceLevel: 'mild',
      },
      {
        id: 'milk-rice',
        name: 'Milk Rice',
        description: 'Traditional Sri Lankan breakfast rice cooked in coconut milk',
        price: 'Rs. 200',
        isVeg: true,
      },
      {
        id: 'coconut-roti-plain',
        name: 'Coconut Roti (Plain)',
        description: 'Fresh coconut flatbread',
        price: 'Rs. 120',
        isVeg: true,
      },
      {
        id: 'english-breakfast',
        name: 'English Breakfast',
        description: 'Eggs, sausage, bacon, beans, toast',
        price: 'Rs. 650',
        isVeg: false,
      },
    ],
  },
  {
    id: 'hopper-varieties',
    name: 'Hopper Varieties',
    icon: '🥞',
    items: [
      {
        id: 'string-hopper',
        name: 'String Hoppers',
        description: 'Steamed rice noodle nests with curry',
        price: 'Rs. 180',
        isVeg: true,
      },
      {
        id: 'egg-hopper-special',
        name: 'Special Egg Hopper',
        description: 'Extra crispy with premium toppings',
        price: 'Rs. 200',
        isVeg: false,
        spiceLevel: 'mild',
      },
      {
        id: 'cheese-hopper',
        name: 'Cheese Hopper',
        description: 'Hopper topped with melted cheese',
        price: 'Rs. 220',
        isVeg: true,
      },
    ],
  },
  {
    id: 'kottu-hub',
    name: 'Kottu Hub',
    icon: '🍜',
    items: [
      {
        id: 'jungle-kottu',
        name: 'Jungle Kottu',
        description: 'Our signature wild spicy kottu with mixed vegetables',
        price: 'Rs. 450',
        isVeg: false,
        spiceLevel: 'hot',
        tags: ['signature'],
      },
      {
        id: 'thai-kottu',
        name: 'Thai Kottu',
        description: 'Fusion kottu with Thai flavors',
        price: 'Rs. 480',
        isVeg: false,
        spiceLevel: 'medium',
      },
      {
        id: 'go-wild-cheese-kottu',
        name: 'Go Wild Cheese Kottu',
        description: 'Loaded with cheese and special sauce',
        price: 'Rs. 550',
        isVeg: false,
        spiceLevel: 'medium',
        tags: ['signature', 'popular'],
      },
      {
        id: 'chicken-kottu',
        name: 'Chicken Kottu',
        description: 'Classic chicken kottu',
        price: 'Rs. 420',
        isVeg: false,
        spiceLevel: 'medium',
      },
      {
        id: 'veg-kottu',
        name: 'Vegetable Kottu',
        description: 'Fresh vegetable kottu',
        price: 'Rs. 350',
        isVeg: true,
        spiceLevel: 'mild',
      },
      {
        id: 'seafood-kottu',
        name: 'Seafood Kottu',
        description: 'Mixed seafood kottu',
        price: 'Rs. 580',
        isVeg: false,
        spiceLevel: 'medium',
      },
    ],
  },
  {
    id: 'burgers-sandwiches',
    name: 'Burgers & Sandwiches',
    icon: '🍔',
    items: [
      {
        id: 'coconut-roti-burger',
        name: 'Coconut Roti Burger',
        description: 'Unique burger wrapped in coconut roti',
        price: 'Rs. 480',
        isVeg: false,
        tags: ['signature'],
      },
      {
        id: 'wild-chicken-burger',
        name: 'Wild Chicken Burger',
        description: 'Grilled chicken with jungle sauce',
        price: 'Rs. 520',
        isVeg: false,
        spiceLevel: 'medium',
      },
      {
        id: 'veggie-burger',
        name: 'Veggie Burger',
        description: 'Fresh vegetable patty',
        price: 'Rs. 420',
        isVeg: true,
      },
      {
        id: 'club-sandwich',
        name: 'Club Sandwich',
        description: 'Triple-decker toast sandwich',
        price: 'Rs. 450',
        isVeg: false,
      },
      {
        id: 'grilled-cheese-sandwich',
        name: 'Grilled Cheese Sandwich',
        description: 'Classic comfort sandwich',
        price: 'Rs. 320',
        isVeg: true,
      },
    ],
  },
  {
    id: 'rice-curry',
    name: 'Rice & Curry',
    icon: '🍛',
    items: [
      {
        id: 'rice-curry-veg',
        name: 'Vegetable Rice & Curry',
        description: 'Traditional Sri Lankan rice with 4 vegetable curries',
        price: 'Rs. 380',
        isVeg: true,
        spiceLevel: 'medium',
      },
      {
        id: 'rice-curry-chicken',
        name: 'Chicken Rice & Curry',
        description: 'Rice with chicken curry and sides',
        price: 'Rs. 480',
        isVeg: false,
        spiceLevel: 'medium',
      },
      {
        id: 'rice-curry-fish',
        name: 'Fish Rice & Curry',
        description: 'Rice with fish curry and sides',
        price: 'Rs. 520',
        isVeg: false,
        spiceLevel: 'medium',
      },
      {
        id: 'milk-rice-curry',
        name: 'Milk Rice with Curry',
        description: 'Milk rice served with lunu miris and fish curry',
        price: 'Rs. 350',
        isVeg: false,
        spiceLevel: 'hot',
      },
    ],
  },
  {
    id: 'roti-pancakes',
    name: 'Coconut Roti & Pancakes',
    icon: '🥐',
    items: [
      {
        id: 'coconut-roti-egg',
        name: 'Coconut Roti with Egg',
        description: 'Fresh coconut roti with egg curry',
        price: 'Rs. 180',
        isVeg: false,
        spiceLevel: 'mild',
      },
      {
        id: 'coconut-roti-dhal',
        name: 'Coconut Roti with Dhal',
        description: 'Roti with creamy lentil curry',
        price: 'Rs. 160',
        isVeg: true,
        spiceLevel: 'mild',
      },
      {
        id: 'sweet-pancakes',
        name: 'Sweet Pancakes',
        description: 'Fluffy pancakes with syrup and butter',
        price: 'Rs. 320',
        isVeg: true,
      },
      {
        id: 'banana-pancakes',
        name: 'Banana Pancakes',
        description: 'Pancakes with fresh banana and honey',
        price: 'Rs. 380',
        isVeg: true,
        tags: ['popular'],
      },
    ],
  },
  {
    id: 'fried-rice',
    name: 'Wild House Fried Rice',
    icon: '🍚',
    items: [
      {
        id: 'wild-special-fried-rice',
        name: 'Wild Special Fried Rice',
        description: 'Our signature fried rice with mixed proteins',
        price: 'Rs. 580',
        isVeg: false,
        spiceLevel: 'medium',
        tags: ['signature'],
      },
      {
        id: 'chicken-fried-rice',
        name: 'Chicken Fried Rice',
        description: 'Classic chicken fried rice',
        price: 'Rs. 450',
        isVeg: false,
        spiceLevel: 'mild',
      },
      {
        id: 'seafood-fried-rice',
        name: 'Seafood Fried Rice',
        description: 'Mixed seafood fried rice',
        price: 'Rs. 620',
        isVeg: false,
        spiceLevel: 'mild',
      },
      {
        id: 'veg-fried-rice',
        name: 'Vegetable Fried Rice',
        description: 'Fresh vegetable fried rice',
        price: 'Rs. 380',
        isVeg: true,
        spiceLevel: 'mild',
      },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    icon: '🍝',
    items: [
      {
        id: 'grandma-pasta',
        name: 'SL Grandma\'s Pasta',
        description: 'Traditional Sri Lankan fusion pasta recipe',
        price: 'Rs. 480',
        isVeg: false,
        spiceLevel: 'mild',
        tags: ['signature'],
      },
      {
        id: 'carbonara',
        name: 'Creamy Carbonara',
        description: 'Classic carbonara with local twist',
        price: 'Rs. 520',
        isVeg: false,
      },
      {
        id: 'arrabiata',
        name: 'Spicy Arrabiata',
        description: 'Tomato-based spicy pasta',
        price: 'Rs. 450',
        isVeg: true,
        spiceLevel: 'hot',
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: '🍹',
    items: [
      {
        id: 'fresh-lime',
        name: 'Fresh Lime Juice',
        description: 'Refreshing lime soda',
        price: 'Rs. 180',
        isVeg: true,
      },
      {
        id: 'king-coconut',
        name: 'King Coconut',
        description: 'Fresh king coconut water',
        price: 'Rs. 150',
        isVeg: true,
        tags: ['popular'],
      },
      {
        id: 'mango-juice',
        name: 'Fresh Mango Juice',
        description: 'Seasonal fresh mango juice',
        price: 'Rs. 250',
        isVeg: true,
      },
      {
        id: 'coffee',
        name: 'Ceylon Coffee',
        description: 'Local brew coffee',
        price: 'Rs. 200',
        isVeg: true,
      },
      {
        id: 'ceylon-tea',
        name: 'Ceylon Tea',
        description: 'Premium Ceylon black tea',
        price: 'Rs. 150',
        isVeg: true,
      },
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        description: 'Cold brew coffee',
        price: 'Rs. 280',
        isVeg: true,
      },
      {
        id: 'smoothie',
        name: 'Tropical Smoothie',
        description: 'Mixed tropical fruit smoothie',
        price: 'Rs. 350',
        isVeg: true,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Dessert & Smoothie Bowls',
    icon: '🍨',
    items: [
      {
        id: 'curd-treacle',
        name: 'Curd & Treacle',
        description: 'Traditional buffalo curd with palm treacle',
        price: 'Rs. 280',
        isVeg: true,
        tags: ['signature'],
      },
      {
        id: 'watalappan',
        name: 'Watalappan',
        description: 'Coconut custard pudding with jaggery',
        price: 'Rs. 320',
        isVeg: true,
      },
      {
        id: 'smoothie-bowl',
        name: 'Tropical Smoothie Bowl',
        description: 'Acai base with fresh fruits and granola',
        price: 'Rs. 480',
        isVeg: true,
        tags: ['popular'],
      },
      {
        id: 'fruit-platter',
        name: 'Fresh Fruit Platter',
        description: 'Seasonal tropical fruits',
        price: 'Rs. 420',
        isVeg: true,
      },
    ],
  },
];

export const signaturePicks: MenuItem[] = [
  menuData[2].items[0], // Jungle Kottu
  menuData[2].items[2], // Go Wild Cheese Kottu
  menuData[3].items[0], // Coconut Roti Burger
  menuData[6].items[0], // Wild Special Fried Rice
  menuData[7].items[0], // SL Grandma's Pasta
  menuData[9].items[0], // Curd & Treacle
];

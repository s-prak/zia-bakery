import { IoArrowForward } from 'react-icons/io5'
import { SectionTitle } from '../Elements/SectionTitle'
import { CardMenu } from '../Fragments/CardMenu'
import { CartSection } from './CartSection'
import { useState } from 'react'

let menus = [
  {
    id: 1,
    name: 'Rich Plum Cake',
    image: '/images/menu/matcha.jpg',
    stars: 4.4,
    description: `A luxurious blend of premium dry fruits and nuts, soaked in rich rum, creating a moist and flavorful cake that's perfect for celebrations.`,
    price: 1750,
  },
  {
    id: 2,
    name: 'Banana Cake',
    image: '/images/menu/nutella.jpg',
    stars: 4.5,
    description: `Moist and fluffy cake made with ripe bananas, offering a perfect balance of sweetness and natural banana flavor. A classic favorite!`,
    price: 900,
  },
  {
    id: 3,
    name: 'Carrot Dates Cake',
    image: '/images/menu/oreo.jpg',
    stars: 4.4,
    description: `A healthy twist on the classic carrot cake, enriched with sweet dates and topped with a light cream cheese frosting.`,
    price: 1500,
  },
  {
    id: 4,
    name: 'Plum Cake',
    image: '/images/menu/strawberry.jpg',
    stars: 4.6,
    description: `Our traditional plum cake features a rich mix of candied fruits and nuts, baked to perfection with a hint of warm spices.`,
    price: 1500
  },
  {
    id: 5,
    name: 'Carrot Cake',
    image: '/images/menu/tiramisu.jpg',
    stars: 4.7,
    description: `Classic carrot cake with a perfect blend of spices, topped with our signature cream cheese frosting. Moist, flavorful, and utterly delicious.`,
    price: 1100
  },
  {
    id: 6,
    name: 'Banana Walnut Cake',
    image: '/images/menu/soon.png',
    stars: '???',
    description: `A delightful combination of ripe bananas and crunchy walnuts, creating a rich and satisfying cake that's perfect for any occasion.`,
    price: 1400
  }
];

export let MenuSection = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menu) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === menu.id);
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((item) =>
          item.id === menu.id
            ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + menu.price }
            : item
        );
      }
      // Add new item to the cart
      return [...prevItems, { ...menu, quantity: 1, totalPrice: menu.price }];
    });
  };

  return (
    <section id='menu' className='px-5 pt-24 whitespace-nowrap lg:px-20'>
      <div className='flex items-center justify-between'>
        <SectionTitle>Our Menu</SectionTitle>
        <a href='#menu' className='self-start font-semibold pt-1 flex items-center gap-2 group'>
          All Menu
          <IoArrowForward className='h-5 w-5 group-hover:translate-x-1 transition-all' />
        </a>
      </div>

      <div className='flex gap-3 overflow-x-scroll snap-x snap-mandatory pb-1 lg:gap-5 lg:px-0.5 lg:grid lg:grid-cols-3'>
        {menus.map((menu) => (
          <CardMenu key={menu.id}>
            <CardMenu.Header image={menu.image} stars={menu.stars} />
            <CardMenu.Body name={menu.name}>{menu.description}</CardMenu.Body>
            <CardMenu.Footer
              price={`Rs. ${menu.price}/- Kg`}
              onOrderClick={() => addToCart(menu)}
            />
          </CardMenu>
        ))}
      </div>

      {/* Add Cart Section */}
      <CartSection cartItems={cartItems} />
    </section>
  );
};

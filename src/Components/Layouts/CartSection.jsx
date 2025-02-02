//import React from 'react';

export const CartSection = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // Create the order summary message
  const orderSummary = cartItems.map((item) => {
    return `${item.name} - ${item.quantity} x Rs. ${item.price}/- = Rs. ${item.totalPrice}/-`;
  }).join("\n");
  const orderMessage = `Hello, I would like to place an order:\n\n${orderSummary}\n\nTotal Cost: Rs. ${total}/-\n\nThank you!`;

  // Encode the message
  const encodedMessage = encodeURIComponent(orderMessage);

  // WhatsApp number (use a valid number here)
  const whatsappNumber = "8497972737"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className='mt-10 p-5 border rounded-xl shadow-lg'>
      <h2 className='text-lg font-bold mb-3'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className='space-y-3'>
            {cartItems.map((item) => (
              <li key={item.id} className='flex justify-between'>
                <div>
                  <p className='font-semibold'>{item.name}</p>
                  <p className='text-sm text-gray-500'>
                    {item.quantity} x Rs. {item.price}/-
                  </p>
                </div>
                <p className='font-bold'>Rs. {item.totalPrice}/-</p>
              </li>
            ))}
          </ul>
          <div className='mt-5 font-bold text-lg'>Total: Rs. {total}/-</div>
          {/* Order Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-5 inline-block px-6 py-3 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition duration-200"
          >
            Order Now
          </a>
        </>
      )}
    </div>
  );
};

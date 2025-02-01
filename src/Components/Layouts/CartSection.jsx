export const CartSection = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  
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
          </>
        )}
      </div>
    );
  };
  
// src/pages/CartPage.tsx
import React from "react";

function CartPage() {
  const cartItems = [
    { _id: "1", name: "Item One", price: 19.99, quantity: 2 },
    { _id: "2", name: "Item Two", price: 29.99, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div>
              {item.name} (x{item.quantity})
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xl font-semibold">Subtotal: ${subtotal.toFixed(2)}</div>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;

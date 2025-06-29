import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-ivory-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-charcoal-300 mx-auto mb-8" />
            <h1 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-charcoal-600 mb-8">
              Looks like you haven't added any delicious items to your cart yet.
            </p>
            <Link
              to="/menu"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-maroon-500 to-maroon-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-ivory-50 mb-4">
            Your Order
          </h1>
          <p className="text-ivory-200">
            Review your selected items before placing your order
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {state.items.map((item) => (
              <div key={item.id} className="p-6 flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-charcoal-800">
                    {item.name}
                  </h3>
                  <p className="text-charcoal-600 text-sm mt-1">
                    ₹{item.price} each
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <span className="w-8 text-center font-semibold">
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-lg text-charcoal-800">
                    ₹{(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors mt-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="bg-gray-50 p-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-charcoal-800">
                Subtotal ({state.totalItems} items)
              </span>
              <span className="text-2xl font-bold text-gold-500">
                ₹{state.totalAmount}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="flex-1 border border-gold-500 text-gold-500 hover:bg-gold-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Continue Shopping
              </Link>
              <button className="flex-1 bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
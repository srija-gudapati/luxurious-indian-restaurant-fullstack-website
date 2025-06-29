import React, { useState } from 'react';
import { Plus, Filter, Leaf, Flame } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { dispatch } = useCart();

  const categories = [
    { id: 'all', name: 'All Items', count: menuItems.length },
    { id: 'starters', name: 'Starters', count: menuItems.filter(item => item.category === 'starters').length },
    { id: 'meals', name: 'Main Courses', count: menuItems.filter(item => item.category === 'meals').length },
    { id: 'desserts', name: 'Desserts', count: menuItems.filter(item => item.category === 'desserts').length },
    { id: 'breads', name: 'Breads', count: menuItems.filter(item => item.category === 'breads').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="min-h-screen bg-ivory-50 pt-20">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-500 to-maroon-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory-50 mb-4">
            Our Royal Menu
          </h1>
          <p className="text-xl text-ivory-200 max-w-2xl mx-auto">
            Discover authentic Indian flavors crafted with the finest ingredients and traditional recipes
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-5 w-5 text-gold-500 mr-2" />
            <span className="text-charcoal-700 font-medium">Filter by Category</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gold-500 text-white shadow-lg'
                    : 'bg-white text-charcoal-600 border border-gold-200 hover:border-gold-500'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {item.isVegetarian && (
                    <div className="bg-emerald-500 text-white p-1 rounded-full">
                      <Leaf className="h-4 w-4" />
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-red-500 text-white p-1 rounded-full">
                      <Flame className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold-500">
                    ₹{item.price}
                  </span>
                </div>
                
                <p className="text-charcoal-600 text-sm mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal-600 text-lg">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
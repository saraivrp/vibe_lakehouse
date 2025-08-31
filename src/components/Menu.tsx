import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuCategories = {
    starters: {
      title: 'Starters',
      image: '/photos/spinachsalad.jpeg',
      items: [
        {
          name: 'Parmesan Deviled Eggs',
          price: '$9',
          description: 'Made with organic eggs, fresh Parmesan, and chopped pine nuts.',
          dietary: ['vegetarian']
        },
        {
          name: 'Artichokes with Garlic Aioli',
          price: '$9',
          description: 'Brushed with olive oil and rosemary blend, broiled to perfection. Served with creamy garlic aioli.',
          dietary: ['vegetarian', 'gluttenfree']
        },
        {
          name: 'French Onion Soup',
          price: '$8',
          description: 'Caramelized onions slow cooked in savory broth, topped with sourdough and provolone cheese blend.',
          dietary: ['vegetarian']
        },
        {
          name: 'Mini Cheeseburgers',
          price: '$10',
          description: 'Served on fresh baked pretzel buns with lettuce, tomato, avocado, and your choice of cheese.'
        },
        {
          name: 'Panko Stuffed Mushrooms',
          price: '$9',
          description: 'Large mushroom caps filled with savory cream cheese, bacon and panko breadcrumb stuffing, topped with cheddar.',
          dietary: ['gluttenfree']
        }
      ]
    },
    salads: {
      title: 'Salads',
      image: '/photos/saladsquash.jpeg',
      items: [
        {
          name: 'Garden Select',
          price: '$10',
          description: 'Choose from our fresh local, organically grown ingredients to make a custom salad.',
          dietary: ['vegetarian', 'vegan', 'organic']
        },
        {
          name: 'House Salad',
          price: '$7',
          description: 'Romaine lettuce and spinach, topped with tomatoes, cucumbers, red onions and carrots.',
          dietary: ['vegetarian', 'vegan']
        },
        {
          name: "Chef's Salad",
          price: '$12',
          description: 'Cucumber, tomatoes, red onions, mushrooms, hard-boiled eggs, cheese, and hot grilled chicken on romaine lettuce.'
        },
        {
          name: 'Quinoa Salmon Salad',
          price: '$14',
          description: 'Quinoa, tomatoes, cucumber, scallions, and smoked salmon with your choice of dressing.',
          dietary: ['gluttenfree']
        }
      ]
    },
    entrees: {
      title: 'Entrées',
      image: '/photos/fishplate.jpeg',
      items: [
        {
          name: 'Classic Burger',
          price: '$12',
          description: '100% pure angus beef with lettuce, tomatoes, onions, pickles, and cheese. Served with fries, fruit, or salad.'
        },
        {
          name: 'Tomato Bruschetta Tortellini',
          price: '$14',
          description: 'Classic cheese tortellini in sundried tomato sauce. Served with bruschetta topped with tomato basil marinara.',
          dietary: ['vegetarian']
        },
        {
          name: 'Handcrafted Pizza',
          price: '$12',
          description: 'Thin crust pizzas made fresh daily with your choice of meats, veggies, cheese, and sauce. Includes two toppings.'
        },
        {
          name: 'Barbecued Tofu Skewers',
          price: '$12',
          description: 'Tofu, cherry tomatoes, bell peppers, and zucchini marinated in ginger sesame sauce. Served with steamed rice.',
          dietary: ['vegan', 'vegetarian']
        },
        {
          name: 'Fiesta Family Platter',
          price: '$20',
          description: 'Perfect for sharing! Spicy buffalo wings, traditional nachos, and cheese quesadillas with fresh guacamole.'
        }
      ]
    },
    desserts: {
      title: 'Desserts',
      image: '/photos/croissant.jpeg',
      items: [
        {
          name: 'Crème Brûlée',
          price: '$9',
          description: 'Creamy vanilla custard with caramelized crunchy layer. Served with seasonal fruit.',
          dietary: ['vegetarian', 'gluttenfree']
        },
        {
          name: 'Cheesecake',
          price: '$9',
          description: 'Rich, smooth, and creamy New York Style. Available in various flavors with seasonal fruit toppings.',
          dietary: ['vegetarian']
        },
        {
          name: 'Chocolate Chip Brownie',
          price: '$8',
          description: 'Warm brownie served with chocolate or vanilla ice cream and rich chocolate sauce.',
          dietary: ['vegetarian']
        },
        {
          name: 'Apple Pie',
          price: '$7',
          description: 'Made with local granny smith apples for the freshest classic apple pie.',
          dietary: ['vegetarian']
        },
        {
          name: 'Mixed Berry Tart',
          price: '$8',
          description: 'Raspberries, blueberries, and strawberries on creamy filling in a crispy tart.',
          dietary: ['vegetarian']
        }
      ]
    }
  };

  const getDietaryIcon = (dietary: string) => {
    const iconMap: { [key: string]: string } = {
      vegetarian: '/artwork/icon-vegetarian.svg',
      vegan: '/artwork/icon-vegan.svg',
      gluttenfree: '/artwork/icon-gluttenfree.svg',
      organic: '/artwork/icon-organic.svg',
      paleo: '/artwork/icon-paleo.svg',
      dairyfree: '/artwork/icon-dairyfree.svg'
    };
    return iconMap[dietary];
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative selections crafted by our founding chefs, featuring locally sourced ingredients 
            and fine dining without the conventional stiffness.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 font-semibold text-lg transition-all duration-300 border-b-2 ${
                activeCategory === key
                  ? 'text-amber-600 border-amber-600'
                  : 'text-gray-600 border-transparent hover:text-amber-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Menu Items */}
          <div className="space-y-6">
            {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                {item.dietary && (
                  <div className="flex space-x-2">
                    {item.dietary.map((diet, dietIndex) => (
                      <img
                        key={dietIndex}
                        src={getDietaryIcon(diet)}
                        alt={diet}
                        className="w-6 h-6 opacity-70"
                        title={diet.charAt(0).toUpperCase() + diet.slice(1)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Category Image */}
          <div className="relative">
            <img
              src={menuCategories[activeCategory as keyof typeof menuCategories].image}
              alt={menuCategories[activeCategory as keyof typeof menuCategories].title}
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div 
              className="absolute inset-0 opacity-5 rounded-lg"
              style={{
                backgroundImage: `url('/artwork/pattern-utensils.svg')`,
                backgroundSize: '80px',
                backgroundRepeat: 'repeat'
              }}
            />
          </div>
        </div>

        {/* Special Note */}
        <div className="mt-16 text-center bg-amber-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Weekly Specials & Seasonal Menus</h3>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We offer weekly specials featuring seasonal ingredients sourced from local organic farmers. 
            Our chefs craft new and exciting dishes that balance bold flavors with sustainability, 
            providing a unique dining experience for every visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
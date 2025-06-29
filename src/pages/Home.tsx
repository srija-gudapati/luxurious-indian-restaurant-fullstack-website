import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, ChefHat } from 'lucide-react';
import { reviews } from '../data/reviewsData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory-50 mb-6 animate-fade-in">
            Welcome to
            <span className="block text-gold-500 mt-2">Maharaja Palace</span>
          </h1>
          <p className="text-xl sm:text-2xl text-ivory-200 mb-8 leading-relaxed animate-slide-up">
            Experience the royal flavors of authentic Indian cuisine in an atmosphere 
            of elegance and tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/menu"
              className="bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/reservations"
              className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-800 mb-4">
              Why Choose Maharaja Palace?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              We combine authentic Indian flavors with contemporary elegance to create 
              an unforgettable dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ChefHat,
                title: 'Master Chefs',
                description: 'Our experienced chefs bring generations of culinary expertise'
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized for excellence in authentic Indian cuisine'
              },
              {
                icon: Users,
                title: 'Fine Dining',
                description: 'Elegant atmosphere perfect for special occasions'
              },
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Only the finest ingredients and traditional spices'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 text-white rounded-full mb-4 group-hover:bg-gold-600 transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-ivory-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-charcoal-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? 'fill-current' : 'stroke-current'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-ivory-200 mb-4 italic">
                  "{review.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-ivory-50 font-semibold">{review.name}</p>
                    <p className="text-ivory-300 text-sm">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-maroon-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-50 mb-4">
            Ready for a Royal Dining Experience?
          </h2>
          <p className="text-xl text-ivory-200 mb-8">
            Book your table today and embark on a culinary journey through India
          </p>
          <Link
            to="/reservations"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Make Your Reservation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Gabriel Souza',
      text: 'This is my favorite local restaurant in the area. The owners are personable, the space is amazing, and the food is delicious. I love to take advantage of the outdoor tables on warm nights. Their waitress, Tracy, is always super friendly and makes us feel right at home.',
      rating: 5
    },
    {
      name: 'Philip Ransu',
      text: 'We brought my grandma here to celebrate her 60th birthday and it was a fantastic experience. I am a huge fan of their handmade pizzas, and my grandma loved their pasta. The desserts are great too! Thanks for making her celebration one we won\'t forget.',
      rating: 5
    },
    {
      name: 'Julie Parker',
      text: 'This place has, without a doubt, some of the best pizza I have ever had! The owners are hands on and made sure we had everything we needed. They are an eclectic eatery, with a large variety of meals to choose from, but everything I\'ve tried from their menu has been great. Oh, and their crème brûlée is amazing!',
      rating: 5
    },
    {
      name: 'Sophie Dupont',
      text: 'What a great restaurant! This place is nice and intimate and was perfect for our small get together with about 10 friends. I love their farm to table concept, and that the food is organic. The staff are friendly, the food is excellent, and the ambience was perfect. We can\'t wait to come back!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/artwork/pattern-waves.svg')`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued customers about their memorable experiences at The Lakehouse
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-amber-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">Valued Guest</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
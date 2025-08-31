import React from 'react';
import { Calendar, Users, Music, Utensils } from 'lucide-react';

const Events = () => {
  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Custom Menu Planning',
      description: 'Our chefs will work with you to develop a tailored menu that reflects your group\'s tastes, dietary needs, and the theme of your event.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Full-Service Catering',
      description: 'We offer complete event catering at our restaurant or your chosen venue, from setup to cleanup, ensuring your event runs smoothly.'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Entertainment Arrangements',
      description: 'Need live music or a DJ? We can coordinate entertainment to match the mood of your event.'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Coordination',
      description: 'We handle the logistics so you can focus on enjoying your gathering. From seating arrangements to décor, we\'ve got it covered.'
    }
  ];

  const eventTypes = [
    'Corporate Events & Business Meetings',
    'Weddings & Rehearsal Dinners',
    'Family Celebrations',
    'Holiday Parties',
    'Special Occasions'
  ];

  return (
    <section id="events" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/artwork/pattern-utensils.svg')`,
          backgroundSize: '120px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Group Dining & Special Events</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At The Lakehouse Restaurant, we specialize in creating a dining experience that goes beyond the plate. 
            Our space is perfect for hosting groups—whether you're celebrating with friends, family, or colleagues.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">What We Offer</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-amber-600 mb-3">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="/photos/chefsandwich.jpeg" 
              alt="Event catering" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Perfect For</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg text-center">
                <p className="font-medium">{type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're hosting a corporate event or celebrating a personal milestone, our team is here to ensure 
            that your event is memorable, seamless, and exactly what you envision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Plan Your Event
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download Event Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
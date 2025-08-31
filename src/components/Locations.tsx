import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      city: 'Portland',
      state: 'Maine',
      hours: 'Open daily 3:00 – 10:30',
      description: 'Our flagship location in the historic Old Port neighborhood, close to downtown, shopping, and nightlife.'
    },
    {
      city: 'Asheville',
      state: 'North Carolina',
      hours: 'Open Tuesday – Sunday 3:30 – 10:00',
      description: 'Nestled in the heart of the Blue Ridge Mountains, offering mountain-inspired cuisine.'
    },
    {
      city: 'Boulder',
      state: 'Colorado',
      hours: 'Open daily 3:00 – 10:30',
      description: 'Located near the Flatirons, serving fresh, locally-sourced mountain fare.'
    },
    {
      city: 'Nashville',
      state: 'Tennessee',
      hours: 'Open daily 3:00 – 10:30',
      description: 'In the heart of Music City, where great food meets Southern hospitality.'
    },
    {
      city: 'Charleston',
      state: 'South Carolina',
      hours: 'Open Tuesday – Sunday 3:30 – 10:00',
      description: 'Historic charm meets modern cuisine in the Holy City.'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us in five beautiful cities across the United States, each offering the same 
            exceptional dining experience with local flair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {location.city}, {location.state}
                  </h3>
                </div>
                
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-gray-500 mr-2" />
                  <p className="text-gray-700 font-medium">{location.hours}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{location.description}</p>
                
                <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300">
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Customers</h3>
            <p className="text-gray-700 leading-relaxed">
              Our restaurant patrons are individuals and groups who want great food to enhance their overall experience. 
              Our customers are largely educated, middle-class to affluent couples who are interested in much more than 
              fast food or dining while looking at their phone. We provide the space and sustenance to literally and 
              figuratively feed their spirits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
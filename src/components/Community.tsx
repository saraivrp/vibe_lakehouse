import React from 'react';
import { Heart, HandHeart, Users } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Engagement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At The Lakehouse Restaurant, we believe in the power of giving back and are deeply committed 
            to supporting the communities we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-amber-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fundraising & Contributions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Each year, The Lakehouse partners with local organizations and hosts special events to raise funds 
                    for causes that matter most to our community. From benefit dinners supporting local schools to 
                    charity auctions for health and wellness programs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <HandHeart className="w-8 h-8 text-amber-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Volunteering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our team members regularly volunteer their time and expertise to support local causes. 
                    Whether it's cooking meals for families in need, participating in community clean-up events, 
                    or supporting local food drives.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="w-8 h-8 text-amber-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Community Partnership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are always seeking new ways to contribute and collaborate. If you have a cause or event 
                    in need of support, we'd love to hear from you. By working together, we can keep strengthening 
                    and enriching our communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/photos/oldercouple.jpeg" 
              alt="Community dining" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div 
              className="absolute inset-0 opacity-5 rounded-lg"
              style={{
                backgroundImage: `url('/artwork/pattern-waves.svg')`,
                backgroundSize: '100px',
                backgroundRepeat: 'repeat'
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Involved</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join us in making a difference in our community. Whether you're interested in partnering with us 
            for a fundraising event or have ideas for community initiatives, we'd love to connect.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Contact Us About Community Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
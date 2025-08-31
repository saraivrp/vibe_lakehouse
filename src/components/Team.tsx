import React from 'react';
import { ChefHat, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Tariq Nader',
      role: 'Owner and Executive Chef',
      image: '/photos/industrialchefcutting.jpeg',
      description: 'Brings a passion for fresh, local ingredients and a creative approach to modern cuisine. With experience gained in top kitchens around the world, Tariq\'s vision is to offer fine dining in a relaxed, welcoming atmosphere.'
    },
    {
      name: 'Diana Long',
      role: 'General Manager',
      image: '/photos/cookiechefs.jpeg',
      description: 'Dedicated to ensuring every guest has an exceptional experience. With a background in hospitality management, Diana excels at creating a warm, inviting atmosphere while overseeing daily operations with a focus on excellence.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate professionals behind The Lakehouse Restaurant experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url('/artwork/pattern-utensils.svg')`,
                    backgroundSize: '60px',
                    backgroundRepeat: 'repeat'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <ChefHat className="w-6 h-6 text-amber-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                </div>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Careers Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We believe that exceptional dining experiences are crafted by extraordinary people. 
              We offer dynamic career paths for passionate professionals who thrive in a culture of excellence, innovation, and teamwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-600">Why Work With Us?</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Commitment to Excellence</li>
                <li>• Career Growth Opportunities</li>
                <li>• Sustainability & Social Responsibility</li>
                <li>• Competitive Compensation & Benefits</li>
                <li>• Flexible Schedules</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-600">Available Positions</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Executive and Sous Chefs</li>
                <li>• Line and Prep Cooks</li>
                <li>• Pastry Chefs</li>
                <li>• Servers</li>
                <li>• Hosts and Hostesses</li>
                <li>• Management Roles</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="mailto:careers@lakehousefood.com"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
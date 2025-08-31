import React from 'react';

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/artwork/pattern-waves.svg')`,
          backgroundSize: '150px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">The Experience</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At The Lakehouse Restaurant, dining is more than just a meal—it's about creating lasting memories. 
              From the moment you walk through our doors, you're welcomed into an inviting space that blends 
              industrial minimalism with touches of rustic elegance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Whether you're celebrating a milestone, enjoying a night out with friends, or sharing an intimate dinner, 
              every moment at The Lakehouse is crafted to be special. Our thoughtfully curated menu serves as the 
              foundation for your dining experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At The Lakehouse, we believe in fostering connections—whether between loved ones, colleagues, 
              or new friends over a shared meal. Each visit is a chance to relax, savor, and create memories 
              that last long after the plates are cleared.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/photos/oldercouple.jpeg" 
              alt="Couple dining" 
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="/photos/chefsandwich.jpeg" 
              alt="Gourmet sandwich" 
              className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
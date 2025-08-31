import React from 'react';

const About = () => {
  const values = [
    {
      letter: 'B',
      title: 'Balance',
      description: 'We endeavor to maintain a balance in all that we do and create, offering complementary flavors and supporting work-life balance.'
    },
    {
      letter: 'R',
      title: 'Responsible',
      description: 'We take ownership of our actions and the quality of our cuisine, striving to supply top-quality sustenance and service.'
    },
    {
      letter: 'A',
      title: 'Altruistic',
      description: 'We are selflessly committed to supporting our internal and external community.'
    },
    {
      letter: 'V',
      title: 'Versatile',
      description: 'We remain open-minded, listening to our customers and community, adapting as necessary.'
    },
    {
      letter: 'E',
      title: 'Ethical',
      description: 'Honesty and transparency are key to our relationships and business success.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Lakehouse Restaurant offers a memorable menu with selections innovated by our founding owner/chefs. 
              Our atmosphere is a balance of functional minimalist industrial with pops of rustic elegant touches.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This results in an open, welcoming space that seamlessly supports the tastes and comfort of our patrons 
              while serving as a purposeful, efficient workspace for our employees.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our food options are reminiscent of fine dining without the conventional stiffness, and where possible, 
              we source from area organic farmers and socially responsible enterprises.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/photos/cookiechefs.jpeg" 
              alt="Our chefs at work" 
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div 
              className="absolute inset-0 opacity-5 rounded-lg"
              style={{
                backgroundImage: `url('/artwork/pattern-utensils.svg')`,
                backgroundSize: '100px',
                backgroundRepeat: 'repeat'
              }}
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission at The Lakehouse Restaurant is to provide our customers with a memorable and remarkable 
              dining experience that supports and reflects their creativity and individuality.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We strive to continually improve our presence within and support of our community. 
              We hope to be an integral part of what defines our community culture.
            </p>
          </div>
        </div>

        {/* BRAVE Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values: BRAVE</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bravery is a virtue we wish to embody in every aspect of our daily business. 
            We challenge convention with common sense and mindful courageousness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {value.letter}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
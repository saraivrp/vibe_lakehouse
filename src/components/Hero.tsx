import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/photos/industrialchefcutting.jpeg')`
        }}
      />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/artwork/pattern-waves.svg')`,
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <img 
          src="/artwork/logo-stacked.svg" 
          alt="The Lakehouse Restaurant" 
          className="h-32 w-auto mx-auto mb-8 filter brightness-0 invert"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          The Lakehouse
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          A memorable dining experience where fine cuisine meets rustic elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Menu
          </a>
          <a 
            href="#events" 
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Book Event
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
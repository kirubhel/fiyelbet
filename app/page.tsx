'use client'

import Logo from '@/components/Logo'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-straw via-beige to-straw">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo size={80} className="transition-all duration-500" />
            <h1 className="text-brand text-4xl md:text-5xl text-charcoal text-stamped">
              Fiyel Bet
            </h1>
          </div>
          <div className="hidden md:flex gap-6 text-lg font-bold">
            <a href="#menu" className="hover:text-flame-orange transition-colors">Menu</a>
            <a href="#about" className="hover:text-flame-orange transition-colors">About</a>
            <a href="#contact" className="hover:text-flame-orange transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`flex-1 space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-brand text-5xl md:text-7xl text-charcoal text-stamped leading-tight">
              ፍየል ቤት
            </h2>
            <h3 className="text-brand text-4xl md:text-6xl text-terracotta text-stamped">
              GOAT HOUSE
            </h3>
            <p className="text-xl md:text-2xl text-charcoal-light font-semibold max-w-2xl">
              Sizzling. Fresh. Authentic.
            </p>
            <p className="text-lg md:text-xl text-charcoal-light max-w-2xl leading-relaxed">
              Experience the heat of the Midija (charcoal grill) as we serve you the finest 
              grilled goat meat (Tibs), prepared with traditional Ethiopian spices and 
              served with fresh Injera.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-flame-orange hover:bg-flame-red text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Order Now
              </button>
              <button className="border-2 border-charcoal hover:border-terracotta text-charcoal hover:text-terracotta font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>
          <div className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Logo size={400} className="animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-charcoal text-beige py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-brand text-4xl md:text-5xl text-center mb-12 text-stamped">
            Why Fiyel Bet?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-charcoal-light rounded-lg border-2 border-terracotta">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-brand text-2xl mb-3 text-stamped">Fresh Off The Grill</h3>
              <p className="text-beige">
                Our meat is grilled to perfection on traditional Midija, giving it that 
                authentic smoky flavor you crave.
              </p>
            </div>
            <div className="text-center p-6 bg-charcoal-light rounded-lg border-2 border-gold">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-brand text-2xl mb-3 text-stamped">Traditional Spices</h3>
              <p className="text-beige">
                We use authentic Ethiopian spices including Berbere, creating flavors 
                that transport you to Addis Ababa.
              </p>
            </div>
            <div className="text-center p-6 bg-charcoal-light rounded-lg border-2 border-deep-green">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-brand text-2xl mb-3 text-stamped">Rustic Atmosphere</h3>
              <p className="text-beige">
                Experience the warmth and hospitality of a traditional Ethiopian 
                dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="container mx-auto px-6 py-16">
        <h2 className="text-brand text-4xl md:text-5xl text-center mb-12 text-charcoal text-stamped">
          Our Specialties
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Tibs', description: 'Grilled goat meat with onions, peppers, and traditional spices', price: '$18' },
            { name: 'Kikil', description: 'Tender goat meat stew with Ethiopian spices', price: '$16' },
            { name: 'Kitfo', description: 'Minced raw meat seasoned with mitmita and niter kibbeh', price: '$20' },
            { name: 'Doro Wat', description: 'Spicy chicken stew with berbere sauce', price: '$17' },
            { name: 'Shiro', description: 'Chickpea stew with Ethiopian spices', price: '$12' },
            { name: 'Injera', description: 'Traditional sourdough flatbread', price: '$4' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-terracotta hover:border-flame-orange transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-brand text-2xl mb-2 text-charcoal text-stamped">{item.name}</h3>
              <p className="text-charcoal-light mb-4">{item.description}</p>
              <p className="text-flame-orange font-bold text-xl">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-beige py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Logo size={60} />
              <h3 className="text-brand text-2xl text-stamped">Fiyel Bet</h3>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg mb-2">📍 123 Ethiopian Street, Addis Ababa</p>
              <p className="text-lg mb-2">📞 +251 11 123 4567</p>
              <p className="text-lg">🕐 Open Daily: 11 AM - 11 PM</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-charcoal-light text-center">
            <p className="text-beige opacity-75">
              © 2024 Fiyel Bet. Authentic Ethiopian Cuisine.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}


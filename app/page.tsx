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
              ፍየል ቤት
            </h1>
          </div>
          <div className="hidden md:flex gap-6 text-lg font-bold">
            <a href="#menu" className="hover:text-flame-orange transition-colors">Menu</a>
            <a href="#location" className="hover:text-flame-orange transition-colors">Location</a>
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
              Fiyel Bet
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
            { name: 'Tibs', description: 'Grilled goat meat with onions, peppers, and traditional spices', price: '450 ETB' },
            { name: 'Kikil', description: 'Tender goat meat stew with Ethiopian spices', price: '400 ETB' },
            { name: 'Kitfo', description: 'Minced raw meat seasoned with mitmita and niter kibbeh', price: '500 ETB' },
            { name: 'Doro Wat', description: 'Spicy chicken stew with berbere sauce', price: '425 ETB' },
            { name: 'Shiro', description: 'Chickpea stew with Ethiopian spices', price: '300 ETB' },
            { name: 'Injera', description: 'Traditional sourdough flatbread', price: '100 ETB' },
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

      {/* Location Section */}
      <section id="location" className="bg-gradient-to-b from-beige to-straw py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-brand text-4xl md:text-5xl text-center mb-12 text-charcoal text-stamped">
            Find Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-terracotta">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-6">
                    <h3 className="text-brand text-3xl mb-4 text-charcoal text-stamped">📍 Our Location</h3>
                    <p className="text-xl text-charcoal-light leading-relaxed">
                      Visit us at our restaurant and experience authentic Ethiopian cuisine in a warm, welcoming atmosphere.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🏠</span>
                      <div>
                        <p className="text-lg font-semibold text-charcoal mb-1">Address</p>
                        <p className="text-charcoal-light">
                          Addis Ababa, Ethiopia
                        </p>
                        <p className="text-charcoal-light">
                          (Exact address to be updated)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🕐</span>
                      <div>
                        <p className="text-lg font-semibold text-charcoal mb-1">Opening Hours</p>
                        <p className="text-charcoal-light">Monday - Sunday: 11:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full h-64 bg-charcoal-light rounded-lg flex items-center justify-center border-2 border-gold">
                  <p className="text-beige text-center px-4">
                    🗺️ Map will be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-charcoal text-beige py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-brand text-4xl md:text-5xl text-center mb-12 text-stamped">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-charcoal-light rounded-lg p-8 border-2 border-terracotta hover:border-flame-orange transition-all duration-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">📞</div>
                  <h3 className="text-brand text-2xl mb-4 text-stamped">Phone</h3>
                  <p className="text-beige text-lg mb-2">Call us for reservations or inquiries</p>
                  <a 
                    href="tel:+251919870929" 
                    className="text-flame-orange hover:text-flame-red text-2xl font-bold transition-colors"
                  >
                    +251 919 870 929
                  </a>
                  <p className="text-beige text-sm mt-2">0919870929</p>
                </div>
              </div>
              <div className="bg-charcoal-light rounded-lg p-8 border-2 border-gold hover:border-flame-orange transition-all duration-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="text-brand text-2xl mb-4 text-stamped">Email</h3>
                  <p className="text-beige text-lg mb-2">Send us a message</p>
                  <a 
                    href="mailto:kirub.hel@gmail.com" 
                    className="text-flame-orange hover:text-flame-red text-xl font-bold transition-colors break-all"
                  >
                    kirub.hel@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-charcoal-light rounded-lg p-8 border-2 border-deep-green">
              <div className="text-center">
                <h3 className="text-brand text-2xl mb-4 text-stamped">Contact Person</h3>
                <p className="text-beige text-lg">
                  For any questions, reservations, or special requests, feel free to reach out to us directly.
                </p>
                <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    <div className="text-left">
                      <p className="text-beige text-sm opacity-75">Contact Person</p>
                      <p className="text-flame-orange font-semibold">Fiyel Bet Team</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div className="text-left">
                      <p className="text-beige text-sm opacity-75">Phone</p>
                      <a 
                        href="tel:+251919870929" 
                        className="text-flame-orange hover:text-flame-red font-semibold transition-colors"
                      >
                        +251 919 870 929
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div className="text-left">
                      <p className="text-beige text-sm opacity-75">Email</p>
                      <a 
                        href="mailto:kirub.hel@gmail.com" 
                        className="text-flame-orange hover:text-flame-red font-semibold transition-colors break-all"
                      >
                        kirub.hel@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <p className="text-lg mb-2">📍 Addis Ababa, Ethiopia</p>
              <p className="text-lg mb-2">📞 <a href="tel:+251919870929" className="hover:text-flame-orange transition-colors">+251 919 870 929</a></p>
              <p className="text-lg mb-2">✉️ <a href="mailto:kirub.hel@gmail.com" className="hover:text-flame-orange transition-colors">kirub.hel@gmail.com</a></p>
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


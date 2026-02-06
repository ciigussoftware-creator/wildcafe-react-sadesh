import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export function LocationsSection() {
  const locations = [
    {
      name: 'Wild Café Ella',
      address: 'Main Street, Ella',
      region: 'Hill Country',
      status: 'Open Now',
      phone: '+94 70 202 8637',
      hours: '7:00 AM - 10:00 PM',
      mapUrl: 'https://maps.google.com/?q=Wild+Cafe+Ella+Sri+Lanka',
      image: 'https://images.unsplash.com/photo-1559372122-1a97b2d22c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      highlight: true,
    },
    {
      name: 'Wild Café Kandy',
      address: 'Kandy City Centre',
      region: 'Central Province',
      status: 'Coming Soon',
      phone: '+94 70 202 8637',
      hours: 'Opening Soon',
      mapUrl: 'https://maps.google.com/?q=Kandy+Sri+Lanka',
      image: 'https://images.unsplash.com/photo-1638621718775-1404ce40d6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      highlight: false,
    },
    {
      name: 'Wild Café Sigiriya',
      address: 'Near Sigiriya Rock',
      region: 'Cultural Triangle',
      status: 'Coming Soon',
      phone: '+94 70 202 8637',
      hours: 'Opening Soon',
      mapUrl: 'https://maps.google.com/?q=Sigiriya+Sri+Lanka',
      image: 'https://images.unsplash.com/photo-1659431246416-d7cd144f03a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      highlight: false,
    },
  ];

  return (
    <section id="locations" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-bright to-teal bg-clip-text text-transparent">
              Our Locations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us across Sri Lanka's most iconic destinations
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`glass-panel rounded-2xl overflow-hidden group ${
                location.highlight ? 'ring-2 ring-emerald/50' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                      location.status === 'Open Now'
                        ? 'bg-emerald/90 text-black'
                        : 'bg-amber/90 text-black'
                    }`}
                  >
                    {location.status}
                  </span>
                </div>

                {/* Highlight Badge */}
                {location.highlight && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber/90 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                      ⭐ Main Location
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Name & Region */}
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-emerald-bright transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-sm text-amber">{location.region}</p>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-bright flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-bright flex-shrink-0" />
                    <span className="text-muted-foreground">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-bright flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-muted-foreground hover:text-emerald-bright transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                {/* Action Button */}
                {location.status === 'Open Now' && (
                  <motion.a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-emerald to-teal rounded-lg text-black font-medium hover:shadow-lg hover:glow-emerald transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </motion.a>
                )}
                {location.status !== 'Open Now' && (
                  <div className="flex items-center justify-center gap-2 w-full py-3 border border-amber/30 rounded-lg text-amber font-medium">
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Illustration */}
        <motion.div
          className="glass-panel p-8 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-emerald-bright">
              Expanding Across Sri Lanka
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From the misty hills of Ella to the cultural heart of Kandy and the ancient 
              wonder of Sigiriya, Wild Café is bringing the jungle experience to travelers 
              exploring Sri Lanka's most beautiful destinations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
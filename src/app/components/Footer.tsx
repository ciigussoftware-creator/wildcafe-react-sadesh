import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const locations = [
    { name: 'Wild Café Ella', status: 'Open Now' },
    { name: 'Wild Café Kandy', status: 'Coming Soon' },
    { name: 'Wild Café Sigiriya', status: 'Coming Soon' },
  ];

  return (
    <footer className="relative border-t border-emerald/20 bg-gradient-to-b from-background to-black/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald/20 blur-xl rounded-full" />
                <div className="relative text-4xl">🐘</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-bright tracking-wider">
                  WILD CAFÉ
                </h3>
                <p className="text-xs text-amber tracking-widest">ELLA</p>
              </div>
            </motion.div>
            <p className="text-muted-foreground mb-4">
              Go Wild Comfort Food in the heart of Sri Lanka's most beautiful destinations.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/wildcafeella"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-amber/30 hover:border-amber hover:bg-amber/10 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-amber" />
              </motion.a>
              <motion.a
                href="tel:+94702028637"
                className="p-2 rounded-lg border border-emerald/30 hover:border-emerald hover:bg-emerald/10 transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 text-emerald-bright" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-bright">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-bright transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-bright">Our Locations</h4>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-bright mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground">{location.name}</p>
                    <p className={`text-xs ${
                      location.status === 'Open Now' ? 'text-emerald-bright' : 'text-amber'
                    }`}>
                      {location.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-bright">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-bright mt-1 flex-shrink-0" />
                <a
                  href="tel:+94702028637"
                  className="text-muted-foreground hover:text-emerald-bright transition-colors"
                >
                  +94 70 202 8637
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-bright mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Main Street, Ella<br />
                  Sri Lanka
                </p>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-emerald-bright mt-1 flex-shrink-0" />
                <a
                  href="https://instagram.com/wildcafeella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emerald-bright transition-colors"
                >
                  @wildcafeella
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Notes */}
        <div className="border-t border-emerald/20 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <p>🕒 Open Daily: 7:00 AM - 10:00 PM</p>
            <p>📶 Free WiFi Available</p>
            <p>💳 10% Service Charge Included</p>
            <p>🌶️ Custom Spice Levels Available</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Wild Café Ella. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-amber fill-amber" /> in Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald/50 to-transparent" />
    </footer>
  );
}

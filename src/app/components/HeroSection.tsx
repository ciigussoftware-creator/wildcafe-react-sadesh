import { motion } from 'motion/react';
import { ChevronDown, MapPin, Phone, Instagram } from 'lucide-react';

interface HeroSectionProps {
  onMenuClick: () => void;
}

export function HeroSection({ onMenuClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559372122-1a97b2d22c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGVsbGElMjBuaW5lJTIwYXJjaCUyMGJyaWRnZSUyMHRyYWlufGVufDF8fHx8MTc3MDQwNDY1MHww&ixlib=rb-4.1.0&q=80&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        
        {/* Animated Jungle Pattern Overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1638621718775-1404ce40d6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGp1bmdsZSUyMGNhZmUlMjBpbnRlcmlvciUyMHBsYW50c3xlbnwxfHx8fDE3NzA0MDQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Elephant Icon */}
          <motion.div
            className="inline-block mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald/30 blur-3xl rounded-full scale-150" />
              <div className="relative text-8xl">🐘</div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-glow-emerald"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-emerald-bright via-teal to-emerald-bright bg-clip-text text-transparent">
              WILD CAFÉ
            </span>
            <br />
            <span className="text-amber text-glow-amber">ELLA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Go Wild Comfort Food
          </motion.p>

          {/* Location Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass-panel px-6 py-3 rounded-full mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <MapPin className="w-4 h-4 text-emerald-bright" />
            <span className="text-sm">Main Street, Ella • Sri Lanka</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={onMenuClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald to-teal rounded-xl text-black font-bold text-lg hover:shadow-2xl hover:glow-emerald transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
            <motion.a
              href="https://maps.google.com/?q=Wild+Cafe+Ella+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass-panel border-emerald/40 rounded-xl font-medium text-lg hover:border-emerald hover:bg-emerald/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.a>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a
              href="tel:+94702028637"
              className="flex items-center gap-2 text-foreground/70 hover:text-emerald-bright transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+94 70 202 8637</span>
            </a>
            <a
              href="https://instagram.com/wildcafeella"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-amber transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@wildcafeella</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-8 h-8 text-emerald-bright opacity-70" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber/10 rounded-full blur-3xl" />
    </section>
  );
}
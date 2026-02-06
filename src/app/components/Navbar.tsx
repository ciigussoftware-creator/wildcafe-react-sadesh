import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu', onClick: onMenuClick },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.onClick) {
      link.onClick();
    } else {
      const element = document.querySelector(link.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald/20 blur-xl rounded-full" />
              <div className="relative text-3xl">🐘</div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-emerald-bright tracking-wider">
                WILD CAFÉ
              </h1>
              <p className="text-xs text-amber tracking-widest">ELLA</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className="text-foreground/80 hover:text-emerald-bright transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-bright group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+94702028637"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald/30 hover:border-emerald hover:bg-emerald/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call</span>
            </motion.a>
            <motion.button
              onClick={onMenuClick}
              className="px-6 py-2 bg-gradient-to-r from-emerald to-teal rounded-lg text-black font-medium hover:shadow-lg hover:glow-emerald transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-panel border-t border-emerald/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className="block w-full text-left py-3 px-4 rounded-lg hover:bg-emerald/10 transition-colors text-foreground/80 hover:text-emerald-bright"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+94702028637"
                  className="flex items-center gap-2 py-3 px-4 rounded-lg border border-emerald/30 hover:border-emerald hover:bg-emerald/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+94 70 202 8637</span>
                </a>
                <a
                  href="https://instagram.com/wildcafeella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-3 px-4 rounded-lg border border-amber/30 hover:border-amber hover:bg-amber/10 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@wildcafeella</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

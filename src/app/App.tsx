import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SignaturePicks } from './components/SignaturePicks';
import { ExperienceSection } from './components/ExperienceSection';
import { MenuDrawer } from './components/MenuDrawer';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationsSection } from './components/LocationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground jungle-texture">
          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar onMenuClick={handleMenuOpen} />

          {/* Menu Drawer */}
          <MenuDrawer isOpen={isMenuOpen} onClose={handleMenuClose} />

          {/* Main Content */}
          <main>
            {/* Hero Section */}
            <HeroSection onMenuClick={handleMenuOpen} />

            {/* Signature Picks */}
            <SignaturePicks onMenuClick={handleMenuOpen} />

            {/* Experience Section */}
            <ExperienceSection />

            {/* Gallery Section */}
            <GallerySection />

            {/* Reviews Section */}
            <ReviewsSection />

            {/* Locations Section */}
            <LocationsSection />

            {/* About Section */}
            <AboutSection />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Action Buttons */}
          <WhatsAppButton />
          <BackToTop />
        </div>
      )}
    </>
  );
}

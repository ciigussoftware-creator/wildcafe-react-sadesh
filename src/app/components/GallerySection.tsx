import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Instagram } from 'lucide-react';

export function GallerySection() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1743674453123-93356ade2891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Sri Lankan Kottu',
      category: 'food',
    },
    {
      url: 'https://images.unsplash.com/photo-1761315413256-e149b40f577b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Gourmet Burger',
      category: 'food',
    },
    {
      url: 'https://images.unsplash.com/photo-1638621718775-1404ce40d6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Jungle Café Interior',
      category: 'cafe',
    },
    {
      url: 'https://images.unsplash.com/photo-1759850845171-07b0f92e0f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Smoothie Bowl',
      category: 'drinks',
    },
    {
      url: 'https://images.unsplash.com/photo-1591814252471-068b545dff62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Fried Rice',
      category: 'food',
    },
    {
      url: 'https://images.unsplash.com/photo-1559372122-1a97b2d22c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Ella Landscape',
      category: 'ella',
    },
    {
      url: 'https://images.unsplash.com/photo-1712746784067-e9e1bd86c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Pasta Dish',
      category: 'food',
    },
    {
      url: 'https://images.unsplash.com/photo-1514295224281-fce533c599dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Coffee & Drinks',
      category: 'drinks',
    },
    {
      url: 'https://images.unsplash.com/photo-1659431246416-d7cd144f03a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      caption: 'Tropical Plants',
      category: 'cafe',
    },
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald rounded-full blur-3xl" />
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
              Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            A visual journey through our food, café vibes, and the beauty of Ella
          </p>
          <motion.a
            href="https://instagram.com/wildcafeella"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-panel border-amber/40 rounded-full hover:border-amber hover:bg-amber/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5 text-amber" />
            <span>Follow @wildcafeella</span>
          </motion.a>
        </motion.div>

        {/* Masonry Gallery */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg mb-1">{image.caption}</p>
                  <span className="inline-block px-3 py-1 bg-emerald/80 text-black text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 ring-2 ring-emerald/40 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Share your Wild Café moments with us
          </p>
          <p className="text-emerald-bright font-semibold">
            Tag #WildCafeElla for a chance to be featured!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
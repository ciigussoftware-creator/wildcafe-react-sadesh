import { motion } from 'motion/react';
import { signaturePicks } from '../data/menuData';
import { Leaf, Flame, Sparkles } from 'lucide-react';

interface SignaturePicksProps {
  onMenuClick: () => void;
}

export function SignaturePicks({ onMenuClick }: SignaturePicksProps) {
  const images = [
    'https://images.unsplash.com/photo-1743674453123-93356ade2891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1761315413256-e149b40f577b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1743669768648-0c810958fc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1591814252471-068b545dff62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1743525700011-afac212694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1759850845171-07b0f92e0f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber rounded-full blur-3xl" />
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber" />
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-bright text-glow-emerald">
              Signature Picks
            </h2>
            <Sparkles className="w-6 h-6 text-amber" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved dishes that capture the wild spirit of Ella
          </p>
        </motion.div>

        {/* Signature Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {signaturePicks.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-panel rounded-2xl overflow-hidden group hover:border-emerald/60 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${images[index]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags?.includes('signature') && (
                    <span className="px-3 py-1 bg-amber/90 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                      ⭐ Signature
                    </span>
                  )}
                  {item.tags?.includes('popular') && (
                    <span className="px-3 py-1 bg-emerald/90 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                      🔥 Popular
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-emerald-bright transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.isVeg && (
                      <span className="flex items-center gap-1 text-xs text-emerald-bright">
                        <Leaf className="w-3 h-3" />
                      </span>
                    )}
                    {item.spiceLevel && (
                      <span className="flex items-center gap-1 text-xs text-amber">
                        <Flame className="w-3 h-3" />
                        {item.spiceLevel}
                      </span>
                    )}
                  </div>
                  <span className="text-xl font-bold text-amber">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            onClick={onMenuClick}
            className="px-8 py-4 bg-gradient-to-r from-emerald to-teal rounded-xl text-black font-bold text-lg hover:shadow-2xl hover:glow-emerald transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
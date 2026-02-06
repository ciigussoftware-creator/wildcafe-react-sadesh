import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function ReviewsSection() {
  const reviews = [
    {
      name: 'Sarah Thompson',
      location: 'Australia',
      rating: 5,
      text: 'Best kottu I\'ve had in Sri Lanka! The jungle vibes make it even more special. The staff were super friendly and helped me customize the spice level perfectly.',
      avatar: '🧑‍🦰',
    },
    {
      name: 'Marco Rossi',
      location: 'Italy',
      rating: 5,
      text: 'The SL Grandma\'s Pasta was incredible - a perfect fusion of Sri Lankan and Italian flavors. Cozy atmosphere and free WiFi made it my favorite spot in Ella.',
      avatar: '👨',
    },
    {
      name: 'Priya Sharma',
      location: 'India',
      rating: 5,
      text: 'As a vegetarian, I loved the variety of options! The coconut roti burger was unique and delicious. Great place to relax after visiting Nine Arch Bridge.',
      avatar: '👩',
    },
    {
      name: 'Tom Anderson',
      location: 'UK',
      rating: 5,
      text: 'The Wild Special Fried Rice lived up to its name - absolutely wild and tasty! Perfect portion sizes and reasonable prices. Highly recommend!',
      avatar: '👨‍🦳',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-amber to-gold bg-clip-text text-transparent">
              What Travelers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loved by travelers from around the world
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="glass-panel p-8 rounded-2xl group hover:border-amber/60 transition-all relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-amber" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber fill-amber"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald/20 to-teal/20 flex items-center justify-center text-2xl border border-emerald/30">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Had a great experience? Share it with us!
          </p>
          <motion.a
            href="https://instagram.com/wildcafeella"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber to-gold rounded-xl text-black font-bold hover:shadow-lg hover:glow-amber transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Leave a Review</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

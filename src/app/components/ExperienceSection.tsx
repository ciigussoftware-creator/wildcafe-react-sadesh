import { motion } from 'motion/react';
import { Wifi, Coffee, UtensilsCrossed, Music, Leaf, Mountain } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Jungle Vibes',
      description: 'Cozy café nestled in lush greenery with a wild, natural atmosphere',
      color: 'emerald',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Comfort Food',
      description: 'Traditional Sri Lankan cuisine with a modern twist and international favorites',
      color: 'amber',
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Ella Experience',
      description: 'Located on the main street, perfect stop after exploring Nine Arch Bridge',
      color: 'teal',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Free WiFi',
      description: 'Stay connected while enjoying your meal in our relaxed setting',
      color: 'emerald',
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: 'All Day Dining',
      description: 'Breakfast, lunch, dinner and everything in between',
      color: 'amber',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Chill Lounge',
      description: 'Relaxed atmosphere perfect for solo travelers and groups alike',
      color: 'teal',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1638621718775-1404ce40d6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGp1bmdsZSUyMGNhZmUlMjBpbnRlcmlvciUyMHBsYW50c3xlbnwxfHx8fDE3NzA0MDQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1920)',
          }}
        />
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
              The Wild Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a café - it's a jungle sanctuary in the heart of Ella
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-panel p-8 rounded-2xl group hover:border-emerald/60 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-xl border mb-6 ${
                  exp.color === 'emerald' ? 'bg-emerald/10 border-emerald/20 text-emerald-bright' :
                  exp.color === 'amber' ? 'bg-amber/10 border-amber/20 text-amber' :
                  'bg-teal/10 border-teal/20 text-teal'
                } group-hover:glow-emerald transition-all`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {exp.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-emerald-bright transition-colors">
                {exp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center glass-panel p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-emerald-bright">
            Ready for a Wild Experience?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit us on the main street of Ella and discover why travelers from around the world 
            choose Wild Café as their go-to spot for authentic comfort food.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://maps.google.com/?q=Wild+Cafe+Ella+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-emerald to-teal rounded-xl text-black font-bold hover:shadow-2xl hover:glow-emerald transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.a>
            <motion.a
              href="tel:+94702028637"
              className="px-8 py-4 glass-panel border-amber/40 rounded-xl font-medium hover:border-amber hover:bg-amber/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call to Reserve
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
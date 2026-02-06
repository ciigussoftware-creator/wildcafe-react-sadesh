import { motion } from 'motion/react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Authentic Flavors',
      description: 'Traditional Sri Lankan recipes passed down through generations, prepared with love and care',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'A welcoming space for travelers and locals to connect over great food',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Ingredients',
      description: 'Fresh, locally sourced ingredients supporting Sri Lankan farmers and producers',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Wild Spirit',
      description: 'Embracing the untamed beauty of Sri Lanka in every dish and experience',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1659431246416-d7cd144f03a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
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
              About Wild Café
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where jungle vibes meet comfort food in the heart of Sri Lanka
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] relative">
              <img
                src="https://images.unsplash.com/photo-1638621718775-1404ce40d6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGp1bmdsZSUyMGNhZmUlMjBpbnRlcmlvciUyMHBsYW50c3xlbnwxfHx8fDE3NzA0MDQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1200"
                alt="Wild Café Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute inset-0 ring-2 ring-emerald/20 rounded-3xl" />
          </motion.div>

          {/* Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 glass-panel border-emerald/30 rounded-full">
              <span className="text-emerald-bright font-semibold">Our Story</span>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground">
              A Cosy Jungle-Style Café in the Heart of Ella
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wild Café was born from a simple vision: to create a sanctuary where travelers 
                and locals could experience the authentic flavors of Sri Lanka in a setting that 
                celebrates the island's wild, natural beauty.
              </p>
              
              <p>
                Located on Ella's main street, we've transformed a traditional space into a 
                jungle-inspired haven, complete with lush greenery, warm lighting, and the kind 
                of atmosphere that makes you want to linger over one more cup of Ceylon tea.
              </p>
              
              <p>
                Our menu is a love letter to Sri Lankan comfort food – from traditional hoppers 
                and kottu to our grandmother's secret pasta recipe. Every dish is prepared with 
                fresh, local ingredients and served with the warmth and hospitality that Sri Lanka 
                is famous for.
              </p>
              
              <p className="text-emerald-bright font-medium">
                Come hungry. Leave happy. Go wild.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6 rounded-2xl text-center group hover:border-emerald/60 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex p-4 rounded-xl bg-emerald/10 border border-emerald/20 mb-4 text-emerald-bright group-hover:glow-emerald transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-emerald-bright transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Note */}
        <motion.div
          className="mt-16 text-center glass-panel p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-emerald-bright">
              From Our Kitchen to Your Table
            </h3>
            <p className="text-muted-foreground">
              Our team of passionate chefs and friendly staff work together to ensure every 
              visit to Wild Café is memorable. Whether you're seeking a hearty breakfast before 
              hiking to Nine Arch Bridge, a satisfying lunch, or a relaxed dinner with friends, 
              we're here to make your Ella experience truly special.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
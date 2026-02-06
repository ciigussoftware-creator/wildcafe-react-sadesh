import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Send, Clock, Wifi, CreditCard } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+94 70 202 8637',
      action: 'tel:+94702028637',
      color: 'emerald',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: 'Main Street, Ella, Sri Lanka',
      action: 'https://maps.google.com/?q=Wild+Cafe+Ella+Sri+Lanka',
      color: 'teal',
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: 'Instagram',
      details: '@wildcafeella',
      action: 'https://instagram.com/wildcafeella',
      color: 'amber',
    },
  ];

  const serviceNotes = [
    { icon: <Clock className="w-5 h-5" />, text: 'Open Daily: 7:00 AM - 10:00 PM' },
    { icon: <Wifi className="w-5 h-5" />, text: 'Free WiFi Available' },
    { icon: <CreditCard className="w-5 h-5" />, text: '10% Service Charge Included' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber rounded-full blur-3xl" />
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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to make a reservation? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-panel p-8 rounded-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-emerald-bright">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all"
                  placeholder="john@example.com or +94 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald to-teal rounded-xl text-black font-bold hover:shadow-2xl hover:glow-emerald transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block glass-panel p-6 rounded-2xl hover:border-emerald/60 transition-all group"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border ${
                      info.color === 'emerald' ? 'bg-emerald/10 border-emerald/20 text-emerald-bright' :
                      info.color === 'teal' ? 'bg-teal/10 border-teal/20 text-teal' :
                      'bg-amber/10 border-amber/20 text-amber'
                    } group-hover:glow-emerald transition-all`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-emerald-bright transition-colors">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Service Notes */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <h4 className="text-lg font-bold text-emerald-bright mb-4">Service Information</h4>
              {serviceNotes.map((note, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="text-emerald-bright">{note.icon}</div>
                  <span className="text-sm">{note.text}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-emerald/20">
                <p className="text-sm text-muted-foreground">
                  💡 <span className="font-medium">Pro Tip:</span> Ask our servers about 
                  custom spice levels for any dish!
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://wa.me/94702028637"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-emerald to-teal rounded-xl text-black font-bold hover:shadow-lg hover:glow-emerald transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+94702028637"
                className="flex items-center justify-center gap-2 px-6 py-4 glass-panel border-amber/40 rounded-xl font-medium hover:border-amber hover:bg-amber/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Map Embed Placeholder */}
            <div className="glass-panel p-6 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-emerald/10 to-teal/10 rounded-xl flex items-center justify-center">
                <motion.a
                  href="https://maps.google.com/?q=Wild+Cafe+Ella+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-emerald to-teal rounded-lg text-black font-medium hover:shadow-lg hover:glow-emerald transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open in Google Maps
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
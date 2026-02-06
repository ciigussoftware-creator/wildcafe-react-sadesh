import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/94702028637"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 p-4 bg-gradient-to-r from-emerald to-teal rounded-full text-black shadow-lg hover:shadow-2xl hover:glow-emerald transition-all group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 -mt-1" />
      </div>

      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.a>
  );
}

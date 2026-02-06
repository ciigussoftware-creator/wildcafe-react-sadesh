import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Filter, Leaf, Flame } from 'lucide-react';
import { menuData, type MenuItem, type MenuCategory } from '../data/menuData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState<string>('all');

  const filteredItems = useMemo(() => {
    const category = menuData.find((cat) => cat.id === selectedCategory);
    if (!category) return [];

    return category.items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !filterVeg || item.isVeg;
      const matchesSpicy = filterSpicy === 'all' || item.spiceLevel === filterSpicy;
      return matchesSearch && matchesVeg && matchesSpicy;
    });
  }, [selectedCategory, searchQuery, filterVeg, filterSpicy]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full lg:max-w-4xl glass-panel border-l border-emerald/20 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-emerald/20">
              <div>
                <h2 className="text-3xl font-bold text-emerald-bright text-glow-emerald">
                  Our Menu
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Go Wild Comfort Food
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-emerald/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Search & Filters */}
            <div className="p-6 border-b border-emerald/20 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-input-background rounded-lg border border-border focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => setFilterVeg(!filterVeg)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    filterVeg
                      ? 'bg-emerald/20 border-emerald text-emerald-bright'
                      : 'border-border hover:border-emerald/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Leaf className="w-4 h-4" />
                  <span className="text-sm">Veg Only</span>
                </motion.button>

                <select
                  value={filterSpicy}
                  onChange={(e) => setFilterSpicy(e.target.value)}
                  className="px-4 py-2 bg-input-background rounded-lg border border-border focus:border-emerald focus:outline-none transition-all"
                >
                  <option value="all">All Spice Levels</option>
                  <option value="mild">Mild</option>
                  <option value="medium">Medium</option>
                  <option value="hot">Hot 🔥</option>
                </select>
              </div>

              {/* Service Notes */}
              <div className="text-xs text-muted-foreground space-y-1">
                <p>💡 Ask the server for custom spice levels</p>
                <p>📶 Free WiFi available</p>
                <p>💳 10% service charge included</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Categories Sidebar - Desktop */}
              <div className="hidden md:block w-64 border-r border-emerald/20 overflow-y-auto p-4 space-y-2">
                {menuData.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/40 text-emerald-bright'
                        : 'hover:bg-emerald/5 border border-transparent'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="font-medium">{category.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {category.items.length} items
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Category Selector */}
              <div className="md:hidden w-full border-b border-emerald/20 overflow-x-auto flex-shrink-0">
                <div className="flex gap-2 p-4">
                  {menuData.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-emerald/20 to-teal/20 border border-emerald/40 text-emerald-bright'
                          : 'border border-border hover:border-emerald/50'
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No items found</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Footer */}
            <div className="p-6 border-t border-emerald/20 bg-gradient-to-r from-emerald/5 to-teal/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ready to order?</p>
                  <p className="text-lg font-bold text-emerald-bright">
                    Call +94 70 202 8637
                  </p>
                </div>
                <motion.a
                  href="https://wa.me/94702028637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-amber to-gold rounded-lg text-black font-medium hover:shadow-lg hover:glow-amber transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp Order
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-5 rounded-xl hover:border-emerald/40 transition-all group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-bright transition-colors">
              {item.name}
            </h3>
            {item.tags?.includes('signature') && (
              <span className="px-2 py-0.5 bg-amber/20 text-amber text-xs rounded-full border border-amber/40">
                Signature
              </span>
            )}
            {item.tags?.includes('popular') && (
              <span className="px-2 py-0.5 bg-emerald/20 text-emerald-bright text-xs rounded-full border border-emerald/40">
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
          <div className="flex items-center gap-3">
            {item.isVeg && (
              <span className="flex items-center gap-1 text-xs text-emerald-bright">
                <Leaf className="w-3 h-3" />
                Veg
              </span>
            )}
            {item.spiceLevel && (
              <span className="flex items-center gap-1 text-xs text-amber">
                <Flame className="w-3 h-3" />
                {item.spiceLevel}
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-amber">{item.price}</p>
        </div>
      </div>
    </motion.div>
  );
}
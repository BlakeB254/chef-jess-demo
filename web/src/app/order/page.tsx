'use client'
import Navbar from '@/components/Navbar'
import { FadeIn } from '@/components/FadeIn'
import { useCart } from '@/context/CartContext'
import CartDrawer from '@/components/CartDrawer'
import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CartItem } from '@/context/CartContext'

const MENU_CATEGORIES = [
  {
    name: 'Appetizers',
    video: '/assets/catering-hero.mp4', // Using the catering video as a fallback for appetizer spread
    fallbackImage: '/assets/6b60bf_92f7fe2510024194a251542c0581d23c_mv2_d_5760.jpg',
    items: [
      { id: '4', name: 'Caesar Salad', price: 18, description: 'Crisp romaine, parmesan reggiano, house-made croutons.' },
      { id: '6', name: 'Seasonal Soup', price: 12, description: 'Chef\'s daily selection using market-fresh ingredients.' },
      { id: '7', name: 'Wagyu Beef Carpaccio', price: 24, description: 'Thinly sliced seared beef, truffle oil, arugula.' },
    ]
  },
  {
    name: 'Main Course',
    video: '/assets/personal-chef-hero.mp4', // Reusing plating video
    fallbackImage: '/assets/6b60bf_472e628fc77941f0b50a1a39a8387d6a_mv2_d_5760.jpg',
    items: [
      { id: '1', name: 'Gourmet Steak', price: 45, description: 'Prime cut, herb butter, roasted root vegetables.' },
      { id: '2', name: 'Lobster Risotto', price: 38, description: 'Creamy arborio rice, fresh Maine lobster, saffron.' },
      { id: '3', name: 'Truffle Pasta', price: 32, description: 'Fresh tagliatelle, black truffle cream, shaved pecorino.' },
    ]
  },
  {
    name: 'Desserts',
    video: null, // No specific dessert video, fallback to image
    fallbackImage: '/assets/6b60bf_dca46010c92540fd94dc85a3083c8f29_mv2_d_5760.jpg', 
    items: [
      { id: '5', name: 'Chocolate Lava Cake', price: 14, description: 'Molten center, madagascan vanilla bean ice cream.' },
      { id: '8', name: 'Lemon Tart', price: 12, description: 'Zesty lemon curd, buttery shortbread crust.' },
    ]
  }
]

function CategorySection({ category, addItem }: { category: typeof MENU_CATEGORIES[0], addItem: (item: Omit<CartItem, 'quantity'>) => void }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div className="mb-48 last:mb-0">
      {/* Parallax Header */}
      <div ref={ref} className="relative h-[50vh] overflow-hidden rounded-3xl mb-16 group">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          {category.video ? (
             <video
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-1000 scale-105"
             >
                <source src={category.video} type="video/mp4" />
             </video>
          ) : (
            <Image
                src={category.fallbackImage}
                alt={category.name}
                fill
                className="object-cover brightness-50 group-hover:brightness-75 transition-all duration-1000"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <h2 className="text-7xl md:text-9xl font-serif font-bold text-white tracking-tighter shadow-lg drop-shadow-2xl">{category.name}</h2>
          <div className="w-24 h-1 bg-accent mt-8 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        </div>
      </div>

      {/* Menu List */}
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {category.items.map(item => (
          <FadeIn key={item.id}>
            <div className="group relative p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-all duration-500 cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-baseline relative z-10">
                <div className="flex-1 mr-8">
                  <div className="flex items-baseline mb-3">
                    <h3 className="text-3xl font-serif font-bold text-white group-hover:text-accent transition-colors">{item.name}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground font-light max-w-xl">{item.description}</p>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-2xl font-serif font-light text-white mb-4">${item.price}</span>
                   {/* Disabled Add Button */}
                   <button 
                    disabled
                    className="p-3 rounded-full border border-white/20 text-white/50 cursor-not-allowed"
                    title="Ordering Paused"
                    onClick={() => addItem(item)}
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default function OrderPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { addItem } = useCart()

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 relative">
      <Navbar />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Orders Paused Overlay/Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-accent text-black py-4 text-center font-bold text-xl tracking-widest shadow-[0_-10px_40px_rgba(0,0,0,0.5)] uppercase">
        Not Currently Accepting Orders
      </div>

      <div className="max-w-7xl mx-auto px-6 grayscale-[0.3] pointer-events-none select-none">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/10 pb-12">
            <div>
              <p className="text-accent font-serif italic text-2xl mb-4">Seasonal & Fresh</p>
              <h1 className="text-7xl md:text-9xl font-serif font-bold mb-8 tracking-tighter">The Menu</h1>
              <p className="text-muted-foreground text-2xl font-light max-w-2xl">
                A curated selection of Chef Jess&apos;s signature dishes. <br/>
                <span className="text-accent">Currently updated for the Winter Season.</span>
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          {MENU_CATEGORIES.map(category => (
            <CategorySection key={category.name} category={category} addItem={addItem} />
          ))}
        </div>
      </div>
    </main>
  )
}
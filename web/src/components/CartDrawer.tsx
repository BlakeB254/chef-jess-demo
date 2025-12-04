'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { X, Trash2 } from 'lucide-react'

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { items, removeItem, total } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full md:w-96 bg-white shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-bold">Your Order</h2>
              <button onClick={onClose}><X /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-6">
              {items.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex justify-between items-start border-b pb-4">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">${item.price * item.quantity}</span>
                      <button onClick={() => removeItem(item.id)} className="text-red-500"><Trash2 size={16}/></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 border-t pt-4">
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

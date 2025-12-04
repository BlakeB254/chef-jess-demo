'use client'
import Navbar from '@/components/Navbar'
import { FadeIn } from '@/components/FadeIn'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-24">
            <p className="text-accent font-serif italic text-2xl mb-4">Get in Touch</p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">Let&apos;s Create</h1>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Contact Info</h3>
                <p className="text-muted-foreground text-lg hover:text-accent transition-colors cursor-pointer">chefjesscooks@gmail.com</p>
                <p className="text-muted-foreground text-lg hover:text-accent transition-colors cursor-pointer">312-288-6499</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Service Area</h3>
                <p className="text-muted-foreground text-lg">Chicago, IL & Surrounding Suburbs</p>
              </div>
              <div>
                 <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Follow Us</h3>
                 <div className="flex space-x-4 text-muted-foreground">
                   <a href="#" className="hover:text-white transition-colors">Instagram</a>
                   <a href="#" className="hover:text-white transition-colors">Facebook</a>
                 </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-muted/10 p-8 rounded-3xl border border-white/5">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black mb-6">
                    <Send size={32} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-4">Message Sent</h2>
                  <p className="text-muted-foreground">We will get back to you within 24 hours to discuss your culinary needs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                      <input type="text" id="name" required className="w-full bg-transparent border-b border-muted-foreground/30 py-4 focus:border-accent focus:outline-none transition-colors text-lg" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                      <input type="email" id="email" required className="w-full bg-transparent border-b border-muted-foreground/30 py-4 focus:border-accent focus:outline-none transition-colors text-lg" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">Inquiry Type</label>
                     <select id="subject" className="w-full bg-transparent border-b border-muted-foreground/30 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-foreground">
                        <option className="bg-muted text-white">Personal Chef Service</option>
                        <option className="bg-muted text-white">Cooking Class</option>
                        <option className="bg-muted text-white">Catering / Event</option>
                        <option className="bg-muted text-white">Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                    <textarea id="message" rows={4} required className="w-full bg-transparent border-b border-muted-foreground/30 py-4 focus:border-accent focus:outline-none transition-colors text-lg resize-none" placeholder="Tell us about your event or dietary needs..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-black py-5 rounded-full font-bold hover:bg-accent transition-colors text-lg uppercase tracking-widest">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
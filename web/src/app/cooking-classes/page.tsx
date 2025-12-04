'use client'
import Navbar from '@/components/Navbar'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import Link from 'next/link'

export default function CookingClasses() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
           {/* Hero */}
           <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-24 group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full brightness-50 group-hover:scale-105 transition-transform duration-1000"
            >
              <source src="/assets/cooking-class-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-12 md:px-24">
               <p className="text-accent font-serif italic text-2xl mb-4">Chef Jess at Home</p>
               <h1 className="text-6xl md:text-9xl font-serif font-bold mb-6 tracking-tighter text-white max-w-3xl">
                 Private Cooking Classes
               </h1>
               <p className="text-xl md:text-3xl font-light text-white/90 tracking-wide max-w-xl border-l-4 border-accent pl-6">
                 Comfort and creativity in the perfect learning environment.
               </p>
            </div>
          </div>

           <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                  The Heart of <br/><span className="text-accent">The Home.</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Today’s modern mantra of fast life and fast food has pulled us all away from the heart of the home, which is the kitchen. 
                  Allow Chef’s passion for home cooking to take you on a culinary journey through your kitchen ending in delicious food and essential life skills.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 <div className="p-8 border border-white/5 rounded-2xl bg-white/5">
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 border-b border-accent/30 pb-2">Classes Designed For</h3>
                    <ul className="space-y-3 text-lg text-muted-foreground">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Single bachelors and bachelorettes</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Quality Family Time</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Girl&apos;s Night In</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Date Night</li>
                    </ul>
                 </div>

                 <div className="p-8 border border-white/5 rounded-2xl bg-white/5">
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 border-b border-accent/30 pb-2">Winter Classes</h3>
                    <ul className="space-y-3 text-lg text-muted-foreground">
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">Spaghetti and Meatballs</strong> - a family workshop</span></li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">Pizza Night!</strong></span></li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">Soulful Sundays</strong> - customizable comfort food menu</span></li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">Chicken Soup is Good for the Soul</strong> - classic chicken noodle soup for beginners</span></li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">&quot;Date Night&quot;</strong> - surf and turf for two</span></li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">Hearty Chili 3 Ways!</strong></span></li>
                      <li className="flex items-start"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5"></span><span><strong className="text-white">Game Day foods!</strong> - for the fellas and the women who cook for them</span></li>
                    </ul>
                 </div>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="inline-block px-10 py-5 bg-accent text-black font-bold rounded-full hover:bg-white transition-all hover:scale-105 uppercase tracking-widest text-sm">
                  Schedule Your Class
                </Link>
              </div>
            </div>
            
            <div className="relative h-full min-h-[800px] rounded-2xl overflow-hidden">
               {/* Sticky Image Column */}
               <div className="sticky top-32 h-[80vh] w-full rounded-2xl overflow-hidden">
                 <Image 
                   src="/assets/culinary-experience.jpg" 
                   alt="Culinary Experience" 
                   fill 
                   className="object-cover" 
                 />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-12">
                    <p className="text-white italic text-xl">&quot;Cooking is about creating something delicious for someone else.&quot;</p>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
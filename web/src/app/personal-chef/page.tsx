'use client'
import Navbar from '@/components/Navbar'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import Link from 'next/link'

export default function PersonalChef() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
           {/* Hero Section of Page */}
          <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-24 group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full brightness-50 group-hover:scale-105 transition-transform duration-1000"
            >
              <source src="/assets/personal-chef-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
               <p className="text-accent font-serif italic text-2xl mb-4">Your Kitchen. Your Rules.</p>
               <h1 className="text-6xl md:text-9xl font-serif font-bold mb-6 tracking-tighter text-white">Personal Chef</h1>
               <p className="text-xl md:text-3xl font-light text-white/90 tracking-wide max-w-2xl">
                 How it works: Simple, Fresh, Convenient.
               </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-16">
               
               {/* Getting Started */}
               <div className="group">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-serif text-accent/40 font-bold group-hover:text-accent transition-colors">01</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Getting Started</h2>
                 </div>
                 <p className="text-xl text-muted-foreground font-light leading-relaxed border-l border-white/10 pl-6 group-hover:border-accent transition-colors">
                   As your personal chef, Chef Jess wants to understand what you like to eat and your dietary goals. 
                   Meet with Chef Jess and tell her what you need. It&apos;s that simple. 
                   Armed with this information, she will customize menus for you and assist you in selecting an initial set of meals for your first cook date.
                 </p>
               </div>

               {/* Cooking Day */}
               <div className="group">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-serif text-accent/40 font-bold group-hover:text-accent transition-colors">02</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Cooking Day</h2>
                 </div>
                 <p className="text-xl text-muted-foreground font-light leading-relaxed border-l border-white/10 pl-6 group-hover:border-accent transition-colors">
                   Chef Jess gets an early start shopping for the freshest ingredients. Once she has made her customary stops to the local grocers, she heads straight over to your home. 
                   All you need to provide is adequate counter space, a working stove and oven, and a place to store the finished meals. 
                   Everything is prepared fresh to your specifications in the convenience of your own home.
                 </p>
               </div>

               {/* Dinner Time */}
               <div className="group">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-serif text-accent/40 font-bold group-hover:text-accent transition-colors">03</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Dinner Time</h2>
                 </div>
                 <p className="text-xl text-muted-foreground font-light leading-relaxed border-l border-white/10 pl-6 group-hover:border-accent transition-colors">
                   When you arrive home, you will be greeted with the aroma of your freshly prepared meals. You will also find the kitchen exactly as you left it. 
                   As you open the refrigerator you will see the meals organized into individual or family style servings. 
                   Each container will be labeled with specific heating and serving instructions.
                 </p>
               </div>

               <div className="pt-8">
                  <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-accent transition-all hover:scale-105 uppercase tracking-widest text-sm">
                    Book Consultation
                  </Link>
               </div>
            </div>

            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden bg-muted/5 lg:sticky lg:top-32">
               {/* Decorative background */}
               <Image 
                 src="/assets/6b60bf_3de3e8a0366c4e0090538ed5a66cb3fe_mv2_d_1452.png" 
                 alt="Decoration" 
                 fill 
                 className="object-contain opacity-10 scale-150" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 backdrop-blur-xl p-12 rounded-2xl border border-white/10 max-w-sm text-center shadow-2xl">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-white">Weekly Service</h3>
                    <div className="w-12 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-muted-foreground mb-2 uppercase tracking-widest text-xs">Starting at</p>
                    <p className="text-7xl font-serif text-white font-bold mb-4">$350</p>
                    <p className="text-lg text-accent font-light mb-8">+ Cost of Groceries</p>
                    <ul className="text-left space-y-4 text-sm text-gray-300 mb-8">
                       <li className="flex items-center"><span className="text-accent mr-2">✓</span> Customized Menus</li>
                       <li className="flex items-center"><span className="text-accent mr-2">✓</span> Fresh Ingredient Shopping</li>
                       <li className="flex items-center"><span className="text-accent mr-2">✓</span> In-Home Preparation</li>
                       <li className="flex items-center"><span className="text-accent mr-2">✓</span> Kitchen Cleanup</li>
                    </ul>
                    <Link href="/contact" className="block w-full py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition-colors">
                        Get Started
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
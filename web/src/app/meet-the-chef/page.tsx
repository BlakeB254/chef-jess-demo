'use client'
import Navbar from '@/components/Navbar'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import Link from 'next/link'

export default function MeetTheChef() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
             {/* Image Column */}
            <div className="relative aspect-[3/4] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-32">
               <div className="absolute inset-0 border-2 border-accent/30 z-20 m-6 rounded-xl"></div>
               <Image 
                src="/assets/6b60bf_f5f0f04908594804ba5452f3e8e955ab_mv2_d_5340.jpg" 
                alt="Chef Jess" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" 
                priority
               />
            </div>

            {/* Content Column */}
            <div className="space-y-12 pt-12">
              <div>
                <p className="text-accent font-serif italic text-2xl mb-4">The Story</p>
                <h1 className="text-6xl md:text-8xl font-serif font-bold mb-12 tracking-tighter leading-none">
                  Meet <br/><span className="text-accent">Chef Jess</span>
                </h1>
              </div>
              
              <div className="prose prose-xl prose-invert font-light text-muted-foreground leading-relaxed space-y-8">
                <p>
                  <span className="text-white font-serif text-3xl block mb-4">&quot;It started in Great Aunt Loretta&apos;s kitchen.&quot;</span>
                  Chef Jess is a private chef based in Chicago, but her roots go much deeper. Her love for food was ignited at a very young age, watching her aunt cook with a passion and precision that mesmerized her.
                </p>
                <p>
                  That childhood wonder transformed into a professional pursuit. Jess graduated from The Art Institutes International Culinary School, mastering the techniques that would become the foundation of her style.
                </p>
                <p>
                  With additional certification as a bartender, she brings a holistic approach to dining—understanding that the perfect meal is a symphony of flavors, beverages, and atmosphere.
                </p>
                <p>
                  Today, Chef Jess brings the gourmet experience directly to your home. It&apos;s not just about saving you time; it&apos;s about creating a memory. Whether it&apos;s a weekly meal prep that transforms your Tuesday night or a private dinner party that your guests will talk about for years.
                </p>
              </div>

              <div className="pt-12 border-t border-muted">
                 <h3 className="text-2xl font-serif font-bold text-white mb-6">Specialties</h3>
                 <ul className="grid grid-cols-2 gap-4 text-muted-foreground">
                   <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-accent rounded-full"></span><span>Fine Dining Plating</span></li>
                   <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-accent rounded-full"></span><span>Global Fusion</span></li>
                   <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-accent rounded-full"></span><span>Dietary Customization</span></li>
                   <li className="flex items-center space-x-2"><span className="w-2 h-2 bg-accent rounded-full"></span><span>Event Curation</span></li>
                 </ul>
              </div>
              
              <div className="pt-8">
                 <Link 
                  href="/contact" 
                  className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-accent transition-all hover:scale-105"
                 >
                  Book Chef Jess
                 </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
import Navbar from '@/components/Navbar'
import { FadeIn } from '@/components/FadeIn'
import { LazyVideo } from '@/components/LazyVideo'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - Full Screen Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyVideo
            src="/assets/hero-video.mp4"
            poster="/assets/6b60bf_1b6be86e30004dcdad38e1a76c0dd90f_mv2_d_3840.jpg"
            className="object-cover w-full h-full brightness-50 scale-105"
            priority
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl">
          <FadeIn>
            <p className="text-accent font-serif italic text-2xl md:text-3xl mb-6 tracking-wider">Welcome to Chef Jess Cooks</p>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 tracking-tighter leading-none drop-shadow-2xl">
              Gourmet Chef <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">At Your Table</span>
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-12 text-white/90 max-w-2xl mx-auto">
              Experience the luxury of fine dining in the comfort of your home.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="/order"
                className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 uppercase tracking-widest text-sm">Order Online</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
              <Link
                href="/contact"
                className="px-12 py-5 bg-transparent border border-white/30 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-all hover:border-white uppercase tracking-widest text-sm"
              >
                Book Chef Jess
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-6 bg-background relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-12">
              &quot;My love for food started at a very young age. I would watch my Great Aunt Loretta cook every single day. She was my inspiration.&quot;
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              Chef Jess is a graduate of <span className="text-white">The Art Institutes International Culinary School</span> and a certified bartender. 
              Combining professional technique with deep-rooted passion, she creates unforgettable culinary moments for you and your guests.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Gallery - Using Videos */}
      <section className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            <FadeIn>
              <Link href="/personal-chef" className="group block relative h-[80vh] overflow-hidden rounded-3xl">
                <LazyVideo
                  src="/assets/personal-chef-hero.mp4"
                  poster="/assets/6b60bf_472e628fc77941f0b50a1a39a8387d6a_mv2_d_5760.jpg"
                  className="object-cover w-full h-full brightness-75 group-hover:brightness-90 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end items-start text-left">
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
                    <p className="text-accent font-serif italic text-2xl mb-2">Your Personal Chef</p>
                    <h3 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">In-Home Dining</h3>
                    <p className="text-white/80 text-lg max-w-md border-l-2 border-accent pl-6">
                      Weekly meal prep and private events using the freshest ingredients tailored to your diet.
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <div className="flex flex-col gap-4">
              <FadeIn delay={0.1}>
                <Link href="/cooking-classes" className="group block relative h-[45vh] overflow-hidden rounded-3xl">
                  <LazyVideo
                    src="/assets/cooking-class-hero.mp4"
                    poster="/assets/6b60bf_7b5e1bcb75574254b73c62a6b3dbd07e_mv2_d_5760.jpg"
                    className="object-cover w-full h-full brightness-75 group-hover:brightness-90 transition-all duration-1000 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-10">
                     <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Cooking Classes</h3>
                     <p className="text-accent italic">Learn. Create. Taste.</p>
                  </div>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link href="/order" className="group block relative h-[34vh] overflow-hidden rounded-3xl">
                  <LazyVideo
                    src="/assets/catering-hero.mp4"
                    poster="/assets/6b60bf_92f7fe2510024194a251542c0581d23c_mv2_d_5760.jpg"
                    className="object-cover w-full h-full brightness-75 group-hover:brightness-90 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                   <div className="absolute bottom-0 left-0 p-10">
                     <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Catering</h3>
                     <p className="text-accent italic">Delivered to your door.</p>
                  </div>
                </Link>
              </FadeIn>
            </div>
        </div>
      </section>

      {/* Testimonials / Impact Section */}
      <section className="py-32 px-6 bg-[#1a1a1a] my-12">
         <div className="max-w-6xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-accent font-serif italic text-3xl mb-16">Client Love</h2>
              <div className="grid md:grid-cols-3 gap-12">
                 <div className="p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors bg-black/20">
                    <div className="text-accent text-4xl font-serif mb-6">&quot;</div>
                    <p className="text-lg text-gray-300 italic mb-6">
                      Chef Jess made our anniversary dinner unforgettable. The presentation was stunning and every bite was perfect.
                    </p>
                    <p className="font-bold text-white uppercase tracking-widest text-sm">- Sarah M.</p>
                 </div>
                 <div className="p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors bg-black/20">
                    <div className="text-accent text-4xl font-serif mb-6">&quot;</div>
                    <p className="text-lg text-gray-300 italic mb-6">
                      Her weekly meal prep has saved my life. Healthy, delicious, and so varied. I don&apos;t know what I&apos;d do without her!
                    </p>
                    <p className="font-bold text-white uppercase tracking-widest text-sm">- Michael R.</p>
                 </div>
                 <div className="p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors bg-black/20">
                    <div className="text-accent text-4xl font-serif mb-6">&quot;</div>
                    <p className="text-lg text-gray-300 italic mb-6">
                      The cooking class was a blast! Jess is so patient and knowledgeable. We learned so much and had a great time.
                    </p>
                    <p className="font-bold text-white uppercase tracking-widest text-sm">- The Davis Family</p>
                 </div>
              </div>
            </FadeIn>
         </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-12 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-4 opacity-50 hover:opacity-100 transition-opacity duration-700">
           {/* Using available atmosphere images */}
           {['5e8760804ad34282ac257dba59c4f2a0.jpg', 'a4f5367577aa425aa87387f2f68b4c46.jpg', 'a8c8b20ddaef438da5d7565646cfbe52.jpg', '6b60bf_92f7fe2510024194a251542c0581d23c_mv2_d_5760.jpg', '6b60bf_dca46010c92540fd94dc85a3083c8f29_mv2_d_5760.jpg', '6b60bf_472e628fc77941f0b50a1a39a8387d6a_mv2_d_5760.jpg'].map((img, i) => (
             <div key={i} className="relative flex-shrink-0 w-64 h-64 rounded-xl overflow-hidden">
                <Image src={`/assets/${img}`} alt="Gallery" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
           ))}
        </div>
      </section>

      {/* Meet the Chef Teaser */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 border-2 border-accent/50 z-20 m-4 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <Image
                src="/assets/6b60bf_f5f0f04908594804ba5452f3e8e955ab_mv2_d_5340.jpg"
                alt="Chef Jess"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 leading-none">
              Meet <br/><span className="text-accent">Chef Jess</span>
            </h2>
            <p className="text-xl font-light text-muted-foreground leading-relaxed mb-8">
              &quot;I believe that food brings people together. It&apos;s the center of every celebration and the comfort in every home.&quot;
            </p>
            <Link href="/meet-the-chef" className="inline-block border-b border-accent pb-2 text-white hover:text-accent transition-colors uppercase tracking-widest text-sm font-bold">
              Read Full Story
            </Link>
          </FadeIn>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-white">Chef Jess Cooks</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-16 text-muted-foreground font-light uppercase tracking-widest text-sm">
            <a href="/order" className="hover:text-accent transition-colors">Order Online</a>
            <a href="/personal-chef" className="hover:text-accent transition-colors">Personal Chef</a>
            <a href="/cooking-classes" className="hover:text-accent transition-colors">Cooking Classes</a>
            <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground opacity-50">&copy; {new Date().getFullYear()} Chef Jess Cooks. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Footer from '../components/Footer';

// --- Gallery / Carousel images ---
import mum1 from '../assets/mumbai-masa/mum1.webp';
import mum2 from '../assets/mumbai-masa/mum2.webp'; 
import mum7 from '../assets/mumbai-masa/mum7.webp'; 
import mum3 from '../assets/mumbai-masa/mum3.webp';
import mum4 from '../assets/mumbai-masa/mum4.webp'; 
import mum5 from '../assets/mumbai-masa/mum5.webp'; 
import mum6 from '../assets/mumbai-masa/mum6.webp'; 


// --- Mumbai / Executive team images ---

const MahagrowthPage = () => {
  // ---------- Hero Carousel ----------
  const gallery = [mum1, mum2, mum3, mum4, mum5, mum6, mum7];
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setCurrent((p) => (p + 1) % gallery.length);
    }, 4500);
    return () => clearInterval(id);
  }, [gallery.length]);

  const next = () => {
    setDir(1);
    setCurrent((p) => (p + 1) % gallery.length);
  };
  const prev = () => {
    setDir(-1);
    setCurrent((p) => (p - 1 + gallery.length) % gallery.length);
  };

  // ---------- Mumbai Chapter Team ----------




  return (
    <div className="bg-gray-50">
      {/* ===== HERO / CAROUSEL ===== */}
      <div className="px-4 md:px-16 pt-6">
        <div className="relative w-full h-[380px] sm:h-[600px] md:h-[550px] rounded-2xl shadow-xl overflow-hidden">
          <AnimatePresence custom={dir}>
            <motion.img
              key={current}
              src={gallery[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover absolute"
              custom={dir}
              initial={{ opacity: 0, x: dir > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -100 : 100 }}
              transition={{ duration: 0.45 }}
            />
          </AnimatePresence>

          {/* dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/45 transition"
            aria-label="Previous slide"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/45 transition"
            aria-label="Next slide"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ===== ABOUT + JOIN CTA ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-16 py-10">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
          <div className="p-6 sm:p-10 text-center sm:text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MASA Mumbai Chapter
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Launched on August 23, 2025, at the prestigious National Stock Exchange (NSE), the Mumbai MASA Chapter is a vibrant community of entrepreneurs, founders, investors, and professionals driving collaboration and growth across industries. Join our dynamic ecosystem to explore events, connect with peers, and contribute to Mumbai’s thriving innovation landscape.
              </p>
            </div>
            <div className="flex md:justify-end">
              <motion.a
                href="https://forms.gle/zacindHJnyGkKkKAA"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl text-lg font-semibold border-2 border-white transform transition-all duration-300"
              >
                Join as Member <FiArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      

      {/* ===== TEAM ===== */}
     

      <Footer />
    </div>
  );
};

export default MahagrowthPage;
import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiUsers, FiAward } from 'react-icons/fi';
import LiteYouTube from "../components/LiteYouTube";

// Lazy load the Footer component
const Footer = lazy(() => import('../components/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
  </div>
);

const MahagrowthPage = () => {
  // ---------- Hero Carousel ----------
  const gallery = useMemo(() => [
    "/images/mumbai-masa/mum1.webp",
    "/images/mumbai-masa/mum2.webp",
    "/images/mumbai-masa/mum3.webp",
  
    "/images/mumbai-masa/mum5.webp",
    "/images/mumbai-masa/mum6.webp",
    "/images/mumbai-masa/mum7.webp",
    "/images/mumbai-masa/mum12-min.webp",
    "/images/mumbai-masa/mum13-min.webp",
    "/images/mumbai-masa/mum14-min.webp",
    "/images/mumbai-masa/mum15-min.webp",
    "/images/mumbai-masa/mum16-min.webp",
    "/images/mumbai-masa/mum17-min.webp",
    "/images/mumbai-masa/mum18-min.webp",
    "/images/mumbai-masa/mum19-min.webp",
    "/images/mumbai-masa/mum20.jpg",
    "/images/mumbai-masa/mum21.jpg",
   
  ], []);
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  // Preload only the first image (so spinner goes away quickly)
useEffect(() => {
  const img = new Image();
  img.src = gallery[0];
  img.onload = () => setIsLoading(false);
  img.onerror = () => setIsLoading(false);

  // Preload remaining images in background (non-blocking)
  gallery.slice(1).forEach((src) => {
    const bgImg = new Image();
    bgImg.src = src;
  });
}, [gallery]);

// Auto-play carousel after first image is ready
useEffect(() => {
  if (isLoading) return;

  const id = setInterval(() => {
    setDir(1);
    setCurrent((p) => (p + 1) % gallery.length);
  }, 4500);

  return () => clearInterval(id);
}, [gallery.length, isLoading]);


  const next = () => {
    setDir(1);
    setCurrent((p) => (p + 1) % gallery.length);
  };

  const prev = () => {
    setDir(-1);
    setCurrent((p) => (p - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="bg-gray-50">
      {/* ===== HERO / CAROUSEL ===== */}
      <div className="px-4 md:px-16 pt-6">
        <div className="relative w-full h-[380px] sm:h-[600px] md:h-[550px] rounded-2xl shadow-xl overflow-hidden">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
          ) : (
            <>
              <AnimatePresence custom={dir}>
                <motion.img
                  key={current}
                  src={gallery[current]}
                  alt={`Slide ${current + 1}`}
                  className="w-full h-full object-contain bg-gray-200"
                  custom={dir}
                  initial={{ opacity: 0, x: dir > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir > 0 ? -100 : 100 }}
                  transition={{ duration: 0.45 }}
                  loading="eager"
                  decoding="async"
                />
              </AnimatePresence>

              {/* dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
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
            </>
          )}
        </div>
      </div>

      {/* ===== MODERN ABOUT + JOIN CTA SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-16 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Animated gradient border */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-300, 300] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
          
          <div className="p-6 sm:p-10 text-center sm:text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                MASA Mumbai Chapter
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4"
              >
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">Launched at National Stock Exchange (NSE)</span>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-700 text-base sm:text-lg leading-relaxed"
              >
                Launched on August 23, 2025, at the prestigious <span className="font-semibold text-blue-600">National Stock Exchange (NSE)</span>, the Mumbai MASA Chapter is a vibrant community of entrepreneurs, founders, investors, and professionals driving collaboration and growth across industries. Join our dynamic ecosystem to explore events, connect with peers, and contribute to Mumbai's thriving innovation landscape.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-5 md:justify-end"
            >
              <motion.a
                href="https://forms.gle/zacindHJnyGkKkKAA"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold border-2 border-white overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiAward className="w-6 h-6 relative z-10" />
                <span className="relative z-10"> Executive Membership</span>
                <FiArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="https://forms.gle/AVyYpgTkyZ3bLGEa7"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold border-2 border-white overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiUsers className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Basic Membership</span>
                <FiArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-200/30 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-purple-200/30 blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </section>

      {/* ===== MyPowerBrand Podcast Section ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
          <div className="p-6 sm:p-12 space-y-10 text-center">
            <div className="space-y-4">
              <img
                src="/images/mumbai-masa/mum1.webp"
                alt="MyPowerBrand Logo"
                className="mx-auto h-28 md:h-32 object-contain"
              />
              <p className="text-sm text-gray-600 mt-3 italic text-center">
                An initiative by <span className="font-semibold text-pink-600">MASA Forum</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
                MyPowerBrand Podcast
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                Showcasing changemakers, entrepreneurs & industry leaders who built their
                brands from scratch. Watch past episodes and nominate yourself or someone inspiring
                for the next feature.
              </p>
            </div>

            {/* Lite YouTube embeds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { id: "vupFdZH_rj0", title: "Episode 1" },
                { id: "hsn3ihKhwkQ", title: "Episode 2" },
                { id: "CEj0tZZm1sk", title: "Episode 3" },
                { id: "pcYYNI_0wrU", title: "Episode 4" },
                { id: "zz2pYzgw7pc", title: "Episode 5" },
              ].map((v, i) => (
                <LiteYouTube key={i} id={v.id} title={v.title} />
              ))}
            </div>

            <motion.a
              href="https://forms.gle/RNa99CqMaQaGfrqY9"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-600 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-semibold border-2 border-white overflow-hidden group"
            >
              <span className="relative z-10">Nominate Yourself</span>
              <FiArrowRight className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Lazy loaded Footer with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default MahagrowthPage;
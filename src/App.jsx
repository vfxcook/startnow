import { motion, useScroll, useTransform } from "framer-motion";

export default function VfxCookRateCard() {
  const { scrollYProgress } = useScroll();

  const blob1X = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const blob2X = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const blob3X = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative">

      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          className="absolute w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl"
          style={{ x: blob1X, y: blob1Y }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-3xl"
          style={{ x: blob2X, y: blob2Y }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-green-500 opacity-30 rounded-full blur-3xl"
          style={{ x: blob3X, y: blob3Y }}
        />
      </div>

      {/* Top Navigation with Logo */}
      <nav className="w-full flex justify-between items-center p-4">
        <div></div> {/* Left space */}
        <img src="/logo.png" alt="VFX Cook Logo" className="h-10" />
      </nav>

      {/* Hero Section */}
      <section className="w-full text-center p-10">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold mb-4">
          Bring Your Story to Life
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-lg md:text-2xl text-gray-400">
          VFX Cook crafts unforgettable videos, combining imagination and technology.
        </motion.p>
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="mt-6">
          <a href="https://wa.me/919353720487?text=I'm%20interested%20in%20starting%20a%20project%20with%20VFX%20Cook" className="inline-block px-6 py-3 bg-green-500 rounded-full text-black font-bold">
            Get Started
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-3xl font-bold mb-2">🎬 AI-Generated Video Packages</h2>
        <p className="text-gray-400 mb-8">Fast, affordable, AI-powered storytelling</p>
        <div className="grid gap-8 md:grid-cols-2">
          {[{ title: "30-Second AI Video", price: "₹3,000 (Without Lipsync) / ₹3,500 (With Lipsync)" },
            { title: "1-Minute AI Video", price: "₹5,000 (Without Lipsync) / ₹5,500 (With Lipsync)" }].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 shadow-lg rounded-2xl border hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CGI Product Marketing */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-3xl font-bold mb-2">🛍️ CGI 3D Product Marketing</h2>
        <p className="text-gray-400 mb-8">Crafted CGI to make your product shine</p>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 shadow-lg rounded-2xl border hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">CGI 3D Product Marketing Video</h3>
          <p className="text-gray-400">Starting From ₹15,000 (Up to 60s)</p>
        </motion.div>
      </section>

      {/* Explainer Videos */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-3xl font-bold mb-2">🎥 Explainer & Walkthrough Videos</h2>
        <p className="text-gray-400 mb-8">Explain, educate, and inspire</p>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 shadow-lg rounded-2xl border hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Explainer Videos</h3>
          <p className="text-gray-400">Starting From ₹30,000</p>
        </motion.div>
      </section>

      {/* Product Trailers */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-3xl font-bold mb-2">🚀 Product Trailers</h2>
        <p className="text-gray-400 mb-8">Launch your product with a bang</p>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-800 shadow-lg rounded-2xl border hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Product Trailers</h3>
          <p className="text-gray-400">Starting From ₹25,000</p>
        </motion.div>
      </section>

      {/* Our Process Section */}
      <section className="w-full max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
        <div className="space-y-8">
          {[
            "Story & Idea Generation",
            "Storyboard Creation",
            "Image Production (Post-Approval)",
            "Video Assembly & Editing"
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center text-lg font-bold">
                {idx + 1}
              </div>
              <p className="text-xl text-gray-300">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="w-full px-6 py-10 bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-6">Important Notes</h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-gray-400">
          <li>Alterations after storyboard approval will incur additional charges, even if the final video remains within the original time limit.</li>
          <li>Voiceovers, scripting assistance, and multi-language support are available upon request and may require additional fees.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold mb-6">
          Ready to Create Magic?
        </motion.h2>
        <a href="https://wa.me/919353720487?text=I'm%20interested%20in%20starting%20a%20project%20with%20VFX%20Cook" className="inline-block px-8 py-4 bg-green-500 rounded-full text-black font-bold">
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 text-gray-500 text-sm">
        <p>© 2025 VFX Cook. All rights reserved.</p>
        <p className="mt-2">
          Follow us on <a href="https://instagram.com/vfxcook" target="_blank" rel="noopener noreferrer" className="text-green-400">@vfxcook</a>
        </p>
      </footer>

    </div>
  );
}

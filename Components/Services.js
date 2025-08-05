import React from 'react'

export default function Services() {
  return (
    <section className="py-16 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="group bg-gray-900 rounded-xl p-8 border border-gray-800 hover:shadow-xl hover:scale-[1.02] transition duration-300">
                <div className="text-green-400 mb-4 text-4xl transition group-hover:scale-110">
                🌐
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-400 mb-4">
                We create fast, responsive, and SEO-optimized websites tailored to your business needs.
                </p>
                <button className="text-sm text-green-400 group-hover:underline transition">Learn More →</button>
            </div>

            {/* App Development */}
            <div className="group bg-gray-900 rounded-xl p-8 border border-gray-800 hover:shadow-xl hover:scale-[1.02] transition duration-300">
                <div className="text-blue-400 mb-4 text-4xl transition group-hover:scale-110">
                📱
                </div>
                <h3 className="text-xl font-semibold mb-2">App Development</h3>
                <p className="text-gray-400 mb-4">
                Build cross-platform mobile apps with stunning UI and great performance using Flutter or React Native.
                </p>
                <button className="text-sm text-blue-400 group-hover:underline transition">Learn More →</button>
            </div>

            {/* Video Editing */}
            <div className="group bg-gray-900 rounded-xl p-8 border border-gray-800 hover:shadow-xl hover:scale-[1.02] transition duration-300">
                <div className="text-pink-400 mb-4 text-4xl transition group-hover:scale-110">
                🎬
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
                <p className="text-gray-400 mb-4">
                From promotional videos to YouTube editing — we craft engaging stories that captivate your audience.
                </p>
                <button className="text-sm text-pink-400 group-hover:underline transition">Learn More →</button>
            </div>
            </div>
        </div>
        </section>

  )
}

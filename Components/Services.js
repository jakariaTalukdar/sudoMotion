import React from 'react'

export default function Services() {
  return (
    <section className="customRadialGreadiant py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2 uppercase">OUR Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Hot Beverages */}
            <div className="flex flex-col items-center">
                <img src="/Image/web.png" alt="Hot Beverages" className="w-40 h-40 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-alpha max-w-xs">We create fast, responsive, and SEO-optimized websites tailored to your business needs.</p>
            </div>

            {/* Cold Beverages */}
            <div className="flex flex-col items-center">
                <img src="/Image/app.png" alt="Cold Beverages" className="w-40 h-40 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">App Development</h3>
                <p className="text-alpha max-w-xs">Build cross-platform mobile apps with stunning UI and great performance using Flutter or React Native.</p>
            </div>

            {/* Refreshment */}
            <div className="flex flex-col items-center">
                <img src="/Image/video.png" alt="Refreshment" className="w-40 h-40 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
                <p className="text-alpha max-w-xs">From promotional videos to YouTube editing — we craft engaging stories that captivate your audience.</p>
            </div>
            </div>
        </div>
    </section>

  )
}

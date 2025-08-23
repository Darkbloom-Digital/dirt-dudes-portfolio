import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Property Owner",
    quote: "They transformed our overgrown property into a beautiful, usable space. Their professionalism and attention to detail were outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Real Estate Developer",
    quote: "We've worked with many land clearing companies, but this team stands out for their reliability and quality of work. They're our go-to choice now.",
    rating: 5
  },
  {
    id: 3,
    name: "Mike Williams",
    role: "Homeowner",
    quote: "The team was incredibly efficient and professional. They cleared our lot for our new home construction ahead of schedule.",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Farm Owner",
    quote: "Their expertise in land clearing and grading is unmatched. They helped us prepare our farmland while preserving important natural features.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <div className="relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
              TESTIMONIALS
            </h2>
            <div className="h-[2px] bg-red-600 flex-grow ml-8"></div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative h-[340px] sm:h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : index < activeIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-base sm:text-xl text-white italic mb-8">&quot;{testimonial.quote}&quot;</p>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-red-600">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm sm:text-base">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === activeIndex ? 'bg-red-600 w-5 sm:w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
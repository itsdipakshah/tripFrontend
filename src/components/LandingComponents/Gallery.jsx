import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Mountain Adventures",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      category: "Adventure",
    },
    {
      id: 2,
      title: "Beach Paradise",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      category: "Beach",
    },
    {
      id: 3,
      title: "City Exploration",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=400&fit=crop",
      category: "Urban",
    },
    {
      id: 4,
      title: "Cultural Heritage",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
      category: "Culture",
    },
    {
      id: 5,
      title: "Desert Wonders",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop",
      category: "Nature",
    },
    {
      id: 6,
      title: "Forest Trails",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop",
      category: "Nature",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Explore inspiring destinations managed through TripManager
          </p>
        </div>

        {/* Featured Gallery */}
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden h-96 md:h-[500px] bg-gray-200">
            <img
              src={galleryItems[activeIndex].image}
              alt={galleryItems[activeIndex].title}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">
                  {galleryItems[activeIndex].title}
                </h3>
                <span className="inline-block bg-blue-600 px-4 py-1 rounded-full text-sm">
                  {galleryItems[activeIndex].category}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Explore Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-lg cursor-pointer group h-64 ${
                  index === activeIndex ? "ring-4 ring-blue-600" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Eye className="text-white" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

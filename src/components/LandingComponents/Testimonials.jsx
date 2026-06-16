import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "Travel Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "TripManager has completely transformed how I plan my adventures. It&apos;s intuitive, powerful, and makes collaboration so easy!",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Adventure Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "The best trip planning tool I&apos;ve used. Managing group trips with friends has never been simpler. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Family Travel Planner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "Keeping everything organized for family vacations is no longer a headache. Love the budget tracking feature!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Handles both leisure and business travel seamlessly. The itinerary feature is game-changing for my workflow.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of happy travelers who trust TripManager
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

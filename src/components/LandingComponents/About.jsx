import { MapPin, Users, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: MapPin,
      title: "Plan Your Journey",
      description:
        "Discover amazing destinations and create detailed itineraries tailored to your preferences.",
    },
    {
      icon: Users,
      title: "Travel Together",
      description:
        "Share trips with friends and family, collaborate on plans, and make memories together.",
    },
    {
      icon: Zap,
      title: "Effortless Organization",
      description:
        "Keep all your travel details in one place - bookings, reservations, budgets, and more.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About TripManager
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re revolutionizing how travelers plan and manage their
            adventures. Whether you&apos;re a solo explorer, a group of friends,
            or a family planner, we&apos;ve got the tools to make your trip
            unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Active Travelers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <p className="text-blue-100">Trips Planned</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">180+</div>
              <p className="text-blue-100">Countries Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#security" },
      { label: "Blog", href: "#blog" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Documentation", href: "#docs" },
      { label: "Help Center", href: "#help" },
      { label: "Community", href: "#community" },
      { label: "API", href: "#api" },
    ],
    Legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "License", href: "#license" },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: "#facebook", label: "Facebook" },
    { icon: Mail, href: "#twitter", label: "Twitter" },
    { icon: Mail, href: "#instagram", label: "Instagram" },
    { icon: Mail, href: "#linkedin", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Get travel tips, exclusive deals, and updates delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600 flex-shrink-0" />
                  <a
                    href="mailto:support@tripmanager.com"
                    className="hover:text-white transition-colors"
                  >
                    support@tripmanager.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                  <span>123 Travel Street, Adventure City, AC 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-bold text-white">
              🌍 TripManager
            </div>
            <p className="text-gray-500 text-sm">
              Made with{" "}
              <Heart
                size={16}
                className="inline text-red-500 fill-red-500"
              />{" "}
              by Travel Enthusiasts
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} TripManager. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

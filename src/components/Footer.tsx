
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    {
      title: "Platform",
      links: [
        { name: "Job Portal", href: "/career/jobs" },
        { name: "My Applications", href: "/career/applications" },
        { name: "Success Stories", href: "/career/success-stories" },
        { name: "About Us", href: "/about" },
      ],
    },
    {
      title: "For Students",
      links: [
        { name: "Sign Up", href: "/signup/student" },
        { name: "Login", href: "/login/student" },
        { name: "Career Guidance", href: "/guidance" },
        { name: "Resources", href: "/resources" },
      ],
    },
    {
      title: "For Alumni",
      links: [
        { name: "Join Network", href: "/signup/alumni" },
        { name: "Mentor Students", href: "/mentor" },
        { name: "Share Experience", href: "/share-story" },
        { name: "Alumni Login", href: "/login/alumni" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">Asthra</span>
            </Link>
            <p className="text-white/70 mb-4 text-sm">
              Connecting students, alumni, and career opportunities. Your gateway
              to professional success and meaningful connections.
            </p>

            {/* Contact Info */}
            <div className="space-y-1 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>contact@asthra.career</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>123 Career Avenue, Success City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-2 text-sm">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-white/70 mb-3 md:mb-0">
            © 2025 Asthra. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

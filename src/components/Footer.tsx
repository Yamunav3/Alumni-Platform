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
    { title: "Platform", links: [
      { name: "Job Portal", href: "/career/jobs" },
      { name: "My Applications", href: "/career/applications" },
      { name: "Success Stories", href: "/career/success-stories" },
      { name: "About Us", href: "/about" },
    ]},
    { title: "For Students", links: [
      { name: "Sign Up", href: "/signup/student" },
      { name: "Login", href: "/login/student" },
      { name: "Career Guidance", href: "/guidance" },
      { name: "Resources", href: "/resources" },
    ]},
    { title: "For Alumni", links: [
      { name: "Join Network", href: "/signup/alumni" },
      { name: "Mentor Students", href: "/mentor" },
      { name: "Share Experience", href: "/share-story" },
      { name: "Alumni Login", href: "/login/alumni" },
    ]},
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-3xl font-bold">Asthra</span>
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Connecting students, alumni, and career opportunities. 
              Your gateway to professional success and meaningful connections.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-white/80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@asthra.career</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Career Avenue, Success City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/80 hover:text-white transition-colors duration-200"
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
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 mb-4 md:mb-0">
            © 2024 Asthra. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
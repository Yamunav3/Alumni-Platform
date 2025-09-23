import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  User,
  Bell,
  Menu,
  X,
}from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/staff/home", icon: Home },
  { name: "About Us", href: "/staff/about", icon: Users },
  { name: "Career Portal", href: "/staff/career", icon: Briefcase },
  { name: "Profile", href: "/staff/profile", icon: User },
  { name: "Notifications", href: "/staff/notifications", icon: Bell },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-light/20 bg-card-glass backdrop-blur-xl supports-[backdrop-filter]:bg-card-glass shadow-nav animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-neon animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text tracking-wide">Asthra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "nav-link px-4 py-3 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all duration-300 group relative",
                    isActive && "active bg-card-secondary/50 shadow-glass"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-all duration-300",
                      isActive
                        ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                        : "group-hover:text-primary"
                    )}
                  />
                  <span
                    className={cn(
                      "transition-all duration-300",
                      isActive && "text-primary font-semibold"
                    )}
                  >
                    {item.name}
                  </span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover-lift"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border-light/20 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "nav-link px-4 py-3 rounded-xl text-sm font-medium flex items-center space-x-3 transition-all duration-300 hover-lift relative",
                      isActive && "active bg-card-secondary/50 shadow-glass"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-all duration-300",
                        isActive
                          ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                          : ""
                      )}
                    />
                    <span
                      className={cn(
                        "transition-all duration-300",
                        isActive && "text-primary font-semibold"
                      )}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  Briefcase,
  Bell,
  Users,
  User,
  Menu,
  Trophy,
  X,
  CalendarDays,
  Heart,
  MoreVertical,
  LogOut,
  HelpCircle,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/alumni/home", icon: Home },
  { name: "Career", href: "/alumni/career", icon: Briefcase },
  { name: "Events", href: "/alumni/events", icon: CalendarDays },
  { name: "Donations", href: "/alumni/donations", icon: Heart },
  { name: "Gamification", href: "/alumni/gamification", icon: Trophy },
  { name: "Notifications", href: "/alumni/notifications", icon: Bell },
  { name: "Profile", href: "/alumni/profile", icon: User },
];

export const AlumniNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/alumni/home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent font-bold text-white shadow-lg shadow-primary/20">
              A
            </div>
            <span className="text-xl font-semibold text-slate-900">Asthra</span>
            <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
              Alumni
            </Badge>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2 transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle alumni menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-3">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2",
                      isActive
                        ? "bg-gradient-to-r from-primary to-accent text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

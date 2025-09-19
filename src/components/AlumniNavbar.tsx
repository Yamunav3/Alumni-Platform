// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { 
//   Home, 
//   Briefcase, 
//   Bell, 
//   Users, 
//   User,
//   Menu,
//   Building,
//   Trophy,
//   X,
//   Calendar1Icon,
//   Heart,
//   MoreVertical,
//   LogOut,
//   HelpCircle,
//   Settings
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// const navigation = [
//   { name: "Home", href: "/alumni/home", icon: Home },
//   { name: "Career Portal", href: "/alumni/career", icon: Briefcase },
//   { name: "Events", href: "/alumni/events", icon: Calendar1Icon },
//   { name: "Donations", href: "/alumni/donations", icon: Heart },
//   { name: "Gamification", href: "/alumni/gamification", icon: Trophy },
//   { name: "About Us", href: "/alumni/about", icon: Users },
//   { name: "Notifications", href: "/alumni/notifications", icon: Bell },
//   { name: "Profile", href: "/alumni/profile", icon: User },
// ];

// export const AlumniNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-border-light/20 bg-card-glass backdrop-blur-xl supports-[backdrop-filter]:bg-card-glass shadow-nav animate-fade-in">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo/Brand */}
//           <Link to="/" className="flex items-center space-x-3 hover-lift">
//             <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-neon animate-pulse-glow">
//               <span className="text-primary-foreground font-bold text-xl">A</span>
//             </div>
//             <span className="text-2xl font-bold gradient-text tracking-wide">Asthra</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-2">
//             {navigation.map((item) => {
//               const Icon = item.icon;
//               const isActive = location.pathname === item.href;
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={cn(
//                     "nav-link px-4 py-3 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all duration-300 group relative",
//                     isActive && "active bg-card-secondary/50 shadow-glass"
//                   )}
//                 >
//                   <Icon className={cn(
//                     "h-4 w-4 transition-all duration-300",
//                     isActive ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : "group-hover:text-primary"
//                   )} />
//                   <span className={cn(
//                     "transition-all duration-300",
//                     isActive && "text-primary font-semibold"
//                   )}>{item.name}</span>
//                   {isActive && (
//                     <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl" />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Right side buttons */}
//           <div className="flex items-center space-x-2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="h-5 w-5 rounded-xl hover-lift ml-2"
//                 >
//                   <MoreVertical className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
//                   <Settings className="h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer">
//                   <HelpCircle className="h-4 w-4" />
//                   <span>Help</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer text-destructive">
//                   <LogOut className="h-4 w-4" />
//                   <span>Logout</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <div className="md:hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="hover-lift"
//                 aria-label="Toggle navigation menu"
//                 aria-expanded={isOpen}
//               >
//                 {isOpen ? (
//                   <X className="h-5 w-5" />
//                 ) : (
//                   <Menu className="h-5 w-5" />
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden py-6 border-t border-border-light/20 animate-fade-in">
//             <div className="flex flex-col space-y-3">
//               {navigation.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = location.pathname === item.href;
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       "nav-link px-4 py-3 rounded-xl text-sm font-medium flex items-center space-x-3 transition-all duration-300 hover-lift",
//                       isActive && "active bg-card-secondary/50 shadow-glass"
//                     )}
//                   >
//                     <Icon className={cn(
//                       "h-5 w-5 transition-all duration-300",
//                       isActive ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : ""
//                     )} />
//                     <span className={cn(
//                       "transition-all duration-300",
//                       isActive && "text-primary font-semibold"
//                     )}>{item.name}</span>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };







import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Building,
  Trophy,
  X,
  Calendar1Icon,
  Heart,
  MoreVertical,
  LogOut,
  HelpCircle,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/alumni/home", icon: Home },
  { name: "Career Portal", href: "/alumni/career", icon: Briefcase },
  { name: "Events", href: "/alumni/events", icon: Calendar1Icon },
  { name: "Donations", href: "/alumni/donations", icon: Heart },
  { name: "Gamification", href: "/alumni/gamification", icon: Trophy },
  { name: "About Us", href: "/alumni/about", icon: Users },
  { name: "Notifications", href: "/alumni/notifications", icon: Bell },
  { name: "Profile", href: "/alumni/profile", icon: User },
];

export const AlumniNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-light/20 bg-card-glass backdrop-blur-xl supports-[backdrop-filter]:bg-card-glass shadow-nav animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-neon animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text tracking-wide">Asthra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
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
                  <Icon className={cn(
                    "h-4 w-4 transition-all duration-300",
                    isActive ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : "group-hover:text-primary"
                  )} />
                  <span className={cn(
                    "transition-all duration-300",
                    isActive && "text-primary font-semibold"
                  )}>{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 rounded-xl hover-lift ml-2"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-20 mt-1" // Reduced margin-top
                sideOffset={2} // Reduced offset from trigger
              >
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer py-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer py-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1" /> {/* Reduced separator margin */}
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer text-destructive py-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover-lift"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border-light/20 animate-fade-in"> {/* Reduced padding */}
            <div className="flex flex-col space-y-2"> {/* Reduced spacing */}
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "nav-link px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-3 transition-all duration-300 hover-lift", // Reduced padding
                      isActive && "active bg-card-secondary/50 shadow-glass"
                    )}
                  >
                    <Icon className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActive ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : ""
                    )} />
                    <span className={cn(
                      "transition-all duration-300",
                      isActive && "text-primary font-semibold"
                    )}>{item.name}</span>
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
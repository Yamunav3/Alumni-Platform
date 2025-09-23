// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { 
//   Home, 
//   Users, 
//   Briefcase, 
//   Calendar, 
//   User, 
//   Bell,
//   Menu,
//   X
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const navItems = [
//   { name: "Home", href: "/student", icon: Home },
//   { name: "About Us", href: "/student/about", icon: Users },
//   { name: "Career Portal", href: "/student/career", icon: Briefcase },
//   { name: "Events" , href: "/student/events",icon:Calendar},
//   { name: "Profile", href: "/student/profile", icon: User },
//   { name: "Notifications", href: "/student/notifications", icon: Bell },
// ];

// export function StudentNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <nav className="bg-card border-b border-border shadow-card-asthra">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">A</span>
//               </div>
//               <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
//                 Asthra
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const isActive = location.pathname === item.href;
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={cn(
//                     "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
//                     isActive
//                       ? "bg-gradient-primary text-white shadow-asthra"
//                       : "text-muted-foreground hover:text-foreground hover:bg-gradient-card"
//                   )}
//                 >
//                   <item.icon className="h-4 w-4" />
//                   <span>{item.name}</span>
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-muted-foreground hover:text-foreground"
//             >
//               {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden border-t border-border mt-2 pt-2 pb-4">
//             <div className="flex flex-col space-y-1">
//               {navItems.map((item) => {
//                 const isActive = location.pathname === item.href;
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
//                       isActive
//                         ? "bg-gradient-primary text-white shadow-asthra"
//                         : "text-muted-foreground hover:text-foreground hover:bg-gradient-card"
//                     )}
//                   >
//                     <item.icon className="h-4 w-4" />
//                     <span>{item.name}</span>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
// export default StudentNavbar




import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Briefcase, 
  Calendar, 
  User, 
  Bell,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/student/home", icon: Home },
  { name: "About Us", href: "/student/about", icon: Users },
  { name: "Career Portal", href: "/student/career", icon: Briefcase },
  { name: "Events", href: "/student/events", icon: Calendar },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Notifications", href: "/student/notifications", icon: Bell },
];

export const StudentNavbar = () => {
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

          <div className="flex items-center w-full max-w-xs mx-4">
{/* Search Bar */}
<div className="flex items-center w-full max-w-xs mx-4">
  <input
    type="text"
    placeholder="Search..."
    className="rounded-l-md border px-3 py-2 focus:outline-none focus:ring-0 focus:border-blue-500"
  />
  <button className="rounded-l-none bg-blue-600 text-white px-3 py-2 hover:bg-blue-700">
    Search
  </button>
</div>

          </div>

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
                    <Icon className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isActive ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : ""
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default StudentNavbar;




// import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
//       {/* Logo */}
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         Asthra
//       </Link>

//       {/* Search Bar */}
//       <div className="hidden md:flex items-center w-1/3">
//         <Input
//           type="text"
//           placeholder="Search..."
//           className="rounded-l-md border-r-0 focus:ring-0 focus:border-blue-500"
//         />
//         <Button className="rounded-l-none bg-blue-600 text-white hover:bg-blue-700">
//           Search
//         </Button>
//       </div>

//       {/* Links */}
//       <div className="flex items-center gap-6">
//         <Link to="/career" className="text-gray-700 hover:text-blue-600">
//           Career
//         </Link>
//         <Link to="/about" className="text-gray-700 hover:text-blue-600">
//           About
//         </Link>
//         <Link to="/contact" className="text-gray-700 hover:text-blue-600">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


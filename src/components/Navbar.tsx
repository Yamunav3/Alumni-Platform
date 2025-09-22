// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown, User, Users, Shield, GraduationCap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {Segmented}  from "antd";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   const userTypes = [
//     { name: "Student", icon: GraduationCap, path: "/login/student" },
//     { name: "Alumni", icon: Users, path: "/login/alumni" },
//     { name: "Staff", icon: User, path: "/login/staff" },
//     { name: "Admin", icon: Shield, path: "/login/admin" },
//   ];
//   const user = [
//     { name: "Student", icon: GraduationCap, path: "/login/student" },
//     { name: "Alumni", icon: Users, path: "/login/alumni" },
//     { name: "Staff", icon: User, path: "/login/staff" },

//   ];

//   return (
//     <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">A</span>
//             </div>
//             <span className="text-2xl font-bold gradient-text">Asthra</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className={`nav-link ${isActive("/") ? "text-primary" : ""}`}>
//               Home
//             </Link>
//             <Link to="/about" className={`nav-link ${isActive("/about") ? "text-primary" : ""}`}>
//               About Us
//             </Link>
            
//             {/* Career Portal Link - No dropdown
//             <Link 
//               to="/career" 
//               className={`nav-link ${isActive("/career") ? "text-primary" : ""}`}
//             >
//               Career Portal
//             </Link> */}

//             {/* Login Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline" className="flex items-center space-x-1">
//                   <span>Login</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-40">
//                 {userTypes.map((type, index) => (
//                   <div key={type.name}>
//                     <DropdownMenuItem asChild>
//                       <Link to={type.path} className="flex items-center space-x-2">
//                         <type.icon className="w-4 h-4" />
//                         <span>{type.name}</span>
//                       </Link>
//                     </DropdownMenuItem>
//                     {index < userTypes.length - 1 && <DropdownMenuSeparator />}
//                   </div>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Signup Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button className="btn-hero flex items-center space-x-1">
//                   <span>Sign Up</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-40">
//                 {user.map((type, index) => (
//                   <div key={type.name}>
//                     <DropdownMenuItem asChild>
//                       <Link to={`/signup/${type.name.toLowerCase()}`} className="flex items-center space-x-2">
//                         <type.icon className="w-4 h-4" />
//                         <span>{type.name}</span>
//                       </Link>
//                     </DropdownMenuItem>
//                     {index < user.length - 1 && <DropdownMenuSeparator />}
//                   </div>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-6 space-y-4">


//                <Segmented options={[ <Link 
//               to="/" 
//               className={`block nav-link ${isActive("/") ? "text-primary" : ""}`}
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`block nav-link ${isActive("/about") ? "text-primary" : ""}`}
//               onClick={() => setIsOpen(false)}
//             >
//               About Us
//             </Link>]} />
            
//             {/* Career Portal Link - No dropdown in mobile */}
//             <Link 
//               to="/career" 
//               className={`block nav-link ${isActive("/career") ? "text-primary" : ""}`}
//               onClick={() => setIsOpen(false)}
//             >
//               Career Portal
//             </Link>

//             <div className="space-y-2">
//               <div className="text-sm font-medium text-muted-foreground">Login As</div>
//               <div className="grid grid-cols-2 gap-2">
//                 {userTypes.map((type) => (
//                   <Link 
//                     key={type.name}
//                     to={type.path}
//                     className="flex items-center space-x-1 text-sm nav-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <type.icon className="w-4 h-4" />
//                     <span>{type.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="text-sm font-medium text-muted-foreground">Sign Up As</div>
//               <div className="grid grid-cols-2 gap-2">
//                 {user.map((type) => (
//                   <Link 
//                     key={type.name}
//                     to={`/signup/${type.name.toLowerCase()}`}
//                     className="flex items-center space-x-1 text-sm nav-link"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <type.icon className="w-4 h-4" />
//                     <span>{type.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, Users, Shield, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Segmented } from "antd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [selected, setSelected] = useState("home");

  // Sync with route
  useEffect(() => {
    if (location.pathname === "/") setSelected("home");
    else if (location.pathname === "/about") setSelected("about");
    else if (location.pathname === "/career") setSelected("career");
  }, [location.pathname]);

  const handleChange = (value: string) => {
    setSelected(value);
    if (value === "home") navigate("/");
    if (value === "about") navigate("/about");
    if (value === "career") navigate("/career");
  };

  const userTypes = [
    { name: "Student", icon: GraduationCap, path: "/login/student" },
    { name: "Alumni", icon: Users, path: "/login/alumni" },
    { name: "Staff", icon: User, path: "/login/staff" },
    { name: "Admin", icon: Shield, path: "/login/admin" },
  ];

  const user = [
    { name: "Student", icon: GraduationCap, path: "/login/student" },
    { name: "Alumni", icon: Users, path: "/login/alumni" },
    { name: "Staff", icon: User, path: "/login/staff" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Asthra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Segmented
              options={[
                { label: "Home", value: "home" },
                { label: "About Us", value: "about" },
               
              ]}
              value={selected}
              onChange={handleChange}
              className="custom-segmented"
            />

            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-1">
                  <span>Login</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {userTypes.map((type, index) => (
                  <div key={type.name}>
                    <DropdownMenuItem asChild>
                      <Link to={type.path} className="flex items-center space-x-2">
                        <type.icon className="w-4 h-4" />
                        <span>{type.name}</span>
                      </Link>
                    </DropdownMenuItem>
                    {index < userTypes.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Signup Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="btn-hero flex items-center space-x-1">
                  <span>Sign Up</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {user.map((type, index) => (
                  <div key={type.name}>
                    <DropdownMenuItem asChild>
                      <Link to={`/signup/${type.name.toLowerCase()}`} className="flex items-center space-x-2">
                        <type.icon className="w-4 h-4" />
                        <span>{type.name}</span>
                      </Link>
                    </DropdownMenuItem>
                    {index < user.length - 1 && <DropdownMenuSeparator />}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Segmented
              options={[
                { label: "Home", value: "home" },
                { label: "About Us", value: "about" },
                { label: "Career Portal", value: "career" },
              ]}
              value={selected}
              onChange={handleChange}
              block
              className="custom-segmented"
            />

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Login As</div>
              <div className="grid grid-cols-2 gap-2">
                {userTypes.map((type) => (
                  <Link key={type.name} to={type.path} className="flex items-center space-x-1 text-sm nav-link" onClick={() => setIsOpen(false)}>
                    <type.icon className="w-4 h-4" />
                    <span>{type.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Sign Up As</div>
              <div className="grid grid-cols-2 gap-2">
                {user.map((type) => (
                  <Link key={type.name} to={`/signup/${type.name.toLowerCase()}`} className="flex items-center space-x-1 text-sm nav-link" onClick={() => setIsOpen(false)}>
                    <type.icon className="w-4 h-4" />
                    <span>{type.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style>{`
        .custom-segmented .ant-segmented-item {
          min-width: 110px;
          text-align: center;
          border-radius: 6px;
          background: white;
          margin: 0 6px;
          color: #444;
          transition: all 0.3s ease;
        }
        .custom-segmented .ant-segmented-item-selected {
          background: linear-gradient(90deg, #2563eb, #1d4ed8);
          color: #fff !important;
        }
        .custom-segmented .ant-segmented-thumb {
          transition: all 0.4s ease; /* smooth movement */
          border-radius: 6px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

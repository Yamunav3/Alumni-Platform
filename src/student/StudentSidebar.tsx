
import { memo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Home, Users, Briefcase, Calendar, User, Bell, 
  LogOut, Menu, X, ChevronLeft, ChevronRight, MessageSquare, 
  ChevronsLeft, ChevronsRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { name: "Home", href: "/student", icon: Home },
  { name: "About Us", href: "/student/about", icon: Users },
  // { name: "Career Portal", href: "/student/career", icon: Briefcase },
  { name: "Events", href: "/student/events", icon: Calendar },
  { name: "Messages", href: "/student/messages", icon: MessageSquare },
  { name: "Profile", href: "/student/profile", icon: User },
  { name: "Notifications", href: "/student/notifications", icon: Bell },
];

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

function StudentSidebarComponent({ className, isCollapsed, toggleSidebar }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false); // Mobile state
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const SidebarContent = () => (
    <div className={cn("flex flex-col h-full bg-card border-r border-border/50 transition-all duration-300", isCollapsed ? "items-center" : "")}>
      
      {/* Header / Logo */}
      <div className={cn("h-16 flex items-center border-b border-border/50 transition-all duration-300", isCollapsed ? "justify-center px-0" : "px-6 justify-between")}>
        <Link to="/" className="flex items-center space-x-3 overflow-hidden">
          <div className="h-9 w-9 min-w-[36px] rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent truncate animate-in fade-in duration-300">
              Asthra
            </span>
          )}
        </Link>
        
        {/* Desktop Toggle Button (Only visible when expanded) */}
        {!isCollapsed && (
          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hidden md:flex" onClick={toggleSidebar}>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Nav Items */}
      <div className="flex-1 py-6 px-3 space-y-2 overflow-y-auto overflow-x-hidden w-full">
        {!isCollapsed && <div className="text-xs font-semibold text-muted-foreground mb-4 px-3 uppercase tracking-wider animate-in fade-in">Menu</div>}
        
        <TooltipProvider delayDuration={0}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            const LinkContent = (
              <Link
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative",
                  isActive ? "bg-purple-100/50 text-purple-700 shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  isCollapsed ? "justify-center" : "justify-start"
                )}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0 transition-colors", isActive ? "text-purple-600" : "text-muted-foreground group-hover:text-foreground")} />
                
                {!isCollapsed && (
                  <span className="ml-3 truncate animate-in fade-in slide-in-from-left-2 duration-200">
                    {item.name}
                  </span>
                )}
                
                {!isCollapsed && isActive && (
                  <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                )}
              </Link>
            );

            // Wrap in Tooltip if collapsed
            return isCollapsed ? (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>{LinkContent}</TooltipTrigger>
                <TooltipContent side="right" className="font-medium bg-slate-900 text-white border-0 ml-2">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            ) : (
              <div key={item.name}>{LinkContent}</div>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Desktop Collapse Trigger (Centered when collapsed) */}
      {isCollapsed && (
        <div className="hidden md:flex justify-center pb-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-muted-foreground hover:bg-accent">
            <ChevronsRight className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Footer Section */}
      <div className="p-3 border-t border-border/50">
        {isCollapsed ? (
          // ✅ Collapsed State: Show JUST Logout Button (as requested)
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleLogout} 
                  className="w-full h-10 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="text-red-500 bg-red-50 border-red-100 font-bold ml-2">
                Logout
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          // ✅ Expanded State: Show Full Profile + Dropdown
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-2 py-6 hover:bg-accent rounded-xl">
                <div className="flex items-center space-x-3 w-full">
                  <Avatar className="h-9 w-9 border-2 border-purple-100">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-left flex-1 min-w-0">
                    <span className="text-sm font-semibold truncate w-full">Student</span>
                    <span className="text-xs text-muted-foreground truncate w-full">student@asthra.com</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mb-2 rounded-xl shadow-xl">
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer p-3">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header (Hamburger) - No changes needed */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background/80 backdrop-blur-md z-50 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-bold text-lg">Asthra</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Desktop Sidebar (Fixed) - Dynamic Width */}
      <aside 
        className={cn(
          "hidden md:block fixed left-0 top-0 bottom-0 z-40 bg-background transition-all duration-300 ease-in-out",
          isCollapsed ? "w-20" : "w-64",
          className
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-3/4 max-w-xs bg-background animate-in slide-in-from-left duration-300">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}

export const StudentSidebar = memo(StudentSidebarComponent);

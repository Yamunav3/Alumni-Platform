import { ReactNode, useState, useEffect } from "react";
import { StudentSidebar } from "./StudentSidebar";
import { cn } from "@/lib/utils";

interface StudentLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function StudentLayout({ children, className }: StudentLayoutProps) {
  // ✅ 1. Initialize state from Local Storage (so it remembers your choice)
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    return savedState ? JSON.parse(savedState) : false; // Default to false (Expanded) if no setting found
  });

  // ✅ 2. Save to Local Storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Pass state & toggle function */}
      <StudentSidebar 
        isCollapsed={isCollapsed} 
        toggleSidebar={() => setIsCollapsed(!isCollapsed)} 
      />

      {/* Main Content - Dynamic Left Margin */}
      <main 
        className={cn(
          "flex-1 min-h-screen transition-all duration-300 flex flex-col pt-16 md:pt-0", 
          isCollapsed ? "md:ml-20" : "md:ml-64", // Adjust margin based on state
          className
        )}
      >
        <div className="flex-1 w-full max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
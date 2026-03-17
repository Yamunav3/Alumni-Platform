

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import CareerPortal from "./pages/CareerPortal";
import NotFound from "./pages/NotFound";

// Admin Pages
import Admin from "./AdminPage/Admin";
import AlumniSection from "./AdminPage/AlumniSection";

// Alumni Pages
import AlumniDonations from "./AlumniPage/Donations";
import AlumniAboutUs from "./AlumniPage/AboutUs";
import AlumniCareerPortal from "./AlumniPage/CareerPortal";
import AlumniNotifications from "./AlumniPage/Notifications";
import AlumniProfile from "./AlumniPage/Profile";
import AlumniGamification from "./AlumniPage/Gamification";
import AlumniHome from "./AlumniPage/Home";
import AlumniEvents from "./AlumniPage/Events";
import Register from "./AlumniPage/forms/register";
import AlumniAnalytics from "./AlumniPage/forms/Analytics";

// Staff Pages
import StaffAbout from "./staff/About";
import StaffCareerPortal from "./staff/CareerPortal/CareerPortal";
import StaffHome from "./staff/StaffHome";
import StaffProfile from "./staff/StaffProfile";
import StaffNotifications from "./staff/StaffNotifications";

// Login & Signup
import AdminLogin from "./Login/adminlogin";
import AlumniLogin from "./Login/alumnilogin";
import StaffLogin from "./Login/stafflogin";
import StudentLogin from "./Login/studentlogin";
import StudentSignup from "./signup/studentsignup";
import StaffSignup from "./signup/staffsignup";
import AlumniSignup from "./signup/alumnisignup";

// Student Pages
import StudentHome from "./student/StudentHome/StudentHome";
import StudentAbout from "./student/About";
// import StudentCareerPortal from "./student/CareerPortal/CareerPortal";
import StudentEvents from "./student/Events";
import StudentProfile from "./student/Profile";
import StudentNotifications from "./student/Notifications";
import StudentLayout from "./student/StudentLayout";
// import StudentMessage from "./student/Messages/StudentMessage"
// Components
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Home from "./AdminPage/Home";
import StaffSection from "./AdminPage/StaffSection";
import StudentSection from "./AdminPage/StudentSection";
import EventS from "./AdminPage/EventS";
import ExploreOpp from "./pages/ExploreOpportunities";
import ChatComponent from "./student/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* Allow vertical scrolling across the app; only hide horizontal overflow */}
      <div className="relative min-h-screen overflow-x-hidden">
        
        {/* Main App Content */}
        <div className="relative z-10">
          {/* Added future flags to fix console warnings */}
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<CareerPortal />} />
              <Route path="/explore" element={<ExploreOpp />} />
              <Route path="/register" element={<Register />} />
              <Route path="/analytics" element={<AlumniAnalytics />} />

              {/* Admin Routes */}
              <Route path="/admin/profile" element={<Admin />} />
              <Route path="/admin/home" element={<Home />} />
              <Route path="/admin/alumnisection" element={<AlumniSection />} />
              <Route path="/admin/staffsection" element={<StaffSection />} />
              <Route path="/admin/studentsection" element={<StudentSection />}/>
              <Route path="/admin/events" element={<EventS />} />

              {/* Alumni Routes */}
              <Route path="/alumni/events" element={<AlumniEvents />} />
              <Route path="/alumni/about" element={<AlumniAboutUs />} />
              <Route path="/alumni/donations" element={<AlumniDonations />} />
              <Route path="/alumni/career" element={<AlumniCareerPortal />} />
              <Route path="/alumni/notifications" element={<AlumniNotifications />} />
              <Route path="/alumni/profile" element={<AlumniProfile />} />
              <Route path="/alumni/home" element={<AlumniHome />} />
              <Route path="/alumni/gamification" element={<AlumniGamification />} />

              {/* Student Routes */}
              <Route path="/student/register" element={<Register />} />
              
              {/* ✅ THIS WAS MISSING: Fixes the 404 error */}
              <Route path="/student" element={<StudentLayout />}>
                <Route index element={<StudentHome />} />
                <Route path="home" element={<StudentHome />} />
                <Route path="about" element={<StudentAbout />} />
                {/* <Route path="career" element={<StudentCareerPortal />} /> */}
                <Route path="events" element={<StudentEvents />} />
                <Route path="profile" element={<StudentProfile />} />
                <Route path="notifications" element={<StudentNotifications />} />
                <Route path="messages" element={<ChatComponent />} />
              </Route>
              {/* Staff Routes */}
              <Route path="/staff/about" element={<StaffAbout />} />
              <Route path="/staff/career" element={<StaffCareerPortal />} />
              <Route path="/staff/home" element={<StaffHome />} />
              <Route path="/staff/profile" element={<StaffProfile />} />
              <Route path="/staff/notifications" element={<StaffNotifications />} />

              {/* Auth Routes */}
              <Route path="/login/student" element={<StudentLogin />} />
              <Route path="/login/staff" element={<StaffLogin />} />
              <Route path="/login/alumni" element={<AlumniLogin />} />
              <Route path="/login/admin" element={<AdminLogin />} />
              <Route path="/signup/student" element={<StudentSignup />} />
              <Route path="/signup/staff" element={<StaffSignup />} />
              <Route path="/signup/alumni" element={<AlumniSignup />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            <ChatBot />
            {/* <Footer /> */}
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

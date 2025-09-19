import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CareerPortal from "./pages/CareerPortal";
import NotFound from "./pages/NotFound";
import AdminAboutUs from "./AdminPage/AboutUs";
import Analytics from "./AdminPage/Analytics";
import AdminCareerPortal from "./AdminPage/CareerPortal";
import AdminNotifications from "./AdminPage/Notifications";
import Admin from "./AdminPage/Admin";
import AdminHome from "./AdminPage/Home";
import Footer from "./components/Footer";
import AlumniDonations from "./AlumniPage/Donations";
import AlumniAboutUs from "./AlumniPage/AboutUs";
import AlumniCareerPortal from "./AlumniPage/CareerPortal";
import AlumniNotifications from "./AlumniPage/Notifications";
import AlumniProfile from "./AlumniPage/Profile";
import AlumniGamification from "./AlumniPage/Gamification";
import AlumniHome from "./AlumniPage/Home";
import AlumniEvents from "./AlumniPage/Events";
import Hello from "./API/api";

import StaffAbout from "./staff/About";
import StaffCareerPortal from "./staff/CareerPortal";
import StaffHome from "./staff/StaffHome";
import StaffProfile from "./staff/StaffProfile";
import StaffNotifications from "./staff/StaffNotifications";
import AdminLogin from "./Login/adminlogin";
import AlumniLogin from "./Login/alumnilogin";
import StaffLogin from "./Login/stafflogin";
import StudentLogin from "./Login/studentlogin";
import StudentSignup from "./signup/studentsignup";
import StaffSignup from "./signup/staffsignup";
import AlumniSignup from "./signup/alumnisignup";


import StudentHome from "./student/StudentHome";
import StudentAbout from "./student/About";
import StudentCareerPortal from "./student/CareerPortal";
import StudentEvents from "./student/Events";
import StudentProfile from "./student/Profile";
import StudentNotifications from "./student/Notifications";
import ChatBot from "./components/ChatBot";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
   <TooltipProvider>
      <Toaster />
      <Sonner />
      <Hello />
      <BrowserRouter></BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<CareerPortal />} />
          <Route path="/career/" element={<CareerPortal />} />
          {/* Admin Routing */}
           <Route path="/admin/about" element={<AdminAboutUs/>}/>
           <Route path="/admin/analytics" element={<Analytics/>}/>
           <Route path="/admin/career" element={<AdminCareerPortal/>}/>
           <Route path="/admin/notification" element={<AdminNotifications/>}/>
           <Route path="/admin/profile" element={<Admin/>}/>
           <Route path="/admin/home" element={<AdminHome/>}/>

           {/* AlumniRouting */}
           <Route path="/alumni/events" element={<AlumniEvents/>}/>
           <Route path="/alumni/about" element={<AlumniAboutUs/>}/>
           <Route path="/alumni/donations" element={<AlumniDonations/>}/>
           <Route path="/alumni/career" element={<AlumniCareerPortal/>}/>
           <Route path="/alumni/notifications" element={<AlumniNotifications/>}/>
           <Route path="/alumni/profile" element={<AlumniProfile/>}/>
           <Route path="/alumni/home" element={<AlumniHome/>}/>
           <Route path="/alumni/gamification" element={<AlumniGamification/>}/>
          {/*student*/}

 <Route path="/student" element={<StudentHome />} />
            <Route path="/student/about" element={<StudentAbout />} />
            <Route path="/student/career" element={<StudentCareerPortal />} />
            <Route path="/student/events" element={<StudentEvents />} />
            <Route path="/student/profile" element={<StudentProfile />} />
            <Route path="/student/notifications" element={<StudentNotifications />} />


           {/*Staff route*/}
            <Route path="/staff/about" element={<StaffAbout/>}/>
            <Route path="/staff/career" element={<StaffCareerPortal/>}/>
            <Route path="staff/*" element={<StaffHome/>}/>
            <Route path="staff/profile" element={<StaffProfile/>}/>
            <Route path="staff/notifications" element={<StaffNotifications/>}/>
           

            {/*login route*/ }
            <Route path="/login/student" element={<StudentLogin/>}/>
             <Route path="/login/staff" element={<StaffLogin/>}/>
              <Route path="/login/alumni" element={<AlumniLogin/>}/>
               <Route path="/login/admin" element={<AdminLogin/>}/>
              {/*signuo route*/ }
              <Route path="/signup/student" element={<StudentSignup/>}/>
             <Route path="/signup/staff" element={<StaffSignup/>}/>
              <Route path="/signup/alumni" element={<AlumniSignup/>}/>
              
          
           
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot/>
         <Footer />
      </BrowserRouter>
      {/* <Footer/> */}
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;

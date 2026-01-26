// import { Link } from "react-router-dom";
// import { 
//   Briefcase, Calendar, TrendingUp, ArrowRight, CheckCircle, Clock
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import StudentLayout from "./StudentLayout";

// export default function StudentDashboard() {
//   const stats = [
//     { label: "Applications", value: "12", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
//     { label: "Interviews", value: "3", icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
//     { label: "Events", value: "5", icon: Calendar, color: "text-purple-600", bg: "bg-purple-100" },
//     { label: "Views", value: "48", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-100" },
//   ];

//   return (
//     <StudentLayout>
//       <div className="p-8 space-y-8">
//         {/* Welcome Section */}
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Welcome back, Student! 👋</h1>
//           <p className="text-muted-foreground mt-2">Here's what's happening today.</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
//               <CardContent className="p-6 flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
//                   <h3 className="text-2xl font-bold">{stat.value}</h3>
//                 </div>
//                 <div className={`h-12 w-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
//                   <stat.icon className={`h-6 w-6 ${stat.color}`} />
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Recent Activity */}
//           <Card className="lg:col-span-2">
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Recent Applications</CardTitle>
//               <Button variant="link" className="text-purple-600">View All</Button>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {[
//                 { role: "Frontend Intern", company: "TechCorp", status: "Review", date: "2d ago" },
//                 { role: "UX Designer", company: "Studio X", status: "Applied", date: "5d ago" },
//               ].map((job, i) => (
//                 <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                   <div className="flex items-center gap-4">
//                     <div className="h-10 w-10 bg-white border rounded-lg flex items-center justify-center font-bold">
//                       {job.company[0]}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-sm">{job.role}</h4>
//                       <p className="text-xs text-muted-foreground">{job.company}</p>
//                     </div>
//                   </div>
//                   <Badge variant="outline">{job.status}</Badge>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Quick Actions / Events */}
//           <Card>
//             <CardHeader><CardTitle>Upcoming Events</CardTitle></CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex gap-4">
//                 <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-center min-w-[60px]">
//                   <span className="block text-xs font-bold uppercase">Feb</span>
//                   <span className="block text-xl font-bold">15</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm">Tech Networking</h4>
//                   <p className="text-xs text-muted-foreground flex items-center mt-1">
//                     <Clock className="h-3 w-3 mr-1"/> 5:00 PM
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </StudentLayout>
//   );
// }

import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StudentLayout from "./StudentLayout"; // Make sure this path is correct

export default function StudentDashboard() {
  // Mock Data for the Dashboard
  const stats = [
    { label: "Applications", value: "12", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Interviews", value: "3", icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
    { label: "Events", value: "5", icon: Calendar, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Profile Views", value: "48", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const recentJobs = [
    { role: "Frontend Developer Intern", company: "TechCorp", status: "Under Review", date: "2 days ago" },
    { role: "UX Designer", company: "Creative Studio", status: "Applied", date: "5 days ago" },
    { role: "Data Analyst", company: "FinTech Solutions", status: "Interview", date: "1 week ago" },
  ];

  return (
    <StudentLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back, Student! 👋</h1>
            <p className="text-muted-foreground mt-1">
              Here's an overview of your career activities today.
            </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" /> Notifications
             </Button>
             <Link to="/student/career">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Find Jobs
                </Button>
             </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div className={`h-12 w-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Applications Column */}
          <Card className="lg:col-span-2 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Applications</CardTitle>
              <Link to="/student/career" className="text-sm text-purple-600 hover:underline flex items-center">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentJobs.map((job, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50/80 hover:bg-white border hover:border-purple-100 rounded-xl transition-all duration-200">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-white border rounded-lg flex items-center justify-center font-bold text-lg text-gray-700 shadow-sm">
                        {job.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{job.role}</h4>
                        <p className="text-xs text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground hidden md:block">{job.date}</span>
                      <Badge variant={job.status === "Interview" ? "default" : "secondary"}>
                        {job.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events Column */}
          <Card className="border-none shadow-md h-fit">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-center min-w-[60px] group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <span className="block text-xs font-bold uppercase">Feb</span>
                  <span className="block text-xl font-bold">15</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-purple-700 transition-colors">Tech Networking Night</h4>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 5:00 PM - 8:00 PM
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 mt-2 text-purple-600">View Details</Button>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-center min-w-[60px] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="block text-xs font-bold uppercase">Feb</span>
                  <span className="block text-xl font-bold">22</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-blue-700 transition-colors">Resume Workshop</h4>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 10:00 AM
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 mt-2 text-purple-600">Register</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </StudentLayout>
  );
}
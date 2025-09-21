// import React, { useState, useEffect } from 'react';
// import { 
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
//   ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line 
// } from 'recharts';
// import { 
//   Calendar, Users, TrendingUp, Eye, Download, Filter,
//   BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon
// } from 'lucide-react';

// // Types
// interface EventAnalytics {
//   id: number;
//   title: string;
//   date: string;
//   registrations: number;
//   attendance: number;
//   completionRate: number;
//   revenue?: number;
//   feedbackScore: number;
// }

// interface AnalyticsData {
//   totalEvents: number;
//   totalRegistrations: number;
//   averageAttendance: number;
//   totalRevenue?: number;
//   events: EventAnalytics[];
//   registrationTrend: { date: string; registrations: number }[];
//   attendanceByType: { name: string; value: number }[];
//   monthlyComparison: { month: string; current: number; previous: number }[];
// }

// // Mock data - replace with API calls
// const mockAnalyticsData: AnalyticsData = {
//   totalEvents: 24,
//   totalRegistrations: 1245,
//   averageAttendance: 78,
//   totalRevenue: 12500,
//   events: [
//     { id: 1, title: "Tech Career Fair 2024", date: "2024-03-15", registrations: 245, attendance: 192, completionRate: 78, revenue: 2450, feedbackScore: 4.7 },
//     { id: 2, title: "React Workshop", date: "2024-03-22", registrations: 178, attendance: 152, completionRate: 85, revenue: 2670, feedbackScore: 4.8 },
//     { id: 3, title: "Data Science Conference", date: "2024-04-05", registrations: 312, attendance: 278, completionRate: 89, revenue: 6240, feedbackScore: 4.9 },
//     { id: 4, title: "Startup Pitch Competition", date: "2024-04-12", registrations: 189, attendance: 165, completionRate: 87, feedbackScore: 4.6 },
//     { id: 5, title: "UX Design Masterclass", date: "2024-04-18", registrations: 221, attendance: 201, completionRate: 91, revenue: 3315, feedbackScore: 4.8 },
//     { id: 6, title: "Networking Mixer", date: "2024-04-25", registrations: 154, attendance: 142, completionRate: 92, feedbackScore: 4.5 },
//   ],
//   registrationTrend: [
//     { date: "2024-01", registrations: 180 },
//     { date: "2024-02", registrations: 210 },
//     { date: "2024-03", registrations: 425 },
//     { date: "2024-04", registrations: 430 },
//   ],
//   attendanceByType: [
//     { name: "Virtual", value: 45 },
//     { name: "In-Person", value: 55 },
//   ],
//   monthlyComparison: [
//     { month: "Jan", current: 180, previous: 150 },
//     { month: "Feb", current: 210, previous: 170 },
//     { month: "Mar", current: 425, previous: 320 },
//     { month: "Apr", current: 430, previous: 350 },
//   ],
// };

// // Color palette for charts
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

// const Analytics: React.FC = () => {
//   const [data, setData] = useState<AnalyticsData | null>(null);
//   const [timeRange, setTimeRange] = useState<string>('30days');
//   const [chartView, setChartView] = useState<string>('bar');
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Simulate API fetch
//     const fetchData = async () => {
//       setIsLoading(true);
//       // In a real app, you would fetch from your API
//       setTimeout(() => {
//         setData(mockAnalyticsData);
//         setIsLoading(false);
//       }, 1000);
//     };

//     fetchData();
//   }, [timeRange]); // Re-fetch when timeRange changes

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="animate-pulse">
//             <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
//               ))}
//             </div>
//             <div className="h-96 bg-gray-200 rounded-lg"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!data) {
//     return <div>Error loading analytics data</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-900">Event Analytics</h1>
//           <div className="flex items-center space-x-4 mt-4 sm:mt-0">
//             <div className="flex items-center space-x-2">
//               <Filter className="h-4 w-4 text-gray-500" />
//               <select 
//                 value={timeRange}
//                 onChange={(e) => setTimeRange(e.target.value)}
//                 className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="7days">Last 7 Days</option>
//                 <option value="30days">Last 30 Days</option>
//                 <option value="90days">Last 90 Days</option>
//                 <option value="year">Year to Date</option>
//               </select>
//             </div>
//             <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//               <Download className="h-4 w-4 mr-2" />
//               Export
//             </button>
//           </div>
//         </div>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Events</p>
//                 <p className="text-3xl font-bold text-gray-900">{data.totalEvents}</p>
//               </div>
//               <div className="p-3 bg-blue-100 rounded-full">
//                 <Calendar className="h-6 w-6 text-blue-600" />
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">+12% from last period</p>
//           </div>

//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Registrations</p>
//                 <p className="text-3xl font-bold text-gray-900">{data.totalRegistrations}</p>
//               </div>
//               <div className="p-3 bg-green-100 rounded-full">
//                 <Users className="h-6 w-6 text-green-600" />
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">+18% from last period</p>
//           </div>

//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Avg. Attendance</p>
//                 <p className="text-3xl font-bold text-gray-900">{data.averageAttendance}%</p>
//               </div>
//               <div className="p-3 bg-purple-100 rounded-full">
//                 <Eye className="h-6 w-6 text-purple-600" />
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">+5% from last period</p>
//           </div>

//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">Total Revenue</p>
//                 <p className="text-3xl font-bold text-gray-900">${data.totalRevenue?.toLocaleString()}</p>
//               </div>
//               <div className="p-3 bg-yellow-100 rounded-full">
//                 <TrendingUp className="h-6 w-6 text-yellow-600" />
//               </div>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">+22% from last period</p>
//           </div>
//         </div>

//         {/* Chart Toggle */}
//         <div className="flex justify-end mb-4">
//           <div className="inline-flex rounded-md shadow-sm" role="group">
//             <button
//               type="button"
//               onClick={() => setChartView('bar')}
//               className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
//                 chartView === 'bar' 
//                   ? 'bg-blue-100 text-blue-700 border-blue-700' 
//                   : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
//               }`}
//             >
//               <BarChart3 className="h-4 w-4 inline mr-2" />
//               Bar
//             </button>
//             <button
//               type="button"
//               onClick={() => setChartView('line')}
//               className={`px-4 py-2 text-sm font-medium border-t border-b ${
//                 chartView === 'line' 
//                   ? 'bg-blue-100 text-blue-700 border-blue-700' 
//                   : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
//               }`}
//             >
//               <LineChartIcon className="h-4 w-4 inline mr-2" />
//               Line
//             </button>
//             <button
//               type="button"
//               onClick={() => setChartView('pie')}
//               className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
//                 chartView === 'pie' 
//                   ? 'bg-blue-100 text-blue-700 border-blue-700' 
//                   : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
//               }`}
//             >
//               <PieChartIcon className="h-4 w-4 inline mr-2" />
//               Pie
//             </button>
//           </div>
//         </div>

//         {/* Main Chart */}
//         <div className="bg-white rounded-lg shadow p-6 mb-8">
//           <h2 className="text-xl font-semibold text-gray-900 mb-4">Registrations Over Time</h2>
//           <div className="h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               {chartView === 'bar' ? (
//                 <BarChart data={data.registrationTrend}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="registrations" fill="#3b82f6" name="Registrations" />
//                 </BarChart>
//               ) : chartView === 'line' ? (
//                 <LineChart data={data.registrationTrend}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line 
//                     type="monotone" 
//                     dataKey="registrations" 
//                     stroke="#3b82f6" 
//                     name="Registrations" 
//                     strokeWidth={2} 
//                   />
//                 </LineChart>
//               ) : (
//                 <PieChart>
//                   <Pie
//                     data={data.attendanceByType}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {data.attendanceByType.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               )}
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Events Table */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-200">
//             <h2 className="text-xl font-semibold text-gray-900">Event Performance</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Event
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Registrations
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Attendance
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Completion Rate
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Feedback Score
//                   </th>
//                   {data.totalRevenue !== undefined && (
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Revenue
//                     </th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {data.events.map((event) => (
//                   <tr key={event.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                       {event.title}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {new Date(event.date).toLocaleDateString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {event.registrations}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {event.attendance}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <div className="flex items-center">
//                         <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
//                           <div 
//                             className="bg-green-600 h-2 rounded-full" 
//                             style={{ width: `${event.completionRate}%` }}
//                           ></div>
//                         </div>
//                         <span>{event.completionRate}%</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <div className="flex items-center">
//                         {event.feedbackScore.toFixed(1)}
//                         <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       </div>
//                     </td>
//                     {data.totalRevenue !== undefined && (
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         ${event.revenue?.toLocaleString()}
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;


import React, { useState, useEffect } from "react";
import { Calendar, Users, TrendingUp, Eye } from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";

// Types
interface EventAnalytics {
  id: number;
  title: string;
  date: string;
  registrations: number;
  attendance: number;
  completionRate: number;
  revenue?: number;
  feedbackScore: number;
}

interface AnalyticsData {
  totalEvents: number;
  totalRegistrations: number;
  averageAttendance: number;
  totalRevenue?: number;
  events: EventAnalytics[];
}

// Mock data - replace with API calls
const mockAnalyticsData: AnalyticsData = {
  totalEvents: 24,
  totalRegistrations: 1245,
  averageAttendance: 78,
  totalRevenue: 12500,
  events: [
    {
      id: 1,
      title: "Tech Career Fair 2024",
      date: "2024-03-15",
      registrations: 245,
      attendance: 192,
      completionRate: 78,
      revenue: 2450,
      feedbackScore: 4.7,
    },
    {
      id: 2,
      title: "React Workshop",
      date: "2024-03-22",
      registrations: 178,
      attendance: 152,
      completionRate: 85,
      revenue: 2670,
      feedbackScore: 4.8,
    },
    {
      id: 3,
      title: "Data Science Conference",
      date: "2024-04-05",
      registrations: 312,
      attendance: 278,
      completionRate: 89,
      revenue: 6240,
      feedbackScore: 4.9,
    },
  ],
};

const Analytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setData(mockAnalyticsData);
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <p className="text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  if (!data) {
    return <div>Error loading analytics data</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AlumniNavbar/>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Alumni Event Analytics</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-3xl font-bold text-gray-900">{data.totalEvents}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                <p className="text-3xl font-bold text-gray-900">
                  {data.totalRegistrations}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Attendance</p>
                <p className="text-3xl font-bold text-gray-900">
                  {data.averageAttendance}%
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${data.totalRevenue?.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Past Event Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registrations</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attendance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feedback</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.events.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {event.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{event.registrations}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{event.attendance}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{event.completionRate}%</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{event.feedbackScore.toFixed(1)} ★</td>
                    <td className="px-6 py-4 text-sm text-gray-500">${event.revenue?.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

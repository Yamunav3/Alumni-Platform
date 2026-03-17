import { Link } from "react-router-dom";
import {
  Users,
  UserCheck,
  GraduationCap,
  CalendarDays,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ShieldCheck,
  FileDown,
  ArrowRight,
} from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const summaryCards = [
  { label: "Alumni", value: "3,482", icon: Users, delta: "+6.2%" },
  { label: "Staff", value: "214", icon: UserCheck, delta: "+1.4%" },
  { label: "Students", value: "4,920", icon: GraduationCap, delta: "+8.7%" },
  { label: "Upcoming Events", value: "12", icon: CalendarDays, delta: "+2 this week" },
];

const adminQueue = [
  { title: "Pending Verifications", count: 23, severity: "high" },
  { title: "Staff Role Change Requests", count: 4, severity: "medium" },
  { title: "Event Approvals", count: 9, severity: "medium" },
  { title: "Flagged Profiles", count: 2, severity: "high" },
];

const quickLinks = [
  { title: "Manage Alumni", desc: "View and maintain alumni directory", href: "/admin/alumnisection" },
  { title: "Manage Staff", desc: "Control staff records and assignments", href: "/admin/staffsection" },
  { title: "Manage Students", desc: "Track student profiles and cohorts", href: "/admin/studentsection" },
  { title: "Manage Events", desc: "Plan and publish platform events", href: "/admin/events" },
  { title: "Admin Profile", desc: "Security, preferences and exports", href: "/admin/profile" },
];

const getSeverityBadge = (severity: "high" | "medium" | "low") => {
  if (severity === "high") return <Badge className="bg-red-600">High</Badge>;
  if (severity === "medium") return <Badge className="bg-amber-600">Medium</Badge>;
  return <Badge className="bg-emerald-600">Low</Badge>;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />

      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <Card className="border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
          <CardContent className="p-6 md:p-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300 mb-2">Administration Console</p>
              <h1 className="text-3xl md:text-4xl font-bold">Asthra Control Center</h1>
              <p className="text-slate-200 mt-2 max-w-2xl">
                Unified oversight for alumni engagement, staff operations, student lifecycle, and event governance.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                <FileDown className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <ShieldCheck className="h-4 w-4 mr-2" />
                Security Status
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((item) => (
            <Card key={item.label} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-2xl font-semibold text-slate-900 mt-1">{item.value}</p>
                    <p className="text-xs text-emerald-700 mt-1">{item.delta}</p>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 border-slate-200">
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
              <CardDescription>Navigate directly to core administration modules.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 mt-0.5" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Action Queue</CardTitle>
              <CardDescription>Prioritized admin items requiring review.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {adminQueue.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-white p-3 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.count} pending</p>
                  </div>
                  {getSeverityBadge(item.severity as "high" | "medium" | "low")}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Operational checks for platform governance.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-medium">Authentication Services</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">All login and session checks are healthy.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-amber-700">
                <Clock3 className="h-4 w-4" />
                <span className="font-medium">Backup Sync</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">Scheduled backup in progress for analytics logs.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">Moderation Alerts</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">2 flagged profiles require compliance review.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

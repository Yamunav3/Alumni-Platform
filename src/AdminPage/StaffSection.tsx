import { useEffect, useMemo, useState } from "react";
import { Search, Plus, Mail, Phone, Building2, Briefcase } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type StaffMember = {
  name: string;
  email: string;
  designation: string;
  department: string;
  contactNumber: string;
  status: "Active" | "On Leave";
};

const staffSeed: StaffMember[] = [
  {
    name: "Vijaya Lakshmi",
    email: "vijaya@asthra.edu",
    designation: "Assistant Professor",
    department: "Information Technology",
    contactNumber: "9959976985",
    status: "Active",
  },
  {
    name: "Rohit Verma",
    email: "rohit.verma@asthra.edu",
    designation: "Placement Officer",
    department: "Career Services",
    contactNumber: "9700011122",
    status: "Active",
  },
  {
    name: "Anita Joseph",
    email: "anita.joseph@asthra.edu",
    designation: "Associate Professor",
    department: "Electronics",
    contactNumber: "9640022233",
    status: "On Leave",
  },
];
import {getStaffDetails} from "../api/staffapi.js";
const StaffSection: React.FC = () => {
  const [staff] = useState<StaffMember[]>(staffSeed);
  const [search, setSearch] = useState("");
  const[Staff,setStaff]=useState<StaffMember[]>([]);

  useEffect(()=>{
     getStaffDetails().then((data:StaffMember[])=>{
        setStaff(data);
     })
  },[]);

  const filteredStaff = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return Staff;
    return Staff.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query)
    );
  }, [search, Staff]);

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Staff Management</h1>
            <p className="text-slate-600 mt-1">Manage department teams and operational roles.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Total Staff</p>
              <p className="text-2xl font-semibold text-slate-900">{Staff.length}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Active</p>
              <p className="text-2xl font-semibold text-slate-900">
                {Staff.filter((member) => member.status === "Active").length}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Departments</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(Staff.map((member) => member.department)).size}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Staff Directory</CardTitle>
            <div className="relative mt-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, role, department"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredStaff.map((member) => (
                <div
                  key={member.email}
                  className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">{member.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5" />
                        {member.email}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5" />
                        {member.contactNumber}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      <Building2 className="h-3.5 w-3.5 mr-1" />
                      {member.department}
                    </Badge>
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      <Briefcase className="h-3.5 w-3.5 mr-1" />
                      {member.designation}
                    </Badge>
                    <Badge className={member.status === "Active" ? "bg-emerald-600" : "bg-amber-600"}>
                      {member.status}
                    </Badge>
                  </div>
                </div>
              ))}
              {filteredStaff.length === 0 && (
                <p className="text-sm text-slate-500">No staff records found for the current search.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StaffSection;

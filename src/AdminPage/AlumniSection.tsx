import { useMemo, useState } from "react";
import { Search, Plus, Globe2, Building2, GraduationCap, Link2 } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Alumni = {
  name: string;
  email: string;
  graduationYear: string;
  degree: string;
  department: string;
  city: string;
  country: string;
  linkedInProfile: string;
  currentRole: string;
};

const alumniSeed: Alumni[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    graduationYear: "2020",
    degree: "B.Tech",
    department: "CSE",
    city: "Hyderabad",
    country: "India",
    linkedInProfile: "https://linkedin.com/in/johndoe",
    currentRole: "Software Engineer",
  },
  {
    name: "Nisha Rao",
    email: "nisha.rao@alumni.com",
    graduationYear: "2018",
    degree: "M.Tech",
    department: "Data Science",
    city: "Bengaluru",
    country: "India",
    linkedInProfile: "https://linkedin.com/in/nisharao",
    currentRole: "Senior Data Scientist",
  },
  {
    name: "Arjun Patel",
    email: "arjun.patel@alumni.com",
    graduationYear: "2016",
    degree: "MBA",
    department: "Business",
    city: "San Jose",
    country: "USA",
    linkedInProfile: "https://linkedin.com/in/arjun-patel",
    currentRole: "Product Manager",
  },
];

const AlumniSection: React.FC = () => {
  const [alumni] = useState<Alumni[]>(alumniSeed);
  const [search, setSearch] = useState("");

  const filteredAlumni = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return alumni;
    return alumni.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.currentRole.toLowerCase().includes(query) ||
        member.graduationYear.includes(query)
    );
  }, [search, alumni]);

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Alumni Management</h1>
            <p className="text-slate-600 mt-1">Track alumni records, roles, and professional engagement.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Alumni
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Total Alumni</p>
              <p className="text-2xl font-semibold text-slate-900">{alumni.length}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Global Presence</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(alumni.map((member) => member.country)).size} countries
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Distinct Roles</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(alumni.map((member) => member.currentRole)).size}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Departments</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(alumni.map((member) => member.department)).size}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Alumni Directory</CardTitle>
            <div className="relative mt-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, department, role, graduation year"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredAlumni.map((member) => (
                <div
                  key={member.email}
                  className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-slate-600">{member.email}</p>
                    <p className="text-sm text-slate-600">{member.currentRole}</p>
                    <a
                      className="text-sm inline-flex items-center gap-1 text-blue-700 hover:text-blue-800"
                      href={member.linkedInProfile}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Link2 className="h-3.5 w-3.5" />
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      <GraduationCap className="h-3.5 w-3.5 mr-1" />
                      {member.degree} ({member.graduationYear})
                    </Badge>
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      <Building2 className="h-3.5 w-3.5 mr-1" />
                      {member.department}
                    </Badge>
                    <Badge className="bg-slate-900">
                      <Globe2 className="h-3.5 w-3.5 mr-1" />
                      {member.city}, {member.country}
                    </Badge>
                  </div>
                </div>
              ))}
              {filteredAlumni.length === 0 && (
                <p className="text-sm text-slate-500">No alumni records found for the current search.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlumniSection;

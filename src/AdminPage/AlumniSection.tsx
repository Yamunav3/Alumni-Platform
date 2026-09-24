import { useEffect, useMemo, useState } from "react";
import { Search, Plus, Globe2, Building2, GraduationCap, Link2, Edit2 } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMentorships, getCount, updateUser } from "../api/studentApi";
import { useNavigate } from "react-router-dom";

interface alumni{
  id:number,
  collegeid:string,
  email:string,
  interests:string,
  jobrole:string,
  mobilenumber:number,
  username:string,
  workingcompany:string,
  yearofpassing:string,
  fullname:string,
  branch:string,
  github:string,
  linked_in:string,
}

const AlumniSection: React.FC = () => {
  const [alumniData, setAlumniData] = useState<alumni[]>([]);
  const [search, setSearch] = useState("");
  const [counts, setCounts] = useState<{alumni: number, staff: number, students: number}>({alumni: 0, staff: 0, students: 0});
  const [loading, setLoading] = useState(true);
  const [selectedAlumni, setSelectedAlumni] = useState<alumni | null>(null);
  const [editing, setEditing] = useState(false);

  const fetchCounts = async () => {
    try {
      const data = await getCount();
      setCounts({ alumni: data.alumni, staff: data.staff, students: data.students });
    } catch (error) {
      console.error("Error fetching counts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAlumni = async () => {
    try {
      const data = await getMentorships();
      setAlumniData(data);
    } catch (error) {
      console.error("Error fetching alumni:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlumni();
    fetchCounts();
  }, []);

  const handleSave = async (updated: alumni) => {
    try {
      await updateUser(updated.id, updated);
      setAlumniData((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
      setSelectedAlumni(null);
      setEditing(false);
      fetchCounts();
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const filteredAlumni = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return alumniData;
    return alumniData.filter(
      (member) =>
        member.fullname.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.branch.toLowerCase().includes(query) ||
        member.jobrole.toLowerCase().includes(query) ||
        member.yearofpassing.includes(query)
    );
  }, [search, alumniData]);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/signup/alumni');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Alumni Management</h1>
            <p className="text-slate-600 mt-1">Track alumni records, roles, and professional engagement.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800" onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Alumni
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Total Alumni</p>
              <p className="text-2xl font-semibold text-slate-900">{alumniData.length}</p>
            </CardContent>
          </Card>
         
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Distinct Roles</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(alumniData.map((m) => m.jobrole)).size}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Departments</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(alumniData.map((m) => m.branch)).size}
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
            {loading ? (
              <p className="text-sm text-slate-500">Loading alumni...</p>
            ) : (
              <div className="space-y-3">
                {filteredAlumni.map((member) => (
                  <div
                    key={member.id}
                    className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
                  >
                    <div className="space-y-2">
                      <h3 className="font-semibold text-slate-900">{member.fullname}</h3>
                      <p className="text-sm text-slate-600">{member.email}</p>
                      <p className="text-sm text-slate-600">{member.jobrole}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <GraduationCap className="h-3.5 w-3.5 mr-1" />
                          {member.yearofpassing}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <Building2 className="h-3.5 w-3.5 mr-1" />
                          {member.branch}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <Globe2 className="h-3.5 w-3.5 mr-1" />
                          {/* {member.country} */}
                        </Badge>
                      </div>
                    </div>

                  </div>
                ))}
                {filteredAlumni.length === 0 && (
                  <p className="text-sm text-slate-500">No alumni records found for the current search.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

     </div>
   );
 };

 export default AlumniSection;
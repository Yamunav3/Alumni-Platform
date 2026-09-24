import { useEffect, useMemo, useState } from "react";
import { Search, Plus, Mail, Phone, Building2, Briefcase, Edit2, Calendar, User, MapPin } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getStaffDetails, updateUser } from "../api/staffapi";
import { getCount } from "../api/studentApi";
import { useNavigate } from "react-router-dom";

interface StaffMember {
  id: number;
  username: string;
  name: string;
  email: string;
  designation: string;
  department: string;
  mobilenumber: string;
  status: "Active" | "On Leave";
  dob: string;
  address: string;
  joiningDate: string;
  role: string;
}

const StaffSection: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [search, setSearch] = useState("");
  const [counts, setCounts] = useState<{alumni: number, staff: number, students: number}>({alumni: 0, staff: 0, students: 0});
  const [loading, setLoading] = useState(true);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

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

  const fetchStaff = async () => {
    try {
      const data = await getStaffDetails();
      setStaff(data);
    } catch (error) {
      console.error("Error fetching staff:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
    fetchCounts();
  }, []);

  const handleSave = async (updated: StaffMember) => {
    try {
      await updateUser(updated.id, updated);
      setStaff((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
      setSelectedStaff(null);
      fetchCounts();
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  const filteredStaff = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return staff;
    return staff.filter(
      (member) =>
        member.name.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.username.toLowerCase().includes(query)
    );
  }, [search, staff]);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/signup/staff');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Staff Management</h1>
            <p className="text-slate-600 mt-1">Manage department teams and operational roles.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800" onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Staff
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Total Staff</p>
              <p className="text-2xl font-semibold text-slate-900">{staff.length}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Active</p>
              <p className="text-2xl font-semibold text-slate-900">
                {staff.filter((s) => s.status === "Active").length}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Departments</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(staff.map((s) => s.department)).size}
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
            {loading ? (
              <p className="text-sm text-slate-500">Loading staff...</p>
            ) : (
              <div className="space-y-3">
                {filteredStaff.map((member) => (
                  <div
                    key={member.id}
                    className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900">{member.name}</h3>
                        <Badge variant="outline">@{member.username}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <User className="h-3.5 w-3.5" /> {member.email}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5" /> {member.mobilenumber}
                        </span>
                       
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {member.address}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <Briefcase className="h-3.5 w-3.5 mr-1" /> {member.designation}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <Building2 className="h-3.5 w-3.5 mr-1" /> {member.department}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <Calendar className="h-3.5 w-3.5 mr-1" /> Joined: {member.joiningDate}
                        </Badge>
                        <Badge className={member.status === "Active" ? "bg-emerald-600" : "bg-amber-600"}>
                          {member.status}
                        </Badge>
                      </div>
                    </div>

                  </div>
                ))}
                {filteredStaff.length === 0 && (
                  <p className="text-sm text-slate-500">No staff records found for the current search.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

     </div>
   );
 };

 export default StaffSection;
import { useEffect, useMemo, useState } from "react";
import { Search, Plus, Mail, Phone, Calendar, Edit2, User, MapPin, GraduationCap } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllStudents, getCount, updateUser } from "../api/studentApi";
import { useNavigate } from "react-router-dom";

interface Student {
  id: number;
  username: string;
  name: string;
  email: string;
  mobilenumber: number;
  graduationYear: string;
  department: string;
  dob: string;
  address: string;
  role: string;
}

const StudentSection: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [counts, setCounts] = useState<{alumni: number, staff: number, students: number}>({alumni: 0, staff: 0, students: 0});
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

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

  const fetchStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchCounts();
  }, []);

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return students;
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.department.toLowerCase().includes(query) ||
        student.graduationYear.includes(query) ||
        student.username.toLowerCase().includes(query)
    );
  }, [search, students]);

  const navigate = useNavigate();
  const handleAdd = () => {
    navigate('/signup/student');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Student Management</h1>
            <p className="text-slate-600 mt-1">Review student records and graduation pipelines.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800" onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Student
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Total Students</p>
              <p className="text-2xl font-semibold text-slate-900">{students.length}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Graduating Soon</p>
              <p className="text-2xl font-semibold text-slate-900">
                {students.filter((s) => s.graduationYear === "2026").length}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Departments</p>
              <p className="text-2xl font-semibold text-slate-900">
                {new Set(students.map((s) => s.department)).size}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Student Directory</CardTitle>
            <div className="relative mt-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, department, graduation year"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-slate-500">Loading students...</p>
            ) : (
              <div className="space-y-3">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900">{student.name}</h3>
                        <Badge variant="outline">@{student.username}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5" /> {student.email}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5" /> {student.mobilenumber}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {student.address}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <GraduationCap className="h-3.5 w-3.5 mr-1" /> {student.department}
                        </Badge>
                        <Badge className="bg-slate-900">
                          <Calendar className="h-3.5 w-3.5 mr-1" /> {student.graduationYear}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300 text-slate-700">
                          <Calendar className="h-3.5 w-3.5 mr-1" /> DOB: {student.dob}
                        </Badge>
                      </div>
                    </div>

                  </div>
                ))}
                {filteredStudents.length === 0 && (
                  <p className="text-sm text-slate-500">No students found for the current search.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

     </div>
   );
 };

 export default StudentSection;
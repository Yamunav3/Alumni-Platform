import { useMemo, useState } from "react";
import { Search, Plus, GraduationCap, Phone, Mail, CalendarDays } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Student = {
  name: string;
  email: string;
  phoneNumber: string;
  graduationYear: string;
  department: string;
};

type Suggestion = {
  id: number;
  studentName: string;
  title: string;
  submittedAt: string;
  content: string;
};

const studentsSeed: Student[] = [
  {
    name: "Siddharth Reddy",
    email: "sidd@gmail.com",
    phoneNumber: "9988776655",
    graduationYear: "2027",
    department: "Computer Science",
  },
  {
    name: "Aanya Sharma",
    email: "aanya.sharma@asthra.edu",
    phoneNumber: "9876543210",
    graduationYear: "2026",
    department: "Information Technology",
  },
  {
    name: "Rahul Menon",
    email: "rahul.menon@asthra.edu",
    phoneNumber: "9123456780",
    graduationYear: "2028",
    department: "Electronics",
  },
];

const suggestionsSeed: Suggestion[] = [
  {
    id: 1,
    studentName: "Siddharth Reddy",
    title: "More evening mentorship sessions",
    submittedAt: "12 Mar 2026, 7:30 PM",
    content: "It would help if mentorship sessions were available after class hours for students with packed timetables.",
  },
  {
    id: 2,
    studentName: "Aanya Sharma",
    title: "Resume review workshop",
    submittedAt: "11 Mar 2026, 4:15 PM",
    content: "Please add a monthly resume review session with alumni from product and software roles.",
  },
  {
    id: 3,
    studentName: "Rahul Menon",
    title: "Lab-to-industry talks",
    submittedAt: "10 Mar 2026, 10:05 AM",
    content: "A short speaker series on how electronics projects move from academic labs into real products would be useful.",
  },
];

const StudentSection: React.FC = () => {
  const [students] = useState<Student[]>(studentsSeed);
  const [suggestions] = useState<Suggestion[]>(suggestionsSeed);
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return students;
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.department.toLowerCase().includes(query) ||
        student.graduationYear.includes(query)
    );
  }, [search, students]);

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Student Management</h1>
            <p className="text-slate-600 mt-1">Review student records and graduation pipelines.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800">
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
            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.email}
                  className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">{student.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5" />
                        {student.email}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5" />
                        {student.phoneNumber}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      <GraduationCap className="h-3.5 w-3.5 mr-1" />
                      {student.department}
                    </Badge>
                    <Badge className="bg-slate-900">
                      <CalendarDays className="h-3.5 w-3.5 mr-1" />
                      {student.graduationYear}
                    </Badge>
                  </div>
                </div>
              ))}
              {filteredStudents.length === 0 && (
                <p className="text-sm text-slate-500">No students found for the current search.</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Suggestions</CardTitle>
            <p className="text-sm text-slate-500">
              Student-submitted ideas and requests collected in one place.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-slate-900">{suggestion.title}</h3>
                      <p className="text-sm text-slate-600">By {suggestion.studentName}</p>
                    </div>
                    <Badge variant="outline" className="w-fit border-slate-300 text-slate-700">
                      <CalendarDays className="mr-1 h-3.5 w-3.5" />
                      {suggestion.submittedAt}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{suggestion.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentSection;



import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Added Link import
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Clock, DollarSign, Users, Calendar, BookmarkIcon, 
  Eye, Share2, Search, Filter, Briefcase, GraduationCap, 
  TrendingUp, Building2, ChevronRight, Star, ArrowUpRight,
  MessageSquare // ✅ Added MessageSquare icon
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// Layout Import
import StudentLayout from "../StudentLayout";

// Import Form Components
import ApplicationFormDialog from "./ApplicationFormDialog";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import JobDetailsModal from "./JobDetailsModal";
import JobPostingForm from "../../AlumniPage/JobPostingForm";
import CreateWebinarForm from "./CreateWebinarForm";
import ShareStoryForm from "./ShareStoryForm";

// --- MOCK DATA ---
const initialJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    logo: "TC",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    postedBy: "HR Team",
    postedDate: "2 days ago",
    applications: 45,
    isUrgent: true,
    skills: ["React", "TypeScript", "Node.js"],
    description: "Join our dynamic team to build cutting-edge web applications using modern technologies.",
    contactEmail: "hiring@techcorp.com",
    benefits: ["Health Insurance", "Remote Options"],
    responsibilities: ["Build UI", "Fix bugs"],
    qualifications: ["BS CS", "3+ YOE"]
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    logo: "SX",
    location: "Remote",
    type: "Full-time",
    salary: "$100K - $130K",
    postedBy: "Founder",
    postedDate: "1 week ago",
    applications: 23,
    isUrgent: false,
    skills: ["Product Strategy", "Analytics", "Agile"],
    description: "Lead product development and strategy for our innovative SaaS platform."
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignStudio",
    logo: "DS",
    location: "New York, NY",
    type: "Contract",
    salary: "$80/hour",
    postedBy: "Creative Director",
    postedDate: "3 days ago",
    applications: 18,
    isUrgent: false,
    skills: ["Figma", "User Research", "Prototyping"]
  }
];

const initialApplications = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    appliedDate: "2024-01-15",
    status: "Interview Scheduled",
    progress: 75,
    nextStep: "Technical interview on January 25th at 2:00 PM",
    timeline: [
      { stage: "Application Submitted", date: "Jan 15, 2024", status: "completed", details: "Application reviewed by HR" },
      { stage: "Initial Screening", date: "Jan 18, 2024", status: "completed", details: "Phone screening completed" },
      { stage: "Technical Interview", date: "Jan 25, 2024", status: "pending", details: "Scheduled with engineering team" }
    ],
    contact: { name: "Sarah Johnson", email: "sarah@techcorp.com", phone: "123-456-7890" },
    notes: "Prepare for system design questions."
  }
];

const initialWebinars = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    presenter: "John Smith",
    presenterTitle: "Senior Engineer at Google",
    date: "2024-02-15",
    time: "14:00",
    duration: "60",
    registrations: 45,
    maxAttendees: 100,
    topics: ["React", "Performance", "Architecture"],
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Career Growth in Tech",
    presenter: "Emily Davis",
    presenterTitle: "VP Engineering at Meta",
    date: "2024-02-20",
    time: "16:00",
    duration: "90",
    registrations: 67,
    maxAttendees: 150,
    topics: ["Career Development", "Leadership"],
    status: "Upcoming"
  }
];

const initialSuccessStories = [
  {
    id: 1,
    name: "Alex Johnson",
    graduationYear: "2022",
    currentRole: "Software Engineer",
    company: "Microsoft",
    previousRole: "Intern",
    achievement: "Promoted from intern to full-time engineer within 6 months",
    brief: "Started as an intern and impressed the team with innovative solutions.",
    tags: ["Engineering", "Career Growth", "Microsoft"],
    linkedin: "https://linkedin.com/in/alexjohnson"
  }
];

const StudentCareerPortal = () => {
  // --- STATE ---
  const [jobs, setJobs] = useState(initialJobs);
  const [applications, setApplications] = useState(initialApplications);
  const [webinars, setWebinars] = useState(initialWebinars);
  const [successStories, setSuccessStories] = useState(initialSuccessStories);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [registeredWebinars, setRegisteredWebinars] = useState<number[]>([]);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Modals
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [showApplicationDetails, setShowApplicationDetails] = useState(false);
  const [showJobPostForm, setShowJobPostForm] = useState(false);
  const [showWebinarForm, setShowWebinarForm] = useState(false);
  const [showShareStoryForm, setShowShareStoryForm] = useState(false);

  // Selected Items
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  // Form Data
  const [applicationForm, setApplicationForm] = useState({
    fullName: "", email: "", country: "", phoneNumber: "", primarySkills: "",
    state: "", zipCode: "", yearsOfExperience: "", referralEmail: "",
    employeeRelation: "", resume: null as File | null, careerUpdates: false, privacyAgreement: false
  });
  const [resumeError, setResumeError] = useState<string | null>(null);

  // --- FILTER LOGIC ---
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  // --- HANDLERS ---
  const handleApplyClick = (job: any) => { setSelectedJob(job); setShowApplicationForm(true); };
  const handleJobClick = (job: any) => { setSelectedJob(job); setShowJobDetails(true); };
  
  const handleSaveJob = (job: any) => {
    if (savedJobs.includes(job.id)) {
      setSavedJobs(savedJobs.filter(id => id !== job.id));
      toast.success("Removed from saved jobs");
    } else {
      setSavedJobs([...savedJobs, job.id]);
      toast.success("Job saved!");
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationForm.resume) { setResumeError("Resume required"); return; }
    
    const newApp = {
      id: applications.length + 1,
      jobTitle: selectedJob.title,
      company: selectedJob.company,
      appliedDate: new Date().toISOString().split('T')[0],
      status: "Under Review",
      progress: 20,
      nextStep: "HR Review",
      timeline: [{ 
        stage: "Applied", 
        date: new Date().toLocaleDateString(), 
        status: "completed",
        details: "Application submitted successfully" 
      }],
      contact: { name: "HR", email: selectedJob.contactEmail, phone: "" },
      notes: "Applied via portal"
    };
    
    setApplications([...applications, newApp]);
    setShowApplicationForm(false);
    toast.success("Application Submitted Successfully!");
  };

  // --- RENDER HELPERS ---
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <StudentLayout>
      <div className="min-h-screen bg-gray-50/50 pb-20">
        <Toaster position="top-right" />

        {/* --- PREMIUM HERO SECTION --- */}
        <section className="relative bg-slate-900 text-white pt-16 pb-24 px-6 overflow-hidden mb-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative max-w-7xl mx-auto z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm mb-6"
            >
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-purple-100">Over 500+ Jobs Added This Week</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Dream Career</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Connect with top alumni, access exclusive opportunities, and fast-track your professional journey.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Active Jobs", val: "1.2k+", icon: Briefcase },
                { label: "Companies", val: "450+", icon: Building2 },
                { label: "Alumni Mentors", val: "800+", icon: Users },
                { label: "Placements", val: "95%", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center">
                  <stat.icon className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-2xl font-bold">{stat.val}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs defaultValue="jobs" className="space-y-8">
            
            <div className="flex justify-center">
              <TabsList className="bg-white border p-1 rounded-full shadow-sm h-auto inline-flex">
                {[
                  { id: "jobs", label: "Find Jobs", icon: Search },
                  { id: "applications", label: "Applications", icon: Briefcase },
                  // { id: "webinars", label: "Events", icon: Calendar },
                  { id: "success-stories", label: "Stories", icon: Star },
                  { id: "saved", label: "Saved", icon: BookmarkIcon },
                ].map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white flex items-center gap-2 transition-all"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* ================= JOB PORTAL TAB ================= */}
            <TabsContent value="jobs" className="space-y-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Search by job title or company..." 
                    className="pl-10 h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="h-12 w-[160px] rounded-xl border-gray-200 bg-gray-50">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <SelectValue placeholder="Location" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="San Francisco">San Francisco</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="h-12 w-[160px] rounded-xl border-gray-200 bg-gray-50">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="h-4 w-4" />
                        <SelectValue placeholder="Job Type" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <motion.div 
                        key={job.id}
                        layout
                        {...fadeIn}
                        whileHover={{ y: -5 }}
                        className="h-full"
                      >
                        <Card 
                          className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-100 overflow-hidden group" 
                          onClick={() => handleJobClick(job)}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start mb-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                                {job.company.substring(0,2).toUpperCase()}
                              </div>
                              <div className="flex gap-2">
                                {job.isUrgent && <Badge className="bg-red-50 text-red-600 hover:bg-red-100 border-red-100">Urgent</Badge>}
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-purple-600" onClick={(e) => { e.stopPropagation(); handleSaveJob(job); }}>
                                  <BookmarkIcon className={`h-5 w-5 ${savedJobs.includes(job.id) ? 'fill-purple-600 text-purple-600' : ''}`} />
                                </Button>
                              </div>
                            </div>
                            <CardTitle className="text-xl group-hover:text-purple-700 transition-colors">{job.title}</CardTitle>
                            <CardDescription className="flex items-center gap-1 font-medium text-gray-900">
                              {job.company}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                              <span className="flex items-center gap-1 text-green-600 font-medium"><DollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {job.skills.slice(0, 3).map((skill, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </CardContent>

                          <CardFooter className="pt-0 pb-6 px-6">
                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-11" onClick={(e) => { e.stopPropagation(); handleApplyClick(job); }}>
                              Apply Now <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div {...fadeIn} className="col-span-full py-20 text-center">
                      <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">No jobs found</h3>
                      <p className="text-gray-500">Try adjusting your search or filters.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </TabsContent>

            {/* ================= APPLICATIONS TAB ================= */}
            <TabsContent value="applications" className="space-y-6">
              <div className="grid gap-4">
                {applications.map((app) => (
                  <Card key={app.id} className="overflow-hidden border-l-4 border-l-purple-500 hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        <div className="flex-1 space-y-2 text-center md:text-left">
                          <h3 className="text-xl font-bold">{app.jobTitle}</h3>
                          <p className="text-purple-700 font-medium">{app.company}</p>
                          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                            <span>Applied: {app.appliedDate}</span>
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700">{app.status}</Badge>
                          </div>
                        </div>

                        <div className="w-full md:w-1/3 space-y-2">
                          <div className="flex justify-between text-xs font-medium text-gray-500">
                            <span>Progress</span>
                            <span>{app.progress}%</span>
                          </div>
                          <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${app.progress}%` }} 
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            />
                          </div>
                          <p className="text-xs text-gray-400 text-center md:text-right">Next: {app.nextStep}</p>
                        </div>

                        <Button variant="outline" onClick={() => { setSelectedApplication(app); setShowApplicationDetails(true); }}>
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ================= WEBINARS TAB ================= */}
            <TabsContent value="webinars">
              <div className="grid gap-6 md:grid-cols-2">
                {webinars.map((webinar) => (
                  <Card key={webinar.id} className="group hover:shadow-lg transition-all border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex justify-between">
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Live Session</Badge>
                        <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {webinar.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl pt-2">{webinar.title}</CardTitle>
                      <CardDescription>
                        with <span className="font-semibold text-gray-900">{webinar.presenter}</span>, {webinar.presenterTitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {webinar.time} ({webinar.duration}m)</span>
                        <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {webinar.registrations}/{webinar.maxAttendees}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {webinar.topics.map((topic, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* ================= SUCCESS STORIES TAB (UPDATED WITH MESSAGE) ================= */}
            <TabsContent value="success-stories">
              <div className="grid gap-6 md:grid-cols-2">
                {successStories.map((story) => (
                  <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2"></div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{story.name}</h3>
                          <p className="text-sm text-gray-500">Class of {story.graduationYear}</p>
                        </div>
                        <div className="bg-yellow-100 p-2 rounded-full">
                          <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl mb-4 border border-gray-100">
                        <div className="text-xs font-semibold uppercase text-gray-400 mb-1">Current Role</div>
                        <div className="font-bold text-gray-900">{story.currentRole}</div>
                        <div className="text-purple-600">{story.company}</div>
                      </div>

                      <p className="text-gray-600 text-sm italic mb-4">"{story.brief}"</p>
                      
                      {/* ✅ UPDATED BUTTON SECTION */}
                      <div className="flex gap-3">
                        <Link to={`/student/messages?user=${story.id}`} className="flex-1">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            <MessageSquare className="h-4 w-4 mr-2" /> Message
                          </Button>
                        </Link>
                        
                        <Button variant="outline" className="flex-1 group border-purple-200 text-purple-700 hover:bg-purple-50" asChild>
                           <a href={story.linkedin} target="_blank" rel="noreferrer">
                             LinkedIn <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                           </a>
                        </Button>
                      </div>

                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

          </Tabs>
        </div>

        {/* --- MODALS --- */}
        {/* <ApplicationFormDialog
          showApplicationForm={showApplicationForm}
          setShowApplicationForm={setShowApplicationForm}
          applicationForm={applicationForm}
          setApplicationForm={setApplicationForm}
          handleSubmitApplication={handleSubmitApplication}
          handleFileChange={handleFileChange}
          resumeError={resumeError}
          selectedJob={selectedJob}
        />
        <JobDetailsModal
          open={showJobDetails}
          onOpenChange={setShowJobDetails}
          job={selectedJob}
          onApply={handleApplyClick}
          onSave={handleSaveJob}
          savedJobs={savedJobs}
        />
        <ApplicationDetailsModal
          open={showApplicationDetails}
          onOpenChange={setShowApplicationDetails}
          application={selectedApplication}
        />
        <JobPostingForm
          open={showJobPostForm}
          onOpenChange={setShowJobPostForm}
          onJobPosted={() => {}}
        />
        <CreateWebinarForm
          open={showWebinarForm}
          onOpenChange={setShowWebinarForm}
          onWebinarCreated={(w) => setWebinars([...webinars, w])}
        />
        <ShareStoryForm
          open={showShareStoryForm}
          onOpenChange={setShowShareStoryForm}
          onStoryShared={(s) => setSuccessStories([...successStories, s])}
        /> */}
      </div>
    </StudentLayout>
  );
};

export default StudentCareerPortal;
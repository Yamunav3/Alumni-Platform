

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import career from "@/assets/career.jpg";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Calendar,
  BookmarkIcon,
  PlusIcon,
  Eye,
  Share2,
  Video,
  Star,
  UserPlus
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// Import all the form components
import ApplicationFormDialog from "./ApplicationFormDialog";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import JobDetailsModal from "./JobDetailsModal";
import JobPostingForm from "./JobPostingForm";
import CreateWebinarForm from "./CreateWebinarForm";
import ShareStoryForm from "./ShareStoryForm";
import StudentNavbar from "../StudentNavbar";

// Sample data
const initialJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    postedBy: "HR Team",
    postedDate: "2 days ago",
    applications: 45,
    isUrgent: true,
    skills: ["React", "TypeScript", "Node.js"],
    description: "Join our dynamic team to build cutting-edge web applications using modern technologies.",
    responsibilities: [
      "Develop and maintain user interfaces using React and TypeScript",
      "Collaborate with UX/UI designers to implement responsive designs",
      "Optimize applications for maximum speed and scalability",
      "Mentor junior developers and conduct code reviews"
    ],
    qualifications: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, Zustand)",
      "Knowledge of testing frameworks (Jest, React Testing Library)"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development opportunities"
    ],
    contactEmail: "hiring@techcorp.com"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
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
      { stage: "Technical Interview", date: "Jan 25, 2024", status: "pending", details: "Scheduled with engineering team" },
      { stage: "Final Interview", date: "TBD", status: "pending", details: "Pending technical interview completion" }
    ],
    contact: {
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      phone: "+1 (555) 123-4567"
    },
    notes: "Strong candidate with excellent React skills. Very interested in the role and company culture."
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
    topics: ["Career Development", "Leadership", "Networking"],
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
    brief: "Started as an intern and impressed the team with innovative solutions. Led a project that improved system performance by 40%.",
    tags: ["Engineering", "Career Growth", "Microsoft"],
    linkedin: "https://linkedin.com/in/alexjohnson"
  }
];

const StudentCareerPortal = () => {
  // State management
  const [jobs, setJobs] = useState(initialJobs);
  const [applications, setApplications] = useState(initialApplications);
  const [webinars, setWebinars] = useState(initialWebinars);
  const [successStories, setSuccessStories] = useState(initialSuccessStories);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [connectedUsers, setConnectedUsers] = useState<string[]>([]);
  const [registeredWebinars, setRegisteredWebinars] = useState<number[]>([]);

  // Modal states
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [showApplicationDetails, setShowApplicationDetails] = useState(false);
  const [showJobPostForm, setShowJobPostForm] = useState(false);
  const [showWebinarForm, setShowWebinarForm] = useState(false);
  const [showShareStoryForm, setShowShareStoryForm] = useState(false);

  // Selected items
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  // Application form state
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    country: "",
    phoneNumber: "",
    primarySkills: "",
    state: "",
    zipCode: "",
    yearsOfExperience: "",
    referralEmail: "",
    employeeRelation: "",
    resume: null as File | null,
    careerUpdates: false,
    privacyAgreement: false
  });
  const [resumeError, setResumeError] = useState<string | null>(null);

  // Handlers
  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleJobClick = (job: any) => {
    setSelectedJob(job);
    setShowJobDetails(true);
  };

  const handleSaveJob = (job: any) => {
    if (savedJobs.includes(job.id)) {
      setSavedJobs(savedJobs.filter(id => id !== job.id));
      toast.success(`Removed ${job.title} from saved jobs`);
    } else {
      setSavedJobs([...savedJobs, job.id]);
      toast.success(`Saved ${job.title} to your saved jobs`);
    }
  };

  const handleViewApplicationDetails = (application: any) => {
    setSelectedApplication(application);
    setShowApplicationDetails(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB limit
        setResumeError("File size must be less than 1MB");
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setResumeError("Please upload a PDF, DOC, or DOCX file");
        return;
      }
      setResumeError(null);
      setApplicationForm({...applicationForm, resume: file});
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate resume is uploaded
    if (!applicationForm.resume) {
      setResumeError("Please upload your resume to continue");
      toast.error("Resume is required to submit application");
      return;
    }
    
    const newApplication = {
      id: applications.length + 1,
      jobTitle: selectedJob.title,
      company: selectedJob.company,
      appliedDate: new Date().toISOString().split('T')[0],
      status: "Under Review",
      progress: 25,
      nextStep: "Application is being reviewed by HR team",
      timeline: [
        {
          stage: "Application Submitted",
          date: new Date().toLocaleDateString(),
          status: "completed",
          details: "Application submitted successfully"
        }
      ],
      contact: {
        name: "HR Team",
        email: selectedJob.contactEmail || "hr@company.com",
        phone: ""
      },
      notes: "Application submitted via career portal"
    };

    setApplications([...applications, newApplication]);
    setShowApplicationForm(false);
    
    // Reset form
    setApplicationForm({
      fullName: "",
      email: "",
      country: "",
      phoneNumber: "",
      primarySkills: "",
      state: "",
      zipCode: "",
      yearsOfExperience: "",
      referralEmail: "",
      employeeRelation: "",
      resume: null,
      careerUpdates: false,
      privacyAgreement: false
    });
    setResumeError(null);
    
    toast.success(`You have successfully applied for ${selectedJob.title} at ${selectedJob.company}!`);
  };

  const handleJobPosted = (newJob: any) => {
    setJobs([newJob, ...jobs]);
  };

  const handleWebinarCreated = (newWebinar: any) => {
    setWebinars([newWebinar, ...webinars]);
  };

  const handleWebinarRegistration = (webinar: any) => {
    if (registeredWebinars.includes(webinar.id)) {
      // Already registered
      toast(`You're already registered for ${webinar.title}`, {
        duration: 3000,
        style: { background: '#3b82f6', color: '#fff' }
      });
      return;
    }

    // Add to registered webinars
    setRegisteredWebinars([...registeredWebinars, webinar.id]);
    
    // Update webinar registration count
    setWebinars(webinars.map(w => 
      w.id === webinar.id 
        ? { ...w, registrations: w.registrations + 1 }
        : w
    ));
    
    toast.success(`Successfully registered for ${webinar.title}!`);
  };

  const handleStoryShared = (newStory: any) => {
    setSuccessStories([newStory, ...successStories]);
  };

  const handleConnect = (userName: string) => {
    if (!connectedUsers.includes(userName)) {
      setConnectedUsers([...connectedUsers, userName]);
      toast.success(`Successfully sent connection request to ${userName}`);
    } else {
      toast(`Already connected with ${userName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-light/20">
      <Toaster position="top-right" />
      <StudentNavbar/>
      
      <section className="relative py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
  {/* Background Image */}
  <img
    src={career}
    alt="Career Portal"
    className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
  />

  {/* Grid Overlay */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl  text-white md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
      Career Portal
    </h1>
    <p className="text-xl text-white text-muted-foreground max-w-3xl mx-auto animate-slide-up">
      Discover opportunities, track applications, and advance your career with alumni connections
    </p>
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="jobs">Job Portal</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
          </TabsList>

          {/* Job Portal Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Latest Job Opportunities</h2>
              <Button onClick={() => setShowJobPostForm(true)} className="flex items-center">
                <PlusIcon className="h-4 w-4 mr-2" />
                Post Job
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-medium transition-shadow cursor-pointer" onClick={() => handleJobClick(job)}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg hover:text-primary transition-colors">{job.title}</CardTitle>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      {job.isUrgent && <Badge variant="destructive" className="animate-pulse">Urgent</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                      
                      {job.salary && (
                        <div className="flex items-center text-sm">
                          <DollarSign className="h-4 w-4 mr-1 text-success" />
                          <span className="font-medium text-success">{job.salary}</span>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1">
                        {job.skills.slice(0, 3).map((skill: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                        {job.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{job.skills.length - 3} more</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="h-3 w-3 mr-1" />
                          {job.applications} applicants
                        </div>
                        <span className="text-xs text-muted-foreground">{job.postedDate}</span>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyClick(job);
                          }}
                        >
                          Apply
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSaveJob(job);
                          }}
                          className={`${savedJobs.includes(job.id) ? 'bg-saved text-white hover:bg-saved/90' : ''}`}
                        >
                          <BookmarkIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Applications</h2>
              <p className="text-muted-foreground">{applications.length} applications</p>
            </div>
            
            <div className="space-y-4">
              {applications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                        <p className="text-primary font-medium">{application.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">Applied on {application.appliedDate}</p>
                        
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm text-muted-foreground">{application.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-500" 
                              style={{ width: `${application.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={
                          application.status === "Interview Scheduled" ? "bg-blue-100 text-blue-800" :
                          application.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
                          application.status === "Offer Received" ? "bg-green-100 text-green-800" :
                          "bg-gray-100 text-gray-800"
                        }>
                          {application.status}
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleViewApplicationDetails(application)}
                          className="flex items-center"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {applications.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No applications yet. Start applying to jobs!</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Webinars Tab */}
          <TabsContent value="webinars" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Career Webinars</h2>
              <Button onClick={() => setShowWebinarForm(true)} className="flex items-center">
                <Video className="h-4 w-4 mr-2" />
                Host Webinar
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {webinars.map((webinar) => (
                <Card key={webinar.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{webinar.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">{webinar.presenter}</p>
                        <p className="text-sm text-muted-foreground">{webinar.presenterTitle}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {webinar.topics.map((topic: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {webinar.registrations}/{webinar.maxAttendees} registered
                        </span>
                        <span className="text-muted-foreground">{webinar.duration} mins</span>
                      </div>
                      
                      <Button 
                        className={`w-full ${registeredWebinars.includes(webinar.id) ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
                        onClick={() => handleWebinarRegistration(webinar)}
                        disabled={webinar.registrations >= webinar.maxAttendees}
                      >
                        {registeredWebinars.includes(webinar.id) 
                          ? 'Registered ✓' 
                          : webinar.registrations >= webinar.maxAttendees 
                            ? 'Full' 
                            : 'Register Now'
                        }
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Success Stories Tab */}
          <TabsContent value="success-stories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Success Stories</h2>
              <Button onClick={() => setShowShareStoryForm(true)} className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share Story
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {successStories.map((story) => (
                <Card key={story.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <p className="text-primary font-medium">{story.currentRole} at {story.company}</p>
                        <p className="text-sm text-muted-foreground">Class of {story.graduationYear}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Success
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm">Key Achievement</h4>
                        <p className="text-sm text-muted-foreground">{story.achievement}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm">Story</h4>
                        <p className="text-sm text-muted-foreground">{story.brief}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {story.tags.map((tag: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleConnect(story.name)}
                        >
                          <UserPlus className="h-4 w-4 mr-2" />
                          {connectedUsers.includes(story.name) ? 'Connected' : 'Connect'}
                        </Button>
                        {story.linkedin && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={story.linkedin} target="_blank" rel="noopener noreferrer">
                              LinkedIn
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Jobs Tab */}
          <TabsContent value="saved" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Saved Jobs</h2>
              <p className="text-muted-foreground">{savedJobs.length} saved jobs</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter(job => savedJobs.includes(job.id))
                .map((job) => (
                  <Card key={job.id} className="hover:shadow-medium transition-shadow cursor-pointer" onClick={() => handleJobClick(job)}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <Badge className="bg-saved text-white">Saved</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApplyClick(job);
                            }}
                          >
                            Apply
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveJob(job);
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              
              {savedJobs.length === 0 && (
                <div className="col-span-full">
                  <Card>
                    <CardContent className="p-8 text-center">
                      <BookmarkIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">No saved jobs yet. Save jobs you're interested in!</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* All Modal Components */}
      <ApplicationFormDialog
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
        onJobPosted={handleJobPosted}
      />

      <CreateWebinarForm
        open={showWebinarForm}
        onOpenChange={setShowWebinarForm}
        onWebinarCreated={handleWebinarCreated}
      />

      <ShareStoryForm
        open={showShareStoryForm}
        onOpenChange={setShowShareStoryForm}
        onStoryShared={handleStoryShared}
      />
    </div>
  );
};

export default StudentCareerPortal;
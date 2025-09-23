import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal, message } from "antd";
import { Search, Filter, MapPin, Clock, DollarSign, Calendar, Users, Upload } from "lucide-react";

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  skills: string[];
  deadline: string;
  applicants: number;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  companySize: string;
  industry: string;
}

interface InternshipSectionProps {
  internships: Internship[];
}

const InternshipSection = ({ internships }: InternshipSectionProps) => {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [appliedInternships, setAppliedInternships] = useState<Set<number>>(new Set());
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
    coverLetter: '',
    resume: null as File | null
  });

  const showDetails = (internship: Internship) => {
    setSelectedInternship(internship);
    setIsDetailsModalOpen(true);
  };

  const showApplication = (internship: Internship) => {
    setSelectedInternship(internship);
    setIsApplicationModalOpen(true);
  };

  const handleApplicationSubmit = () => {
    if (selectedInternship) {
      setAppliedInternships(prev => new Set([...prev, selectedInternship.id]));
      setIsApplicationModalOpen(false);
      message.success('Application submitted successfully! We will review your application and get back to you soon.');
      setApplicationData({
        fullName: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: '',
        coverLetter: '',
        resume: null
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search internships..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {internships.map((internship) => (
          <Card
            key={internship.id}
            className="bg-gradient-card rounded-9xl cursor-pointer group
                       transition-transform duration-300 ease-in-out
                       hover:scale-[1.02] hover:-translate-y-2 hover:shadow-blue-500/100 rounded-2xl"
          >
            <CardHeader>
              <CardTitle
                className="text-xl cursor-pointer group-hover:text-primary transition-colors"
                onClick={() => showDetails(internship)}
              >
                {internship.title}
              </CardTitle>
              <CardDescription className="text-lg font-medium text-primary">
                {internship.company}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>{internship.stipend}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due: {internship.deadline}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {internship.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {internship.applicants} applicants
                </span>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => showDetails(internship)}
                    className="transition-colors group-hover:border-primary group-hover:text-primary"
                  >
                    View Details
                  </Button>
                  <Button
                    className={`transition-all duration-300 ${
                      appliedInternships.has(internship.id)
                        ? 'bg-success hover:bg-success/80'
                        : 'bg-gradient-secondary hover:shadow-blue-500/90'
                    }`}
                    onClick={() => showApplication(internship)}
                    disabled={appliedInternships.has(internship.id)}
                  >
                    {appliedInternships.has(internship.id) ? 'Applied' : 'Apply Now'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Details Modal */}
      <Modal
        title={null}
        open={isDetailsModalOpen}
        onCancel={() => setIsDetailsModalOpen(false)}
        width={900}
        footer={null}
      >
        {selectedInternship && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">{selectedInternship.title}</h2>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-xl font-medium text-primary">{selectedInternship.company}</p>
                <Badge variant="outline">{selectedInternship.industry}</Badge>
                <Badge variant="outline">{selectedInternship.companySize}</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedInternship.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedInternship.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedInternship.stipend}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due: {selectedInternship.deadline}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground">{selectedInternship.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedInternship.requirements.map((req, index) => (
                    <li key={index} className="text-muted-foreground">{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedInternship.responsibilities.map((resp, index) => (
                    <li key={index} className="text-muted-foreground">{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedInternship.benefits.map((benefit, index) => (
                    <li key={index} className="text-muted-foreground">{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInternship.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-secondary hover:shadow-blue-500/40 transition-all duration-300 px-8"
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  showApplication(selectedInternship);
                }}
              >
                Apply for this Position
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Application Modal */}
      <Modal
        title="Apply for Internship"
        open={isApplicationModalOpen}
        onCancel={() => setIsApplicationModalOpen(false)}
        width={700}
        footer={[
          <Button key="cancel" variant="outline" onClick={() => setIsApplicationModalOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" className="bg-gradient-primary hover:shadow-blue-500/40" onClick={handleApplicationSubmit}>
            Submit Application
          </Button>
        ]}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input 
                id="fullName" 
                value={applicationData.fullName}
                onChange={(e) => setApplicationData({...applicationData, fullName: e.target.value})}
                placeholder="Enter your full name" 
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email"
                value={applicationData.email}
                onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                placeholder="Enter your email" 
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone" 
              value={applicationData.phone}
              onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
              placeholder="Enter your phone number" 
            />
          </div>

          <div>
            <Label htmlFor="education">Education *</Label>
            <textarea 
              id="education"
              className="w-full p-3 border rounded-lg min-h-[100px]"
              value={applicationData.education}
              onChange={(e) => setApplicationData({...applicationData, education: e.target.value})}
              placeholder="Describe your educational background, degree, institution, etc."
            />
          </div>

          <div>
            <Label htmlFor="experience">Work Experience</Label>
            <textarea 
              id="experience"
              className="w-full p-3 border rounded-lg min-h-[100px]"
              value={applicationData.experience}
              onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
              placeholder="Describe your relevant work experience, projects, etc."
            />
          </div>

          <div>
            <Label htmlFor="skills">Technical Skills *</Label>
            <textarea 
              id="skills"
              className="w-full p-3 border rounded-lg min-h-[80px]"
              value={applicationData.skills}
              onChange={(e) => setApplicationData({...applicationData, skills: e.target.value})}
              placeholder="List your technical skills relevant to this position"
            />
          </div>

          <div>
            <Label htmlFor="coverLetter">Cover Letter *</Label>
            <textarea 
              id="coverLetter"
              className="w-full p-3 border rounded-lg min-h-[120px]"
              value={applicationData.coverLetter}
              onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
              placeholder="Write a brief cover letter explaining why you're interested in this position"
            />
          </div>

          <div>
            <Label htmlFor="resume">Resume/CV *</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
              <input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                className="hidden" 
                onChange={(e) => setApplicationData({...applicationData, resume: e.target.files?.[0] || null})}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InternshipSection;

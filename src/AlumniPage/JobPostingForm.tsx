import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { postJob } from "@/api/AlumniAPI";

interface JobPostingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJobPosted: (job: any) => void;
}

const JobPostingForm = ({ open, onOpenChange, onJobPosted }: JobPostingFormProps) => {
  const initialFormState = {
    jobtitle: "",
    company: "",
    location: "",
    jobtype: "Full-time",
    salary_range: "",
    jobdescription: "",
    responsibilities: "",
    qualifications: "",
    benefits: "",
    requiredskills: "",
    email: ""
  };
  const [formData, setFormData] = useState({
    ...initialFormState
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      jobtitle: formData.jobtitle,
      company: formData.company,
      location: formData.location,
      jobtype: formData.jobtype,
      salary_range: formData.salary_range,
      salary: formData.salary_range,
      jobdescription: formData.jobdescription,
      responsibilities: formData.responsibilities.split('\n').filter(line => line.trim()),
      qualifications: formData.qualifications.split('\n').filter(line => line.trim()),
      benefits: formData.benefits.split('\n').filter(line => line.trim()),
      requiredskills: formData.requiredskills.split(',').map(skill => skill.trim()).filter(skill => skill),
      skills: formData.requiredskills.split(',').map(skill => skill.trim()).filter(skill => skill),
      email: formData.email,
      contactEmail: formData.email
    };

    try {
      setIsSubmitting(true);
      const createdJob = await postJob(payload);
      onJobPosted(createdJob);
      onOpenChange(false);
      setFormData(initialFormState);
      toast.success("Job posted successfully!");
    } catch (error: any) {
      console.error("Failed to post job:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.response?.data ||
        "Failed to post job. Please try again.";
      toast.error(String(errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Post a New Job</DialogTitle>
          <DialogDescription>
            Fill out the form below to post a new job opportunity.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.jobtitle}
                onChange={(e)=> setFormData(prev => ({ ...prev, jobtitle: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={(e)=>setFormData(prev =>({...prev,company: e.target.value}))}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={(e)=>setFormData(prev =>({...prev,location: e.target.value}))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Job Type *</Label>
              <select
                id="type"
                name="type"
                value={formData.jobtype}
                onChange={(e)=>setFormData(prev =>({...prev,jobtype: e.target.value}))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="salary">Salary Range</Label>
            <Input
              id="salary"
              name="salary"
              value={formData.salary_range}
              onChange={(e)=>setFormData(prev =>({...prev,salary_range: e.target.value}))}
              placeholder="e.g. $80K - $120K"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Job Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.jobdescription}
              onChange={(e)=>setFormData(prev =>({...prev,jobdescription: e.target.value}))}
              rows={3}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="responsibilities">Responsibilities (one per line)</Label>
            <Textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={(e)=>setFormData(prev =>({...prev,responsibilities: e.target.value}))}
              rows={3}
              placeholder="Design and implement scalable web applications&#10;Work closely with product managers and designers&#10;Mentor junior engineers"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="qualifications">Qualifications (one per line)</Label>
            <Textarea
              id="qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={(e)=>setFormData(prev =>({...prev,qualifications: e.target.value}))}
              rows={3}
              placeholder="5+ years in software engineering&#10;Strong knowledge of React & Node.js&#10;Experience with AWS services"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="benefits">Benefits (one per line)</Label>
            <Textarea
              id="benefits"
              name="benefits"
              value={formData.benefits}
              onChange={(e)=>setFormData(prev =>({...prev,benefits: e.target.value}))}
              rows={2}
              placeholder="Health insurance&#10;401(k) matching&#10;Remote flexibility"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="skills">Required Skills (comma separated)</Label>
            <Input
              id="skills"
              name="skills"
              value={formData.requiredskills}
              onChange={(e)=>setFormData(prev =>({...prev,requiredskills: e.target.value}))}
              placeholder="React, Node.js, AWS, TypeScript"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email *</Label>
            <Input
              id="contactEmail"
              name="contactEmail"
              type="email"
              value={formData.email}
              onChange={(e)=>setFormData(prev =>({...prev,email: e.target.value}))}
              required
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              disabled={isSubmitting}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Job"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobPostingForm;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Calendar,
  Building2,
  Mail,
  BookmarkIcon,
  Share2
} from "lucide-react";

interface JobDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job: any;
  onApply: (job: any) => void;
  onSave: (job: any) => void;
  savedJobs: number[];
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ 
  open, 
  onOpenChange, 
  job,
  onApply,
  onSave,
  savedJobs
}) => {
  if (!job) return null;

  const isSaved = savedJobs.includes(job.id);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl font-bold">{job.title}</DialogTitle>
              <DialogDescription className="text-lg font-medium text-primary mt-1">
                {job.company}
              </DialogDescription>
            </div>
            {job.isUrgent && (
              <Badge variant="destructive" className="animate-pulse">
                Urgent Hiring
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Job Meta Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{job.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{job.type}</span>
            </div>
            {job.salary && (
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{job.salary}</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{job.postedDate}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button onClick={() => onApply(job)} className="flex-1">
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onSave(job)}
              className={`${isSaved ? 'bg-saved text-white hover:bg-saved/90' : ''}`}
            >
              <BookmarkIcon className="h-4 w-4 mr-2" />
              {isSaved ? 'Saved' : 'Save Job'}
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <Separator />

          {/* Job Description */}
          {job.description && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Job Description</h3>
              <p className="text-sm leading-relaxed">{job.description}</p>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((resp: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Qualifications */}
          {job.qualifications && job.qualifications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements & Qualifications</h3>
              <ul className="space-y-2">
                {job.qualifications.map((qual: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {job.skills && job.skills.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Benefits & Perks</h3>
              <ul className="space-y-2">
                {job.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator />

          {/* Company Info & Contact */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Building2 className="h-5 w-5 mr-2" />
                About {job.company}
              </h3>
              <p className="text-sm text-muted-foreground">
                {job.companyDescription || "Learn more about this exciting opportunity and join our growing team."}
              </p>
            </div>
            
            {job.contactEmail && (
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Information
                </h3>
                <p className="text-sm">
                  For questions about this position, reach out to:
                </p>
                <p className="text-sm font-medium text-primary">{job.contactEmail}</p>
              </div>
            )}
          </div>

          {/* Application Stats */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Applications received:</span>
              <span className="font-medium">{job.applications || 0}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-muted-foreground">Posted by:</span>
              <span className="font-medium">{job.postedBy || "HR Team"}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;




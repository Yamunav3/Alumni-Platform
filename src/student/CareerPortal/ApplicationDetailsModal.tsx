

  import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Calendar, CheckCircle2, Circle, Clock } from "lucide-react";

interface ApplicationDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  application: any;
}

const ApplicationDetailsModal: React.FC<ApplicationDetailsModalProps> = ({
  open,
  onOpenChange,
  application,
}) => {
  if (!application) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled": return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      case "Under Review": return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
      case "Offer Received": return "bg-green-100 text-green-700 hover:bg-green-200";
      default: return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start mr-4">
            <div>
              <DialogTitle className="text-xl font-bold">{application.jobTitle}</DialogTitle>
              <p className="text-purple-600 font-medium">{application.company}</p>
            </div>
            <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* Progress Section */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between text-sm mb-2 font-medium">
              <span>Application Progress</span>
              <span>{application.progress}%</span>
            </div>
            <Progress value={application.progress} className="h-2" />
            <div className="mt-3 flex items-start gap-2 text-sm text-slate-600">
              <div className="mt-0.5"><Clock className="w-4 h-4 text-purple-500" /></div>
              <div>
                <span className="font-semibold text-slate-900">Next Step: </span>
                {application.nextStep}
              </div>
            </div>
          </div>

          {/* Timeline */}
          {application.timeline && (
            <div>
              <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-wider mb-4">Timeline</h3>
              <div className="space-y-0 pl-2">
                {application.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex gap-4 pb-6 last:pb-0 relative">
                    {/* Timeline Line */}
                    {index !== application.timeline.length - 1 && (
                      <div className="absolute left-[9px] top-6 bottom-0 w-[2px] bg-slate-100"></div>
                    )}
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      {event.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 bg-white" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 bg-white" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="-mt-1">
                      <p className="font-medium text-slate-900">{event.stage}</p>
                      <p className="text-xs text-slate-500">{event.date}</p>
                      {event.details && <p className="text-sm text-slate-600 mt-1">{event.details}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Contact Info */}
          {application.contact && (
            <div>
              <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-wider mb-3">Hiring Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {application.contact.name && (
                  <div className="flex items-center gap-2 text-sm p-3 bg-white border rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
                      {application.contact.name.charAt(0)}
                    </div>
                    <span>{application.contact.name}</span>
                  </div>
                )}
                {application.contact.email && (
                  <div className="flex items-center gap-2 text-sm p-3 bg-white border rounded-lg">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{application.contact.email}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDetailsModal;
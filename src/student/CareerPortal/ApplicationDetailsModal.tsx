  // import {
  //   Dialog,
  //   DialogContent,
  //   DialogDescription,
  //   DialogHeader,
  //   DialogTitle,
  // } from "@/components/ui/dialog";
  // import { Progress } from "@/components/ui/progress";
  // import { Badge } from "@/components/ui/badge";
  // import { Calendar, Clock, Mail, Phone, MapPin } from "lucide-react";

  // interface ApplicationDetailsModalProps {
  //   open: boolean;
  //   onOpenChange: (open: boolean) => void;
  //   application: any;
  // }

  // const ApplicationDetailsModal: React.FC<ApplicationDetailsModalProps> = ({ 
  //   open, 
  //   onOpenChange, 
  //   application 
  // }) => {
  //   if (!application) return null;

  //   const getStatusColor = (status: string) => {
  //     switch (status) {
  //       case "Interview Scheduled":
  //         return "bg-blue-100 text-blue-800";
  //       case "Under Review":
  //         return "bg-yellow-100 text-yellow-800";
  //       case "Offer Received":
  //         return "bg-green-100 text-green-800";
  //       default:
  //         return "bg-gray-100 text-gray-800";
  //     }
  //   };

  //   return (
  //     <Dialog open={open} onOpenChange={onOpenChange}>
  //       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95">
  //         <DialogHeader>
  //           <DialogTitle className="text-xl font-semibold">Application Details</DialogTitle>
  //           <DialogDescription>
  //             Detailed information about your application for {application.jobTitle} at {application.company}
  //           </DialogDescription>
  //         </DialogHeader>

  //         <div className="space-y-6 py-4">
  //           {/* Basic Info */}
  //           <div className="grid grid-cols-2 gap-4">
  //             <div>
  //               <h3 className="font-semibold text-sm text-muted-foreground">Position</h3>
  //               <p className="text-lg font-medium">{application.jobTitle}</p>
  //             </div>
  //             <div>
  //               <h3 className="font-semibold text-sm text-muted-foreground">Company</h3>
  //               <p className="text-lg">{application.company}</p>
  //             </div>
  //           </div>

  //           {/* Status */}
  //           <div>
  //             <h3 className="font-semibold text-sm text-muted-foreground">Application Status</h3>
  //             <div className="flex items-center justify-between mt-1">
  //               <Badge className={getStatusColor(application.status)}>
  //                 {application.status}
  //               </Badge>
  //               <span className="text-sm text-muted-foreground">Applied on {application.appliedDate}</span>
  //             </div>
  //           </div>

  //           {/* Progress */}
  //           <div>
  //             <div className="flex items-center justify-between mb-2">
  //               <h3 className="font-semibold text-sm text-muted-foreground">Application Progress</h3>
  //               <span className="text-sm text-muted-foreground">{application.progress}%</span>
  //             </div>
  //             <Progress value={application.progress} className="h-2" />
  //           </div>

  //           {/* Next Steps */}
  //           <div>
  //             <h3 className="font-semibold text-sm text-muted-foreground">Next Step</h3>
  //             <p className="text-sm mt-1">{application.nextStep}</p>
  //           </div>

  //           {/* Timeline */}
  //           {application.timeline && application.timeline.length > 0 && (
  //             <div>
  //               <h3 className="font-semibold text-sm text-muted-foreground mb-3">Application Timeline</h3>
  //               <div className="space-y-2">
  //                 {application.timeline.map((event: any, index: number) => (
  //                   <div key={index} className="flex items-start space-x-3 animate-in fade-in-0 slide-in-from-left-2" style={{animationDelay: `${index * 100}ms`}}>
  //                     <div className={`w-2 h-2 rounded-full mt-2 ${
  //                       event.status === 'completed' ? 'bg-success' : 'bg-gray-300'
  //                     }`} />
  //                     <div className="flex-1">
  //                       <p className="text-sm font-medium">{event.stage}</p>
  //                       <p className="text-xs text-muted-foreground">{event.date}</p>
  //                       {event.details && (
  //                         <p className="text-xs text-muted-foreground mt-1">{event.details}</p>
  //                       )}
  //                     </div>
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>
  //           )}

  //           {/* Contact Information */}
  //           {application.contact && (
  //             <div>
  //               <h3 className="font-semibold text-sm text-muted-foreground mb-3">Contact Information</h3>
  //               <div className="space-y-2">
  //                 {application.contact.name && (
  //                   <div className="flex items-center space-x-2">
  //                     <span className="text-sm">👤 {application.contact.name}</span>
  //                   </div>
  //                 )}
  //                 {application.contact.email && (
  //                   <div className="flex items-center space-x-2">
  //                     <Mail className="h-4 w-4 text-muted-foreground" />
  //                     <span className="text-sm">{application.contact.email}</span>
  //                   </div>
  //                 )}
  //                 {application.contact.phone && (
  //                   <div className="flex items-center space-x-2">
  //                     <Phone className="h-4 w-4 text-muted-foreground" />
  //                     <span className="text-sm">{application.contact.phone}</span>
  //                   </div>
  //                 )}
  //               </div>
  //             </div>
  //           )}

  //           {/* Notes */}
  //           {application.notes && (
  //             <div>
  //               <h3 className="font-semibold text-sm text-muted-foreground">Notes</h3>
  //               <p className="text-sm mt-1 bg-muted p-3 rounded-md">{application.notes}</p>
  //             </div>
  //           )}
  //         </div>
  //       </DialogContent>
  //     </Dialog>
  //   );
  // };

  // export default ApplicationDetailsModal;




  import { Drawer } from "antd";
  import { Progress } from "@/components/ui/progress";
  import { Badge } from "@/components/ui/badge";
  import { Mail, Phone } from "lucide-react";

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
        case "Interview Scheduled":
          return "bg-blue-100 text-blue-800";
        case "Under Review":
          return "bg-yellow-100 text-yellow-800";
        case "Offer Received":
          return "bg-green-100 text-green-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <Drawer
        title={`Application Details - ${application.jobTitle}`}
        open={open}
        onClose={() => onOpenChange(false)}
        width={700}
      >
        <div className="space-y-6 py-2">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground">Position</h3>
              <p className="text-lg font-medium">{application.jobTitle}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground">Company</h3>
              <p className="text-lg">{application.company}</p>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground">Application Status</h3>
            <div className="flex items-center justify-between mt-1">
              <Badge className={getStatusColor(application.status)}>
                {application.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                Applied on {application.appliedDate}
              </span>
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm text-muted-foreground">
                Application Progress
              </h3>
              <span className="text-sm text-muted-foreground">
                {application.progress}%
              </span>
            </div>
            <Progress value={application.progress} className="h-2" />
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground">Next Step</h3>
            <p className="text-sm mt-1">{application.nextStep}</p>
          </div>

          {/* Timeline */}
          {application.timeline && application.timeline.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                Application Timeline
              </h3>
              <div className="space-y-2">
                {application.timeline.map((event: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-in fade-in-0 slide-in-from-left-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        event.status === "completed" ? "bg-success" : "bg-gray-300"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.stage}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                      {event.details && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Info */}
          {application.contact && (
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {application.contact.name && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">👤 {application.contact.name}</span>
                  </div>
                )}
                {application.contact.email && (
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{application.contact.email}</span>
                  </div>
                )}
                {application.contact.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{application.contact.phone}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notes */}
          {application.notes && (
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground">Notes</h3>
              <p className="text-sm mt-1 bg-muted p-3 rounded-md">
                {application.notes}
              </p>
            </div>
          )}
        </div>
      </Drawer>
    );
  };

  export default ApplicationDetailsModal;

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building, MapPin, Clock, DollarSign, Calendar, Users, Mail } from "lucide-react";

interface OpportunityDetailsModalProps {
  opportunity: any;
  isOpen: boolean;
  onClose: () => void;
}

const OpportunityDetailsModal = ({ opportunity, isOpen, onClose }: OpportunityDetailsModalProps) => {
  if (!opportunity) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold">{opportunity.title}</h2>
                <Badge variant="outline">{opportunity.type}</Badge>
                <Badge className="bg-green-100 text-green-800">{opportunity.status}</Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Building className="h-4 w-4 mr-1" />
                  {opportunity.company}
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {opportunity.location}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {opportunity.duration}
                </span>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed">{opportunity.fullDescription}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div className="text-center">
                  <DollarSign className="h-6 w-6 mx-auto mb-1 text-green-600" />
                  <p className="text-sm font-medium">Stipend</p>
                  <p className="text-xs text-muted-foreground">{opportunity.stipend}</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-1 text-blue-600" />
                  <p className="text-sm font-medium">Deadline</p>
                  <p className="text-xs text-muted-foreground">{opportunity.deadline}</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 mx-auto mb-1 text-purple-600" />
                  <p className="text-sm font-medium">Applicants</p>
                  <p className="text-xs text-muted-foreground">{opportunity.applicants}</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-1 text-orange-600" />
                  <p className="text-sm font-medium">Posted</p>
                  <p className="text-xs text-muted-foreground">{opportunity.postedDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requirements Section */}
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {opportunity.requirements.map((req: string) => (
                  <Badge key={req} variant="outline" className="text-sm">
                    {req}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Responsibilities Section */}
          {opportunity.responsibilities && (
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.responsibilities.map((resp: string, index: number) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Benefits Section */}
          {opportunity.benefits && (
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Learning Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Alumni Contact Section */}
          <Card>
            <CardHeader>
              <CardTitle>Alumni Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>
                    {opportunity.alumniContact.split(' ').slice(0, 2).map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{opportunity.alumniContact}</h4>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    {opportunity.alumniEmail}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-1 inline" />
                    {opportunity.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Matched Students Section */}
          <Card>
            <CardHeader>
              <CardTitle>Matched Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {opportunity.matchedStudents.map((student: string) => (
                  <Badge key={student} variant="secondary">
                    {student}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Application Process Section */}
          {opportunity.applicationProcess && (
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{opportunity.applicationProcess}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OpportunityDetailsModal;
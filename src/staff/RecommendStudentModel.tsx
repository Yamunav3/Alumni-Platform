import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RecommendStudentModalProps {
  student: any;
  opportunities: any[];
  isOpen: boolean;
  onClose: () => void;
}

const RecommendStudentModal = ({ student, opportunities, isOpen, onClose }: RecommendStudentModalProps) => {
  const [recommendedOpportunities, setRecommendedOpportunities] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  if (!student) return null;

  const handleRecommend = (opportunityId: number, opportunityTitle: string) => {
    setRecommendedOpportunities(prev => new Set(prev).add(opportunityId));
    toast({
      title: "Recommendation Sent!",
      description: `Successfully recommended ${student.name} for ${opportunityTitle}`,
      duration: 3000,
    });
  };

  const getMatchScore = (opportunity: any) => {
    const studentSkills = student.skills.map((s: string) => s.toLowerCase());
    const requiredSkills = opportunity.requirements.map((r: string) => r.toLowerCase());
    const matchingSkills = requiredSkills.filter((skill: string) => 
      studentSkills.some((studentSkill: string) => 
        studentSkill.includes(skill) || skill.includes(studentSkill)
      )
    );
    return Math.round((matchingSkills.length / requiredSkills.length) * 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback>
                {student.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">Recommend {student.name}</h2>
              <p className="text-muted-foreground">Find suitable opportunities for this student</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Student Profile Summary</h3>
            <Card>
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.slice(0, 4).map((skill: string) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {student.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{student.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Interests:</p>
                    <div className="flex flex-wrap gap-1">
                      {student.interests.map((interest: string) => (
                        <Badge key={interest} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Available Opportunities</h3>
            <div className="space-y-4">
              {opportunities.map((opportunity) => {
                const matchScore = getMatchScore(opportunity);
                const isRecommended = recommendedOpportunities.has(opportunity.id);
                
                return (
                  <Card key={opportunity.id} className={`transition-all ${isRecommended ? 'bg-green-50 border-green-200' : ''}`}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold">{opportunity.title}</h4>
                            <Badge variant="outline">{opportunity.type}</Badge>
                            <Badge 
                              className={matchScore >= 70 ? "bg-green-100 text-green-800" : 
                                        matchScore >= 50 ? "bg-yellow-100 text-yellow-800" : 
                                        "bg-red-100 text-red-800"}
                            >
                              {matchScore}% Match
                            </Badge>
                            {isRecommended && (
                              <Badge className="bg-green-600 text-white">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Recommended
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
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
                          
                          <p className="text-sm mb-3">{opportunity.description}</p>
                          
                          <div>
                            <p className="text-sm font-medium mb-1">Requirements:</p>
                            <div className="flex flex-wrap gap-1">
                              {opportunity.requirements.map((req: string) => {
                                const isMatched = student.skills.some((skill: string) => 
                                  skill.toLowerCase().includes(req.toLowerCase()) || 
                                  req.toLowerCase().includes(skill.toLowerCase())
                                );
                                return (
                                  <Badge 
                                    key={req} 
                                    variant={isMatched ? "default" : "outline"}
                                    className={isMatched ? "bg-green-100 text-green-800" : ""}
                                  >
                                    {req}
                                    {isMatched && " ✓"}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-4 text-right">
                          <p className="text-sm text-muted-foreground mb-1">Alumni Contact</p>
                          <p className="font-medium text-sm">{opportunity.alumniContact}</p>
                          <p className="text-xs text-muted-foreground mb-3">{opportunity.alumniEmail}</p>
                          
                          <Button
                            size="sm"
                            onClick={() => handleRecommend(opportunity.id, opportunity.title)}
                            disabled={isRecommended}
                            className={isRecommended ? "bg-green-600 hover:bg-green-700" : ""}
                          >
                            {isRecommended ? (
                              <>
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Recommended
                              </>
                            ) : (
                              "Recommend Student"
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecommendStudentModal;
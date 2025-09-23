import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, UserCheck } from "lucide-react";
import { students } from "./data/staffData";
import { useToast } from "@/hooks/use-toast";

interface RecommendedStudentsListProps {
  opportunity: any;
  isOpen: boolean;
  onClose: () => void;
}

const RecommendedStudentsList = ({ opportunity, isOpen, onClose }: RecommendedStudentsListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recommendedStudents, setRecommendedStudents] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  if (!opportunity) return null;

  // Filter students by name search
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRecommendStudent = (studentId: number, studentName: string) => {
    setRecommendedStudents(prev => new Set(prev).add(studentId));
    toast({
      title: "Student Recommended!",
      description: `Successfully recommended ${studentName} for ${opportunity.title}`,
      duration: 3000,
    });
  };

  const getMatchScore = (student: any) => {
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
          <DialogTitle>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Recommend Students for {opportunity.title}</h2>
              <p className="text-muted-foreground">{opportunity.company} • {opportunity.type}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          {/* Search Filter */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Filter students by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Opportunity Summary */}
          <Card className="mb-6">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">Opportunity Requirements:</h3>
              <div className="flex flex-wrap gap-2">
                {opportunity.requirements.map((req: string) => (
                  <Badge key={req} variant="outline">
                    {req}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Students List */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredStudents.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">No students found matching your search.</p>
                </CardContent>
              </Card>
            ) : (
              filteredStudents.map((student) => {
                const matchScore = getMatchScore(student);
                const isRecommended = recommendedStudents.has(student.id);
                
                return (
                  <Card 
                    key={student.id} 
                    className={`transition-all ${isRecommended ? 'bg-green-50 border-green-200' : ''}`}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <Avatar>
                            <AvatarFallback>
                              {student.name.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold">{student.name}</h4>
                              <Badge variant="outline">{student.major}</Badge>
                              <Badge 
                                className={matchScore >= 70 ? "bg-green-100 text-green-800" : 
                                          matchScore >= 50 ? "bg-yellow-100 text-yellow-800" : 
                                          "bg-red-100 text-red-800"}
                              >
                                {matchScore}% Match
                              </Badge>
                              {isRecommended && (
                                <Badge className="bg-green-600 text-white">
                                  Recommended
                                </Badge>
                              )}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              {student.year} • GPA: {student.gpa} • {student.status}
                            </p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="text-xs font-medium mb-1">Skills:</p>
                                <div className="flex flex-wrap gap-1">
                                  {student.skills.slice(0, 4).map((skill: string) => {
                                    const isMatched = opportunity.requirements.some((req: string) => 
                                      skill.toLowerCase().includes(req.toLowerCase()) || 
                                      req.toLowerCase().includes(skill.toLowerCase())
                                    );
                                    return (
                                      <Badge 
                                        key={skill} 
                                        variant={isMatched ? "default" : "outline"}
                                        className={`text-xs ${isMatched ? "bg-green-100 text-green-800" : ""}`}
                                      >
                                        {skill}
                                        {isMatched && " ✓"}
                                      </Badge>
                                    );
                                  })}
                                  {student.skills.length > 4 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{student.skills.length - 4} more
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-xs font-medium mb-1">Interests:</p>
                                <div className="flex flex-wrap gap-1">
                                  {student.interests.slice(0, 3).map((interest: string) => (
                                    <Badge key={interest} variant="secondary" className="text-xs">
                                      {interest}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-4">
                          <Button
                            size="sm"
                            onClick={() => handleRecommendStudent(student.id, student.name)}
                            disabled={isRecommended}
                            className={isRecommended ? "bg-green-600 hover:bg-green-700" : ""}
                          >
                            {isRecommended ? (
                              <>
                                <UserCheck className="h-4 w-4 mr-1" />
                                Recommended
                              </>
                            ) : (
                              "Recommend"
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecommendedStudentsList;
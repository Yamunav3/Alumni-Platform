



import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Modal } from "antd";
import {
  Star,
  MessageCircle,
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  rating: number;
  sessions: number;
  image: string;
  price: string;
  availability: string;
  posts: number;
  education: string;
  skills: string[];
  workExperience: {
    company: string;
    role: string;
    duration: string;
    sector: string;
  }[];
}

interface MentorshipSectionProps {
  mentors: Mentor[];
}

const MentorshipSection = ({ mentors }: MentorshipSectionProps) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [connectedMentors, setConnectedMentors] = useState<Set<number>>(
    new Set()
  );

  const handleConnect = (mentorId: number) => {
    setConnectedMentors((prev) => new Set([...prev, mentorId]));
  };

  const showProfile = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsProfileModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card
            key={mentor.id}
            className="relative bg-gradient-card rounded-2xl cursor-pointer group
                       transition-transform duration-300 ease-in-out
                       hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl
                       hover:border hover:border-primary/40"
            onClick={() => showProfile(mentor)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            transition duration-500 pointer-events-none 
                            bg-gradient-to-r from-primary/10 via-white/20 to-white/30 blur-lg"></div>

            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center space-x-4">
                <Avatar
                  className="h-16 w-16 ring-2 ring-transparent 
                             group-hover:ring-primary transition-all duration-300"
                >
                  <AvatarImage src={mentor.image} />
                  <AvatarFallback>
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3
                    className="font-semibold text-lg text-black 
                               group-hover:text-primary transition-colors duration-300"
                  >
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-900">{mentor.title}</p>
                  <p className="text-sm font-medium text-primary">
                    {mentor.company}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 relative z-10">
              <div className="flex items-center justify-between text-lg text-gray-900">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-warning fill-current" />
                  <span>{mentor.rating}</span>
                </div>
                <span className="text-gray-800">{mentor.sessions} sessions</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {mentor.expertise.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Badge
                    variant={
                      mentor.availability === "Available"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {mentor.availability}
                  </Badge>
                  <span className="text-sm font-medium">{mentor.price}</span>
                </div>
              </div>
              <Button
                className={`btn-connect w-full transition-asthra text-white ${
                  connectedMentors.has(mentor.id)
                    ? "bg-success hover:bg-success/80"
                    : "bg-gradient-primary hover:shadow-asthra"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleConnect(mentor.id);
                }}
                disabled={connectedMentors.has(mentor.id)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {connectedMentors.has(mentor.id)
                  ? "Connection Request Sent"
                  : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Profile Modal */}
      <Modal
        title={null}
        open={isProfileModalOpen}
        onCancel={() => setIsProfileModalOpen(false)}
        width={800}
        footer={null}
        className="mentor-profile-modal"
      >
        {selectedMentor && (
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center space-x-6 mb-8">
              <Avatar className="h-24 w-24">
                <AvatarImage src={selectedMentor.image} />
                <AvatarFallback className="text-2xl">
                  {selectedMentor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-primary">
                  {selectedMentor.name}
                </h2>
                <p className="text-lg text-gray-900 mb-1">
                  {selectedMentor.title}
                </p>
                <p className="text-lg font-medium text-primary mb-3">
                  {selectedMentor.company}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-900">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span>{selectedMentor.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>{selectedMentor.sessions} Sessions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-gray-900" />
                    <span>{selectedMentor.posts} Posts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-black gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <p className="text-primary-500">{selectedMentor.education}</p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-xl text-purple font-semibold mb-3">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedMentor.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2  text-black">
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-4">
                {selectedMentor.workExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary pl-4 py-2"
                  >
                    <h4 className="font-semibold text-black text-lg">
                      {exp.role}
                    </h4>
                    <p className="text-black text-lg font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-black-300">
                      {exp.duration} • {exp.sector}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Button */}
            <div className="text-center">
              <Button
                size="lg"
                className={`px-8 transition-asthra ${
                  connectedMentors.has(selectedMentor.id)
                    ? "bg-success hover:bg-success/80"
                    : "bg-gradient-primary hover:shadow-asthra"
                }`}
                onClick={() => handleConnect(selectedMentor.id)}
                disabled={connectedMentors.has(selectedMentor.id)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {connectedMentors.has(selectedMentor.id)
                  ? "Connection Request Sent"
                  : "Connect with Mentor"}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MentorshipSection;

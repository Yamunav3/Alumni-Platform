import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Modal, message } from "antd";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  Users,
  DollarSign,
  Video,
  Award,
  BookOpen,
} from "lucide-react";

interface Webinar {
  id: number;
  title: string;
  speaker: string;
  company: string;
  date: string;
  time: string;
  attendees: number;
  price: string;
  duration: string;
  description: string;
  agenda: string[];
  prerequisites: string[];
  benefits: string[];
  speakerBio: string;
  level: string;
  category: string;
}

interface WebinarSectionProps {
  webinars: Webinar[];
}

const WebinarSection = ({ webinars }: WebinarSectionProps) => {
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [registeredWebinars, setRegisteredWebinars] = useState<Set<number>>(
    new Set()
  );

  const showDetails = (webinar: Webinar) => {
    setSelectedWebinar(webinar);
    setIsDetailsModalOpen(true);
  };

  const handleRegistration = (webinarId: number) => {
    setRegisteredWebinars((prev) => new Set([...prev, webinarId]));
    message.success(
      "You have successfully registered for this webinar! Check your email for joining details."
    );
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search webinars..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Webinars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {webinars.map((webinar) => (
          <Card
            key={webinar.id}
            className="bg-gradient-card rounded-2xl cursor-pointer group
                       transition-transform duration-300 ease-in-out
                       hover:scale-[1.02] hover:-translate-y-2 hover:shadow-blue-500/30"
          >
            <CardHeader>
              <CardTitle
                className="text-xl cursor-pointer group-hover:text-primary transition-colors"
                onClick={() => showDetails(webinar)}
              >
                {webinar.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <span>by {webinar.speaker}</span>
                <Badge
                  variant="outline"
                  className="group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  {webinar.company}
                </Badge>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{webinar.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{webinar.attendees} registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{webinar.price}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    {webinar.duration}
                  </Badge>
                  <Badge variant="secondary">{webinar.level}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => showDetails(webinar)}
                    className="transition-colors group-hover:border-primary group-hover:text-primary"
                  >
                    View Details
                  </Button>
                  <Button
                    className={`transition-all duration-300 text-black ${
                      registeredWebinars.has(webinar.id)
                        ? "bg-success hover:bg-success/80"
                        : webinar.price === "Free"
                        ? "bg-gradient-primary hover:shadow-blue-500/40"
                        : "bg-gradient-secondary hover:shadow-blue-500/40"
                    }`}
                    onClick={() => handleRegistration(webinar.id)}
                    disabled={registeredWebinars.has(webinar.id)}
                  >
                    {registeredWebinars.has(webinar.id)
                      ? "Registered"
                      : webinar.price === "Free"
                      ? "Register Free"
                      : "Purchase & Register"}
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
        {selectedWebinar && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">
                {selectedWebinar.title}
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium">
                    by {selectedWebinar.speaker}
                  </span>
                </div>
                <Badge variant="outline" className="text-sm">
                  {selectedWebinar.company}
                </Badge>
                <Badge variant="secondary">{selectedWebinar.category}</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-muted/20 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedWebinar.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedWebinar.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedWebinar.attendees} registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold text-primary">
                    {selectedWebinar.price}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  About This Webinar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedWebinar.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Agenda</h3>
                <ul className="space-y-2">
                  {selectedWebinar.agenda.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Speaker Bio</h3>
                <p className="text-muted-foreground">
                  {selectedWebinar.speakerBio}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedWebinar.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-muted-foreground">
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-warning" />
                    What You'll Learn
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedWebinar.benefits.map((benefit, index) => (
                      <li key={index} className="text-muted-foreground">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-muted/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      Duration: {selectedWebinar.duration}
                    </p>
                    <p className="text-muted-foreground">
                      Level: {selectedWebinar.level}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      {selectedWebinar.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedWebinar.attendees} already registered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className={`px-8 transition-asthra ${
                  registeredWebinars.has(selectedWebinar.id)
                    ? "bg-success hover:bg-success/80"
                    : selectedWebinar.price === "Free"
                    ? "bg-gradient-primary hover:shadow-blue-500/40"
                    : "bg-gradient-secondary hover:shadow-blue-500/40"
                }`}
                onClick={() => {
                  handleRegistration(selectedWebinar.id);
                  setIsDetailsModalOpen(false);
                }}
                disabled={registeredWebinars.has(selectedWebinar.id)}
              >
                <Video className="h-5 w-5 mr-2" />
                {registeredWebinars.has(selectedWebinar.id)
                  ? "Successfully Registered!"
                  : selectedWebinar.price === "Free"
                  ? "Register for Free"
                  : "Purchase & Register Now"}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default WebinarSection;

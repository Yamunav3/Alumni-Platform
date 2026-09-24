import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Modal, message, Timeline } from "antd";
import { MessageCircle, Star, Calendar, Video, Award, BookOpen, Send, FileText } from "lucide-react";
import api from "@/api/api";

interface AttendedEvent {
  id: number;
  title: string;
  type: 'webinar' | 'training' | 'event';
  date: string;
  duration: string;
  instructor?: string;
  company?: string;
  rating?: number;
  feedbackSubmitted: boolean;
}

interface FeedbackData {
  eventId: number;
  rating: number;
  content: string;
  instructor_rating: number;
  course_material: number;
  recommendation: number;
  comments: string;
}

interface RecentFeedback {
  id: number;
  studentName: string;
  course: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const FeedbackSection = () => {
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AttendedEvent | null>(null);
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    eventId: 0,
    rating: 0,
    content: '',
    instructor_rating: 0,
    course_material: 0,
    recommendation: 0,
    comments: ''
  });
  const [attendedEvents, setAttendedEvents] = useState<AttendedEvent[]>([]);
  const [recentFeedbacks, setRecentFeedbacks] = useState<RecentFeedback[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openFeedbackForm = (event: AttendedEvent) => {
    setSelectedEvent(event);
    setFeedbackData({
      eventId: event.id,
      rating: 0,
      content: '',
      instructor_rating: 0,
      course_material: 0,
      recommendation: 0,
      comments: ''
    });
    setFeedbackFormOpen(true);
  };

  const handleFeedbackSubmit = async () => {
    if (!selectedEvent) return;

    const payload = {
      ...feedbackData,
      eventId: selectedEvent.id
    };

    setIsSubmitting(true);

    try {
      const response = await api.post("/api/v1/student/submit_feedback", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });

      if (!response.data) {
        message.error("We couldn't submit your feedback right now. Please try again.");
        return;
      }

      setAttendedEvents((prev) =>
        prev.map((event) =>
          event.id === selectedEvent.id ? { ...event, feedbackSubmitted: true } : event
        )
      );

      setFeedbackFormOpen(false);
      message.success("Thank you for your feedback! Your input helps us improve our services.");

      setSelectedEvent(null);
      setFeedbackData({
        eventId: 0,
        rating: 0,
        content: '',
        instructor_rating: 0,
        course_material: 0,
        recommendation: 0,
        comments: ''
      });
    } catch (err) {
      console.log("Error submitting feedback:", err);
      message.error("Something went wrong while submitting your feedback.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = ({ rating, onRatingChange, size = "h-6 w-6" }: { rating: number, onRatingChange: (rating: number) => void, size?: string }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          className={`${size} cursor-pointer transition-colors ${
            star <= rating ? 'text-warning fill-current' : 'text-muted-foreground'
          }`}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'webinar': return <Video className="h-5 w-5 text-primary" />;
      case 'training': return <BookOpen className="h-5 w-5 text-secondary" />;
      case 'event': return <Award className="h-5 w-5 text-accent" />;
      default: return <Calendar className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Student Feedback</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Share your experience and help us improve our services. Your feedback is valuable to us and other students.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Attended Events & Feedback Forms */}
        <div className="space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Your Attended Events
              </CardTitle>
              <CardDescription>
                Provide feedback for events, webinars, and training you've attended
              </CardDescription>
            </CardHeader>
            <CardContent>
              {attendedEvents.length > 0 ? (
                <Timeline
                  items={attendedEvents.map((event) => ({
                    dot: getEventIcon(event.type),
                    children: (
                      <div className="ml-4 rounded-lg border border-border/60 bg-background/70 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {event.instructor && `by ${event.instructor}`}
                              {event.company && ` • ${event.company}`}
                            </p>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <Badge variant="outline" className="text-xs capitalize">
                                {event.type}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{event.date}</span>
                              <span className="text-xs text-muted-foreground">• {event.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          {event.feedbackSubmitted ? (
                            <div className="flex items-center gap-2">
                              <Badge variant="default" className="bg-success">
                                <MessageCircle className="h-3 w-3 mr-1" />
                                Feedback Submitted
                              </Badge>
                              {event.rating && (
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-warning fill-current" />
                                  <span className="text-sm">{event.rating}</span>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Button 
                              size="sm" 
                              className="bg-gradient-primary hover:shadow-asthra transition-asthra"
                              onClick={() => openFeedbackForm(event)}
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              Give Feedback
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  }))}
                />
              ) : (
                <div className="rounded-xl border border-dashed border-border/60 bg-background/70 p-6 text-center">
                  <p className="font-medium text-foreground">No attended events available yet</p>
                  <p className="mt-2 text-sm text-muted-foreground">Feedback requests will appear here once events are available.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Student Feedback */}
        <div className="space-y-6">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-warning" />
                Recent Student Feedback
              </CardTitle>
              <CardDescription>See what other students are saying about our programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recentFeedbacks.length > 0 ? (
                  recentFeedbacks.map((feedback) => (
                    <div key={feedback.id} className="border-l-4 border-primary pl-4 py-3 bg-muted/20 rounded-r-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{feedback.studentName}</span>
                          {feedback.verified && (
                            <Badge variant="outline" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-3 w-3 ${
                                star <= feedback.rating ? 'text-warning fill-current' : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{feedback.comment}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{feedback.course}</span>
                        <span>{feedback.date}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-xl border border-dashed border-border/60 bg-background/70 p-6 text-center">
                    <p className="font-medium text-foreground">No recent feedback yet</p>
                    <p className="mt-2 text-sm text-muted-foreground">Feedback shared by students will appear here shortly.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feedback Form Modal */}
      <Modal
        title="Submit Feedback"
        open={feedbackFormOpen}
        onCancel={() => setFeedbackFormOpen(false)}
        width={700}
        footer={[
          <Button key="cancel" variant="outline" onClick={() => setFeedbackFormOpen(false)}>
            Cancel
          </Button>,
          <Button 
            key="submit" 
            className="bg-gradient-primary hover:shadow-asthra" 
            onClick={handleFeedbackSubmit}
            disabled={isSubmitting || feedbackData.rating === 0 || !feedbackData.content.trim()}
          >
            <Send className="h-4 w-4 mr-2" />
            Submit Feedback
          </Button>
        ]}
      >
        {selectedEvent && (
          <div className="space-y-6">
            <div className="bg-muted/20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">{selectedEvent.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{selectedEvent.instructor && `Instructor: ${selectedEvent.instructor}`}</span>
                <span>{selectedEvent.company}</span>
                <span>{selectedEvent.date}</span>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">Overall Rating *</Label>
              <div className="mt-2">
                <StarRating 
                  rating={feedbackData.rating}
                  onRatingChange={(rating) => setFeedbackData({...feedbackData, rating})}
                />
              </div>
            </div>

            {selectedEvent.instructor && (
              <div>
                <Label className="text-base font-semibold">Instructor Rating</Label>
                <div className="mt-2">
                  <StarRating 
                    rating={feedbackData.instructor_rating}
                    onRatingChange={(rating) => setFeedbackData({...feedbackData, instructor_rating: rating})}
                    size="h-5 w-5"
                  />
                </div>
              </div>
            )}

            <div>
              <Label className="text-base font-semibold">Course Material Quality</Label>
              <div className="mt-2">
                <StarRating 
                  rating={feedbackData.course_material}
                  onRatingChange={(rating) => setFeedbackData({...feedbackData, course_material: rating})}
                  size="h-5 w-5"
                />
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">Would you recommend this to others?</Label>
              <div className="mt-2">
                <StarRating 
                  rating={feedbackData.recommendation}
                  onRatingChange={(rating) => setFeedbackData({...feedbackData, recommendation: rating})}
                  size="h-5 w-5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="feedback-content" className="text-base font-semibold">Your Feedback *</Label>
              <textarea 
                id="feedback-content"
                className="w-full p-3 border rounded-lg mt-2 min-h-[120px]" 
                value={feedbackData.content}
                onChange={(e) => setFeedbackData({...feedbackData, content: e.target.value})}
                placeholder="Share your detailed experience, what you liked, what could be improved, etc."
              />
            </div>

            <div>
              <Label htmlFor="additional-comments" className="text-base font-semibold">Additional Comments</Label>
              <textarea 
                id="additional-comments"
                className="w-full p-3 border rounded-lg mt-2 min-h-[80px]" 
                value={feedbackData.comments}
                onChange={(e) => setFeedbackData({...feedbackData, comments: e.target.value})}
                placeholder="Any additional suggestions or comments..."
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FeedbackSection;
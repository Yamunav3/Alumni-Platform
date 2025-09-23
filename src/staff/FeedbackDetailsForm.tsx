import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, User, MessageSquare, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface FeedbackDetailsModalProps {
  feedback: any;
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackDetailsModal = ({ feedback, isOpen, onClose }: FeedbackDetailsModalProps) => {
  if (!feedback) return null;

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "negative":
        return "text-red-600 bg-red-100";
      case "neutral":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in_progress":
        return <Clock className="h-5 w-5 text-blue-600" />;
      case "pending":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      default:
        return <MessageSquare className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback>
                {feedback.author.split(' ').slice(0, 2).map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{feedback.subject}</h2>
              <p className="text-muted-foreground">Feedback Details</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Feedback Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Feedback Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Author:</span>
                  <span className="font-medium">{feedback.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Submitted:</span>
                  <span className="font-medium">{feedback.submittedDate}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Type:</span>
                  <Badge variant="outline">{feedback.type}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Priority:</span>
                  <Badge className={getPriorityColor(feedback.priority)}>
                    {feedback.priority}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sentiment:</span>
                  <Badge className={getSentimentColor(feedback.sentiment)}>
                    {feedback.sentiment}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(feedback.status)}
                  <span className="font-medium capitalize">{feedback.status.replace('_', ' ')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Feedback Content */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {feedback.fullContent || feedback.content}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <span className="font-medium">{feedback.authorEmail}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">User Type:</span>
                  <Badge variant="secondary">
                    {feedback.type.includes('Alumni') ? 'Alumni' : 
                     feedback.type.includes('Student') ? 'Student' : 'General User'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action History */}
          <Card>
            <CardHeader>
              <CardTitle>Action History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-muted-foreground">{feedback.submittedDate}</span>
                  <span>Feedback submitted</span>
                </div>
                {feedback.status === 'in_progress' && (
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-muted-foreground">Dec 12, 2024</span>
                    <span>Review started by staff</span>
                  </div>
                )}
                {feedback.status === 'resolved' && (
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-muted-foreground">Dec 13, 2024</span>
                    <span>Feedback resolved</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Response/Notes Section */}
          <Card>
            <CardHeader>
              <CardTitle>Staff Notes & Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {feedback.status === 'resolved' ? (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm text-green-800">
                      This feedback has been addressed and resolved. Thank you for bringing this to our attention.
                    </p>
                  </div>
                ) : feedback.status === 'in_progress' ? (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-blue-800">
                      This feedback is currently being reviewed by our team. We will provide an update soon.
                    </p>
                  </div>
                ) : (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-800">
                      This feedback is pending review. It will be assigned to a staff member shortly.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDetailsModal;
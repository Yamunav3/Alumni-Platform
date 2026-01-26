import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lightbulb, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

interface SuggestEventFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuggestEventForm: React.FC<SuggestEventFormProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    expectedAudience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API Call would go here
    console.log("Suggestion Submitted:", formData);
    
    toast.success("Suggestion sent to Alumni Committee!", {
      icon: "💡",
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    
    setFormData({ title: "", category: "", description: "", expectedAudience: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-2 text-purple-600 mb-2">
            <div className="p-2 bg-purple-100 rounded-full">
              <Lightbulb className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">Student Voice</span>
          </div>
          <DialogTitle className="text-2xl">Suggest an Event</DialogTitle>
          <DialogDescription>
            Have an idea for a workshop, tech talk, or reunion? Let the committee know!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-2">
          
          <div className="space-y-2">
            <Label htmlFor="title">Event Idea / Title *</Label>
            <Input 
              id="title" 
              placeholder="e.g. AI in Healthcare Workshop" 
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category *</Label>
              <Select onValueChange={(val) => setFormData({...formData, category: val})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Workshop</SelectItem>
                  <SelectItem value="career">Career Guidance</SelectItem>
                  <SelectItem value="networking">Networking / Social</SelectItem>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Select onValueChange={(val) => setFormData({...formData, expectedAudience: val})}>
                <SelectTrigger>
                  <SelectValue placeholder="Who is this for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Students</SelectItem>
                  <SelectItem value="final-year">Final Year Students</SelectItem>
                  <SelectItem value="juniors">Juniors / Freshers</SelectItem>
                  <SelectItem value="branch-specific">My Branch Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Why is this event needed? *</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the benefits and what students will learn..." 
              className="h-24 resize-none"
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 flex gap-3 text-sm text-yellow-800">
            <Sparkles className="w-5 h-5 flex-shrink-0 text-yellow-600" />
            <p>
              Your suggestion will be reviewed by the Alumni Admin. If selected, you might be asked to help coordinate!
            </p>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Submit Suggestion</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestEventForm;
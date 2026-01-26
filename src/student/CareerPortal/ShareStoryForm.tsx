


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Upload, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";

interface ShareStoryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStoryShared?: (story: any) => void;
}

const ShareStoryForm: React.FC<ShareStoryFormProps> = ({ open, onOpenChange, onStoryShared }) => {
  const [formData, setFormData] = useState({
    name: "", graduationYear: "", currentRole: "", company: "", 
    previousRole: "", achievement: "", brief: "", tags: [] as string[], linkedin: "", image: null
  });
  const [newTag, setNewTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onStoryShared) onStoryShared({ ...formData, id: Math.random() });
    onOpenChange(false);
    toast.success("Success story shared!");
    setFormData({ name: "", graduationYear: "", currentRole: "", company: "", previousRole: "", achievement: "", brief: "", tags: [], linkedin: "", image: null });
  };

  const addTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag] }));
      setNewTag("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> 
            Share Success Story
          </DialogTitle>
          <DialogDescription>Inspire fellow students with your journey.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><Label>Full Name *</Label><Input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /></div>
            <div className="space-y-2"><Label>Graduation Year *</Label><Input required value={formData.graduationYear} onChange={e => setFormData({...formData, graduationYear: e.target.value})} /></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><Label>Current Role *</Label><Input required value={formData.currentRole} onChange={e => setFormData({...formData, currentRole: e.target.value})} /></div>
            <div className="space-y-2"><Label>Company *</Label><Input required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} /></div>
          </div>
          
          <div className="space-y-2"><Label>Key Achievement</Label><Textarea required value={formData.achievement} onChange={e => setFormData({...formData, achievement: e.target.value})} placeholder="e.g. Promoted within 6 months..." /></div>
          <div className="space-y-2"><Label>Your Journey (Brief)</Label><Textarea required value={formData.brief} onChange={e => setFormData({...formData, brief: e.target.value})} rows={3} /></div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input value={newTag} onChange={e => setNewTag(e.target.value)} placeholder="Add skill/industry tag" onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())} />
              <Button type="button" onClick={addTag} variant="secondary">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
                  {tag} <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => setFormData(prev => ({...prev, tags: prev.tags.filter(t => t !== tag)}))} />
                </Badge>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Share Story</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ShareStoryForm;
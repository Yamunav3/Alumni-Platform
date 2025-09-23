// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { X } from "lucide-react";
// import toast from "react-hot-toast";

// interface ShareStoryFormProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onStoryShared?: (story: any) => void;
// }

// const ShareStoryForm: React.FC<ShareStoryFormProps> = ({
//   open,
//   onOpenChange,
//   onStoryShared,
// }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     graduationYear: "",
//     currentRole: "",
//     company: "",
//     previousRole: "",
//     achievement: "",
//     brief: "",
//     tags: [] as string[],
//     linkedin: "",
//     image: null as File | null,
//   });
//   const [newTag, setNewTag] = useState("");

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleAddTag = () => {
//     if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
//       setFormData((prev) => ({
//         ...prev,
//         tags: [...prev.tags, newTag.trim()],
//       }));
//       setNewTag("");
//     }
//   };

//   const handleRemoveTag = (tagToRemove: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Story submitted:", formData);

//     if (onStoryShared) {
//       onStoryShared(formData);
//     }

//     onOpenChange(false);
//     toast.success("Your success story has been shared!");

//     // Reset form
//     setFormData({
//       name: "",
//       graduationYear: "",
//       currentRole: "",
//       company: "",
//       previousRole: "",
//       achievement: "",
//       brief: "",
//       tags: [],
//       linkedin: "",
//       image: null,
//     });
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>Share Your Success Story</DialogTitle>
//           <DialogDescription>
//             Inspire others by sharing your career journey and achievements.
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="space-y-4 py-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name *</Label>
//               <Input
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="graduationYear">Graduation Year *</Label>
//               <Input
//                 id="graduationYear"
//                 type="number"
//                 value={formData.graduationYear}
//                 onChange={(e) => handleInputChange('graduationYear', e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="currentRole">Current Role *</Label>
//               <Input
//                 id="currentRole"
//                 value={formData.currentRole}
//                 onChange={(e) => handleInputChange('currentRole', e.target.value)}
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="company">Company *</Label>
//               <Input
//                 id="company"
//                 value={formData.company}
//                 onChange={(e) => handleInputChange('company', e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="previousRole">Previous Role</Label>
//             <Input
//               id="previousRole"
//               value={formData.previousRole}
//               onChange={(e) => handleInputChange('previousRole', e.target.value)}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="achievement">Key Achievement *</Label>
//             <Textarea
//               id="achievement"
//               value={formData.achievement}
//               onChange={(e) => handleInputChange('achievement', e.target.value)}
//               rows={3}
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="brief">Your Story Brief *</Label>
//             <Textarea
//               id="brief"
//               value={formData.brief}
//               onChange={(e) => handleInputChange('brief', e.target.value)}
//               rows={4}
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="tags">Tags</Label>
//             <div className="flex gap-2 mb-2">
//               <Input
//                 value={newTag}
//                 onChange={(e) => setNewTag(e.target.value)}
//                 placeholder="Add a tag"
//               />
//               <Button type="button" onClick={handleAddTag}>
//                 Add
//               </Button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {formData.tags.map((tag) => (
//                 <Badge key={tag} variant="secondary" className="flex items-center gap-1">
//                   {tag}
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveTag(tag)}
//                     className="ml-1"
//                   >
//                     <X className="h-3 w-3" />
//                   </button>
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="linkedin">LinkedIn Profile</Label>
//             <Input
//               id="linkedin"
//               type="url"
//               value={formData.linkedin}
//               onChange={(e) => handleInputChange('linkedin', e.target.value)}
//               placeholder="https://linkedin.com/in/yourprofile"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="image">Profile Image (Optional)</Label>
//             <Input
//               id="image"
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//           </div>

//           <div className="flex justify-end space-x-2 pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => onOpenChange(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit">Share Story</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ShareStoryForm;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { Drawer } from "antd"; // ✅ Import Ant Design Drawer

interface ShareStoryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStoryShared?: (story: any) => void;
}

const ShareStoryForm: React.FC<ShareStoryFormProps> = ({
  open,
  onOpenChange,
  onStoryShared,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    currentRole: "",
    company: "",
    previousRole: "",
    achievement: "",
    brief: "",
    tags: [] as string[],
    linkedin: "",
    image: null as File | null,
  });
  const [newTag, setNewTag] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Story submitted:", formData);

    if (onStoryShared) {
      onStoryShared(formData);
    }

    onOpenChange(false);
    toast.success("Your success story has been shared!");

    // Reset form
    setFormData({
      name: "",
      graduationYear: "",
      currentRole: "",
      company: "",
      previousRole: "",
      achievement: "",
      brief: "",
      tags: [],
      linkedin: "",
      image: null,
    });
  };

  return (
    <Drawer
      title="Share Your Success Story"
      placement="right"
      width={600}
      onClose={() => onOpenChange(false)}
      open={open}
    >
      <p className="text-muted-foreground mb-4">
        Inspire others by sharing your career journey and achievements.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name & Graduation Year */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="graduationYear">Graduation Year *</Label>
            <Input
              id="graduationYear"
              type="number"
              value={formData.graduationYear}
              onChange={(e) =>
                handleInputChange("graduationYear", e.target.value)
              }
              required
            />
          </div>
        </div>

        {/* Current Role & Company */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentRole">Current Role *</Label>
            <Input
              id="currentRole"
              value={formData.currentRole}
              onChange={(e) => handleInputChange("currentRole", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Previous Role */}
        <div className="space-y-2">
          <Label htmlFor="previousRole">Previous Role</Label>
          <Input
            id="previousRole"
            value={formData.previousRole}
            onChange={(e) => handleInputChange("previousRole", e.target.value)}
          />
        </div>

        {/* Achievement */}
        <div className="space-y-2">
          <Label htmlFor="achievement">Key Achievement *</Label>
          <Textarea
            id="achievement"
            value={formData.achievement}
            onChange={(e) => handleInputChange("achievement", e.target.value)}
            rows={3}
            required
          />
        </div>

        {/* Story Brief */}
        <div className="space-y-2">
          <Label htmlFor="brief">Your Story Brief *</Label>
          <Textarea
            id="brief"
            value={formData.brief}
            onChange={(e) => handleInputChange("brief", e.target.value)}
            rows={4}
            required
          />
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags">Tags</Label>
          <div className="flex gap-2 mb-2">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add a tag"
            />
            <Button type="button" onClick={handleAddTag}>
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>

        {/* LinkedIn */}
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            type="url"
            value={formData.linkedin}
            onChange={(e) => handleInputChange("linkedin", e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        {/* Profile Image */}
        <div className="space-y-2">
          <Label htmlFor="image">Profile Image (Optional)</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="submit">Share Story</Button>
        </div>
      </form>
    </Drawer>
  );
};

export default ShareStoryForm;

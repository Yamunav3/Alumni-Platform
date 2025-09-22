// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// // import { Label } from "@/components/ui/label";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import toast from "react-hot-toast";

// // interface CreateWebinarFormProps {
// //   open: boolean;
// //   onOpenChange: (open: boolean) => void;
// //   onWebinarCreated: (webinar: any) => void;
// // }

// // const CreateWebinarForm = ({ open, onOpenChange, onWebinarCreated }: CreateWebinarFormProps) => {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     presenter: "",
// //     presenterTitle: "",
// //     date: "",
// //     time: "",
// //     duration: "",
// //     maxAttendees: "",
// //     topics: "",
// //     requirements: "",
// //     meetingLink: "",
// //     registrationDeadline: ""
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     const newWebinar = {
// //       id: Math.floor(Math.random() * 1000) + 100,
// //       title: formData.title,
// //       description: formData.description,
// //       presenter: formData.presenter,
// //       presenterTitle: formData.presenterTitle,
// //       date: formData.date,
// //       time: formData.time,
// //       duration: formData.duration,
// //       maxAttendees: parseInt(formData.maxAttendees) || 100,
// //       registrations: 0,
// //       topics: formData.topics.split(',').map(topic => topic.trim()).filter(topic => topic),
// //       requirements: formData.requirements,
// //       meetingLink: formData.meetingLink,
// //       registrationDeadline: formData.registrationDeadline,
// //       status: "Upcoming",
// //       createdBy: "Current User",
// //       createdAt: new Date().toISOString()
// //     };

// //     onWebinarCreated(newWebinar);
// //     onOpenChange(false);
    
// //     setFormData({
// //       title: "",
// //       description: "",
// //       presenter: "",
// //       presenterTitle: "",
// //       date: "",
// //       time: "",
// //       duration: "",
// //       maxAttendees: "",
// //       topics: "",
// //       requirements: "",
// //       meetingLink: "",
// //       registrationDeadline: ""
// //     });
    
// //     toast.success("Webinar created successfully!");
// //   };

// //   return (
// //     <Dialog open={open} onOpenChange={onOpenChange}>
// //       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
// //         <DialogHeader>
// //           <DialogTitle>Create New Webinar</DialogTitle>
// //           <DialogDescription>
// //             Set up a new webinar session for the community.
// //           </DialogDescription>
// //         </DialogHeader>
        
// //         <form onSubmit={handleSubmit} className="space-y-4 py-4">
// //           <div className="space-y-2">
// //             <Label htmlFor="title">Webinar Title *</Label>
// //             <Input
// //               id="title"
// //               name="title"
// //               value={formData.title}
// //               onChange={handleChange}
// //               placeholder="e.g. Introduction to React Development"
// //               required
// //             />
// //           </div>
          
// //           <div className="space-y-2">
// //             <Label htmlFor="description">Description *</Label>
// //             <Textarea
// //               id="description"
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               rows={3}
// //               placeholder="Describe what participants will learn..."
// //               required
// //             />
// //           </div>
          
// //           <div className="grid grid-cols-2 gap-4">
// //             <div className="space-y-2">
// //               <Label htmlFor="presenter">Presenter Name *</Label>
// //               <Input
// //                 id="presenter"
// //                 name="presenter"
// //                 value={formData.presenter}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
            
// //             <div className="space-y-2">
// //               <Label htmlFor="presenterTitle">Presenter Title *</Label>
// //               <Input
// //                 id="presenterTitle"
// //                 name="presenterTitle"
// //                 value={formData.presenterTitle}
// //                 onChange={handleChange}
// //                 placeholder="e.g. Senior Software Engineer at Google"
// //                 required
// //               />
// //             </div>
// //           </div>
          
// //           <div className="grid grid-cols-3 gap-4">
// //             <div className="space-y-2">
// //               <Label htmlFor="date">Date *</Label>
// //               <Input
// //                 id="date"
// //                 name="date"
// //                 type="date"
// //                 value={formData.date}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
            
// //             <div className="space-y-2">
// //               <Label htmlFor="time">Time *</Label>
// //               <Input
// //                 id="time"
// //                 name="time"
// //                 type="time"
// //                 value={formData.time}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
            
// //             <div className="space-y-2">
// //               <Label htmlFor="duration">Duration (minutes) *</Label>
// //               <Input
// //                 id="duration"
// //                 name="duration"
// //                 type="number"
// //                 value={formData.duration}
// //                 onChange={handleChange}
// //                 placeholder="60"
// //                 required
// //               />
// //             </div>
// //           </div>
          
// //           <div className="grid grid-cols-2 gap-4">
// //             <div className="space-y-2">
// //               <Label htmlFor="maxAttendees">Max Attendees</Label>
// //               <Input
// //                 id="maxAttendees"
// //                 name="maxAttendees"
// //                 type="number"
// //                 value={formData.maxAttendees}
// //                 onChange={handleChange}
// //                 placeholder="100"
// //               />
// //             </div>
            
// //             <div className="space-y-2">
// //               <Label htmlFor="registrationDeadline">Registration Deadline</Label>
// //               <Input
// //                 id="registrationDeadline"
// //                 name="registrationDeadline"
// //                 type="date"
// //                 value={formData.registrationDeadline}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //           </div>
          
// //           <div className="space-y-2">
// //             <Label htmlFor="topics">Topics (comma separated)</Label>
// //             <Input
// //               id="topics"
// //               name="topics"
// //               value={formData.topics}
// //               onChange={handleChange}
// //               placeholder="React basics, Component lifecycle, State management"
// //             />
// //           </div>
          
// //           <div className="space-y-2">
// //             <Label htmlFor="requirements">Prerequisites/Requirements</Label>
// //             <Textarea
// //               id="requirements"
// //               name="requirements"
// //               value={formData.requirements}
// //               onChange={handleChange}
// //               rows={2}
// //               placeholder="Basic JavaScript knowledge, Node.js installed..."
// //             />
// //           </div>
          
// //           <div className="space-y-2">
// //             <Label htmlFor="meetingLink">Meeting Link</Label>
// //             <Input
// //               id="meetingLink"
// //               name="meetingLink"
// //               type="url"
// //               value={formData.meetingLink}
// //               onChange={handleChange}
// //               placeholder="https://zoom.us/j/..."
// //             />
// //           </div>
          
// //           <div className="flex justify-end space-x-2 pt-4">
// //             <Button 
// //               type="button" 
// //               variant="outline" 
// //               onClick={() => onOpenChange(false)}
// //             >
// //               Cancel
// //             </Button>
// //             <Button type="submit">Create Webinar</Button>
// //           </div>
// //         </form>
// //       </DialogContent>
// //     </Dialog>
// //   );
// // };

// // export default CreateWebinarForm;



// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import toast from "react-hot-toast";

// interface CreateWebinarFormProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   onWebinarCreated: (webinar: any) => void;
// }

// const CreateWebinarForm = ({ open, onOpenChange, onWebinarCreated }: CreateWebinarFormProps) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     presenter: "",
//     presenterTitle: "",
//     date: "",
//     time: "",
//     duration: "",
//     maxAttendees: "",
//     topics: "",
//     requirements: "",
//     meetingLink: "",
//     registrationDeadline: ""
//   });
//   const [errors, setErrors] = useState<{[key: string]: string}>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Clear previous errors
//     setErrors({});
    
//     // Validate meeting link is provided
//     if (!formData.meetingLink.trim()) {
//       setErrors({ meetingLink: "Meeting link is required to create a webinar" });
//       toast.error("Meeting link is required to create a webinar");
//       return;
//     }
    
//     const newWebinar = {
//       id: Math.floor(Math.random() * 1000) + 100,
//       title: formData.title,
//       description: formData.description,
//       presenter: formData.presenter,
//       presenterTitle: formData.presenterTitle,
//       date: formData.date,
//       time: formData.time,
//       duration: formData.duration,
//       maxAttendees: parseInt(formData.maxAttendees) || 100,
//       registrations: 0,
//       topics: formData.topics.split(',').map(topic => topic.trim()).filter(topic => topic),
//       requirements: formData.requirements,
//       meetingLink: formData.meetingLink,
//       registrationDeadline: formData.registrationDeadline,
//       status: "Upcoming",
//       createdBy: "Current User",
//       createdAt: new Date().toISOString()
//     };

//     onWebinarCreated(newWebinar);
//     onOpenChange(false);
    
//     setFormData({
//       title: "",
//       description: "",
//       presenter: "",
//       presenterTitle: "",
//       date: "",
//       time: "",
//       duration: "",
//       maxAttendees: "",
//       topics: "",
//       requirements: "",
//       meetingLink: "",
//       registrationDeadline: ""
//     });
//     setErrors({});
    
//     toast.success("Webinar created successfully!");
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>Create New Webinar</DialogTitle>
//           <DialogDescription>
//             Set up a new webinar session for the community.
//           </DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={handleSubmit} className="space-y-4 py-4">
//           <div className="space-y-2">
//             <Label htmlFor="title">Webinar Title *</Label>
//             <Input
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="e.g. Introduction to React Development"
//               required
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="description">Description *</Label>
//             <Textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={3}
//               placeholder="Describe what participants will learn..."
//               required
//             />
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="presenter">Presenter Name *</Label>
//               <Input
//                 id="presenter"
//                 name="presenter"
//                 value={formData.presenter}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="presenterTitle">Presenter Title *</Label>
//               <Input
//                 id="presenterTitle"
//                 name="presenterTitle"
//                 value={formData.presenterTitle}
//                 onChange={handleChange}
//                 placeholder="e.g. Senior Software Engineer at Google"
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-3 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="date">Date *</Label>
//               <Input
//                 id="date"
//                 name="date"
//                 type="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="time">Time *</Label>
//               <Input
//                 id="time"
//                 name="time"
//                 type="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="duration">Duration (minutes) *</Label>
//               <Input
//                 id="duration"
//                 name="duration"
//                 type="number"
//                 value={formData.duration}
//                 onChange={handleChange}
//                 placeholder="60"
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="maxAttendees">Max Attendees</Label>
//               <Input
//                 id="maxAttendees"
//                 name="maxAttendees"
//                 type="number"
//                 value={formData.maxAttendees}
//                 onChange={handleChange}
//                 placeholder="100"
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="registrationDeadline">Registration Deadline</Label>
//               <Input
//                 id="registrationDeadline"
//                 name="registrationDeadline"
//                 type="date"
//                 value={formData.registrationDeadline}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="topics">Topics (comma separated)</Label>
//             <Input
//               id="topics"
//               name="topics"
//               value={formData.topics}
//               onChange={handleChange}
//               placeholder="React basics, Component lifecycle, State management"
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="requirements">Prerequisites/Requirements</Label>
//             <Textarea
//               id="requirements"
//               name="requirements"
//               value={formData.requirements}
//               onChange={handleChange}
//               rows={2}
//               placeholder="Basic JavaScript knowledge, Node.js installed..."
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="meetingLink">Meeting Link *</Label>
//             <Input
//               id="meetingLink"
//               name="meetingLink"
//               type="url"
//               value={formData.meetingLink}
//               onChange={handleChange}
//               placeholder="https://zoom.us/j/..."
//               required
//               className={errors.meetingLink ? 'border-destructive' : ''}
//             />
//             {errors.meetingLink && (
//               <p className="text-sm text-destructive">{errors.meetingLink}</p>
//             )}
//           </div>
          
//           <div className="flex justify-end space-x-2 pt-4">
//             <Button 
//               type="button" 
//               variant="outline" 
//               onClick={() => onOpenChange(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit">Create Webinar</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CreateWebinarForm;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

interface CreateWebinarFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onWebinarCreated: (webinar: any) => void;
}

const CreateWebinarForm = ({ open, onOpenChange, onWebinarCreated }: CreateWebinarFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    presenter: "",
    presenterTitle: "",
    date: "",
    time: "",
    duration: "",
    maxAttendees: "",
    topics: "",
    requirements: "",
    meetingLink: "",
    registrationDeadline: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});
    if (!formData.meetingLink.trim()) {
      setErrors({ meetingLink: "Meeting link is required to create a webinar" });
      toast.error("Meeting link is required to create a webinar");
      return;
    }

    const newWebinar = {
      id: Math.floor(Math.random() * 1000) + 100,
      title: formData.title,
      description: formData.description,
      presenter: formData.presenter,
      presenterTitle: formData.presenterTitle,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      maxAttendees: parseInt(formData.maxAttendees) || 100,
      registrations: 0,
      topics: formData.topics.split(",").map((topic) => topic.trim()).filter((topic) => topic),
      requirements: formData.requirements,
      meetingLink: formData.meetingLink,
      registrationDeadline: formData.registrationDeadline,
      status: "Upcoming",
      createdBy: "Current User",
      createdAt: new Date().toISOString(),
    };

    onWebinarCreated(newWebinar);
    onOpenChange(false);

    setFormData({
      title: "",
      description: "",
      presenter: "",
      presenterTitle: "",
      date: "",
      time: "",
      duration: "",
      maxAttendees: "",
      topics: "",
      requirements: "",
      meetingLink: "",
      registrationDeadline: "",
    });
    setErrors({});
    toast.success("Webinar created successfully!");
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto rounded-t-2xl">
        <DrawerHeader>
          <DrawerTitle>Create New Webinar</DrawerTitle>
          <DrawerDescription>
            Set up a new webinar session for the community.
          </DrawerDescription>
        </DrawerHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4 px-4">
          <div className="space-y-2">
            <Label htmlFor="title">Webinar Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Introduction to React Development"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe what participants will learn..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="presenter">Presenter Name *</Label>
              <Input
                id="presenter"
                name="presenter"
                value={formData.presenter}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="presenterTitle">Presenter Title *</Label>
              <Input
                id="presenterTitle"
                name="presenterTitle"
                value={formData.presenterTitle}
                onChange={handleChange}
                placeholder="e.g. Senior Software Engineer at Google"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time *</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes) *</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleChange}
                placeholder="60"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maxAttendees">Max Attendees</Label>
              <Input
                id="maxAttendees"
                name="maxAttendees"
                type="number"
                value={formData.maxAttendees}
                onChange={handleChange}
                placeholder="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrationDeadline">Registration Deadline</Label>
              <Input
                id="registrationDeadline"
                name="registrationDeadline"
                type="date"
                value={formData.registrationDeadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="topics">Topics (comma separated)</Label>
            <Input
              id="topics"
              name="topics"
              value={formData.topics}
              onChange={handleChange}
              placeholder="React basics, Component lifecycle, State management"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Prerequisites/Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={2}
              placeholder="Basic JavaScript knowledge, Node.js installed..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="meetingLink">Meeting Link *</Label>
            <Input
              id="meetingLink"
              name="meetingLink"
              type="url"
              value={formData.meetingLink}
              onChange={handleChange}
              placeholder="https://zoom.us/j/..."
              required
              className={errors.meetingLink ? "border-destructive" : ""}
            />
            {errors.meetingLink && (
              <p className="text-sm text-destructive">{errors.meetingLink}</p>
            )}
          </div>

          <DrawerFooter className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Webinar</Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateWebinarForm;

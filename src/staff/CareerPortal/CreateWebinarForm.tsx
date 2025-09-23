

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
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.presenter.trim()) newErrors.presenter = "Presenter name is required";
    if (!formData.presenterTitle.trim()) newErrors.presenterTitle = "Presenter title is required";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.time.trim()) newErrors.time = "Time is required";
    if (!formData.duration.trim()) newErrors.duration = "Duration is required";
    if (!formData.meetingLink.trim()) newErrors.meetingLink = "Meeting link is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting");
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
      ...formData,
      maxAttendees: parseInt(formData.maxAttendees) || 100,
      registrations: 0,
      topics: formData.topics
        .split(",")
        .map((topic) => topic.trim())
        .filter((topic) => topic),
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
      <DrawerContent className="max-w-2xl mx-auto max-h-[90vh] rounded-t-2xl flex flex-col">
        <DrawerHeader>
          <DrawerTitle>Create New Webinar</DrawerTitle>
          <DrawerDescription>
            Set up a new webinar session for the community.
          </DrawerDescription>
        </DrawerHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4 px-4">
        {/* Scrollable Form */}
        <form
          id="webinarForm"
          onSubmit={handleSubmit}
          className="space-y-4 py-4 px-4 overflow-y-auto flex-1"
        >
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Webinar Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Introduction to React Development"
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
          </div>

          {/* Description */}
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
              className={errors.description ? "border-destructive" : ""}
             />
            {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
          </div>

          {/* Presenter & Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="presenter">Presenter Name *</Label>
              <Input
                id="presenter"
                name="presenter"
                value={formData.presenter}
                onChange={handleChange}
                required
              />
                className={errors.presenter ? "border-destructive" : ""}
              />
              {errors.presenter && <p className="text-sm text-destructive">{errors.presenter}</p>}
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
                className={errors.presenterTitle ? "border-destructive" : ""}
              />
              {errors.presenterTitle && <p className="text-sm text-destructive">{errors.presenterTitle}</p>}
            </div>
          </div>

          {/* Date, Time, Duration */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                className={errors.date ? "border-destructive" : ""}
              />
              {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
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
                className={errors.time ? "border-destructive" : ""}
              />
              {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
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
                className={errors.duration ? "border-destructive" : ""}
              />
              {errors.duration && <p className="text-sm text-destructive">{errors.duration}</p>}
            </div>
          </div>

          {/* Max Attendees & Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Topics */}
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

          {/* Requirements */}
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

          {/* Meeting Link */}
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
              className={errors.meetingLink ? "border-destructive" : ""}
            />
            {errors.meetingLink && <p className="text-sm text-destructive">{errors.meetingLink}</p>}
          </div>
        </form>

        {/* Footer */}
        <DrawerFooter className="flex justify-end space-x-2 border-t p-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button type="submit" form="webinarForm">
            Create Webinar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateWebinarForm;

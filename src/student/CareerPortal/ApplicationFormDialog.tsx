
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, XCircle, Upload, FileText } from "lucide-react";

interface ApplicationFormDialogProps {
  showApplicationForm: boolean;
  setShowApplicationForm: (open: boolean) => void;
  applicationForm: any;
  setApplicationForm: React.Dispatch<React.SetStateAction<any>>;
  handleSubmitApplication: (e: React.FormEvent) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resumeError: string | null;
  selectedJob: { title: string; company: string } | null;
}

const ApplicationFormDialog: React.FC<ApplicationFormDialogProps> = ({
  showApplicationForm,
  setShowApplicationForm,
  applicationForm,
  setApplicationForm,
  handleSubmitApplication,
  handleFileChange,
  resumeError,
  selectedJob,
}) => {
  return (
    <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Apply for {selectedJob?.title}</DialogTitle>
          <DialogDescription>
            {selectedJob?.company} • Please fill out the form below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmitApplication} className="space-y-6 py-4">
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={applicationForm.fullName}
                onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={applicationForm.email}
                onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number *</Label>
              <Input
                id="phoneNumber"
                required
                value={applicationForm.phoneNumber}
                onChange={(e) => setApplicationForm({ ...applicationForm, phoneNumber: e.target.value })}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                required
                value={applicationForm.country}
                onChange={(e) => setApplicationForm({ ...applicationForm, country: e.target.value })}
                className="h-11"
              />
            </div>
          </div>

          {/* Resume Upload Section */}
          <div className="space-y-2">
            <Label>Resume/CV *</Label>
            <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${resumeError ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-purple-400 hover:bg-purple-50/50'}`}>
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <Label htmlFor="resume" className="cursor-pointer block">
                {applicationForm.resume ? (
                  <div className="flex flex-col items-center text-green-600">
                    <FileText className="h-10 w-10 mb-2" />
                    <span className="font-medium text-lg">{applicationForm.resume.name}</span>
                    <span className="text-sm opacity-80">Click to change file</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <Upload className="h-10 w-10 mb-2" />
                    <span className="font-medium text-lg text-gray-900">Upload your Resume</span>
                    <span className="text-sm mt-1">PDF, DOCX up to 5MB</span>
                  </div>
                )}
              </Label>
            </div>
            {resumeError && (
              <p className="text-sm text-red-500 flex items-center mt-2">
                <XCircle className="h-4 w-4 mr-1" /> {resumeError}
              </p>
            )}
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="privacyAgreement"
                checked={applicationForm.privacyAgreement}
                onCheckedChange={(c) => setApplicationForm({ ...applicationForm, privacyAgreement: c })}
              />
              <Label htmlFor="privacyAgreement" className="text-sm text-gray-600 font-normal leading-tight">
                I agree to the privacy policy and allow {selectedJob?.company} to process my data for recruitment.
              </Label>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => setShowApplicationForm(false)} className="h-11">
              Cancel
            </Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 h-11 px-8">
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationFormDialog;
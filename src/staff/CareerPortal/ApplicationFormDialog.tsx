// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Check, XCircle, Upload } from "lucide-react";

// interface ApplicationFormDialogProps {
//   showApplicationForm: boolean;
//   setShowApplicationForm: (open: boolean) => void;
//   applicationForm: any;
//   setApplicationForm: React.Dispatch<React.SetStateAction<any>>;
//   handleSubmitApplication: (e: React.FormEvent) => void;
//   handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   resumeError: string | null;
//   selectedJob: { title: string; company: string } | null;
// }

// const ApplicationFormDialog: React.FC<ApplicationFormDialogProps> = ({
//   showApplicationForm,
//   setShowApplicationForm,
//   applicationForm,
//   setApplicationForm,
//   handleSubmitApplication,
//   handleFileChange,
//   resumeError,
//   selectedJob,
// }) => {
//   return (
//     <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
//       <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle>Apply for {selectedJob?.title} at {selectedJob?.company}</DialogTitle>
//           <DialogDescription>
//             Please fill out the form below to apply for this position.
//           </DialogDescription>
//         </DialogHeader>
        
//         <form onSubmit={handleSubmitApplication} className="space-y-4 py-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="fullName">Full Name *</Label>
//               <Input
//                 id="fullName"
//                 required
//                 value={applicationForm.fullName}
//                 onChange={(e) => setApplicationForm({...applicationForm, fullName: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="email">Email *</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 required
//                 value={applicationForm.email}
//                 onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="country">Country *</Label>
//               <Input
//                 id="country"
//                 required
//                 value={applicationForm.country}
//                 onChange={(e) => setApplicationForm({...applicationForm, country: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="phoneNumber">Phone Number *</Label>
//               <Input
//                 id="phoneNumber"
//                 required
//                 value={applicationForm.phoneNumber}
//                 onChange={(e) => setApplicationForm({...applicationForm, phoneNumber: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="primarySkills">Primary Skills *</Label>
//               <Input
//                 id="primarySkills"
//                 required
//                 value={applicationForm.primarySkills}
//                 onChange={(e) => setApplicationForm({...applicationForm, primarySkills: e.target.value})}
//                 placeholder="e.g. React, Node.js, Python"
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="state">State/Province</Label>
//               <Input
//                 id="state"
//                 value={applicationForm.state}
//                 onChange={(e) => setApplicationForm({...applicationForm, state: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="zipCode">ZIP/Postal Code</Label>
//               <Input
//                 id="zipCode"
//                 value={applicationForm.zipCode}
//                 onChange={(e) => setApplicationForm({...applicationForm, zipCode: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="yearsOfExperience">Total Years of Experience *</Label>
//               <Select
//                 value={applicationForm.yearsOfExperience}
//                 onValueChange={(value) => setApplicationForm({...applicationForm, yearsOfExperience: value})}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select experience" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="0-1">0-1 years</SelectItem>
//                   <SelectItem value="1-3">1-3 years</SelectItem>
//                   <SelectItem value="3-5">3-5 years</SelectItem>
//                   <SelectItem value="5-10">5-10 years</SelectItem>
//                   <SelectItem value="10+">10+ years</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="referralEmail">Referral Email (if any)</Label>
//               <Input
//                 id="referralEmail"
//                 type="email"
//                 value={applicationForm.referralEmail}
//                 onChange={(e) => setApplicationForm({...applicationForm, referralEmail: e.target.value})}
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="employeeRelation">Relation to Employee (if referred)</Label>
//               <Input
//                 id="employeeRelation"
//                 value={applicationForm.employeeRelation}
//                 onChange={(e) => setApplicationForm({...applicationForm, employeeRelation: e.target.value})}
//                 placeholder="e.g. Friend, Colleague, Family"
//               />
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="resume">Upload CV/Resume *</Label>
//             <div className="border-2 border-dashed rounded-md p-4 text-center">
//               <Input
//                 id="resume"
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <Label htmlFor="resume" className="cursor-pointer">
//                 <div className="flex flex-col items-center justify-center">
//                   <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
//                   <p className="text-sm font-medium">Click to upload or drag and drop</p>
//                   <p className="text-xs text-muted-foreground mt-1">
//                     PDF, DOC or DOCX (Max 1MB). File name must not include special characters.
//                   </p>
//                 </div>
//               </Label>
//             </div>
//             {applicationForm.resume && (
//               <div className="flex items-center mt-2 text-sm text-success">
//                 <Check className="h-4 w-4 mr-1" />
//                 {applicationForm.resume.name}
//               </div>
//             )}
//             {resumeError && (
//               <div className="flex items-center mt-2 text-sm text-destructive">
//                 <XCircle className="h-4 w-4 mr-1" />
//                 {resumeError}
//               </div>
//             )}
//           </div>
          
//           <div className="space-y-3">
//             <div className="flex items-start space-x-2">
//               <Checkbox
//                 id="careerUpdates"
//                 checked={applicationForm.careerUpdates}
//                 onCheckedChange={(checked) => 
//                   setApplicationForm({...applicationForm, careerUpdates: checked as boolean})
//                 }
//               />
//               <Label htmlFor="careerUpdates" className="text-sm font-normal">
//                 Keep me up to date regarding career opportunities and company news
//               </Label>
//             </div>
            
//             <div className="flex items-start space-x-2">
//               <Checkbox
//                 id="privacyAgreement"
//                 required
//                 checked={applicationForm.privacyAgreement}
//                 onCheckedChange={(checked) => 
//                   setApplicationForm({...applicationForm, privacyAgreement: checked as boolean})
//                 }
//               />
//               <Label htmlFor="privacyAgreement" className="text-sm font-normal">
//                 I have read and agree to the employee candidate privacy statement
//               </Label>
//             </div>
//           </div>
          
//           <div className="flex justify-end space-x-2 pt-4">
//             <Button 
//               type="button" 
//               variant="outline" 
//               onClick={() => setShowApplicationForm(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit">Submit Application</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ApplicationFormDialog;


import { Drawer } from "antd";
import { useState } from "react";
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
import { Check, XCircle, Upload } from "lucide-react";

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
    <Drawer
      title={`Apply for ${selectedJob?.title} at ${selectedJob?.company}`}
      open={showApplicationForm}
      onClose={() => setShowApplicationForm(false)}
      width={700}
    >
      <p className="text-muted-foreground mb-4">
        Please fill out the form below to apply for this position.
      </p>

      <form onSubmit={handleSubmitApplication} className="space-y-4 py-2">
        {/* Grid of inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              required
              value={applicationForm.fullName}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  fullName: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={applicationForm.email}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input
              id="country"
              required
              value={applicationForm.country}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  country: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              required
              value={applicationForm.phoneNumber}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  phoneNumber: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="primarySkills">Primary Skills *</Label>
            <Input
              id="primarySkills"
              required
              value={applicationForm.primarySkills}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  primarySkills: e.target.value,
                })
              }
              placeholder="e.g. React, Node.js, Python"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State/Province</Label>
            <Input
              id="state"
              value={applicationForm.state}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  state: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP/Postal Code</Label>
            <Input
              id="zipCode"
              value={applicationForm.zipCode}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  zipCode: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsOfExperience">
              Total Years of Experience *
            </Label>
            <Select
              value={applicationForm.yearsOfExperience}
              onValueChange={(value) =>
                setApplicationForm({
                  ...applicationForm,
                  yearsOfExperience: value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="referralEmail">Referral Email (if any)</Label>
            <Input
              id="referralEmail"
              type="email"
              value={applicationForm.referralEmail}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  referralEmail: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeRelation">
              Relation to Employee (if referred)
            </Label>
            <Input
              id="employeeRelation"
              value={applicationForm.employeeRelation}
              onChange={(e) =>
                setApplicationForm({
                  ...applicationForm,
                  employeeRelation: e.target.value,
                })
              }
              placeholder="e.g. Friend, Colleague, Family"
            />
          </div>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <Label htmlFor="resume">Upload CV/Resume *</Label>
          <div className="border-2 border-dashed rounded-md p-4 text-center">
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <Label htmlFor="resume" className="cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, DOC or DOCX (Max 1MB). File name must not include special
                  characters.
                </p>
              </div>
            </Label>
          </div>
          {applicationForm.resume && (
            <div className="flex items-center mt-2 text-sm text-success">
              <Check className="h-4 w-4 mr-1" />
              {applicationForm.resume.name}
            </div>
          )}
          {resumeError && (
            <div className="flex items-center mt-2 text-sm text-destructive">
              <XCircle className="h-4 w-4 mr-1" />
              {resumeError}
            </div>
          )}
        </div>

        {/* Agreements */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="careerUpdates"
              checked={applicationForm.careerUpdates}
              onCheckedChange={(checked) =>
                setApplicationForm({
                  ...applicationForm,
                  careerUpdates: checked as boolean,
                })
              }
            />
            <Label htmlFor="careerUpdates" className="text-sm font-normal">
              Keep me up to date regarding career opportunities and company news
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacyAgreement"
              required
              checked={applicationForm.privacyAgreement}
              onCheckedChange={(checked) =>
                setApplicationForm({
                  ...applicationForm,
                  privacyAgreement: checked as boolean,
                })
              }
            />
            <Label htmlFor="privacyAgreement" className="text-sm font-normal">
              I have read and agree to the employee candidate privacy statement
            </Label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowApplicationForm(false)}
          >
            Cancel
          </Button>
          <Button type="submit">Submit Application</Button>
        </div>
      </form>
    </Drawer>
  );
};

export default ApplicationFormDialog;

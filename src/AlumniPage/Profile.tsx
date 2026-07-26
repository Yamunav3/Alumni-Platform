import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Award,
  Users,
  MessageSquare,
  Camera,
  Trash2,
  Loader2,
} from "lucide-react";
import { AlumniNavbar } from "@/components/AlumniNavbar";
import api from "../api/api";

interface ProfileData {
  username: string;
  fullname: string;
  workingcompany: string;
  jobrole: string;
  mobilenumber: number;
  email: string;
  yearofpassing: string;
  collegeID: string;
  interests: string;
  branch: string;
  avatar?: string;
  location?: string;
  bio?: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
  const token = localStorage.getItem("token");
  localStorage.setItem("role", "ALUMNI");

  if (!token) {
    setError("Profile can't be loaded, try again.");
    setLoading(false);
    return;
  }

  const loadProfile = async () => {
    try {
      const profileRes = await api.get("/api/v1/alumni");
      setProfile(profileRes.data);

      const imageRes = await api.get("/api/v1/alumni/profile-picture", {
        responseType: "blob",
      });

      if (imageRes.data && imageRes.data.size > 0) {
        const imageUrl = URL.createObjectURL(imageRes.data);
        setProfileImage(imageUrl);
      }
    } catch (err) {
      setError("Failed to load profile.");
    } finally {
      setLoading(false);
    }
  };

  loadProfile();
}, []);

  useEffect(() => {
    if (!selectedImage) return;

    const previewUrl = URL.createObjectURL(selectedImage);
    setProfileImage(previewUrl);

    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [selectedImage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    setError("");
    setSelectedImage(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);

      // Adjust endpoint to your backend
      const res = await api.post("/api/v1/alumni/profile-picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
       console.log("Profile pictire is uploaded");
      const uploadedUrl = res.data?.avatarUrl || res.data?.url || "";
      if (uploadedUrl) {
        setProfileImage(uploadedUrl);
        setProfile((prev) =>
          prev
            ? {
                ...prev,
                avatar: uploadedUrl,
              }
            : prev
        );
      }

      setSelectedImage(null);
    } catch (err) {
      setError("Failed to upload profile picture.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleDeleteImage = async () => {
    if (!profileImage && !profile?.avatar) return;

    try {
      setDeleting(true);
      setError("");

      // Adjust endpoint to your backend
      await api.delete("/api/v1/student/profile-picture");

      setProfileImage("");
      setSelectedImage(null);
      setProfile((prev) =>
        prev
          ? {
              ...prev,
              avatar: "",
            }
          : prev
      );
    } catch (err) {
      setError("Failed to delete profile picture.");
    } finally {
      setDeleting(false);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  if (loading) {
    return (
      <div className="alumni-shell min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="alumni-shell">
      <AlumniNavbar />

      <section className="alumni-hero py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 rounded-[2rem] border border-white/60 bg-white/15 p-8 backdrop-blur-md">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-white/80 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
                <AvatarImage
                  src={profileImage}
                  alt={profile?.fullname || "Profile picture"}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl">
                  {profile?.fullname?.charAt(0)?.toUpperCase() || "A"}
                </AvatarFallback>
              </Avatar>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <Button
                type="button"
                size="icon"
                onClick={openFilePicker}
                disabled={uploading}
                className="absolute bottom-0 right-0 h-10 w-10 rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
              >
                {uploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Camera className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="alumni-pill mb-3">Professional profile</div>
                  <h1 className="text-3xl font-bold text-white mb-2">{profile?.fullname}</h1>
                  <p className="text-xl text-white/85 mb-2">{profile?.jobrole}</p>
                  <div className="flex items-center text-white/80 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{profile?.workingcompany}</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>{profile?.location || "Bangalore"}</span>
                  </div>
                </div>

                {(profileImage || profile?.avatar) && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleDeleteImage}
                    disabled={deleting}
                    className="border-white/40 bg-white/10 text-white hover:bg-white/20"
                  >
                    {deleting ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4 mr-2" />
                    )}
                    Delete photo
                  </Button>
                )}
              </div>

              <p className="text-white/80 mb-6">
                {profile?.bio || "Add a short professional bio to make your profile more personal."}
              </p>

              {error && (
                <p className="mb-4 text-sm text-red-200 bg-red-500/20 border border-red-300/30 rounded-xl px-4 py-2">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>
                    Class of {profile?.yearofpassing} • Bachelor of Technology (B.Tech)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="alumni-tab-list grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profile?.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profile?.mobilenumber}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span>{profile?.location || "Not provided"}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Bachelor of Technology in {profile?.branch}</h4>
                      <p className="text-muted-foreground">SRKR Engineering College</p>
                      <p className="text-sm text-muted-foreground">
                        Graduated {profile?.yearofpassing}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your recent contributions and interactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span>Participated in "Career Transitions" forum discussion</span>
                      <span className="text-muted-foreground">2 days ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Mentored 3 junior developers this month</span>
                      <span className="text-muted-foreground">1 week ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Completed "Leadership Excellence" program</span>
                      <span className="text-muted-foreground">2 weeks ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
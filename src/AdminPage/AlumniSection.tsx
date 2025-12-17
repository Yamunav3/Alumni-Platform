import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AlumniEvents from "@/AlumniPage/Events"; // Import works fine

const AlumniSection: React.FC = () => {
  interface User {
    name: string;
    email: string;
    phonenumber: string;
    graduationYear: string;
    degree: string;
    department: string;
    currentCity: string;
    country: string;
    linkedInProfile: string;
    bio: string;
  }

  const [user, setUser] = useState<User[]>([
    {
      name: "John Doe",
      email: "john@example.com",
      phonenumber: "9876543210",
      graduationYear: "2020",
      degree: "B.Tech",
      department: "CSE",
      currentCity: "Hyderabad",
      country: "India",
      linkedInProfile: "https://linkedin.com/in/johndoe",
      bio: "Software Engineer at XYZ",
    },
  ]);

  const UserCard: React.FC<User> = ({
    name,
    email,
    phonenumber,
    graduationYear,
    degree,
    department,
    currentCity,
    country,
    linkedInProfile,
    bio,
  }) => (
    <Card className="w-96 mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phonenumber}</p>
        <p><strong>Graduation Year:</strong> {graduationYear}</p>
        <p><strong>Degree:</strong> {degree}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>City:</strong> {currentCity}</p>
        <p><strong>Country:</strong> {country}</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href={linkedInProfile} target="_blank" rel="noopener noreferrer">
            {linkedInProfile}
          </a>
        </p>
        <p><strong>Bio:</strong> {bio}</p>
      </CardContent>
    </Card>
  );

  // 🔥 RETURN JSX HERE
  return (
     <div className="bg-gray-700 min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <button className="bg-blue-500 hover:bg-blue-600 px-2 py-4 rounded shadow-md transistion duration-300 ease-in">Add Person</button>
      </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Alumni Portal</h2>
      {/* Example: render user cards */}
      {user.map((u, i) => (
        <UserCard key={i} {...u} />
      ))}     
    </div>
    </div>
  );
};

export default AlumniSection;

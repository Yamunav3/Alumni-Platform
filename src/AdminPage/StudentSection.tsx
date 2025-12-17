import {useState} from "react";
import {Card, CardHeader,CardContent,CardTitle} from "@/components/ui/card";

const StudentSection : React.FC= ()=>{
interface student {
    name:string,
    email:string;
    phonenumber:string;
    graduationYear:string;
    
}

const [student,setstudent] = useState<student[]>([
    {
        name:"Siddharth Reddy",
        email:"sidd@gmail.com",
        phonenumber:"9988776655",
        graduationYear:"2027",
    },
]);
const StudentCard:React.FC<student> = (
    {
        name,
        email,
        phonenumber,
        graduationYear,
    }
) =>(
    <Card className="w-96 mb-4">
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardContent>
                <p><strong>StudentEMail:</strong>{email}</p>
                <p><strong>PhoneNumber:</strong>{phonenumber}</p>
                <p><strong>GraduationYear:{graduationYear}</strong></p>
            </CardContent>
        </CardHeader>
    </Card>
);
return (
      <div className="bg-gray-700 min-h-screen">
        <div className="p-6">
            <h3 className="text-white font-bold text-2xl">Student Portal</h3>
            <button className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 transistion duration-300 ease-in p-4 rounded shadow-md">Add Student</button>
        </div>
        <div className="mx-2 grid grid-cols-4">
            {student.map((u,i)=>(
                <StudentCard key={i} {...u}  />
            ))}                                                                 
        </div>
      </div>
);
}

export default StudentSection;
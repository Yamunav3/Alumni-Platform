import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Staff: React.FC = () =>{
    interface staff{
        name:string;
        email:string;
        Designation:string;
        department:string;
        contactnumber:string;
        bio:string;

    }
    const [staff,setstaff]=useState<staff[]>([
        {
            name:"Vijay Aunty",
            email:"vijay@gmail.com",
            Designation:"Assistant Professor",
            department:"Information Technology",
            contactnumber:"9959976985",
            bio:"The warrior of light , the knight of the seven kingdoms,the warrior who never gives up.The breaker of chains and mother of dragons."
        },
    ]);

    const StaffCard : React.FC<staff> = ({
        name,
        email,
        Designation,
        department,
        contactnumber,
        bio,
    }) =>(
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p><strong>Email:</strong>{email}</p>
                <p><strong>Designation:{Designation}</strong></p>
                <p><strong>Department:{department}</strong></p>
                <p><strong>Contact-Info:</strong>{contactnumber}</p>
                <p><strong>BIO:</strong>{bio}</p>
            </CardContent>
        </Card>
    );
    return (
        <div className="bg-[#57595B] min-h-screen">
            
            <div className="p-6">
                <h2 className="font-bold text-2xl text-white p-2">Staff Portal</h2>
                <button className="bg-blue-400 hover:bg-blue-600 p-4 shadow-md rounded transistion duration-300 ease-in fixed top-4 right-4">Add Staff</button>
             </div>
             <div className="p-4 grid grid-cols-4 gap-4">
                {staff.map((u,i)=>(
                    <StaffCard key={i} {...u}  />
                ))}
                </div>
                
        </div>
    );
};

export default Staff;
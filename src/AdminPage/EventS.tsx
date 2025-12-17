import {useState} from "react";
import {Card, CardHeader,CardContent,CardTitle} from "@/components/ui/card";

const EventS: React.FC =()=>{
    interface event{
        eventname:string;
        eventdate:string;
        eventdescription:string;
        imageurl:string;
        
    }

    const [event,setevent] = useState<event[]>([
        {
            eventname:"Alumni Meet 2026",
            eventdate:"2026-6-15",
            eventdescription:"An annual gathering of alumni to reconnect and network.",
            imageurl:"https://example.com/alumni-meet-2026.jpg",
        },
    ]);

  const EventCard : React.FC<event>=({
    eventname,
    eventdate,
    eventdescription,
    imageurl,

  }) =>(
    <Card className="w-96 mb-4">
        <CardHeader>
            <CardTitle>{eventname}</CardTitle>
        </CardHeader>
        <CardContent>
            <p><strong>Date:{eventdate}</strong></p>
            <p><strong>Description:</strong>{eventdescription}</p>
            <img src={imageurl} alt={eventname} className="mt-2 rounded"/>
        </CardContent>
    </Card>
  );

  return (
       <div className="bg-[#1A3D64] min-h-screen">
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Events Section</h2>
            <button className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 transistion duration-300 ease-in p-4 rounded shadow-md">Add Event</button>
        </div>
        <div className="mx-2 grid grid-cols-4 gap-2">
            {event.map((u,i)=>(
                <EventCard key={i} {...u}  />
            ))}
        </div>
       </div>
  );
}
export default EventS;
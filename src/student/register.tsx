

import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import StudentLayout from './StudentLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const EVENTS_DB: Record<string, any> = {
  "1": { title: "Annual Alumni Reunion 2025", date: "2025-03-15", location: "Auditorium" },
  "2": { title: "Tech Industry Networking", date: "2025-01-20", location: "Virtual" },
  "3": { title: "Career Workshop", date: "2025-02-05", location: "Hall B" }
};

export default function RegisterEvent() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId');
  const navigate = useNavigate();
  
  const [eventDetails, setEventDetails] = useState<any>(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    if (eventId && EVENTS_DB[eventId]) {
      setEventDetails(EVENTS_DB[eventId]);
    } else {
      setEventDetails({ title: "General Event Registration", date: "TBD", location: "TBD" });
    }
  }, [eventId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/student/events');
    }, 2500);
  };

  return (
    <StudentLayout className="bg-gray-50/50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card className="overflow-hidden shadow-xl border-none">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white text-center">
            <h1 className="text-2xl font-bold mb-2">Event Registration</h1>
            <p className="opacity-90">Secure your spot for {eventDetails?.title}</p>
          </div>

          <CardContent className="p-8">
            {success ? (
              <div className="text-center py-10 animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Registration Confirmed!</h2>
                <p className="text-gray-600 mt-2">Check your email for the ticket.</p>
                <p className="text-sm text-gray-400 mt-4">Redirecting to events...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                   <h3 className="font-semibold text-lg text-purple-700">{eventDetails?.title}</h3>
                   <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                      <div className="flex items-center"><Calendar className="h-4 w-4 mr-2 text-purple-600"/> {eventDetails?.date}</div>
                      <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-purple-600"/> {eventDetails?.location}</div>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" required placeholder="John Doe"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" type="email" required placeholder="john@example.com"
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button type="button" variant="outline" className="flex-1" onClick={() => navigate(-1)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Confirm Registration
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, User, Mail, Phone, Building } from 'lucide-react';
import { Link } from "react-router-dom";
import { Navigation } from './StaffNavbar';
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  organizer: string;
  attendees: number;
  maxAttendees: number;
  registrationOpen: boolean;
  image: string;
  description: string;
  isVirtual: boolean;
}

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  message: string;
}

const AlumniEvents = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: ''
  });

  const event: Event = {
    id: 'tech-networking-2025',
    title: "Tech Industry Networking Night",
    date: "January 20, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Virtual Event",
    type: "Networking",
    organizer: "Tech Alumni Group",
    attendees: 120,
    maxAttendees: 200,
    registrationOpen: true,
    image: "/event-placeholder.jpg",
    description: "Connect with fellow tech professionals and share industry insights.",
    isVirtual: true
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Registration data:', formData);
    setRegistrationSuccess(true);
    setTimeout(() => {
      setRegistrationSuccess(false);
      setShowRegistration(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        message: ''
      });
    }, 3000);
  };

  const handleRegister = () => {
    setShowRegistration(true);
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-6">
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 ">
         <Navigation/>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Alumni Events</h1>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">
            Connect with fellow alumni through our exclusive events, networking opportunities, and professional development sessions.
          </p>
        </div>

        {/* Event Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                <span className="flex items-center text-teal-600">
                  <Users className="w-4 h-4 mr-1" />
                  {event.attendees}/{event.maxAttendees} attending
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
              
              <p className="text-gray-600 mb-6">{event.description}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-teal-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2 text-teal-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <User className="w-5 h-5 mr-2 text-teal-600" />
                  <span>Organized by {event.organizer}</span>
                </div>
              </div>

              {event.registrationOpen ? (
                <button
                  onClick={handleRegister}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
                >
                  Register Now
                </button>
              ) : (
                <button
                  disabled
                  className="px-6 py-3 bg-gray-400 text-white font-medium rounded-lg cursor-not-allowed"
                >
                  Registration Closed
                </button>
              )}
            </div>
            
            <div className="md:w-1/3 bg-gradient-to-br from-teal-600 to-cyan-600 p-8 flex flex-col justify-center items-center text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Networking Opportunity</h3>
                <p className="text-teal-100 mb-6">Connect with industry professionals and expand your network</p>
                
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <p className="text-sm">Spots remaining:</p>
                  <div className="w-full bg-white/20 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-teal-300 h-2.5 rounded-full" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1">{event.maxAttendees - event.attendees} of {event.maxAttendees} available</p>
                </div>
                
                <p className="text-teal-200 text-sm">
                  {event.isVirtual ? 'Virtual event - join from anywhere!' : 'In-person event'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Modal */}
        {showRegistration && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
              <div className="bg-teal-600 p-6 text-white">
                <h2 className="text-2xl font-bold">Register for Event</h2>
                <p className="text-teal-100">{event.title}</p>
              </div>
              
              {registrationSuccess ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Registration Successful!</h3>
                  <p className="text-gray-600">We've sent a confirmation email with event details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  {/* <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your phone number"
                    />
                  </div> */}
                  
                  {/* <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Where do you work?"
                    />
                  </div> */}
                  
                  {/* <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      placeholder="What is your role?"
                    />
                  </div>
                   */}
                  {/* <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Questions or Comments
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Any specific topics you'd like to discuss?"
                    ></textarea>
                  </div> */}
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Confirm Registration
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowRegistration(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniEvents;
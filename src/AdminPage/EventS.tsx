import { useMemo, useState } from "react";
import { Search, Plus, CalendarDays, MapPin, Users } from "lucide-react";
import { AdminNavbar } from "@/components/AdminNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EventItem = {
  eventName: string;
  eventDate: string;
  eventDescription: string;
  location: string;
  organizer: string;
  status: "Published" | "Draft";
};

const eventsSeed: EventItem[] = [
  {
    eventName: "Alumni Meet 2026",
    eventDate: "2026-06-15",
    eventDescription: "Annual gathering of alumni to reconnect and network.",
    location: "Main Auditorium",
    organizer: "Alumni Cell",
    status: "Published",
  },
  {
    eventName: "Industry Mentorship Day",
    eventDate: "2026-05-28",
    eventDescription: "Alumni-led mentorship sessions for final-year students.",
    location: "Innovation Block",
    organizer: "Career Services",
    status: "Published",
  },
  {
    eventName: "Startup Pitch Evening",
    eventDate: "2026-07-02",
    eventDescription: "Student and alumni startup idea showcase.",
    location: "Seminar Hall 2",
    organizer: "Entrepreneurship Club",
    status: "Draft",
  },
];

const EventS: React.FC = () => {
  const [events] = useState<EventItem[]>(eventsSeed);
  const [search, setSearch] = useState("");

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return events;
    return events.filter(
      (event) =>
        event.eventName.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.status.toLowerCase().includes(query)
    );
  }, [search, events]);

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Event Management</h1>
            <p className="text-slate-600 mt-1">Plan, review, and publish events across the platform.</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Total Events</p>
              <p className="text-2xl font-semibold text-slate-900">{events.length}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Published</p>
              <p className="text-2xl font-semibold text-slate-900">
                {events.filter((event) => event.status === "Published").length}
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-500">Drafts</p>
              <p className="text-2xl font-semibold text-slate-900">
                {events.filter((event) => event.status === "Draft").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Event Pipeline</CardTitle>
            <div className="relative mt-2">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by event name, organizer, location, status"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredEvents.map((event) => (
                <div
                  key={`${event.eventName}-${event.eventDate}`}
                  className="rounded-lg border border-slate-200 bg-white p-4 space-y-3"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-semibold text-slate-900">{event.eventName}</h3>
                    <Badge className={event.status === "Published" ? "bg-emerald-600" : "bg-amber-600"}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">{event.eventDescription}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {event.eventDate}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {event.organizer}
                    </span>
                  </div>
                </div>
              ))}
              {filteredEvents.length === 0 && (
                <p className="text-sm text-slate-500">No events found for the current search.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventS;

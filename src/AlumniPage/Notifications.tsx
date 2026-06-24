import { useEffect, useState } from "react";
import { useSocket } from "../api/SocketProvider";
import { IMessage, StompSubscription } from "@stomp/stompjs";

type NotificationPayload = {
  studentId: number;
  studentName: string;
  message: string;
  type: string;
};

const typeConfig: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  alert:   { bg: "bg-red-50",    text: "text-red-600",    dot: "bg-red-500",    label: "Alert" },
  info:    { bg: "bg-blue-50",   text: "text-blue-600",   dot: "bg-blue-500",   label: "Info" },
  success: { bg: "bg-green-50",  text: "text-green-600",  dot: "bg-green-500",  label: "Success" },
  warning: { bg: "bg-amber-50",  text: "text-amber-600",  dot: "bg-amber-500",  label: "Warning" },
};

function getTypeStyle(type: string) {
  return typeConfig[type.toLowerCase()] ?? {
    bg: "bg-gray-50",
    text: "text-gray-600",
    dot: "bg-gray-400",
    label: type,
  };
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const avatarColors = [
  "bg-violet-100 text-violet-700",
  "bg-teal-100 text-teal-700",
  "bg-pink-100 text-pink-700",
  "bg-blue-100 text-blue-700",
  "bg-amber-100 text-amber-700",
];

function getAvatarColor(name: string) {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
}

export default function NotificationsPage() {
  const { client, connected } = useSocket();
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);

  useEffect(() => {
    if (!client || !connected) return;
    if (localStorage.getItem("role") !== "ALUMNI") return;

    const subscription: StompSubscription = client.subscribe("/topic/test", (message: IMessage) => {
      const data: NotificationPayload = JSON.parse(message.body);
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client, connected]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
            <p className="mt-1 text-sm text-gray-500">
              Live updates from your students
            </p>
          </div>
          {notifications.length > 0 && (
            <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
              {notifications.length} new
            </span>
          )}
        </div>

        {/* Empty state */}
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-20 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">No notifications yet</p>
            <p className="mt-1 text-xs text-gray-400">Waiting for incoming activity…</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {notifications.map((n, index) => {
              const style = getTypeStyle(n.type);
              const avatarColor = getAvatarColor(n.studentName);
              const isNew = index === 0;

              return (
                <li
                  key={index}
                  className={`relative flex items-start gap-4 rounded-2xl border bg-white px-5 py-4 transition-all
                    ${isNew
                      ? "border-violet-200 ring-1 ring-violet-100"
                      : "border-gray-100"
                    }`}
                >
                  {/* Live indicator for newest */}
                  {isNew && (
                    <span className="absolute right-4 top-4 flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                    </span>
                  )}

                  {/* Avatar */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarColor}`}>
                    {getInitials(n.studentName)}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-gray-900">{n.studentName}</span>
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                        {style.label}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{n.message}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
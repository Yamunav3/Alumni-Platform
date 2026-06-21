
import { useState } from "react";
import { useNotificationsSocket } from "../api/NotificationsSocket";

type NotificationItem = {
  studentId: number;
  studentName: string;
  message: string;
  type: string;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useNotificationsSocket({
    onMessage: (data) => {
      setNotifications((prev) => [data, ...prev]);
      console.log(data);
    },
  });

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((n, index) => (
        <div key={index}>
          <strong>{n.studentName}</strong>
          <p>{n.message}</p>
        </div>
      ))}
    </div>
  );
}
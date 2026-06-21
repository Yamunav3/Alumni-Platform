// src/hooks/useNotificationsSocket.ts
import { useEffect, useRef } from "react";
import { Client, IMessage } from "@stomp/stompjs";
import SockJS from "sockjs-client";

type NotificationPayload = {
  studentId: number;
  studentName: string;
  message: string;
  type: string;
};

type Props = {
  onMessage: (data: NotificationPayload) => void;
};

export const useNotificationsSocket = ({ onMessage }: Props) => {
  const clientRef = useRef<Client | null>(null);
  const ctoken=localStorage.getItem("token");

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      connectHeaders:{
        Authorization: `Bearer ${ctoken}`,
      },
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
      onConnect: () => {
        client.subscribe("/user/queue/notifications", (message: IMessage) => {
          const body: NotificationPayload = JSON.parse(message.body);
          onMessage(body);
          // Check Point 1
          
        });
        console.log("successfully subscribed to /user/queue/notifications");
      },
      
      onStompError: (frame) => {
        console.error("Broker error:", frame.headers["message"]);
        console.error("Details:", frame.body);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, [onMessage]);
};
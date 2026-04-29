import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { useEffect } from "react";

export const  NotificationListener = () => {

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");

    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        client.subscribe("/topic/notifications", (message) => {
          const data = JSON.parse(message.body);
          alert(data.message); // simple notification
        });
      },
    });

    client.activate();

    return () => client.deactivate();
  }, []);

  return null;
}

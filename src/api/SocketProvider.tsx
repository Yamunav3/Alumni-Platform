// src/socket/SocketProvider.tsx
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

type SocketContextType = {
  client: Client | null;
  connected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  client: null,
  connected: false,
});

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const clientRef = useRef<Client | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("token");

    const client = new Client({
      webSocketFactory: () => new SockJS(`http://localhost:8080/ws`),
      connectHeaders: token ? { Authorization: `Bearer ${token}` } : {},
      reconnectDelay: 5000,
      debug: (str) => console.log(str),

      onConnect: () => {
        console.log("Shared socket connected");
        setConnected(true);
      },

      onDisconnect: () => {
        console.log("Shared socket disconnected");
        setConnected(false);
      },

      onStompError: (frame) => {
        console.error("Broker error:", frame.headers["message"]);
        console.error("Details:", frame.body);
      },

      onWebSocketClose: () => {
        setConnected(false);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ client: clientRef.current, connected }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
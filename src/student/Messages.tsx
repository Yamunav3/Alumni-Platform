import React, { useState, useRef, useEffect } from "react";
import {Client} from '@stomp/stompjs';
// import SockJS from 'sockjs-client';
import SockJS from "sockjs-client/dist/sockjs";

let stompClient:Client ;

const connectWebSocket = (onMessageReceived: (msg: any) => void) => {
  stompClient = new Client({
    webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
    reconnectDelay: 5000,

    onConnect: () => {
      console.log("Connected to WebSocket");

      // Subscribe to topic
      stompClient.subscribe("/topic/messages", (message) => {
        const body = JSON.parse(message.body);
        onMessageReceived(body);
      });
    },

    onStompError: (frame) => {
      console.error("Broker error:", frame);
    },
  });

  stompClient.activate();
};

const sendMessage = (message: any) => {
  if (!stompClient || !stompClient.connected) {
    console.log("WebSocket not connected");
    return;
  }

  stompClient.publish({
    destination: "/app/sendMessage",
    body: JSON.stringify(message),
  });
};


// import { connectWebSocket, sendMessage } from "../services/websocket";
type ChatMessage = {
  sender: string;
  content: string;
};



const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    connectWebSocket((message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
    if (stompClient) {
      stompClient.deactivate();
    }
  };
  }, []);

  const handleSend = () => {
    const msg: ChatMessage = {
  sender: "User",
  content: input,
};

    sendMessage(msg);
    setInput("");
  };

  return (
    <div>
      <h2>WebSocket Chat</h2>

      {messages.map((msg, index) => (
        <div key={index}>
          <b>{msg.sender}</b>: {msg.content}
        </div>
      ))}

     <input
  className="bg-gray-200 border border-black p-2 rounded-md text-black"
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default ChatComponent;
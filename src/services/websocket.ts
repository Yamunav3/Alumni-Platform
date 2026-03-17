import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs";

let stompClient: Client;

export const connectWebSocket = (onConnected: () => void) => {
  if (stompClient && stompClient.connected) return;

  stompClient = new Client({
    webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
    reconnectDelay: 5000,

    onConnect: () => {
      console.log("WebSocket Connected");
      onConnected();
    },

    onStompError: (frame) => {
      console.error("Broker error:", frame);
    },
  });

  stompClient.activate();
};

export const subscribe = (topic: string, callback: (msg: any) => void) => {
  if (!stompClient || !stompClient.connected) {
    console.log("WebSocket not connected yet");
    return;
  }

  stompClient.subscribe(topic, (message) => {
    const body = JSON.parse(message.body);
    callback(body);
  });
};

export const sendMessage = (destination: string, message: any) => {
  if (!stompClient || !stompClient.connected) {
    console.log("WebSocket not connected");
    return;
  }

  stompClient.publish({
    destination,
    body: JSON.stringify(message),
  });
};

export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.deactivate();
  }
};
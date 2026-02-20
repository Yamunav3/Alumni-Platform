let socket: WebSocket | null = null;

export const connectWebSocket = (
  onMessage: (message: string) => void
) => {
  socket = new WebSocket("ws://localhost:8080/ws");

  socket.onopen = () => {
    console.log("✅ WebSocket connected");
  };

  socket.onmessage = (event: MessageEvent) => {
    onMessage(event.data);
  };

  socket.onerror = (error) => {
    console.error("❌ WebSocket error", error);
  };

  socket.onclose = () => {
    console.log("🔌 WebSocket disconnected");
  };
};

export const sendWebSocketMessage = (message: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  }
};

export const disconnectWebSocket = () => {
  socket?.close();
};

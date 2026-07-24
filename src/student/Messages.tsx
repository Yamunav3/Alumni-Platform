// src/pages/StudentChat.tsx
import { useEffect, useRef, useState } from "react";
import { IMessage, StompSubscription } from "@stomp/stompjs";
import { useSocket } from "../api/SocketProvider";

type ChatMessage = {
  sender: string;
  content: string;
};

const avatarColors = [
  "bg-cyan-600", "bg-indigo-500", "bg-amber-500",
  "bg-pink-500", "bg-emerald-600", "bg-violet-500",
];

function getAvatarColor(name: string) {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const StudentChat = () => {
  const { client, connected } = useSocket();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const username = localStorage.getItem("username") || "Student";
  const role = localStorage.getItem("role");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!client || !connected || role !== "STUDENT") return;

    const subscription: StompSubscription = client.subscribe(
      "/topic/student-chat",
      (message: IMessage) => {
        const data: ChatMessage = JSON.parse(message.body);
        setMessages((prev) => [...prev, data]);
      }
    );

    return () => subscription.unsubscribe();
  }, [client, connected, role]);

  const sendMessage = () => {
    if (!client || !connected || !input.trim()) return;

    client.publish({
      destination: "/app/chat-send",
      body: JSON.stringify({ sender: username, content: input.trim() }),
    });

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (role !== "STUDENT") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="text-center space-y-2">
          <p className="text-2xl font-medium text-white">Access Denied</p>
          <p className="text-gray-400 text-sm">You must be a student to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="flex flex-col w-full max-w-2xl h-[600px] bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-700 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm leading-none">A Common Student Chat Group</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
                <span className="text-xs text-gray-400">
                  {connected ? "Connected" : "Connecting..."}
                </span>
              </div>
            </div>
          </div>

          {/* <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            Members
          </button> */}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-600 space-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h5" /><path d="M12 21l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3z" />
              </svg>
              <p className="text-sm">No messages yet. Start the conversation!</p>
            </div>
          ) : (
            messages.map((msg, index) => {
              const isSelf = msg.sender === username;
              return (
                <div
                  key={index}
                  className={`flex items-end gap-2 ${isSelf ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-semibold ${getAvatarColor(msg.sender)}`}>
                    {getInitials(msg.sender)}
                  </div>

                  {/* Bubble */}
                  <div className={`flex flex-col max-w-[70%] ${isSelf ? "items-end" : "items-start"}`}>
                    <p className="text-[11px] font-medium text-gray-500 mb-1 px-1">
                      {isSelf ? "You" : msg.sender}
                    </p>
                    <div
                      className={`px-4 py-2.5 text-sm leading-relaxed ${
                        isSelf
                          ? "bg-cyan-600 text-white rounded-[18px_18px_4px_18px]"
                          : "bg-gray-800 text-gray-100 border border-gray-700 rounded-[18px_18px_18px_4px]"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-800 bg-gray-900">
          {/* <button
            className="text-gray-500 hover:text-gray-300 transition-colors p-1"
            aria-label="Attach file"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
            </svg>
          </button> */}

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-gray-100 placeholder-gray-500 text-sm rounded-full px-4 py-2.5 border border-gray-700 outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all"
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim() || !connected}
            className="w-10 h-10 rounded-full bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all active:scale-95 flex-shrink-0"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15.592 3.12a1 1 0 0 1 .17 1.044l-7.342 17.83A1 1 0 0 1 7.004 22l-.003 -.002a1 1 0 0 1 -.79 -1.02l.66 -7.63l-4.51 -.9a1 1 0 0 1 -.23 -1.878l17.85 -7.922A1 1 0 0 1 21 4a1 1 0 0 1 -1 1l-.008 -.001l-4.401 .001z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default StudentChat;
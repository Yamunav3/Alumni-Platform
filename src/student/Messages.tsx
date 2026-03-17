import React, { useState, useEffect } from "react";
import { connectWebSocket, subscribe, sendMessage } from "@/services/websocket";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type ChatMessage = {
  sender: string;
  content: string;
};

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
const navigation = useNavigate();
 useEffect(() => {

  connectWebSocket(() => {

    subscribe("/topic/messages", (message) => {
      setMessages((prev) => [...prev, message]);
    });

  });

}, []);

  const handleSend = () => {
    const msg: ChatMessage = {
      sender: "User",
      content: input,
    };

    sendMessage("/app/sendMessage", msg);
    setInput("");
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-[#f2f0eb] overflow-hidden px-4">
      <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full flex items-center justify-center z-20 px-4">
        <div className="w-full max-w-[760px] text-center border-y border-slate-300/80 py-2">
          <span className="select-none text-[16px] md:text-[22px] font-semibold uppercase tracking-[0.35em] text-slate-400/90">
            Send message to ALUMNI
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] h-[620px] bg-[#fffdf9] shadow-xl rounded-xl border border-slate-300/70 flex flex-col overflow-hidden mt-14 md:mt-16">

        {/* Header */}
        <div className="bg-slate-800 flex justify-between items-center text-slate-50 text-lg font-semibold px-4 py-3 border-b border-slate-700">
         <span className="tracking-wide">Messages</span> 
          <span className="bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-right hover:bg-white transition">
            <button onClick={()=>navigation("/student/home")}  
            className="flex items-center space-x-2 font-medium"
                  ><ArrowLeft />Back</button></span>
          
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#faf8f3]">
          {messages.map((msg, index) => (
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">{msg.sender}</span>
              <div className="bg-white border border-slate-200 px-3 py-2 rounded-md w-fit max-w-[85%] shadow-sm text-slate-800">
                {msg.content}
              </div>
            </div>
         ))}

        </div>

        {/* Input Section */}
        <div className="p-3 border-t border-slate-200 bg-[#fdfcf8] flex gap-2">
          <input
            className="flex-1 border border-slate-300 rounded-md px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-500"
            value={input}
            placeholder="Type a message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=>{
               if( e.key=="Enter" && input.trim()!==""){
                handleSend();
               }
            }}
          />

          <button
            onClick={handleSend}
            className="bg-slate-800 text-white px-5 py-2 rounded-md hover:bg-slate-900 transition shadow-sm"        
          >
            Send
          </button>
        </div>

      </div>

    </div>
  );
  
};

export default ChatComponent;

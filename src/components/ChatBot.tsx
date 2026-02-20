
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  X, Send, Bot, Minimize2, Maximize2, Sparkles
} from "lucide-react";
//  Keeping your original imports
import astraLogo from "@/assets/image.png"; 
import chatbot from "@/assets/image.png"; 

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Hide welcome bubble after 5 seconds or when opened
  useEffect(() => {
    if (isOpen) {
      setShowWelcomeBubble(false);
    } else {
      const timer = setTimeout(() => setShowWelcomeBubble(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

// const getBotResponse = (text: string) => {
//     const lower = text.toLowerCase();
//     if (lower.includes("job") || lower.includes("internship")) return "We have 15+ new opportunities listed in the Career Portal. Would you like to see them?";
//     if (lower.includes("mentor")) return "You can connect with Alumni mentors via the 'Success Stories' tab or the 'Find a Mentor' section.";
//     return "I can help you navigate the portal, find jobs, or connect with alumni. What do you need?";
//   };


const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

async function getGeminiResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userMessage }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini raw response:", data);

    if (!response.ok) {
      return data.error?.message || "Gemini API error";
    }

    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error(err);
    return "Network error";
  }
}




  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMsg: Message = { id: Date.now(), text: message, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, newMsg]);
    setMessage("");
    setIsTyping(true);

    // Simulate response
   getGeminiResponse(newMsg.text).then((reply) => {
  setMessages(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      text: reply,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  
  setIsTyping(false);
});

};

  


  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* --- Chat Window --- */}
      <div 
        className={`transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen 
            ? isMinimized 
              ? "w-72 opacity-100 scale-100" 
              : "w-[360px] h-[500px] opacity-100 scale-100" 
            : "w-0 h-0 opacity-0 scale-0 overflow-hidden"
        }`}
      >
        <Card className={`border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-xl ring-1 ring-black/5 flex flex-col transition-all duration-300 ${isMinimized ? "rounded-2xl" : "rounded-3xl h-full"}`}>
          
          {/* Header */}
          <CardHeader 
            className="p-4 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white cursor-pointer"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-9 w-9 border-2 border-white/20 shadow-sm">
                    <AvatarImage src={astraLogo} />
                    <AvatarFallback className="bg-white/20 text-white"><Bot size={18} /></AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-indigo-600 rounded-full"></span>
                </div>
                <div>
                  <CardTitle className="text-sm font-bold">Assistant</CardTitle>
                  {!isMinimized && <p className="text-[10px] text-indigo-100 opacity-90">Online & Ready to Help</p>}
                </div>
              </div>
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" className="h-6 w-6 text-white/80 hover:text-white hover:bg-white/10" onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}>
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </Button>
                <Button size="icon" variant="ghost" className="h-6 w-6 text-white/80 hover:text-white hover:bg-red-500/20" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                  <X size={14} />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Body (Only show if not minimized) */}
          {!isMinimized && (
            <>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-gray-200">
                {messages.length === 0 && (
                  <div className="text-center py-8 opacity-60">
                    <div className="bg-indigo-100 p-3 rounded-full w-fit mx-auto mb-3">
                      <Sparkles className="h-6 w-6 text-indigo-500" />
                    </div>
                    <p className="text-sm text-gray-500">Hi! Ask me anything about <br/> events, jobs, or alumni.</p>
                  </div>
                )}
                
                {messages.map((msg, index) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-tr-sm' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Suggestions */}
              {messages.length < 2 && (
                <div className="px-4 py-2 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
                  {["Find Mentor", "Jobs", "Events", "Support"].map(action => (
                    <button 
                      key={action} 
                      onClick={() => { setMessage(action); setTimeout(handleSendMessage, 100); }} 
                      className="text-[10px] font-medium bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-indigo-100 transition-colors border border-indigo-100"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-3 bg-white border-t border-slate-100">
                <div className="relative flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                  <Input 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..." 
                    className="border-0 bg-transparent shadow-none focus-visible:ring-0 text-sm h-9"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSendMessage}
                    className={`h-8 w-8 rounded-full transition-all ${message.trim() ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-300'}`}
                    disabled={!message.trim()}
                  >
                    <Send size={14} className="ml-0.5" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>

      {/* --- Floating Trigger Button (With Restored Effect) --- */}
      <div className="relative group flex items-center justify-center">
        
        {/* Welcome Bubble */}
        {!isOpen && showWelcomeBubble && (
          <div className="absolute bottom-full right-0 mb-3 w-48 bg-white p-3 rounded-2xl rounded-br-sm shadow-xl border border-gray-100 animate-bounce-in origin-bottom-right z-10">
            <div className="text-xs font-medium text-gray-700">
              👋 Need help? I'm here!
            </div>
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
          </div>
        )}

        {/* ✅ THE GLOWING EFFECT IS BACK */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 blur-md animate-pulse"></span>
        )}

        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative h-16 w-16 rounded-full p-0 overflow-hidden shadow-2xl transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-110'}`}
        >
          {/* ✅ Original Chatbot Image Preserved */}
          <img 
            src={chatbot} 
            alt="Asthra Chatbot" 
            className="h-full w-full object-cover scale-110" 
          />
        </Button>

        {/* Close Button when Open */}
        <Button
          onClick={() => setIsOpen(false)}
          className={`h-14 w-14 rounded-full bg-slate-900 text-white absolute bottom-1 right-1 shadow-xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} flex items-center justify-center`}
        >
          <X size={24} />
        </Button>
      </div>

    </div>
  );
};

export default ChatBot;
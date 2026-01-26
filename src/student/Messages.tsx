

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import StudentLayout from "./StudentLayout";
import { 
  Search, Send, MoreVertical, Phone, Video, Image, Paperclip, 
  Smile, ArrowLeft, CheckCheck, Circle, Clock, MoreHorizontal
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

// --- MOCK DATA ---
const INITIAL_CONVERSATIONS = [
  {
    id: 1,
    name: "Sarah Connor",
    role: "Senior Engineer @ Google",
    avatar: "https://github.com/shadcn.png",
    status: "online",
    lastMessage: "Sure! Let's schedule a mock interview for Friday.",
    time: "10:30 AM",
    unread: 2,
    messages: [
      { id: 1, sender: "them", text: "Hi! I saw your profile and noticed you're interested in AI.", time: "10:00 AM" },
      { id: 2, sender: "me", text: "Yes, Sarah! I'm currently working on a neural network project.", time: "10:05 AM" },
      { id: 3, sender: "them", text: "That sounds impressive. Do you need any help with the architecture?", time: "10:15 AM" },
      { id: 4, sender: "me", text: "Actually, I was hoping to get some feedback on my resume first.", time: "10:20 AM" },
      { id: 5, sender: "them", text: "Sure! Let's schedule a mock interview for Friday.", time: "10:30 AM" },
    ]
  },
  {
    id: 2,
    name: "Tony Stark",
    role: "CTO @ Stark Ind.",
    avatar: "https://github.com/shadcn.png",
    status: "offline",
    lastMessage: "The internship applications close tomorrow.",
    time: "Yesterday",
    unread: 0,
    messages: [
      { id: 1, sender: "me", text: "Mr. Stark, are there any openings for interns?", time: "Yesterday" },
      { id: 2, sender: "them", text: "The internship applications close tomorrow. Make sure to apply on the portal.", time: "Yesterday" },
    ]
  },
  {
    id: 3,
    name: "Bruce Wayne",
    role: "CEO @ Wayne Ent.",
    avatar: "https://github.com/shadcn.png",
    status: "online",
    lastMessage: "Focus on your data structures.",
    time: "2 days ago",
    unread: 0,
    messages: [
      { id: 1, sender: "them", text: "Focus on your data structures.", time: "2 days ago" }
    ]
  },
];

export default function Messages() {
  const [searchParams] = useSearchParams();
  const userIdFromUrl = searchParams.get("user");

  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeChatId, setActiveChatId] = useState<number | null>(
    userIdFromUrl ? parseInt(userIdFromUrl) : null
  );
  const [messageInput, setMessageInput] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  // Sync URL ID with Active Chat
  useEffect(() => {
    if (userIdFromUrl) {
      const id = parseInt(userIdFromUrl);
      if (conversations.find(c => c.id === id)) {
        setActiveChatId(id);
      }
    }
  }, [userIdFromUrl, conversations]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeChat = conversations.find((c) => c.id === activeChatId);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages, activeChatId]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!messageInput.trim() || !activeChatId) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversations(prev => prev.map(conv => {
      if (conv.id === activeChatId) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: messageInput,
          time: "Just now"
        };
      }
      return conv;
    }));

    setMessageInput("");
  };

  return (
    <StudentLayout>
      <div className="h-[calc(100vh-64px)] w-full max-w-7xl mx-auto p-4 md:p-6 flex gap-6 overflow-hidden">
        
        {/* --- LEFT SIDEBAR: CONVERSATION LIST --- */}
        <Card className={`
          flex-col h-full border-none shadow-2xl bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden
          ${activeChatId && isMobileView ? 'hidden' : 'flex'} 
          w-full md:w-[350px] lg:w-[400px] shrink-0
        `}>
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 bg-white/50">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Messages</h1>
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-600 transition-colors" />
              <Input 
                placeholder="Search conversations..." 
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-purple-100 transition-all rounded-xl h-11"
              />
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin scrollbar-thumb-gray-200">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChatId(chat.id)}
                className={`
                  flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 relative group
                  ${activeChatId === chat.id 
                    ? "bg-purple-600 shadow-md transform scale-[1.02]" 
                    : "hover:bg-white hover:shadow-sm"
                  }
                `}
              >
                <div className="relative">
                  <Avatar className={`h-12 w-12 border-2 ${activeChatId === chat.id ? 'border-purple-400' : 'border-white'} shadow-sm`}>
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {chat.status === 'online' && (
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-white shadow-sm"></span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className={`font-semibold truncate text-sm ${activeChatId === chat.id ? 'text-white' : 'text-gray-900'}`}>
                      {chat.name}
                    </h4>
                    <span className={`text-[10px] whitespace-nowrap ${activeChatId === chat.id ? 'text-purple-200' : 'text-gray-400'}`}>
                      {chat.time}
                    </span>
                  </div>
                  <p className={`text-xs truncate ${activeChatId === chat.id ? 'text-purple-100' : 'text-gray-500 group-hover:text-gray-700'}`}>
                    {chat.lastMessage}
                  </p>
                </div>

                {chat.unread > 0 && activeChatId !== chat.id && (
                  <Badge className="bg-red-500 hover:bg-red-600 text-white h-5 min-w-[20px] flex items-center justify-center rounded-full p-0 shadow-sm animate-pulse">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* --- RIGHT SIDE: CHAT WINDOW --- */}
        <Card className={`
          flex-col flex-1 h-full border-none shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden relative
          ${!activeChatId && isMobileView ? 'hidden' : 'flex'}
        `}>
          
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-md z-10 shadow-sm">
                <div className="flex items-center gap-4">
                  {isMobileView && (
                    <Button variant="ghost" size="icon" onClick={() => setActiveChatId(null)} className="hover:bg-purple-50 text-purple-600">
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                  )}
                  <Avatar className="h-11 w-11 border-2 border-white shadow-sm">
                    <AvatarImage src={activeChat.avatar} />
                    <AvatarFallback>{activeChat.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{activeChat.name}</h3>
                    <span className="text-xs text-purple-600 font-medium flex items-center gap-1">
                      {activeChat.role} {activeChat.status === 'online' && <Circle className="h-2 w-2 fill-green-500 text-green-500 ml-1" />}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="rounded-full hover:bg-purple-50 text-gray-500 hover:text-purple-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full hover:bg-purple-50 text-gray-500 hover:text-purple-600 transition-colors">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full hover:bg-gray-100 text-gray-500">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scrollbar-thin scrollbar-thumb-gray-300"
              >
                {/* Date Divider (Mock) */}
                <div className="flex justify-center">
                  <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Today
                  </span>
                </div>

                {activeChat.messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[75%] md:max-w-[60%] flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                      <div className={`
                        p-4 rounded-2xl text-sm leading-relaxed shadow-sm relative group
                        ${msg.sender === 'me' 
                          ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-br-none' 
                          : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                        }
                      `}>
                        {msg.text}
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-1">
                        <span className="text-[10px] text-gray-400 font-medium">{msg.time}</span>
                        {msg.sender === 'me' && <CheckCheck className="h-3 w-3 text-purple-600" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-gray-100">
                <form 
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-3 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-100 transition-all duration-300"
                >
                  <div className="flex gap-1 ml-1">
                    <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-full h-9 w-9">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-full h-9 w-9 hidden sm:flex">
                      <Image className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <Input 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..." 
                    className="flex-1 bg-transparent border-none shadow-none focus-visible:ring-0 h-10 text-gray-800 placeholder:text-gray-400"
                  />
                  
                  <Button type="button" variant="ghost" size="icon" className="text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-full h-9 w-9">
                    <Smile className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    type="submit" 
                    size="icon" 
                    className={`h-10 w-10 rounded-full transition-all duration-300 shadow-md ${
                      messageInput.trim() 
                        ? 'bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!messageInput.trim()}
                  >
                    <Send className="h-5 w-5 ml-0.5" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            // Empty State
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50/30">
              <div className="w-28 h-28 bg-purple-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Send className="h-12 w-12 text-purple-600 ml-1" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Messages</h2>
              <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
                Connect with Alumni mentors, ask for guidance, and build your network.
              </p>
              <div className="mt-8">
                <Button className="rounded-full bg-slate-900 text-white px-8 py-6 text-lg hover:bg-slate-800 shadow-xl">
                  Start a Conversation
                </Button>
              </div>
            </div>
          )}
        </Card>

      </div>
    </StudentLayout>
  );
}
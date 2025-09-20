
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from "lucide-react";
import astraLogo from "@/assets/image.png"; // adjust path
import chatbot from "@/assets/chatBot1.jpg";
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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm Asthra Assistant. I can help you with mentorships, internships, events, and more. What would you like to explore today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const quickActions = [
    "Find a mentor",
    "Search internships",
    "Upcoming webinars",
    "How to donate",
    "Contact support"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(message),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('mentor')) {
      return "🌟 We have 250+ alumni mentors! Browse them by expertise, company, or industry. Want me to show you the most popular ones?";
    } else if (lowercaseMessage.includes('internship')) {
      return "🚀 There are 89 internships live now! Would you like me to filter by location, duration, or industry?";
    } else if (lowercaseMessage.includes('webinar') || lowercaseMessage.includes('event')) {
      return "🎤 We have 45 upcoming webinars, including *Advanced React Patterns* & *Building Your Tech Career*. Do you want the full schedule?";
    } else if (lowercaseMessage.includes('donation') || lowercaseMessage.includes('donate')) {
      return "🙏 Thank you for supporting students! Donations fund scholarships & mentorship programs. Would you like details about our campaigns?";
    } else if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return "👋 Hello! Welcome to Asthra. I’m here to connect you with the right resources. What’s your first priority?";
    } else {
      return "🤖 I can help with mentors, internships, webinars, donations, or navigation. Can you tell me more specifically?";
    }
  };

  const handleQuickAction = (action: string) => {
    setMessage(action);
    handleSendMessage();
  };

  if (!isOpen) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(true)}
        className="h-16 w-16 rounded-full p-0 overflow-hidden shadow-xl 
                   hover:scale-110 transition-transform duration-300"
        size="icon"
      >
        {/* Full circle occupied by image */}
        <img 
          // src={chatbot} 
          src={astraLogo}
          alt="Asthra Chatbot" 
          className="h-full w-full object-cover rounded-full" 
        />
      </Button>
    </div>
  );
}

  // Chatbot Window
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-2xl border-0 bg-card/95 backdrop-blur-md transition-all duration-500 ${
        isMinimized ? 'h-16' : 'h-[28rem]'
      }`}>
        <CardHeader 
          className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 text-white"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={astraLogo} />
              <AvatarFallback>
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm">Asthra Assistant</CardTitle>
              <CardDescription className="text-xs text-white/80">Always here to help</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(!isMinimized);
              }}
            >
              {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[25rem]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-3 py-2 border-t bg-white">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickActions.map((action) => (
                  <Badge
                    key={action}
                    variant="secondary"
                    className="cursor-pointer hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white text-xs"
                    onClick={() => handleQuickAction(action)}
                  >
                    {action}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t bg-white flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-8 text-sm"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="h-8 w-8 p-0 bg-gradient-to-r from-teal-500 to-blue-600 hover:scale-105 transition"
              >
                <Send className="h-3 w-3 text-white" />
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;










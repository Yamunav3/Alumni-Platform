
// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { 
// //   MessageCircle, 
// //   X, 
// //   Send, 
// //   Bot, 
// //   User,
// //   Minimize2,
// //   Maximize2
// // } from "lucide-react";
// // import astraLogo from "@/assets/image.png"; // adjust path
// // // import chatbot from "@/assets/chatBot1.jpg";
// // import chatbot from "@/assets/asthra1.jpg";
// // interface Message {
// //   id: number;
// //   text: string;
// //   sender: 'user' | 'bot';
// //   timestamp: Date;
// // }

// // const ChatBot = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isMinimized, setIsMinimized] = useState(false);
// //   const [message, setMessage] = useState("");
// //   const [messages, setMessages] = useState<Message[]>([
// //     {
// //       id: 1,
// //       text: "👋 Hi! I'm Asthra Assistant. I can help you with mentorships, internships, events, and more. What would you like to explore today?",
// //       sender: 'bot',
// //       timestamp: new Date()
// //     }
// //   ]);

// //   const quickActions = [
// //     "Find a mentor",
// //     "Search internships",
// //     "Upcoming webinars",
// //     "How to donate",
// //     "Contact support"
// //   ];

// //   const handleSendMessage = () => {
// //     if (!message.trim()) return;

// //     const userMessage: Message = {
// //       id: messages.length + 1,
// //       text: message,
// //       sender: 'user',
// //       timestamp: new Date()
// //     };

// //     setMessages(prev => [...prev, userMessage]);
// //     setMessage("");

// //     // Simulate bot response
// //     setTimeout(() => {
// //       const botResponse: Message = {
// //         id: messages.length + 2,
// //         text: getBotResponse(message),
// //         sender: 'bot',
// //         timestamp: new Date()
// //       };
// //       setMessages(prev => [...prev, botResponse]);
// //     }, 1000);
// //   };

// //   const getBotResponse = (userMessage: string): string => {
// //     const lowercaseMessage = userMessage.toLowerCase();
    
// //     if (lowercaseMessage.includes('mentor')) {
// //       return "🌟 We have 250+ alumni mentors! Browse them by expertise, company, or industry. Want me to show you the most popular ones?";
// //     } else if (lowercaseMessage.includes('internship')) {
// //       return "🚀 There are 89 internships live now! Would you like me to filter by location, duration, or industry?";
// //     } else if (lowercaseMessage.includes('webinar') || lowercaseMessage.includes('event')) {
// //       return "🎤 We have 45 upcoming webinars, including *Advanced React Patterns* & *Building Your Tech Career*. Do you want the full schedule?";
// //     } else if (lowercaseMessage.includes('donation') || lowercaseMessage.includes('donate')) {
// //       return "🙏 Thank you for supporting students! Donations fund scholarships & mentorship programs. Would you like details about our campaigns?";
// //     } else if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
// //       return "👋 Hello! Welcome to Asthra. I’m here to connect you with the right resources. What’s your first priority?";
// //     } else {
// //       return "🤖 I can help with mentors, internships, webinars, donations, or navigation. Can you tell me more specifically?";
// //     }
// //   };

// //   const handleQuickAction = (action: string) => {
// //     setMessage(action);
// //     handleSendMessage();
// //   };

// //   if (!isOpen) {
// //   return (
// //     <div className="fixed bottom-6 right-6 z-50">
// //       <Button
// //         onClick={() => setIsOpen(true)}
// //         className="h-16 w-16 rounded-full p-0 overflow-hidden shadow-xl 
// //                    hover:scale-110 transition-transform duration-300"
// //         size="icon"
// //       >
// //         {/* Full circle occupied by image */}
// //         <img 
// //           src={chatbot} 
// //           // src={astraLogo}
// //           alt="Asthra Chatbot" 
// //           className="h-full w-full object-cover rounded-full" 
// //         />
// //       </Button>
// //     </div>
// //   );
// // }

// //   // Chatbot Window
// //   return (
// //     <div className="fixed bottom-6 right-6 z-50">
// //       <Card className={`w-80 shadow-2xl border-0 bg-card/95 backdrop-blur-md transition-all duration-500 ${
// //         isMinimized ? 'h-16' : 'h-[28rem]'
// //       }`}>
// //         <CardHeader 
// //           className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 text-white"
// //           onClick={() => setIsMinimized(!isMinimized)}
// //         >
// //           <div className="flex items-center space-x-2">
// //             <Avatar className="h-8 w-8">
// //               <AvatarImage src={astraLogo} />
// //               <AvatarFallback>
// //                 <Bot className="h-4 w-4" />
// //               </AvatarFallback>
// //             </Avatar>
// //             <div>
// //               <CardTitle className="text-sm">Asthra Assistant</CardTitle>
// //               <CardDescription className="text-xs text-white/80">Always here to help</CardDescription>
// //             </div>
// //           </div>
// //           <div className="flex items-center space-x-1">
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="h-6 w-6 text-white hover:bg-white/20"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 setIsMinimized(!isMinimized);
// //               }}
// //             >
// //               {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
// //             </Button>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="h-6 w-6 text-white hover:bg-white/20"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 setIsOpen(false);
// //               }}
// //             >
// //               <X className="h-3 w-3" />
// //             </Button>
// //           </div>
// //         </CardHeader>

// //         {!isMinimized && (
// //           <CardContent className="p-0 flex flex-col h-[25rem]">
// //             {/* Messages */}
// //             <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
// //               {messages.map((msg) => (
// //                 <div
// //                   key={msg.id}
// //                   className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
// //                 >
// //                   <div
// //                     className={`max-w-[80%] p-2 rounded-lg text-sm ${
// //                       msg.sender === 'user'
// //                         ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
// //                         : 'bg-gray-200 text-gray-900'
// //                     }`}
// //                   >
// //                     <p>{msg.text}</p>
// //                     <p className="text-xs opacity-70 mt-1">
// //                       {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Quick Actions */}
// //             <div className="px-3 py-2 border-t bg-white">
// //               <div className="flex flex-wrap gap-1 mb-2">
// //                 {quickActions.map((action) => (
// //                   <Badge
// //                     key={action}
// //                     variant="secondary"
// //                     className="cursor-pointer hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white text-xs"
// //                     onClick={() => handleQuickAction(action)}
// //                   >
// //                     {action}
// //                   </Badge>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Input */}
// //             <div className="p-3 border-t bg-white flex space-x-2">
// //               <Input
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 placeholder="Type your message..."
// //                 className="flex-1 h-8 text-sm"
// //                 onKeyPress={(e) => {
// //                   if (e.key === 'Enter') {
// //                     handleSendMessage();
// //                   }
// //                 }}
// //               />
// //               <Button
// //                 size="sm"
// //                 onClick={handleSendMessage}
// //                 disabled={!message.trim()}
// //                 className="h-8 w-8 p-0 bg-gradient-to-r from-teal-500 to-blue-600 hover:scale-105 transition"
// //               >
// //                 <Send className="h-3 w-3 text-white" />
// //               </Button>
// //             </div>
// //           </CardContent>
// //         )}
// //       </Card>
// //     </div>
// //   );
// // };

// // export default ChatBot;


//correecct

// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { 
//   X, 
//   Send, 
//   Bot,
//   Minimize2,
//   Maximize2
// } from "lucide-react";
// import astraLogo from "@/assets/image.png";
// import chatbot from "@/assets/image.png";

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'bot';
//   timestamp: Date;
// }

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [message, setMessage] = useState("");
//   const [showWelcomePopup, setShowWelcomePopup] = useState(false);
//   const [hasLanded, setHasLanded] = useState(false);
//   const [isLanding, setIsLanding] = useState(true);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const quickActions = [
//     "Find a mentor",
//     "Search internships",
//     "Upcoming webinars",
//     "How to donate",
//     "Contact support"
//   ];

//   // Initialize landing animation when component mounts
//   useEffect(() => {
//     // Start landing animation
//     const landingTimer = setTimeout(() => {
//       setIsLanding(false);
//       setHasLanded(true);
      
//       // Show welcome popup after landing
//       const popupTimer = setTimeout(() => {
//         setShowWelcomePopup(true);
        
//         // Auto-close popup after 4 seconds
//         const closeTimer = setTimeout(() => {
//           setShowWelcomePopup(false);
//         }, 4000);
        
//         return () => clearTimeout(closeTimer);
//       }, 1000);
      
//       return () => clearTimeout(popupTimer);
//     }, 500);

//     return () => clearTimeout(landingTimer);
//   }, []);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     const userMessage: Message = {
//       id: messages.length + 1,
//       text: message,
//       sender: 'user',
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setMessage("");

//     // Simulate bot response
//     setTimeout(() => {
//       const botResponse: Message = {
//         id: messages.length + 2,
//         text: getBotResponse(message),
//         sender: 'bot',
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, botResponse]);
//     }, 1000);
//   };

//   const getBotResponse = (userMessage: string): string => {
//     const lowercaseMessage = userMessage.toLowerCase();
    
//     if (lowercaseMessage.includes('mentor')) {
//       return "🌟 We have 250+ alumni mentors! Browse them by expertise, company, or industry. Want me to show you the most popular ones?";
//     } else if (lowercaseMessage.includes('internship')) {
//       return "🚀 There are 89 internships live now! Would you like me to filter by location, duration, or industry?";
//     } else if (lowercaseMessage.includes('webinar') || lowercaseMessage.includes('event')) {
//       return "🎤 We have 45 upcoming webinars, including *Advanced React Patterns* & *Building Your Tech Career*. Do you want the full schedule?";
//     } else if (lowercaseMessage.includes('donation') || lowercaseMessage.includes('donate')) {
//       return "🙏 Thank you for supporting students! Donations fund scholarships & mentorship programs. Would you like details about our campaigns?";
//     } else if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
//       return "👋 Hello! Welcome to Asthra. I'm here to connect you with the right resources. What's your first priority?";
//     } else {
//       return "🤖 I can help with mentors, internships, webinars, donations, or navigation. Can you tell me more specifically?";
//     }
//   };

//   const handleQuickAction = (action: string) => {
//     setMessage(action);
//     // Add a small delay to show the action being set
//     setTimeout(() => {
//       handleSendMessage();
//     }, 300);
//   };

//   const handleOpenChat = () => {
//     setIsOpen(true);
//     setShowWelcomePopup(false);
    
//     // Add welcome message when opening chat for the first time
//     if (messages.length === 0) {
//       setTimeout(() => {
//         const welcomeMessage: Message = {
//           id: 1,
//           text: "👋 Hello! I'm Asthra Assistant. I can help you with mentorships, internships, events, and more. What would you like to explore today?",
//           sender: 'bot',
//           timestamp: new Date()
//         };
//         setMessages([welcomeMessage]);
//       }, 500);
//     }
//   };

//   const handleCloseChat = () => {
//     setIsOpen(false);
//     setIsMinimized(false);
//   };

//   if (!isOpen) {
//     return (
//       <div 
//         className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ${
//           isLanding 
//             ? 'animate-landing-drop' 
//             : hasLanded 
//               ? 'animate-soft-bounce' 
//               : ''
//         }`}
//         style={{
//           transform: isLanding ? 'translateY(-100vh)' : 'translateY(0)'
//         }}
//       >
//         {/* Welcome Popup */}
//         {showWelcomePopup && (
//           <div className="absolute bottom-full right-0 mb-4 animate-popup-float">
//             <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-2xl relative max-w-xs">
//               <div className="flex items-center space-x-3">
//                 <div className="animate-wiggle">👋</div>
//                 <div>
//                   <div className="text-sm font-bold">Hello! I'm Asthra Assistant</div>
//                   <div className="text-xs opacity-90">How can I help you today?</div>
//                 </div>
//               </div>
//               {/* Arrow pointing to chatbot */}
//               <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-teal-500"></div>
              
//               {/* Close button for popup */}
//               <button 
//                 onClick={() => setShowWelcomePopup(false)}
//                 className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
//               >
//                 <X className="h-3 w-3 text-teal-600" />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Chatbot Icon */}
//         <Button
//           onClick={handleOpenChat}
//           className="h-16 w-16 rounded-full p-0 overflow-hidden shadow-xl 
//                      hover:scale-110 transition-transform duration-300 relative animate-pulse-glow"
//           size="icon"
//         >
//           <img 
//             src={chatbot} 
//             alt="Asthra Chatbot" 
//             className="h-full w-full object-cover rounded-full" 
//           />
          
//           {/* Pulsing effect */}
//           <div className="absolute inset-0 rounded-full border-2 border-teal-400 animate-ping opacity-75"></div>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed bottom-6 right-6 z-50 animate-chat-window-open">
//       <Card className={`w-80 shadow-2xl border-0 bg-card/95 backdrop-blur-md transition-all duration-300 ${
//         isMinimized ? 'h-16' : 'h-[28rem]'
//       }`}>
//         <CardHeader 
//           className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 text-white"
//           onClick={() => setIsMinimized(!isMinimized)}
//         >
//           <div className="flex items-center space-x-2">
//             <Avatar className="h-8 w-8">
//               <AvatarImage src={astraLogo} />
//               <AvatarFallback>
//                 <Bot className="h-4 w-4" />
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <CardTitle className="text-sm">Asthra Assistant</CardTitle>
//               <CardDescription className="text-xs text-white/80">Always here to help</CardDescription>
//             </div>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-6 w-6 text-white hover:bg-white/20 transition-all duration-200"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMinimized(!isMinimized);
//               }}
//             >
//               {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-6 w-6 text-white hover:bg-white/20 transition-all duration-200"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleCloseChat();
//               }}
//             >
//               <X className="h-3 w-3" />
//             </Button>
//           </div>
//         </CardHeader>

//         {!isMinimized && (
//           <CardContent className="p-0 flex flex-col h-[25rem]">
//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
//               {messages.map((msg, index) => (
//                 <div
//                   key={msg.id}
//                   className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div
//                     className={`max-w-[80%] p-2 rounded-lg text-sm transform transition-all duration-200 hover:scale-105 ${
//                       msg.sender === 'user'
//                         ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
//                         : 'bg-gray-200 text-gray-900 shadow-md'
//                     }`}
//                   >
//                     <p>{msg.text}</p>
//                     <p className="text-xs opacity-70 mt-1">
//                       {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Quick Actions */}
//             {messages.length > 0 && (
//               <div className="px-3 py-2 border-t bg-white">
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {quickActions.map((action, index) => (
//                     <div
//                       key={action}
//                       className="animate-quick-action-in"
//                       style={{ animationDelay: `${index * 0.05}s` }}
//                     >
//                       <Badge
//                         variant="secondary"
//                         className="cursor-pointer hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white text-xs transition-all duration-200 transform hover:scale-105"
//                         onClick={() => handleQuickAction(action)}
//                       >
//                         {action}
//                       </Badge>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Input */}
//             {messages.length > 0 && (
//               <div className="p-3 border-t bg-white flex space-x-2">
//                 <Input
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 h-8 text-sm transition-all duration-200 focus:scale-105"
//                   onKeyPress={(e) => {
//                     if (e.key === 'Enter') {
//                       handleSendMessage();
//                     }
//                   }}
//                 />
//                 <Button
//                   size="sm"
//                   onClick={handleSendMessage}
//                   disabled={!message.trim()}
//                   className="h-8 w-8 p-0 bg-gradient-to-r from-teal-500 to-blue-600 hover:scale-105 transition-all duration-200 transform"
//                 >
//                   <Send className="h-3 w-3 text-white" />
//                 </Button>
//               </div>
//             )}
//           </CardContent>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default ChatBot;

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  X, 
  Send, 
  Bot,
  Minimize2,
  Maximize2
} from "lucide-react";
import astraLogo from "@/assets/image.png";
import chatbot from "@/assets/image.png";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface PopupMessage {
  id: number;
  text: string;
  type: 'greeting' | 'promo' | 'help' | 'feature';
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const [isLanding, setIsLanding] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activePopups, setActivePopups] = useState<PopupMessage[]>([]);
  const [chatPosition, setChatPosition] = useState({ bottom: 6, right: 6 });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const popupIntervalRef = useRef<NodeJS.Timeout>();

  const quickActions = [
    "Find a mentor",
    "Search internships",
    "Upcoming webinars",
    "How to donate",
    "Contact support"
  ];

  const popupMessages: PopupMessage[] = [
    { id: 1, text: "👋 Hiiii", type: 'greeting' },
    { id: 2, text: "how can i help you", type: 'promo' },
    { id: 3, text: " 89 internships available! Click to explore opportunities", type: 'promo' },
    { id: 4, text: " Join our next webinar on career development!", type: 'feature' },
    { id: 5, text: " I can help with mentorships, internships, events and more!", type: 'help' },
    { id: 6, text: " Looking for something specific? Just ask me!", type: 'help' },
    { id: 7, text: " Get personalized guidance from industry experts", type: 'feature' },
    { id: 8, text: " Don't hesitate to ask me anything about Asthra!", type: 'greeting' }
  ];

  // Initialize landing animation when component mounts
  useEffect(() => {
    // Start landing animation from right side
    const landingTimer = setTimeout(() => {
      setIsLanding(false);
      setHasLanded(true);
      
      // Show welcome popup after landing
      const popupTimer = setTimeout(() => {
        setShowWelcomePopup(true);
        
        // Auto-close popup after 4 seconds
        const closeTimer = setTimeout(() => {
          setShowWelcomePopup(false);
        }, 4000);
        
        return () => clearTimeout(closeTimer);
      }, 1000);
      
      return () => clearTimeout(popupTimer);
    }, 500);

    return () => clearTimeout(landingTimer);
  }, []);

  // Start continuous popups every 20 seconds
  useEffect(() => {
    if (!isOpen && hasLanded) {
      // Start immediately and then every 20 seconds
      const showRandomPopup = () => {
        const randomMessage = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        const newPopup = { ...randomMessage, id: Date.now() };
        
        setActivePopups(prev => {
          // Limit to 3 popups maximum
          if (prev.length >= 3) {
            return [...prev.slice(1), newPopup];
          }
          return [...prev, newPopup];
        });

        // Auto-remove popup after 5 seconds
        setTimeout(() => {
          setActivePopups(prev => prev.filter(popup => popup.id !== newPopup.id));
        }, 5000);
      };

      // Show first popup after 5 seconds
      const firstPopupTimer = setTimeout(showRandomPopup, 5000);
      
      // Then show every 20 seconds
      popupIntervalRef.current = setInterval(showRandomPopup, 20000);

      return () => {
        clearTimeout(firstPopupTimer);
        clearInterval(popupIntervalRef.current);
      };
    }
  }, [isOpen, hasLanded]);

  // Clear interval when component unmounts
  useEffect(() => {
    return () => {
      if (popupIntervalRef.current) {
        clearInterval(popupIntervalRef.current);
      }
    };
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      return "👋 Hello! Welcome to Asthra. I'm here to connect you with the right resources. What's your first priority?";
    } else {
      return "🤖 I can help with mentors, internships, webinars, donations, or navigation. Can you tell me more specifically?";
    }
  };

  const handleQuickAction = (action: string) => {
    setMessage(action);
    setTimeout(() => {
      handleSendMessage();
    }, 300);
  };

  const handleOpenChat = () => {
    // Set chat position 10px above the bottom
    setChatPosition({ bottom: 16, right: 6 });
    setIsOpen(true);
    setShowWelcomePopup(false);
    setActivePopups([]); // Clear all popups when opening chat
    
    // Add welcome message when opening chat for the first time
    if (messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: 1,
          text: "👋 Hello! I'm Asthra Assistant. I can help you with mentorships, internships, events, and more. What would you like to explore today?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
      }, 500);
    }
  };

  const handleCloseChat = () => {
    // Reset to original position when closing
    setChatPosition({ bottom: 6, right: 6 });
    setIsOpen(false);
    setIsMinimized(false);
  };

  const removePopup = (popupId: number) => {
    setActivePopups(prev => prev.filter(popup => popup.id !== popupId));
  };

  if (!isOpen) {
    return (
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ${
          isLanding 
            ? 'animate-slide-in-right' 
            : hasLanded 
              ? 'animate-soft-bounce' 
              : ''
        }`}
        style={{
          transform: isLanding ? 'translateX(100vw)' : 'translateX(0)'
        }}
      >
        {/* Continuous Popups */}
        {activePopups.map((popup, index) => (
          <div 
            key={popup.id}
            className="absolute bottom-full right-0 mb-4 animate-popup-float"
            style={{ 
              marginBottom: `${4 + (index * 6)}rem`,
              zIndex: 1000 - index 
            }}
          >
            <div className={`bg-gradient-to-r px-4 py-3 rounded-2xl shadow-2xl relative max-w-xs ${
              popup.type === 'greeting' ? 'from-blue-400 to-purple-600' :
              popup.type === 'promo' ? 'from-green-400 to-teal-400' :
              popup.type === 'feature' ? 'from-orange-400 to-red-400' :
              'from-purple-500 to-pink-600'
            } text-white`}>
              <div className="flex items-center space-x-3">
                <div className="animate-wiggle">
                  {popup.type === 'greeting' ? '👋' :
                   popup.type === 'promo' ? '🌟' :
                   popup.type === 'feature' ? '🎯' : '💡'}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold">{popup.text}</div>
                </div>
              </div>
              
              {/* Arrow pointing to chatbot */}
              <div className={`absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 ${
                popup.type === 'greeting' ? 'bg-blue-500' :
                popup.type === 'promo' ? 'bg-green-500' :
                popup.type === 'feature' ? 'bg-orange-500' :
                'bg-purple-500'
              }`}></div>
              
              {/* Close button for popup */}
              <button 
                onClick={() => removePopup(popup.id)}
                className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <X className="h-3 w-3 text-gray-600" />
              </button>
            </div>
          </div>
        ))}

        {/* Welcome Popup */}
        {showWelcomePopup && (
          <div className="absolute bottom-full right-0 mb-4 animate-popup-float">
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-3 rounded-2xl shadow-2xl relative max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="animate-wiggle">👋</div>
                <div>
                  <div className="text-sm font-bold">Hello! I'm Asthra Assistant</div>
                  <div className="text-xs opacity-90">How can I help you today?</div>
                </div>
              </div>
              {/* Arrow pointing to chatbot */}
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-teal-500"></div>
              
              {/* Close button for popup */}
              <button 
                onClick={() => setShowWelcomePopup(false)}
                className="absolute -top-1 -right-1 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <X className="h-3 w-3 text-teal-600" />
              </button>
            </div>
          </div>
        )}

        {/* Chatbot Icon */}
        <Button
          onClick={handleOpenChat}
          className="h-16 w-16 rounded-full p-0 overflow-hidden shadow-xl 
                     hover:scale-110 transition-transform duration-300 relative animate-pulse-glow"
          size="icon"
        >
          <img 
            src={chatbot} 
            alt="Asthra Chatbot" 
            className="h-full w-full object-cover rounded-full" 
          />
          
          {/* Pulsing effect */}
          <div className="absolute inset-0 rounded-full border-2 border-teal-400 animate-ping opacity-75"></div>
          
          {/* Notification dot */}
          {activePopups.length > 0 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div 
      className="fixed z-50 animate-chat-window-open"
      style={{
        bottom: `${chatPosition.bottom}px`,
        right: `${chatPosition.right}px`,
        transition: 'bottom 0.3s ease-in-out'
      }}
    >
      <Card className={`w-80 shadow-2xl border-0 bg-card/95 backdrop-blur-md transition-all duration-300 ${
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
              className="h-6 w-6 text-white hover:bg-white/20 transition-all duration-200"
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
              className="h-6 w-6 text-white hover:bg-white/20 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseChat();
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
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm transform transition-all duration-200 hover:scale-105 ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-900 shadow-md'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length > 0 && (
              <div className="px-3 py-2 border-t bg-white">
                <div className="flex flex-wrap gap-1 mb-2">
                  {quickActions.map((action, index) => (
                    <div
                      key={action}
                      className="animate-quick-action-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <Badge
                        variant="secondary"
                        className="cursor-pointer hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white text-xs transition-all duration-200 transform hover:scale-105"
                        onClick={() => handleQuickAction(action)}
                      >
                        {action}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            {messages.length > 0 && (
              <div className="p-3 border-t bg-white flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 h-8 text-sm transition-all duration-200 focus:scale-105"
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
                  className="h-8 w-8 p-0 bg-gradient-to-r from-teal-500 to-blue-600 hover:scale-105 transition-all duration-200 transform"
                >
                  <Send className="h-3 w-3 text-white" />
                </Button>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;
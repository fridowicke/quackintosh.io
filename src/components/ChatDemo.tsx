import { useState, useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { Button } from "@/components/ui/button";
import quackintoshAvatar from "@/assets/quackintosh-duck.jpg";
import mathHomework from "@/assets/math-homework.jpg";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  showTyping?: boolean;
  image?: string;
}

const messages: Message[] = [
  {
    id: 1,
    text: "Hi! Meine Tochter Emma ist in der 7. Klasse und hat Probleme in Mathe 😟",
    isUser: true,
  },
  {
    id: 2,
    text: "Verstehe, da helf ich euch gerne! Welches Thema macht sie gerade?",
    isUser: false,
    showTyping: true,
  },
  {
    id: 3,
    text: "Hier sind ihre Hausaufgaben - sie kommt gar nicht weiter",
    isUser: true,
    image: mathHomework,
  },
  {
    id: 6,
    text: "Ah, das kriegen wir hin! 🌟 Wie wäre es für Emma eine kostenlose Nachhilfestunde mit Maya auszumachen? Wann passt es euch?",
    isUser: false,
    showTyping: true,
  },
];

export const ChatDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change, typing indicator appears, or CTA shows
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, showTyping, showCTA]);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setTimeout(() => setShowCTA(true), 3000);
      return;
    }

    const currentMessage = messages[currentMessageIndex];
    const delay = currentMessageIndex === 0 ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!currentMessage.isUser && currentMessage.showTyping) {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(prev => [...prev, currentMessage]);
          setCurrentMessageIndex(prev => prev + 1);
        }, 1500);
      } else {
        setVisibleMessages(prev => [...prev, currentMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className="h-full flex flex-col">
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-2 scrollbar-hide"
      >
        {visibleMessages.map((message, index) => (
          <ChatBubble
            key={message.id}
            isUser={message.isUser}
            avatar={!message.isUser ? quackintoshAvatar : undefined}
            delay={index * 100}
            image={message.image}
          >
            <p className="text-sm leading-relaxed">{message.text}</p>
          </ChatBubble>
        ))}
        
        {showTyping && (
          <TypingIndicator avatar={quackintoshAvatar} />
        )}
        
        {showCTA && (
          <div className="flex justify-center py-4 animate-slide-up">
            <div className="bg-white/20 backdrop-blur-2xl px-6 py-5 rounded-3xl shadow-2xl border border-white/30 max-w-sm text-center relative overflow-hidden">
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <p className="text-gray-900 text-sm font-semibold mb-4 leading-relaxed drop-shadow-sm">
                  Bereit für eine kostenlose Nachhilfestunde?
                </p>
                <Button 
                  className="bg-black text-white hover:bg-gray-800 font-semibold shadow-xl text-sm w-full border-0 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                  size="sm"
                >
                  Schreib mir auf WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
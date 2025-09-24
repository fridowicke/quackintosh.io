import { useState, useEffect } from "react";
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
    text: "Hi, I'm really worried about my daughter Emma. She's in 7th grade and struggling with math. Her grades have dropped from B's to D's this semester 😟",
    isUser: true,
  },
  {
    id: 2,
    text: "I understand your concern! 🦆 I'm Quackintosh, and I help students like Emma every day. Can you tell me what specific areas of math she's finding most challenging?",
    isUser: false,
    showTyping: true,
  },
  {
    id: 3,
    text: "She says algebra is really confusing, especially word problems. She gets frustrated and gives up quickly.",
    isUser: true,
  },
  {
    id: 4,
    text: "That's very common! Word problems can be tricky because they combine reading comprehension with math skills. I use a step-by-step approach that breaks problems into smaller, manageable pieces. Would you like to see how I'd help Emma with a typical algebra word problem?",
    isUser: false,
    showTyping: true,
  },
  {
    id: 5,
    text: "Yes, that would be great! She has homework tonight and I feel helpless trying to explain it.",
    isUser: true,
  },
  {
    id: 6,
    text: "Here's her homework from tonight - she's completely stuck on these word problems",
    isUser: true,
    image: mathHomework,
  },
  {
    id: 7,
    text: "Perfect! I can see exactly what Emma's struggling with. I'll work with her directly, using interactive examples and positive reinforcement. I make math feel like solving fun puzzles rather than scary problems. Most students see improvement within the first week! 🌟",
    isUser: false,
    showTyping: true,
  },
];

export const ChatDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setTimeout(() => setShowCTA(true), 1000);
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
    <div className="max-w-md mx-auto relative">
      <div className="h-[500px] overflow-y-auto px-4 py-6 space-y-2 pb-24">
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
      </div>

      {showCTA && (
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 animate-slide-up">
          <div className="bg-gradient-warm p-6 rounded-2xl shadow-duck text-center backdrop-blur-sm">
            <h3 className="text-primary-foreground font-semibold mb-2">
              Ready to help your child succeed?
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Start a free session with Quackintosh today!
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90 font-medium shadow-soft"
              size="lg"
            >
              Try Quackintosh Free
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
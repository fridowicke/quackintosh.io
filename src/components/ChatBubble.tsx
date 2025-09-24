import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  children: ReactNode;
  isUser?: boolean;
  avatar?: string;
  delay?: number;
  image?: string;
}

export const ChatBubble = ({ children, isUser = false, avatar, delay = 0, image }: ChatBubbleProps) => {
  return (
    <div 
      className={cn(
        "flex gap-3 mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* {!isUser && avatar && (
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-bubble flex-shrink-0">
          <img src={avatar} alt="Quackintosh" className="w-full h-full object-cover" />
        </div>
      )} */}
      
      <div
        className={cn(
          "max-w-[280px] rounded-2xl shadow-bubble",
          isUser 
            ? "bg-user-bubble text-user-bubble-foreground rounded-br-md" 
            : "bg-duck-bubble text-duck-bubble-foreground rounded-bl-md",
          image ? "overflow-hidden" : "px-4 py-3"
        )}
      >
        {image && (
          <img 
            src={image} 
            alt="Shared image" 
            className="w-full h-auto rounded-t-2xl"
          />
        )}
        <div className={image ? "px-4 py-3" : ""}>
          {children}
        </div>
      </div>
      
      {/* {isUser && avatar && (
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-bubble flex-shrink-0">
          <img src={avatar} alt="User" className="w-full h-full object-cover" />
        </div>
      )} */}
    </div>
  );
};
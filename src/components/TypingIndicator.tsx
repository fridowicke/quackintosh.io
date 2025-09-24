import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  avatar?: string;
  delay?: number;
}

export const TypingIndicator = ({ avatar, delay = 0 }: TypingIndicatorProps) => {
  return (
    <div 
      className={cn("flex gap-3 mb-4 animate-fade-in")}
      style={{ animationDelay: `${delay}ms` }}
    >
      {avatar && (
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-bubble flex-shrink-0">
          <img src={avatar} alt="Quackintosh" className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="bg-duck-bubble px-4 py-3 rounded-2xl rounded-bl-md shadow-bubble">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
};
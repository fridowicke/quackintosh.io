import { ChatDemo } from "@/components/ChatDemo";
import quackintoshAvatar from "@/assets/quackintosh-duck.jpg";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-hero px-4 sm:px-6">
      {/* Header */}
      {/* <header className="py-6 text-center">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-black">
            Schulsorgen?
          </h1>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3 text-foreground">
          Gute Noten für deine Kinder ✨
        </h2>
      </section> */}

      {/* Chat Demo */}
      <section className="pt-8 pb-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-colorful border border-white/20 h-[750px] max-h-[calc(100vh-8rem)] flex flex-col">
          <div className="border-b border-border/50 p-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src={quackintoshAvatar} 
                alt="Quackintosh" 
                className="w-10 h-10 rounded-full border-2 border-primary/20"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm text-foreground">Quackintosh</h3>
                <p className="text-muted-foreground text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  KI Nachhilfe mit tutor.new • Online
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-0">
            <ChatDemo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

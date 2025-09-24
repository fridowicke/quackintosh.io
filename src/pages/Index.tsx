import { ChatDemo } from "@/components/ChatDemo";
import quackintoshAvatar from "@/assets/quackintosh-duck.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero px-4 sm:px-6">
      {/* Header */}
      <header className="py-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img 
            src={quackintoshAvatar} 
            alt="Quackintosh" 
            className="w-14 h-14 rounded-full shadow-duck animate-bounce-gentle border-2 border-white/20"
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Quackintosh
          </h1>
        </div>
        <p className="text-foreground/70 text-sm">
          by <span className="text-secondary font-semibold">tutor.new</span>
        </p>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3 text-foreground">
          Your child's AI math tutor that actually works ✨
        </h2>
        <p className="text-foreground/80 text-sm max-w-sm mx-auto leading-relaxed">
          See how Quackintosh helps worried parents like you turn math struggles into success stories
        </p>
      </section>

      {/* Chat Demo */}
      <section className="pb-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-colorful border border-white/20 min-h-[600px]">
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <img 
                src={quackintoshAvatar} 
                alt="Quackintosh" 
                className="w-10 h-10 rounded-full border-2 border-primary/20"
              />
              <div>
                <h3 className="font-semibold text-sm text-foreground">Quackintosh</h3>
                <p className="text-muted-foreground text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  AI Math Tutor • Online
                </p>
              </div>
            </div>
          </div>
          
          <ChatDemo />
        </div>
      </section>
    </div>
  );
};

export default Index;

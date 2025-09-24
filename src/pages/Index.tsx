import { ChatDemo } from "@/components/ChatDemo";
import quackintoshAvatar from "@/assets/quackintosh-duck.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img 
            src={quackintoshAvatar} 
            alt="Quackintosh" 
            className="w-12 h-12 rounded-full shadow-duck animate-bounce-gentle"
          />
          <h1 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
            Quackintosh
          </h1>
        </div>
        <p className="text-muted-foreground text-sm">
          by <span className="text-secondary font-medium">tutor.new</span>
        </p>
      </header>

      {/* Hero Section */}
      <section className="px-4 text-center mb-8">
        <h2 className="text-xl font-semibold mb-2 text-foreground">
          Your child's AI math tutor that actually works
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          See how Quackintosh helps worried parents like you turn math struggles into success stories
        </p>
      </section>

      {/* Chat Demo */}
      <section className="pb-8">
        <div className="bg-card rounded-t-3xl shadow-soft min-h-[600px]">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <img 
                src={quackintoshAvatar} 
                alt="Quackintosh" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-medium text-sm">Quackintosh</h3>
                <p className="text-muted-foreground text-xs">AI Math Tutor • Online</p>
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

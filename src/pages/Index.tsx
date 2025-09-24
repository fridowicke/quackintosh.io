import { ChatDemo } from "@/components/ChatDemo";
import quackintoshAvatar from "@/assets/quackintosh-duck.jpg";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-hero px-4 sm:px-6 flex flex-col">
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
      <section className="pt-4 pb-4 flex-1 flex flex-col justify-center">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-colorful border-2 border-gray-200/60 shadow-2xl drop-shadow-xl h-[750px] max-h-[calc(100vh-6rem)] flex flex-col">
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
                  KI Nachhilfe mit <a href="https://tutor.new/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">tutor.new</a> • Online
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-0">
            <ChatDemo />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center mt-auto pb-2">
        <p className="text-white text-sm font-medium">
          made with <span className="text-red-400">♥</span> by <a href="https://tutor.new/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">tutor.new</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;

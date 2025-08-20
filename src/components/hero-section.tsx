import { Button } from "@/components/ui/button"
import { ExternalLink, Download, BookOpen } from "lucide-react"
import moonWolfImage from "@/assets/moon-wolf.png"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero paw-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-wolf-moonlight rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-wolf-glow rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-wolf-moonlight rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-wolf-glow rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Moon with wolf silhouette */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <img 
              src={moonWolfImage}
              alt="Glowing moon with wolf silhouette"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-moon-glow animate-float"
            />
            {/* Additional glow effect */}
            <div className="absolute inset-0 bg-gradient-moon opacity-30 rounded-full blur-xl animate-glow-pulse"></div>
          </div>
        </div>
        
        {/* Hero content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-wolf-moonlight leading-tight">
              Wolfra
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-wolf-silver mt-2">
                The Ultimate Music Bot
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience superior audio quality, advanced queue management, and mystical wolf-powered features. 
              Transform your Discord server into a musical haven.
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-wolf-howl" />
              Invite Bot
            </Button>
            
            <Button variant="neon" size="lg" className="group">
              <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-wolf-howl" />
              Join Discord
            </Button>
            
            <Button variant="ghostGlow" size="lg" className="group">
              <BookOpen className="mr-2 h-5 w-5 group-hover:animate-wolf-howl" />
              View Docs
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16 pt-8 border-t border-wolf-moonlight/20">
            <div className="text-center animate-slide-in">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-wolf-moonlight">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">Servers</div>
            </div>
            
            <div className="text-center animate-slide-in delay-200">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-wolf-moonlight">
                1M+
              </div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            
            <div className="text-center animate-slide-in delay-300">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-wolf-moonlight">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-wolf-moonlight animate-bounce">
        <div className="w-6 h-10 border-2 border-wolf-moonlight rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wolf-moonlight rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
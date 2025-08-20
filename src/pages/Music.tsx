import { Music as MusicIcon, Play, Repeat, Volume2, Sliders, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: MusicIcon,
    title: "Smart Playlists",
    description: "Create and manage intelligent playlists that adapt to your server's preferences",
    badge: "AI Powered"
  },
  {
    icon: Play,
    title: "Queue Management",
    description: "Advanced queue system with shuffle, priority, and collaborative controls",
    badge: "Pro Feature"
  },
  {
    icon: Repeat,
    title: "Loop Controls",
    description: "Loop single tracks, entire queues, or create custom repeat patterns",
    badge: "Popular"
  },
  {
    icon: Volume2,
    title: "Audio Enhancement",
    description: "Crystal clear audio with volume normalization and bass boost",
    badge: "HD Quality"
  },
  {
    icon: Sliders,
    title: "Audio Filters",
    description: "Professional audio filters including reverb, echo, and distortion",
    badge: "Premium"
  },
  {
    icon: Heart,
    title: "Favorites System",
    description: "Save your favorite tracks and quick-access your most played songs",
    badge: "Community"
  }
]

export default function Music() {
  return (
    <div className="min-h-screen bg-background paw-pattern">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-wolf-moonlight">
              Music Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful music features that make Wolfra the ultimate Discord music bot
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group bg-gradient-card border-wolf-moonlight/20 hover:border-wolf-moonlight/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <feature.icon className="h-8 w-8 text-wolf-moonlight group-hover:animate-wolf-howl" />
                    <Badge variant="secondary" className="bg-wolf-moonlight/10 text-wolf-moonlight border-wolf-moonlight/30">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-wolf-silver group-hover:text-wolf-moonlight transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Demo section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl font-orbitron font-bold text-wolf-moonlight">
              See Wolfra in Action
            </h2>
            
            <div className="max-w-4xl mx-auto bg-gradient-card rounded-2xl p-8 border border-wolf-moonlight/20 shadow-card">
              <div className="aspect-video bg-wolf-dark rounded-lg flex items-center justify-center mb-6">
                <div className="text-center space-y-4">
                  <Play className="h-16 w-16 text-wolf-moonlight mx-auto animate-glow-pulse" />
                  <p className="text-wolf-silver">Demo Video Coming Soon</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-xl font-orbitron font-bold text-wolf-moonlight">
                  Experience Premium Audio Quality
                </h3>
                <p className="text-muted-foreground">
                  Watch how Wolfra transforms your Discord server into a professional music experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
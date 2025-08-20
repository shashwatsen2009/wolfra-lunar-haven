import { HeroSection } from "@/components/hero-section"
import { Music, Shield, Zap, Users, Star, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Music,
    title: "High-Quality Audio",
    description: "Crystal clear sound with advanced audio processing and normalization"
  },
  {
    icon: Shield,
    title: "Reliable & Stable",
    description: "99.9% uptime with robust error handling and automatic reconnection"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant responses with optimized performance and minimal latency"
  },
  {
    icon: Users,
    title: "Multi-Server Support",
    description: "Seamlessly manage music across multiple Discord servers"
  }
]

const testimonials = [
  {
    name: "Gaming Legends",
    members: "12.5K",
    text: "Wolfra transformed our server's music experience. The audio quality is incredible and it never goes down!",
    rating: 5
  },
  {
    name: "Chill Vibes",
    members: "8.2K", 
    text: "Best music bot we've used. The queue management and playlist features are exactly what we needed.",
    rating: 5
  },
  {
    name: "Study Together",
    members: "15.8K",
    text: "Wolfra's reliability is unmatched. Perfect for our 24/7 study sessions with ambient music.",
    rating: 5
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Features section */}
      <section className="py-20 bg-gradient-to-b from-background to-wolf-dark/20 paw-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-wolf-moonlight">
              Why Choose Wolfra?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of power, reliability, and simplicity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group bg-gradient-card border-wolf-moonlight/20 hover:border-wolf-moonlight/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 text-wolf-moonlight mx-auto mb-4 group-hover:animate-wolf-howl" />
                  <CardTitle className="text-wolf-silver group-hover:text-wolf-moonlight transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20 bg-wolf-dark/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-wolf-moonlight">
              Trusted by Communities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what server owners say about Wolfra
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="bg-gradient-card border-wolf-moonlight/20 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-wolf-silver">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.members} members</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-wolf-moonlight fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8 space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-wolf-moonlight">
            Ready to Transform Your Server?
          </h2>
          <p className="text-xl text-wolf-silver max-w-2xl mx-auto">
            Join thousands of communities already enjoying superior music experiences with Wolfra
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Heart className="mr-2 h-5 w-5 group-hover:animate-wolf-howl" />
              Add to Server
            </Button>
            <Button variant="ghostGlow" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

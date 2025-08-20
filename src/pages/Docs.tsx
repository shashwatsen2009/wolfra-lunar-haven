import { useState } from "react"
import { Book, Command, Settings, HelpCircle, Search, Copy, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const sections = [
  { id: "setup", title: "Setup Guide", icon: Settings },
  { id: "commands", title: "Commands", icon: Command },
  { id: "troubleshooting", title: "Troubleshooting", icon: HelpCircle },
  { id: "faq", title: "FAQ", icon: Book },
]

const commands = [
  { command: "/play", description: "Play a song or playlist", usage: "/play <song name or URL>" },
  { command: "/skip", description: "Skip the current song", usage: "/skip" },
  { command: "/queue", description: "View the current queue", usage: "/queue [page]" },
  { command: "/pause", description: "Pause the current song", usage: "/pause" },
  { command: "/resume", description: "Resume playback", usage: "/resume" },
  { command: "/volume", description: "Adjust playback volume", usage: "/volume <0-100>" },
  { command: "/loop", description: "Toggle loop mode", usage: "/loop [off|track|queue]" },
  { command: "/shuffle", description: "Shuffle the queue", usage: "/shuffle" },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState("setup")
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyCommand = async (command: string) => {
    await navigator.clipboard.writeText(command)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background paw-pattern">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-wolf-moonlight">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about setting up and using Wolfra
            </p>
          </div>
          
          {/* Search */}
          <div className="max-w-md mx-auto mb-12 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-10 bg-wolf-dark/50 border-wolf-moonlight/20 focus:border-wolf-moonlight"
              />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
              <Card className="bg-gradient-card border-wolf-moonlight/20 shadow-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-wolf-moonlight font-orbitron">Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200",
                        activeSection === section.id
                          ? "bg-wolf-moonlight/10 text-wolf-moonlight"
                          : "text-muted-foreground hover:bg-wolf-moonlight/5 hover:text-wolf-moonlight"
                      )}
                    >
                      <section.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div className="flex-1 space-y-8">
              {activeSection === "setup" && (
                <div className="space-y-6 animate-fade-in">
                  <Card className="bg-gradient-card border-wolf-moonlight/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-wolf-moonlight font-orbitron">Quick Setup</CardTitle>
                      <CardDescription>Get Wolfra running in your server in minutes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-wolf-moonlight/10 text-wolf-moonlight border-wolf-moonlight/30">1</Badge>
                          <p className="text-wolf-silver">Invite Wolfra to your Discord server</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-wolf-moonlight/10 text-wolf-moonlight border-wolf-moonlight/30">2</Badge>
                          <p className="text-wolf-silver">Grant necessary permissions (Connect, Speak, Use Slash Commands)</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-wolf-moonlight/10 text-wolf-moonlight border-wolf-moonlight/30">3</Badge>
                          <p className="text-wolf-silver">Join a voice channel and use <code className="bg-wolf-dark px-2 py-1 rounded text-wolf-moonlight">/play</code></p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeSection === "commands" && (
                <div className="space-y-6 animate-fade-in">
                  <Card className="bg-gradient-card border-wolf-moonlight/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-wolf-moonlight font-orbitron">Music Commands</CardTitle>
                      <CardDescription>Complete list of available slash commands</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {commands.map((cmd, index) => (
                          <div key={cmd.command} className="border border-wolf-moonlight/20 rounded-lg p-4 hover:border-wolf-moonlight/40 transition-colors">
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <div className="flex items-center space-x-3">
                                  <code className="bg-wolf-dark px-3 py-1 rounded-lg text-wolf-moonlight font-orbitron font-bold">
                                    {cmd.command}
                                  </code>
                                  <Badge variant="secondary" className="bg-wolf-moonlight/10 text-wolf-moonlight border-wolf-moonlight/30">
                                    Slash Command
                                  </Badge>
                                </div>
                                <p className="text-wolf-silver">{cmd.description}</p>
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium">Usage:</span> <code className="bg-wolf-dark/50 px-2 py-1 rounded">{cmd.usage}</code>
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => copyCommand(cmd.command)}
                                className="hover:bg-wolf-moonlight/10"
                              >
                                {copiedCommand === cmd.command ? (
                                  <Check className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeSection === "troubleshooting" && (
                <div className="space-y-6 animate-fade-in">
                  <Card className="bg-gradient-card border-wolf-moonlight/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-wolf-moonlight font-orbitron">Common Issues</CardTitle>
                      <CardDescription>Solutions to frequently encountered problems</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-wolf-moonlight pl-4">
                          <h3 className="font-semibold text-wolf-silver mb-2">Bot not responding to commands</h3>
                          <p className="text-muted-foreground text-sm">
                            Ensure the bot has proper permissions and you're using slash commands (/) instead of prefix commands.
                          </p>
                        </div>
                        <div className="border-l-4 border-wolf-moonlight pl-4">
                          <h3 className="font-semibold text-wolf-silver mb-2">Audio cutting out or poor quality</h3>
                          <p className="text-muted-foreground text-sm">
                            Check your server's voice region and ensure stable internet connection. Try rejoining the voice channel.
                          </p>
                        </div>
                        <div className="border-l-4 border-wolf-moonlight pl-4">
                          <h3 className="font-semibold text-wolf-silver mb-2">Can't find songs</h3>
                          <p className="text-muted-foreground text-sm">
                            Try different search terms or use direct URLs from YouTube, Spotify, or SoundCloud.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeSection === "faq" && (
                <div className="space-y-6 animate-fade-in">
                  <Card className="bg-gradient-card border-wolf-moonlight/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-wolf-moonlight font-orbitron">Frequently Asked Questions</CardTitle>
                      <CardDescription>Quick answers to common questions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-wolf-silver mb-2">Is Wolfra free to use?</h3>
                          <p className="text-muted-foreground text-sm">
                            Yes! Wolfra offers a comprehensive free tier with all basic music features. Premium features are available for supporters.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-wolf-silver mb-2">What music sources does Wolfra support?</h3>
                          <p className="text-muted-foreground text-sm">
                            Wolfra supports YouTube, YouTube Music, Spotify, SoundCloud, and direct audio file uploads.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-wolf-silver mb-2">Can I customize Wolfra's settings per server?</h3>
                          <p className="text-muted-foreground text-sm">
                            Absolutely! Each server has its own configuration, including volume limits, command permissions, and playlist settings.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
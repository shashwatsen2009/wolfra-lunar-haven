import { useState } from "react"
import { Music as MusicIcon, Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Search, Clock, Heart, MoreHorizontal, List, Home, Library } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { icon: Home, label: "Home", active: false },
  { icon: Search, label: "Search", active: false },
  { icon: Library, label: "Your Library", active: true },
]

const playlists = [
  "Liked Songs",
  "My Playlist #1", 
  "Chill Vibes",
  "Gaming Mix",
  "Study Music",
  "Workout Hits"
]

const currentTrack = {
  title: "Wolves",
  artist: "Selena Gomez, Marshmello",
  album: "Wolves",
  duration: "3:17",
  currentTime: "1:23",
  progress: 42,
  artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
}

const queue = [
  { title: "Howl", artist: "Junun", duration: "4:12", isPlaying: true },
  { title: "Wolf Like Me", artist: "TV On The Radio", duration: "4:32", isPlaying: false },
  { title: "Hungry Like The Wolf", artist: "Duran Duran", duration: "3:41", isPlaying: false },
  { title: "The Wolf", artist: "SIAMÉS", duration: "3:08", isPlaying: false },
  { title: "Wolves", artist: "Big Thief", duration: "4:45", isPlaying: false },
]

const recentTracks = [
  { title: "Moon River", artist: "Frank Ocean", duration: "3:28", album: "Moon River" },
  { title: "Moonlight", artist: "XXXTentacion", duration: "2:14", album: "17" },
  { title: "Midnight City", artist: "M83", duration: "4:03", album: "Hurry Up, We're Dreaming" },
  { title: "Blue Moon", artist: "Billie Holiday", duration: "3:15", album: "Lady Sings the Blues" },
  { title: "Dark Side of the Moon", artist: "Pink Floyd", duration: "43:09", album: "The Dark Side of the Moon" },
  { title: "Howling", artist: "Lupus Nocte", duration: "5:22", album: "Nocturnal" },
]

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState([75])
  const [currentProgress, setCurrentProgress] = useState([42])
  const [showQueue, setShowQueue] = useState(false)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <div className="w-64 bg-wolf-dark/20 border-r border-wolf-moonlight/20 p-4 hidden lg:block">
          <div className="space-y-6">
            {/* Navigation */}
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 text-left",
                    item.active 
                      ? "bg-wolf-moonlight/10 text-wolf-moonlight" 
                      : "text-muted-foreground hover:text-wolf-moonlight hover:bg-wolf-moonlight/5"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Playlists */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-wolf-silver px-3">Playlists</h3>
              <div className="space-y-1">
                {playlists.map((playlist) => (
                  <button
                    key={playlist}
                    className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-wolf-moonlight hover:bg-wolf-moonlight/5 rounded-lg transition-colors"
                  >
                    {playlist}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search songs, artists, or albums..." 
                    className="pl-10 bg-wolf-dark/30 border-wolf-moonlight/20 focus:border-wolf-moonlight"
                  />
                </div>
                <Button variant="ghostGlow" size="sm" onClick={() => setShowQueue(!showQueue)}>
                  <List className="h-4 w-4 mr-2" />
                  Queue
                </Button>
              </div>

              <h1 className="text-3xl font-orbitron font-bold text-wolf-moonlight mb-2">
                Good evening
              </h1>
              <p className="text-muted-foreground">Your music awaits</p>
            </div>

            {/* Recently Played */}
            <div className="space-y-6">
              <h2 className="text-xl font-orbitron font-bold text-wolf-silver">Recently Played</h2>
              
              <div className="space-y-2">
                {recentTracks.map((track, index) => (
                  <div
                    key={index}
                    className="group flex items-center p-3 rounded-lg hover:bg-wolf-moonlight/5 transition-colors cursor-pointer"
                  >
                    <div className="w-8 text-center text-sm text-muted-foreground group-hover:hidden">
                      {index + 1}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 hidden group-hover:flex mr-0 hover:bg-wolf-moonlight/10"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                    
                    <div className="w-12 h-12 bg-wolf-dark rounded ml-3 flex items-center justify-center">
                      <MusicIcon className="h-6 w-6 text-wolf-moonlight" />
                    </div>
                    
                    <div className="flex-1 ml-4 min-w-0">
                      <p className="font-medium text-wolf-silver truncate">{track.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                    </div>
                    
                    <div className="hidden md:block text-sm text-muted-foreground">
                      {track.album}
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground w-12 text-right">{track.duration}</span>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Queue Panel */}
          {showQueue && (
            <div className="w-80 bg-wolf-dark/20 border-l border-wolf-moonlight/20 p-4">
              <div className="space-y-4">
                <h3 className="font-orbitron font-bold text-wolf-moonlight">Queue</h3>
                
                <div className="space-y-2">
                  {queue.map((track, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center p-2 rounded-lg transition-colors cursor-pointer",
                        track.isPlaying 
                          ? "bg-wolf-moonlight/10 border border-wolf-moonlight/30" 
                          : "hover:bg-wolf-moonlight/5"
                      )}
                    >
                      <div className="w-8 h-8 bg-wolf-dark rounded flex items-center justify-center mr-3">
                        {track.isPlaying ? (
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-wolf-moonlight animate-pulse"></div>
                            <div className="w-1 h-4 bg-wolf-moonlight animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-1 h-4 bg-wolf-moonlight animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                        ) : (
                          <MusicIcon className="h-4 w-4 text-wolf-moonlight" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className={cn(
                          "font-medium truncate text-sm",
                          track.isPlaying ? "text-wolf-moonlight" : "text-wolf-silver"
                        )}>
                          {track.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                      </div>
                      
                      <span className="text-xs text-muted-foreground">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Player Controls */}
      <div className="bg-wolf-dark/30 backdrop-blur-md border-t border-wolf-moonlight/20 p-4">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Currently Playing */}
            <div className="flex items-center space-x-4 min-w-0 flex-1">
              <div className="w-14 h-14 bg-wolf-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <img 
                  src={currentTrack.artwork} 
                  alt={currentTrack.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-wolf-silver truncate">{currentTrack.title}</p>
                <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
              </div>
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Shuffle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button 
                  variant="hero" 
                  size="icon" 
                  className="h-10 w-10"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>
                <Button variant="ghost" size="icon">
                  <SkipForward className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Repeat className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 w-full">
                <span className="text-xs text-muted-foreground w-10 text-right">{currentTrack.currentTime}</span>
                <Slider
                  value={currentProgress}
                  onValueChange={setCurrentProgress}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-10">{currentTrack.duration}</span>
              </div>
            </div>

            {/* Volume and Options */}
            <div className="flex items-center space-x-2 flex-1 justify-end">
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Activity, Server, Users, Clock, Zap, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const statusItems = [
  {
    icon: Activity,
    title: "Bot Status",
    value: "Online",
    description: "All systems operational",
    status: "online",
    color: "text-green-400"
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "23ms",
    description: "Average latency",
    status: "excellent",
    color: "text-wolf-moonlight"
  },
  {
    icon: TrendingUp,
    title: "Uptime",
    value: "99.97%",
    description: "Last 30 days",
    status: "excellent",
    color: "text-wolf-moonlight"
  }
]

const stats = [
  {
    icon: Server,
    title: "Active Servers",
    value: "52,431",
    change: "+1,234 this week",
    color: "text-wolf-neon"
  },
  {
    icon: Users,
    title: "Total Users",
    value: "1.2M",
    change: "+45K this month",
    color: "text-wolf-moonlight"
  },
  {
    icon: Zap,
    title: "Songs Played",
    value: "15.7M",
    change: "+500K today",
    color: "text-wolf-glow"
  }
]

export default function Status() {
  return (
    <div className="min-h-screen bg-background paw-pattern">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-wolf-moonlight">
              System Status
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time monitoring of Wolfra's performance and availability
            </p>
          </div>
          
          {/* Status indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {statusItems.map((item, index) => (
              <Card 
                key={item.title}
                className="group bg-gradient-card border-wolf-moonlight/20 hover:border-wolf-moonlight/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <item.icon className="h-6 w-6 text-wolf-moonlight" />
                    <Badge 
                      variant="secondary" 
                      className={`${item.status === 'online' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-wolf-moonlight/10 text-wolf-moonlight border-wolf-moonlight/30'}`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm text-muted-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-orbitron font-bold ${item.color} mb-1`}>
                    {item.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card 
                key={stat.title}
                className="group bg-gradient-card border-wolf-moonlight/20 hover:border-wolf-moonlight/40 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <stat.icon className="h-8 w-8 text-wolf-moonlight group-hover:animate-wolf-howl" />
                    <div>
                      <CardTitle className="text-wolf-silver">{stat.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{stat.change}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-orbitron font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* System health chart placeholder */}
          <Card className="bg-gradient-card border-wolf-moonlight/20 shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-wolf-moonlight font-orbitron">System Performance</CardTitle>
              <CardDescription>Last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-wolf-dark rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Activity className="h-12 w-12 text-wolf-moonlight mx-auto animate-glow-pulse" />
                  <p className="text-wolf-silver">Performance Chart</p>
                  <p className="text-sm text-muted-foreground">Real-time monitoring dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
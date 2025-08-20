import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Music", href: "/music" },
  { name: "Status", href: "/status" },
  { name: "Docs", href: "/docs" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-wolf-moonlight/20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2 group">
              <div className="p-2 rounded-lg bg-gradient-moon shadow-glow group-hover:shadow-moon transition-all duration-300">
                <Zap className="h-6 w-6 text-wolf-midnight" />
              </div>
              <span className="font-orbitron font-bold text-xl text-wolf-moonlight">
                Wolfra
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="-m-2.5 p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wolf-moonlight after:transition-all after:duration-300 hover:after:w-full",
                  location.pathname === item.href
                    ? "text-wolf-moonlight after:w-full"
                    : "text-muted-foreground hover:text-wolf-moonlight"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
            <ThemeToggle />
            <Button variant="ghostGlow" size="sm">
              Join Discord
            </Button>
            <Button variant="hero" size="sm">
              Invite Bot
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-wolf-moonlight/20">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-gradient-moon shadow-glow">
                  <Zap className="h-6 w-6 text-wolf-midnight" />
                </div>
                <span className="font-orbitron font-bold text-xl text-wolf-moonlight">
                  Wolfra
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="-m-2.5 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-wolf-moonlight/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                        location.pathname === item.href
                          ? "bg-wolf-moonlight/10 text-wolf-moonlight"
                          : "text-muted-foreground hover:bg-wolf-moonlight/10 hover:text-wolf-moonlight"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button variant="ghostGlow" size="sm" className="w-full">
                    Join Discord
                  </Button>
                  <Button variant="hero" size="sm" className="w-full">
                    Invite Bot
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
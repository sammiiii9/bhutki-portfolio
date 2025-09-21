import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X, BookOpen } from "lucide-react"
import AppointmentModal from "./appointment-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Pebble Steps</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/programs" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/programs" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                Programs
              </Link>
              <Link 
                to="/method" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/method" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                Method
              </Link>
              <Link 
                to="/results" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/results" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                Results
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/about" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                About
              </Link>
              <Link 
                to="/tedx" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/tedx" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                TEDx
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/contact" ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Book Assessment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/programs" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Programs
                </Link>
                <Link to="/method" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Method
                </Link>
                <Link to="/results" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Results
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link to="/tedx" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  TEDx
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Book Assessment
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

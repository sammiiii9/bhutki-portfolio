import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import AppointmentModal from "./appointment-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
              </div>
              <span className="font-bold text-xl text-foreground">Youth Mind Institute</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {location.pathname === "/" ? (
                <>
                  <a href="#care" className="text-foreground hover:text-primary transition-colors">
                    Care
                  </a>
                  <a href="#education" className="text-foreground hover:text-primary transition-colors">
                    Education
                  </a>
                  <a href="#science" className="text-foreground hover:text-primary transition-colors">
                    Science
                  </a>
                  <a href="#about" className="text-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </>
              ) : (
                <>
                  <Link to="/#care" className="text-foreground hover:text-primary transition-colors">
                    Care
                  </Link>
                  <Link to="/#education" className="text-foreground hover:text-primary transition-colors">
                    Education
                  </Link>
                  <Link to="/#science" className="text-foreground hover:text-primary transition-colors">
                    Science
                  </Link>
                </>
              )}
              <Link 
                to="/about" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/about" ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/gallery" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/gallery" ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/faq" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/faq" ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/privacy" 
                className={`hover:text-primary transition-colors ${
                  location.pathname === "/privacy" ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                Policies
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Appointments
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
                {location.pathname === "/" ? (
                  <>
                    <a href="#care" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Care
                    </a>
                    <a href="#education" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Education
                    </a>
                    <a href="#science" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Science
                    </a>
                    <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      About
                    </a>
                  </>
                ) : (
                  <>
                    <Link to="/#care" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Care
                    </Link>
                    <Link to="/#education" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Education
                    </Link>
                    <Link to="/#science" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Science
                    </Link>
                  </>
                )}
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Gallery
                </Link>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Policies
                </Link>
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Appointments
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

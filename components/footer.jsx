import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-xl">Youth Mind Institute</span>
              </Link>

              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Transforming children's mental health through evidence-based care, education, and groundbreaking research. 
                Building brighter futures for young minds since 1999.
              </p>

              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Stay Connected</h4>
                <p className="text-primary-foreground/70 text-sm">
                  Get updates on our programs, research, and mental health resources.
                </p>
                <div className="flex gap-2 max-w-md">
                  <Input
                    placeholder="Enter your email"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent"
                  />
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="#care" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    Clinical Care
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    Education Programs
                  </a>
                </li>
                <li>
                  <a href="#science" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    Research & Science
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    Gallery
                  </Link>
                </li>
                <li>
                  <a href="#careers" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Get in Touch</h4>
              <ul className="space-y-4 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary-foreground">New York Office</div>
                    <div className="text-sm">123 Mental Health Ave<br />New York, NY 10001</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary-foreground">San Francisco Office</div>
                    <div className="text-sm">456 Wellness Blvd<br />San Francisco, CA 94102</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="tel:+18009684646" className="hover:text-primary-foreground transition-colors">
                    1-800-YOUTH-MIND
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:info@youthmind.org" className="hover:text-primary-foreground transition-colors">
                    info@youthmind.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Youth Mind Institute. All rights reserved. | 501(c)(3) Nonprofit Organization
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="hover:text-primary-foreground transition-colors">
                FAQ
              </Link>
              <a href="#accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </a>
              <a href="#sitemap" className="hover:text-primary-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

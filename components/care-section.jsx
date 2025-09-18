import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { MapPin, Heart } from "lucide-react"

export default function CareSection() {
  return (
    <section id="care" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f5dfdd 0%, #fdf2f8 50%, #ffffff 100%)'
    }}>
      {/* Decorative angled elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-100/50 to-transparent transform -skew-y-2 origin-top-left"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-pink-50/30 to-transparent transform skew-y-2 origin-bottom-right"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full"></div>
            <img
              src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
              alt="Therapist working with child patient"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight text-balance">
              Care at the Youth Mind Institute
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our clinicians provide gold-standard, evidence-based treatment to thousands of kids annually through our
              clinical centers and in-school programs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span className="text-gray-700">Clinical centers in New York City & San Francisco Bay Area</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">Supported by fees for service, with financial aid available</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Book Appointment</Button>
              <Button variant="outline">Learn More About Care</Button>
            </div>
          </div>
        </div>

        {/* Care Services Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">PROGRAM DETAILS</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/emotion-detection-therapy-session-with-child.jpg"
                  alt="Emotion Detection"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800">Emotion Detection</h4>
                <p className="text-gray-600 text-sm">
                  Build your child's emotional awareness and ability to cope with uncomfortable emotions.
                </p>
              </div>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/behavior-therapy-treatment-session.jpg"
                  alt="Behavior Therapy Treatment"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800">Behavior Therapy Treatment</h4>
                <p className="text-gray-600 text-sm">
                  Our therapists are effective at addressing behavioral issues in children from age two through
                  adolescence.
                </p>
              </div>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/school-refusal-support-counseling.jpg"
                  alt="School Refusal"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800">School Refusal</h4>
                <p className="text-gray-600 text-sm">
                  Evidence-based parent training and consultation for school refusal and attendance behaviors.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

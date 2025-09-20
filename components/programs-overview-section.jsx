import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { MapPin, Heart } from "lucide-react"

export default function ProgramsOverviewSection() {
  return (
    <section id="programs-overview" className="py-12 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f5dfdd 0%, #fdf2f8 50%, #ffffff 100%)'
    }}>
      {/* Decorative angled elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-100/50 to-transparent transform -skew-y-2 origin-top-left"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-pink-50/30 to-transparent transform skew-y-2 origin-bottom-right"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full"></div>
            <img
              src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
              alt="Therapist working with child patient"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight text-balance">
              Structured Literacy Programs
            </h2>

            <p className="text-base text-gray-600 leading-relaxed">
              Our certified specialists provide personalized Orton-Gillingham based literacy instruction combined with
              Six Bricks methodology for children aged 4-14, focusing on reading clarity and confidence building.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="text-gray-700">Online 1:1 sessions with certified OG specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">Personalized learning plans with parent coaching support</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline">Learn More About Our Programs</Button>
            </div>
          </div>
        </div>

        {/* Care Services Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800">PROGRAM DETAILS</h3>
          <div className="space-y-6">
            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="/father-and-child-reading-together-educational-reso.jpg"
                    alt="Language Mastery"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Language Mastery</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Orton-Gillingham based reading, writing, and phonemic awareness development
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Phonics & Decoding</li>
                    <li>• Reading Fluency</li>
                    <li>• Writing Skills</li>
                  </ul>
                </div>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="/researchers-studying-child-brain-development-neuro.jpg"
                    alt="Focus & Memory"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Focus & Memory</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Six Bricks methodology for cognitive development and attention building
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Attention Training</li>
                    <li>• Memory Games</li>
                    <li>• Problem Solving</li>
                  </ul>
                </div>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="/happy-diverse-young-person-smiling-outdoors-mental.jpg"
                    alt="Public Speaking & Storytelling"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Public Speaking & Storytelling</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Build confidence through creative expression and communication skills
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Storytelling</li>
                    <li>• Presentation Skills</li>
                    <li>• Confidence Building</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 w-full" style={{ maxWidth: 'calc(66.666667% + 1.5rem)' }}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/parent-and-child-discussing-mental-health-concerns.jpg"
                      alt="Parent Workshops"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Parent Workshops</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Empower parents with tools to support their child's learning journey
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Home Support</li>
                      <li>• Progress Tracking</li>
                      <li>• Learning Strategies</li>
                    </ul>
                  </div>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/diverse-children-playing-together-mental-health-to.jpg"
                      alt="School Partnerships"
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">School Partnerships</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Collaborate with schools to enhance learning outcomes for all students
                    </p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Teacher Training</li>
                      <li>• Curriculum Support</li>
                      <li>• Assessment Tools</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

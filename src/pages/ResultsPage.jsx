import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Counter } from "../../components/ui/counter"
import { TrendingUp, Star, Users, Award, Quote, CheckCircle } from "lucide-react"

export default function ResultsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Proven Results</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Real success stories from families who've transformed their children's reading journey
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact by the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Measurable results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary">
                  <Counter end="92" suffix="%" />
                </div>
                <p className="text-muted-foreground">Reading improvement within 3 months</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent">
                  <Counter end="4.9" suffix="/5" />
                </div>
                <p className="text-muted-foreground">Average parent satisfaction rating</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-4xl font-bold text-secondary-foreground">
                  <Counter end="2500" suffix="+" />
                </div>
                <p className="text-muted-foreground">Children successfully supported</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-4xl font-bold text-muted-foreground">
                  <Counter end="18" suffix=" months" />
                </div>
                <p className="text-muted-foreground">Average reading level improvement</p>
              </CardContent>
            </Card>
          </div>

          {/* Success Stories */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Success Stories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Aarav, Age 7</h4>
                      <p className="text-sm text-muted-foreground">Foundation Program</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "Aarav went from struggling with letter recognition to reading simple books in just 4 months. 
                    His confidence has soared, and he actually asks to read bedtime stories now!"
                  </p>
                  <div className="text-sm text-muted-foreground">- Priya M., Parent</div>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">2 grade levels improvement</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Sophia, Age 9</h4>
                      <p className="text-sm text-muted-foreground">Building Program</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "The Six Bricks activities made learning fun for Sophia. She was diagnosed with dyslexia, 
                    but now she's reading at grade level and loves books!"
                  </p>
                  <div className="text-sm text-muted-foreground">- Michael R., Parent</div>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">Overcame dyslexia challenges</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Rohan, Age 12</h4>
                      <p className="text-sm text-muted-foreground">Mastery Program</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "Rohan's reading comprehension improved dramatically. He went from avoiding reading 
                    to becoming the top reader in his class. Thank you, Pebble Steps!"
                  </p>
                  <div className="text-sm text-muted-foreground">- Anita K., Parent</div>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">Top of class achievement</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Before & After Comparison */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Typical Progress Timeline</h3>
            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold mb-6 text-red-600">Before Pebble Steps</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Struggles with letter-sound recognition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Avoids reading activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Low confidence in academic settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Reading below grade level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Homework battles and frustration</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-6 text-green-600">After 6 Months</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Confident phonics and decoding skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Enjoys reading for pleasure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Increased self-esteem and participation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Reading at or above grade level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Independent homework completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Research Results */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Research-Backed Outcomes</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <h4 className="font-bold text-foreground">Phonemic Awareness</h4>
                  <p className="text-sm text-muted-foreground">
                    Children show significant improvement in phonemic awareness within 12 weeks
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-2">78%</div>
                  <h4 className="font-bold text-foreground">Reading Fluency</h4>
                  <p className="text-sm text-muted-foreground">
                    Increase in reading fluency scores after 6 months of instruction
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary mb-2">91%</div>
                  <h4 className="font-bold text-foreground">Confidence Boost</h4>
                  <p className="text-sm text-muted-foreground">
                    Parents report increased confidence and positive attitude toward reading
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Video Testimonials */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Video Testimonials</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/happy-indian-boy-and-girl-children-smiling-togethe.jpg"
                      alt="Parent testimonial"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                        ▶ Play Video
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">Parent Success Story</h4>
                    <p className="text-muted-foreground text-sm">
                      Watch how Pebble Steps transformed Maya's reading journey in just 4 months
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
                      alt="Specialist testimonial"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                        ▶ Play Video
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">Specialist Insights</h4>
                    <p className="text-muted-foreground text-sm">
                      Our certified OG specialist explains the methodology behind our success
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to See These Results for Your Child?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who've already transformed their children's reading journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Success Story
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              View More Results
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
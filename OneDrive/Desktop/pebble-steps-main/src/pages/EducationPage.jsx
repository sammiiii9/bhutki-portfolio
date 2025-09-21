import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { BookOpen, Users, Award, GraduationCap, Target, Globe } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Education & Training</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Empowering parents, educators, and professionals with knowledge and skills
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Building Knowledge, Changing Lives</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our education programs provide evidence-based training and resources to parents, educators, 
                and mental health professionals. We believe that education is key to creating lasting change 
                in children's mental health outcomes.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-foreground">Training for 10,000+ professionals annually</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span className="text-foreground">Programs available worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-600" />
                  <span className="text-foreground">Accredited continuing education credits</span>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Programs
              </Button>
            </div>

            <div className="relative">
              <img
                src="/happy-indian-boy-and-girl-children-smiling-togethe.jpg"
                alt="Education and training programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Program Categories */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Education Programs</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Parent Training</h4>
                  <p className="text-muted-foreground mb-6">
                    Evidence-based programs to help parents support their children's mental health and development.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li>• Behavioral management strategies</li>
                    <li>• Communication skills</li>
                    <li>• Crisis intervention</li>
                    <li>• Building resilience</li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Educator Training</h4>
                  <p className="text-muted-foreground mb-6">
                    Professional development for teachers and school staff on supporting student mental health.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li>• Classroom management</li>
                    <li>• Identifying mental health issues</li>
                    <li>• Creating supportive environments</li>
                    <li>• Trauma-informed practices</li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Professional Training</h4>
                  <p className="text-muted-foreground mb-6">
                    Advanced training for mental health professionals working with children and adolescents.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li>• Evidence-based treatments</li>
                    <li>• Assessment techniques</li>
                    <li>• Cultural competency</li>
                    <li>• Supervision and consultation</li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Featured Programs */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Training Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/emotion-detection-therapy-session-with-child.jpg"
                    alt="CBT Training"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Cognitive Behavioral Therapy Training</h4>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive training in CBT techniques for children and adolescents.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">40 CE Credits</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/behavior-therapy-treatment-session.jpg"
                    alt="Trauma Training"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Trauma-Informed Care</h4>
                    <p className="text-muted-foreground mb-4">
                      Learn to recognize and respond to trauma in children and families.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">20 CE Credits</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/school-refusal-support-counseling.jpg"
                    alt="Family Therapy Training"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Family-Based Interventions</h4>
                    <p className="text-muted-foreground mb-4">
                      Master family therapy techniques for child and adolescent mental health.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">30 CE Credits</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/mission-children-mental-health.jpg"
                    alt="Assessment Training"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Psychological Assessment</h4>
                    <p className="text-muted-foreground mb-4">
                      Advanced training in psychological testing and assessment for children.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">35 CE Credits</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Free Resources</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Guides & Toolkits</h4>
                <p className="text-sm text-muted-foreground">Downloadable resources for parents and professionals</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Webinar Series</h4>
                <p className="text-sm text-muted-foreground">Monthly webinars on current topics in child mental health</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Research Updates</h4>
                <p className="text-sm text-muted-foreground">Latest findings from our research team</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Online Community</h4>
                <p className="text-sm text-muted-foreground">Connect with other professionals and parents</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Your Learning Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals and parents who have transformed their approach to children's mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Browse All Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
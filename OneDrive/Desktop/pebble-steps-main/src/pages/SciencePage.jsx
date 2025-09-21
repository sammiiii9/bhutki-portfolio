import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Microscope, TrendingUp, Users, Award, FileText, Globe } from "lucide-react"

export default function SciencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Research & Science</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
              Advancing the science of children's mental health through innovative research
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Pioneering Research for Better Outcomes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our research team conducts cutting-edge studies to develop new treatments, improve existing interventions, 
                and understand the underlying mechanisms of mental health conditions in children and adolescents.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Microscope className="w-5 h-5 text-emerald-600" />
                  <span className="text-foreground">50+ active research studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-foreground">200+ published research papers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-foreground">Collaborative partnerships worldwide</span>
                </div>
              </div>

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                View Our Research
              </Button>
            </div>

            <div className="relative">
              <img
                src="/mission-children-mental-health.jpg"
                alt="Research and science"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Research Areas */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Research Focus Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Anxiety Disorders</h4>
                  <p className="text-muted-foreground">
                    Investigating new treatments for childhood anxiety and developing prevention strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Depression Research</h4>
                  <p className="text-muted-foreground">
                    Understanding the causes of depression in youth and testing innovative interventions.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">ADHD Studies</h4>
                  <p className="text-muted-foreground">
                    Advancing understanding of ADHD and developing more effective treatment approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Autism Spectrum</h4>
                  <p className="text-muted-foreground">
                    Research on autism spectrum disorders and evidence-based intervention strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Trauma & PTSD</h4>
                  <p className="text-muted-foreground">
                    Studying the effects of trauma on children and developing trauma-informed treatments.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Digital Mental Health</h4>
                  <p className="text-muted-foreground">
                    Exploring technology-based interventions and digital therapeutics for youth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Current Studies */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Current Research Studies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-0">
                  <img
                    src="/emotion-detection-therapy-session-with-child.jpg"
                    alt="Anxiety Study"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Childhood Anxiety Prevention Study</h4>
                    <p className="text-muted-foreground mb-4">
                      A randomized controlled trial testing a new prevention program for children at risk for anxiety disorders.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-600 font-medium">Recruiting Participants</span>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/behavior-therapy-treatment-session.jpg"
                    alt="Digital Therapy Study"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Digital CBT for Adolescents</h4>
                    <p className="text-muted-foreground mb-4">
                      Evaluating the effectiveness of a smartphone-based CBT intervention for teenage depression.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-600 font-medium">Recruiting Participants</span>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/school-refusal-support-counseling.jpg"
                    alt="Family Study"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Family-Based ADHD Treatment</h4>
                    <p className="text-muted-foreground mb-4">
                      Comparing different family therapy approaches for children with ADHD and behavioral problems.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">Data Collection</span>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <img
                    src="/caring-therapist-with-child-patient-in-bright-ther.jpg"
                    alt="Trauma Study"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Trauma-Focused Therapy Study</h4>
                    <p className="text-muted-foreground mb-4">
                      Testing a new trauma-focused intervention for children who have experienced adverse events.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-600 font-medium">Analysis Phase</span>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Research Impact */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Research Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-muted-foreground">Active Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-muted-foreground">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
                <div className="text-muted-foreground">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-muted-foreground">Years of Research</div>
              </div>
            </div>
          </div>

          {/* Participate Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-20">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Participate in Research</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Help advance the science of children's mental health by participating in our research studies. 
                Your participation can make a difference for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Find a Study
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Participation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Collaborate with Our Research Team</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us to advance the field of children's mental health through innovative research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Research Partnerships
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Contact Researchers
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}